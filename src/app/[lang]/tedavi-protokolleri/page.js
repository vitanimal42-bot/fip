import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const titles = {
        tr: "Tedavi Protokolleri | FIPGL23",
        en: "Treatment Protocols | FIPGL23",
        ru: "Протоколы лечения | FIPGL23"
    };
    return {
        title: titles[lang] || titles.tr,
    };
}

export default async function TedaviProtokolleriPage({ params }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    const t = {
        tr: {
            title: "Tedavi Protokolleri",
            subtitle: "Feline Infectious Peritonitis (FIP) için bilimsel olarak önerilen tedavi süreçleri ve destekleyici uygulamalar.",
            protocol1Title: "FIPGL23 Tedavisi Protokolü (90 Gün)",
            protocol1Text: "FIPGL23 tedavisinin erken teşhis edilen vakalarda **90 gün süreyle** uygulanması, hastalığın ilerlemesini durdurmak ve tam iyileşme sağlamak amacıyla zorunludur.",
            important: "Önemli:",
            importantNote: "FIPGL23 tedavi protokolünde önerilen minimum tedavi süresi 90 gündür. Hastanın durumuna göre sürenin uzatılmasına ve dozun arttırılmasına veteriner hekim tavsiyesi ile karar verilebilir.",
            protocol2Title: "FIPGL23 + Destek Takviyeleri",
            protocol2Text: "FIPGL23 tedavisinin 90 gün süreyle uygulanmasının yanı sıra, karaciğer ve böbrek fonksiyonlarını desteklemeye yönelik takviyelerin verilmesi önerilmektedir. Bu takviyelerin kullanımı, hastanın genel sağlığını optimize etmeyi hedefler.",
            powerBeforeTitle: "FIP POWER Uygulaması (Hastalık Öncesi)",
            powerBeforeText: "FIP hastalığına yakalanmadan önce FIP POWER uygulamasının yapılması, hastalığın oluşmasını (mutasyonu) önleme amacı taşır.",
            powerAfterTitle: "FIP POWER Uygulaması (Tedavi Sonrası)",
            powerAfterText: "FIP hastalığı tedavisi tamamlandıktan sonra, hastanın bağışıklık sistemini desteklemek amacıyla FIP POWER uygulamasının yapılması önerilmektedir. Bu uygulama, hastalığın tekrarlamasını önlemede etkili olur.",
            prebioticTitle: "Prebiyotik Takviyesi",
            prebioticText: "FIP hastalığı tedavisi sonrasında, sindirim sisteminin iyileşmesine yardımcı olmak amacıyla prebiyotik takviyelerin verilmesi önerilmektedir. Bu takviyeler, bağırsak sağlığını destekleyerek hastanın genel iyileşme sürecine katkı sağlar.",
            legalNote: "Yasal Uyarı: Bu protokoller, veteriner hekimler tarafından titizlikle değerlendirilmeli ve uygulanmalıdır. Her hasta bireysel olarak değerlendirilmeli ve tedavi protokolleri ona göre ayarlanmalıdır."
        },
        en: {
            title: "Treatment Protocols",
            subtitle: "Scientifically recommended treatment processes and supportive practices for Feline Infectious Peritonitis (FIP).",
            protocol1Title: "FIPGL23 Treatment Protocol (90 Days)",
            protocol1Text: "Applying FIPGL23 treatment for **90 days** in early-diagnosed cases is mandatory to stop the progression of the disease and ensure full recovery.",
            important: "Important:",
            importantNote: "The minimum recommended treatment period in the FIPGL23 treatment protocol is 90 days. Extending the period and increasing the dose based on the patient's condition can be decided with the advice of a veterinarian.",
            protocol2Title: "FIPGL23 + Supportive Supplements",
            protocol2Text: "In addition to the application of FIPGL23 treatment for 90 days, it is recommended to provide supplements aimed at supporting liver and kidney functions. The use of these supplements aims to optimize the general health of the patient.",
            powerBeforeTitle: "FIP POWER Application (Pre-Illness)",
            powerBeforeText: "Applying FIP POWER before catching FIP disease aims to prevent the occurrence (mutation) of the disease.",
            powerAfterTitle: "FIP POWER Application (Post-Treatment)",
            powerAfterText: "After FIP disease treatment is completed, it is recommended to apply FIP POWER to support the patient's immune system. This application is effective in preventing the recurrence of the disease.",
            prebioticTitle: "Prebiotic Supplementation",
            prebioticText: "After FIP disease treatment, it is recommended to provide prebiotic supplements to help the digestive system recover. These supplements contribute to the patient's general recovery process by supporting intestinal health.",
            legalNote: "Legal Disclaimer: These protocols should be rigorously evaluated and applied by veterinarians. Each patient should be evaluated individually and treatment protocols should be adjusted accordingly."
        },
        ru: {
            title: "Протоколы лечения",
            subtitle: "Научно рекомендованные процессы лечения и вспомогательные практики при инфекционном перитоните кошек (ФИП).",
            protocol1Title: "Протокол лечения FIPGL23 (90 дней)",
            protocol1Text: "Применение лечения FIPGL23 в течение **90 дней** в случаях ранней диагностики является обязательным для остановки прогрессирования заболевания и обеспечения полного выздоровления.",
            important: "Важно:",
            importantNote: "Минимальный рекомендованный период лечения по протоколу FIPGL23 составляет 90 дней. Продление срока и увеличение дозы в зависимости от состояния пациента может быть решено по рекомендации ветеринара.",
            protocol2Title: "FIPGL23 + Вспомогательные добавки",
            protocol2Text: "Помимо применения лечения FIPGL23 в течение 90 дней, рекомендуется давать добавки, направленные на поддержку функций печени и почек. Использование этих добавок направлено на оптимизацию общего состояния здоровья пациента.",
            powerBeforeTitle: "Применение FIP POWER (До болезни)",
            powerBeforeText: "Применение FIP POWER до заражения болезнью ФИП направлено на предотвращение возникновения (мутации) заболевания.",
            powerAfterTitle: "Применение FIP POWER (После лечения)",
            powerAfterText: "После завершения лечения болезни ФИП рекомендуется применять FIP POWER для поддержки иммунной системы пациента. Это применение эффективно для предотвращения рецидива заболевания.",
            prebioticTitle: "Пребиотические добавки",
            prebioticText: "После лечения болезни ФИП рекомендуется давать пребиотические добавки, чтобы помочь пищеварительной системе восстановиться. Эти добавки способствуют общему процессу выздоровления пациента, поддерживая здоровье кишечника.",
            legalNote: "Правовая оговорка: Эти протоколы должны тщательно оцениваться и применяться ветеринарными врачами. Каждый пациент должен оцениваться индивидуально, и протоколы лечения должны корректироваться соответствующим образом."
        }
    }[lang] || t.tr;

    return (
        <div className="section">
            <div className="container stack">
                <div className="section__header">
                    <h1 className="headline headline--lg">{t.title}</h1>
                    <p className="subhead">{t.subtitle}</p>
                </div>

                <div className="stack">
                    {/* Protocol 1: 90 Days */}
                    <div className="card">
                        <h2 className="headline--md" style={{ color: "var(--brand-deep)" }}>{t.protocol1Title}</h2>
                        <div className="markdown">
                            <p>{t.protocol1Text}</p>
                            <div className="alert alert--info" style={{ marginTop: "16px", padding: "16px", background: "rgba(59, 130, 246, 0.1)", borderRadius: "8px", borderLeft: "4px solid var(--brand-blue)" }}>
                                <strong>{t.important}</strong> {t.importantNote}
                            </div>
                        </div>
                    </div>

                    {/* Protocol 2: + Supplements */}
                    <div className="card">
                        <h2 className="headline--md" style={{ color: "var(--brand-deep)" }}>{t.protocol2Title}</h2>
                        <div className="markdown">
                            <p>{t.protocol2Text}</p>
                        </div>
                    </div>

                    <div className="grid-2">
                        {/* FIP POWER Before */}
                        <div className="card card--feature">
                            <h3>{t.powerBeforeTitle}</h3>
                            <p>{t.powerBeforeText}</p>
                        </div>

                        {/* FIP POWER After */}
                        <div className="card card--feature">
                            <h3>{t.powerAfterTitle}</h3>
                            <p>{t.powerAfterText}</p>
                        </div>
                    </div>

                    {/* Prebiotic */}
                    <div className="card">
                        <h3>{t.prebioticTitle}</h3>
                        <div className="markdown">
                            <p>{t.prebioticText}</p>
                        </div>
                    </div>

                    <div className="card card--warning" style={{ background: "#FFFAEA", border: "1px solid #FCD34D" }}>
                        <p style={{ color: "#B45309", fontWeight: "600" }}>
                            {t.legalNote}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

