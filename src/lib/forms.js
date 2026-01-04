import fs from "fs";
import path from "path";
import matter from "gray-matter";

const formsDirectory = path.join(process.cwd(), "content", "forms");

const normalizeForm = (data) => {
  const order = Number(data.order);
  return {
    slug: data.slug,
    title: data.title || data.slug,
    summary: data.summary || "",
    pdfUrl: data.pdfUrl || "",
    downloadName: data.downloadName || "",
    heroImage: data.heroImage || "",
    order: Number.isFinite(order) ? order : 999,
  };
};

const readFormFile = (filePath) => {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = data.slug || path.basename(filePath, ".md");
  return { ...data, slug, content };
};

export const getAllForms = (lang = 'tr') => {
  if (lang === 'en') {
    return [
      { slug: 'cat-owner-guide', title: 'Cat Owner Information Guide', summary: 'Detailed FIP information guide for cat owners.', pdfUrl: '/assets/bilgi-formlari-en/FIP Cat Owner Information Guide.pdf' },
      { slug: 'fgl23-guide', title: 'FGL23 GUIDE 2025', summary: 'Official FGL23 Feline Infectious Peritonitis Guide.', pdfUrl: '/assets/bilgi-formlari-en/FGL23_GUIDE_2025.pdf' },
      { slug: 'clinical-use-fcgs-fcv', title: 'Clinical Use of FIPGL23 for FCGS, FCV', summary: 'Clinical use of FIPGL23 for feline chronic gingivostomatitis and calicivirus.', pdfUrl: '/assets/bilgi-formlari-en/Clinical Use of FIPGL23 for FCGS,FCV.pdf' },
      { slug: 'molnupiravir-efficacy', title: 'Antiviral Efficacy of Molnupiravir', summary: 'Antiviral efficacy in the neurological form of FIPV.', pdfUrl: '/assets/bilgi-formlari-en/Antiviral Efficacy of Molnupiravir in the Neurological Form of FIPV.pdf' },
      { slug: 'challenging-cases', title: 'Challenging and Refractory FIP Cases', summary: 'Management of difficult and resistant FIP cases.', pdfUrl: '/assets/bilgi-formlari-en/Challenging and Refractory FIP Cases.pdf' },
      { slug: 'clinical-response', title: 'Clinical Response in Neurological FIP', summary: 'Remission and clinical response in neurological cases.', pdfUrl: '/assets/bilgi-formlari-en/Clinical Response and Remission in Neurological FIP.pdf' },
      { slug: 'immune-modulation', title: 'Modulation of the Immune Response', summary: 'Immune response modulation during therapy.', pdfUrl: '/assets/bilgi-formlari-en/Modulation of the Immune Response During FIP Therapy.pdf' },
      { slug: 'diagnostic-approach', title: 'Diagnostic Approach in FIP', summary: 'Serological and biochemical diagnostic approach.', pdfUrl: '/assets/bilgi-formlari-en/Serological and Biochemical Diagnostic Approach in FIP.pdf' },
      { slug: 'supportive-therapy', title: 'Supportive and Adjunctive Therapy', summary: 'Details on supportive care and adjunctive treatments.', pdfUrl: '/assets/bilgi-formlari-en/Supportive and Adjunctive Therapy in FIP.pdf' },
      { slug: 'ag-ratio', title: 'Albumin-to-Globulin Ratio', summary: 'The importance of A/G ratio in FIP diagnostics.', pdfUrl: '/assets/bilgi-formlari-en/The Albumin-to-Globulin Ratio in FIP.pdf' }
    ];
  }

  if (lang === 'ru') {
    return [
      { slug: 'cat-owner-guide-ru', title: 'Руководство для владельца кошки', summary: 'Подробное информационное руководство по ФИП для владельцев кошек.', pdfUrl: '/assets/bilgi-formlari-en/FIP Cat Owner Information Guide.pdf' },
      { slug: 'fgl23-guide-ru', title: 'РУКОВОДСТВО FGL23 2025', summary: 'Официальное руководство FGL23 по инфекционному перитониту кошек.', pdfUrl: '/assets/bilgi-formlari-en/FGL23_GUIDE_2025.pdf' },
      { slug: 'clinical-use-fcgs-fcv-ru', title: 'Клиническое применение FIPGL23 при FCGS, FCV', summary: 'Клиническое применение FIPGL23 при хроническом гингивостоматите и калицивирусе у кошек.', pdfUrl: '/assets/bilgi-formlari-en/Clinical Use of FIPGL23 for FCGS,FCV.pdf' },
      { slug: 'molnupiravir-efficacy-ru', title: 'Эффективность Молнупиравира', summary: 'Противовирусная эффективность при неврологической форме ФИП.', pdfUrl: '/assets/bilgi-formlari-en/Antiviral Efficacy of Molnupiravir in the Neurological Form of FIPV.pdf' },
      { slug: 'challenging-cases-ru', title: 'Сложные и резистентные случаи ФИП', summary: 'Управление трудными и устойчивыми случами ФИП.', pdfUrl: '/assets/bilgi-formlari-en/Challenging and Refractory FIP Cases.pdf' },
      { slug: 'clinical-response-ru', title: 'Клинический ответ при ФИП', summary: 'Ремиссия и клинический ответ в неврологических случаях.', pdfUrl: '/assets/bilgi-formlari-en/Clinical Response and Remission in Neurological FIP.pdf' },
      { slug: 'immune-modulation-ru', title: 'Модуляция иммунного ответа', summary: 'Модуляция иммунного ответа во время терапии ФИП.', pdfUrl: '/assets/bilgi-formlari-en/Modulation of the Immune Response During FIP Therapy.pdf' },
      { slug: 'diagnostic-approach-ru', title: 'Диагностический подход', summary: 'Серологический и биохимический диагностический подход при ФИП.', pdfUrl: '/assets/bilgi-formlari-en/Serological and Biochemical Diagnostic Approach in FIP.pdf' },
      { slug: 'supportive-therapy-ru', title: 'Поддерживающая терапия', summary: 'Подробности о поддерживающем уходе и дополнительных методах лечения.', pdfUrl: '/assets/bilgi-formlari-en/Supportive and Adjunctive Therapy in FIP.pdf' },
      { slug: 'ag-ratio-ru', title: 'Соотношение альбумина к глобулину', summary: 'Важность соотношения А/Г в диагностике ФИП.', pdfUrl: '/assets/bilgi-formlari-en/The Albumin-to-Globulin Ratio in FIP.pdf' }
    ];
  }

  if (!fs.existsSync(formsDirectory)) return [];
  const files = fs.readdirSync(formsDirectory).filter((file) => file.endsWith(".md"));
  return files.map((file) => {
    const form = readFormFile(path.join(formsDirectory, file));
    return normalizeForm(form);
  }).sort((a, b) => a.order - b.order);
};
