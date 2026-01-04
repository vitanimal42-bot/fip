param(
  [string]$NamePrefix = "site-backup"
)

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$backupDir = Join-Path $root "backups"
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null

$exclude = @(".git", "node_modules", ".next", "backups")
$items = Get-ChildItem -Force -Path $root | Where-Object { $exclude -notcontains $_.Name }
if (-not $items) {
  Write-Error "No items to back up."
  exit 1
}

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$zipPath = Join-Path $backupDir ("$NamePrefix-$timestamp.zip")

Push-Location $root
try {
  $relative = $items | ForEach-Object { $_.Name }
  Compress-Archive -Path $relative -DestinationPath $zipPath -Force
} finally {
  Pop-Location
}

Write-Host "Backup created: $zipPath"
