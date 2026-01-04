export const metadata = {
    title: "Tedavi Protokolleri | FIPGL23",
    description: "Feline Infectious Peritonitis (FIP) için önerilen 90 günlük tedavi protokolü, FIP POWER uygulaması ve destekleyici takviyeler.",
};

export default function TedaviProtokolleriPage() {
    return (
        <div className="section">
            <div className="container stack">
                <div className="section__header">
                    <h1 className="headline headline--lg">Tedavi Protokolleri</h1>
                    <p className="subhead">
                        Feline Infectious Peritonitis (FIP) için bilimsel olarak önerilen tedavi süreçleri ve destekleyici uygulamalar.
                    </p>
                </div>

                <div className="stack">
                    {/* Protocol 1: 90 Days */}
                    <div className="card">
                        <h2 className="headline--md" style={{ color: "var(--brand-deep)" }}>FIPGL23 Tedavisi Protokolü (90 Gün)</h2>
                        <div className="markdown">
                            <p>
                                FIPGL23 tedavisinin erken teşhis edilen vakalarda <strong>90 gün süreyle</strong> uygulanması,
                                hastalığın ilerlemesini durdurmak ve tam iyileşme sağlamak amacıyla zorunludur.
                            </p>
                            <div className="alert alert--info" style={{ marginTop: "16px", padding: "16px", background: "rgba(59, 130, 246, 0.1)", borderRadius: "8px", borderLeft: "4px solid var(--brand-blue)" }}>
                                <strong>Önemli:</strong> FIPGL23 tedavi protokolünde önerilen minimum tedavi süresi 90 gündür.
                                Hastanın durumuna göre sürenin uzatılmasına ve dozun arttırılmasına veteriner hekim tavsiyesi ile karar verilebilir.
                            </div>
                        </div>
                    </div>

                    {/* Protocol 2: + Supplements */}
                    <div className="card">
                        <h2 className="headline--md" style={{ color: "var(--brand-deep)" }}>FIPGL23 + Destek Takviyeleri</h2>
                        <div className="markdown">
                            <p>
                                FIPGL23 tedavisinin 90 gün süreyle uygulanmasının yanı sıra, karaciğer ve böbrek fonksiyonlarını
                                desteklemeye yönelik takviyelerin verilmesi önerilmektedir. Bu takviyelerin kullanımı,
                                hastanın genel sağlığını optimize etmeyi hedefler.
                            </p>
                        </div>
                    </div>

                    <div className="grid-2">
                        {/* FIP POWER Before */}
                        <div className="card card--feature">
                            <h3>FIP POWER Uygulaması (Hastalık Öncesi)</h3>
                            <p>
                                FIP hastalığına yakalanmadan önce FIP POWER uygulamasının yapılması,
                                hastalığın oluşmasını (mutasyonu) önleme amacı taşır.
                            </p>
                        </div>

                        {/* FIP POWER After */}
                        <div className="card card--feature">
                            <h3>FIP POWER Uygulaması (Tedavi Sonrası)</h3>
                            <p>
                                FIP hastalığı tedavisi tamamlandıktan sonra, hastanın bağışıklık sistemini desteklemek amacıyla
                                FIP POWER uygulamasının yapılması önerilmektedir. Bu uygulama, hastalığın tekrarlamasını önlemede etkili olur.
                            </p>
                        </div>
                    </div>

                    {/* Prebiotic */}
                    <div className="card">
                        <h3>Prebiyotik Takviyesi</h3>
                        <div className="markdown">
                            <p>
                                FIP hastalığı tedavisi sonrasında, sindirim sisteminin iyileşmesine yardımcı olmak amacıyla
                                prebiyotik takviyelerin verilmesi önerilmektedir. Bu takviyeler, bağırsak sağlığını destekleyerek
                                hastanın genel iyileşme sürecine katkı sağlar.
                            </p>
                        </div>
                    </div>

                    <div className="card card--warning" style={{ background: "#FFFAEA", border: "1px solid #FCD34D" }}>
                        <p style={{ color: "#B45309", fontWeight: "600" }}>
                            Yasal Uyarı: Bu protokoller, veteriner hekimler tarafından titizlikle değerlendirilmeli ve uygulanmalıdır.
                            Her hasta bireysel olarak değerlendirilmeli ve tedavi protokolleri ona göre ayarlanmalıdır.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
