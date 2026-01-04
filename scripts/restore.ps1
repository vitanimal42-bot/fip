param(
  [string]$BackupPath,
  [switch]$SkipClean
)

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$backupDir = Join-Path $root "backups"

function Resolve-BackupPath {
  param([string]$Path)
  if ($Path) {
    if (Test-Path $Path) {
      return (Resolve-Path $Path).Path
    }
    $candidate = Join-Path $root $Path
    if (Test-Path $candidate) {
      return (Resolve-Path $candidate).Path
    }
    throw "Backup file not found: $Path"
  }

  if (-not (Test-Path $backupDir)) {
    throw "No backups directory found at $backupDir"
  }
  $latest = Get-ChildItem -Path $backupDir -Filter "*.zip" |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1
  if (-not $latest) {
    throw "No backup zip files found in $backupDir"
  }
  return $latest.FullName
}

$backupFile = Resolve-BackupPath -Path $BackupPath

$tempRoot = Join-Path $env:TEMP ("site-restore-" + [System.Guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempRoot | Out-Null

try {
  Expand-Archive -Path $backupFile -DestinationPath $tempRoot -Force

  if (-not $SkipClean) {
    $safe = @(".git", "backups", "scripts")
    Get-ChildItem -Force -Path $root | Where-Object { $safe -notcontains $_.Name } | ForEach-Object {
      Remove-Item -Recurse -Force -LiteralPath $_.FullName
    }
  }

  Get-ChildItem -Force -Path $tempRoot | ForEach-Object {
    Copy-Item -Recurse -Force -LiteralPath $_.FullName -Destination (Join-Path $root $_.Name)
  }

  Write-Host "Restored from: $backupFile"
  if ($SkipClean) {
    Write-Host "Note: existing files were not removed (SkipClean)."
  }
} finally {
  if (Test-Path $tempRoot) {
    Remove-Item -Recurse -Force -LiteralPath $tempRoot
  }
}
