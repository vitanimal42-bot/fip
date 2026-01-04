import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";

const Section = ({ title, children, dark = false }) => (
  <section className={`py-12 ${dark ? 'bg-slate-50' : 'bg-white'}`} style={{
    padding: '60px 0',
    backgroundColor: dark ? '#f8fafc' : '#ffffff'
  }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      {title && <h2 className="headline headline--sm mb-8" style={{ color: 'var(--brand-blue)', marginBottom: '32px' }}>{title}</h2>}
      {children}
    </div>
  </section>
);

const InfoCard = ({ children, type = "info" }) => {
  const styles = {
    info: { bg: '#eef2ff', border: '#6366f1', color: '#3730a3', icon: 'ℹ️' },
    warning: { bg: '#fffbeb', border: '#f59e0b', color: '#92400e', icon: '⚠️' },
  }[type];

  return (
    <div style={{
      backgroundColor: styles.bg,
      borderLeft: `4px solid ${styles.border}`,
      padding: '24px',
      borderRadius: '8px',
      margin: '32px 0',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    }}>
      <span style={{ fontSize: '24px' }}>{styles.icon}</span>
      <div style={{ color: styles.color, fontWeight: '500', lineHeight: '1.6' }}>{children}</div>
    </div>
  );
};

export default async function FipNedirPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const t = {
    tr: {
      title: "FIP HASTALIĞI NEDİR",
      p1: "Kedilerin enfeksiyöz peritonitisi olarak bilinen FIP hastalığı, kedilerin bağışıklık sistemini etkileyen öldürücü bir hastalıktır. Kedilerin çoğunda koronavirüs bulunur, bulaşıcıdır ama öldürücü değildir. Herhangi bir sebeple kedinin bağışıklığının düşmesi, stres, ameliyat gibi nedenlerle koronavirus (FCoV) mutasyona uğrayarak ölümcül FIP virüsüne dönüşür. Bu mutant virüs, kedilerin infeksiyöz peritonit virüsü (FIPV) olarak bilinir ve hastalığın başlangıcında mide – bağırsak dokularında bulunur.",
      p2: "Virüse karşı kedinin bağışıklık sistemi savunmaya geçer. Kandaki akyuvarların bir çeşidi olan monosit hücreleri farklılaşır makrofajlara dönüşür. Makrofajlar virüsleri (ve vücuda giren diğer mikropları) yutan dev hücreler olarak vücudun ilk savunmasını oluşturur. Makrofajlar virüsleri yutmak üzere kan damarlarından virüslerin olduğu dokulara geçer.",
      p3: "FIP virüsü mide – bağırsak duvarı hücrelerine gelen makrofajların yüzeyine tutunarak makrofaj hücresinin içine girer ve onları enfekte eder. FIP virüsü ile enfekte olmuş makrofajlar, daha sonra karın ve göğüs boşlukları içindeki diğer bölgelere, iç organlara, böbreklere, akciğerlere, karaciğere, kalbe, sinir sistemine, gözler ile beyin gibi organlara seyahat ederken virüs de vücudun farklı yerlerine taşınmış olur.",
      p4: "Vücudun savunma tepkisi olarak kan damarların geçirgenliği artar ve genişler. Bu durum uzun sürerse kan damarları iltihaplanır, damarlarda yangı oluşur. Kan damarlarının hasar görmesi kan dolaşımını olumsuz etkiler. Kan damarları dokuları ve iç organları yeterince oksijenle besleyemez, oksijensiz kalan dokular ve organlar zarar görür. Damar duvarlarından kan plazması (protein yoğun sarı renkli bir sıvı) sızar. FIP hastalığının ıslak (yaş) formunda genellikle karında bu sıvı birikmeye başlar. Bazı kedilerde ise göğüs boşluğunda da sıvı birikir.",
      p5: "Damar duvarlarından enfekte olan bölgeye alarma geçmiş makrofajlar da yığılmaya başlar. Bu durumda dokularda granülom denen doku bozulmaları oluşur. FIP hastası olan kedilerde iç organ hasarına sebep olan bu bozulmalardır. O nedenle FIP hastası kedilerde bağışıklık uyarıcılar makrofajları harekete geçirdiğinden kullanılmaz.",
      p6: "Bağışıklık hücrelerinin kan, lenf ve dokular arasında dolaşabilme ve gerekli bölgelerde yerleşebilme özellikleri vücudu savunmada önemlidir. Virüs ilk olarak bağırsaktaki makrofajlar ile tanınır ve lenfatik yoldan bölgesel lenf düğümlerine taşınır ve immün yanıt hem bağırsakta hem de ilişkili lenf bezinde başlar. Makrofajlar vücudun diğer bölgelerine seyahat ederken, çok sayıda bağışıklık hücresi (makrofajlar, nötrofiller, lenfositler ve monositler), toplayarak kan dolaşımından enfeksiyon bölgelerine taşınır. Bu, iltihaplanmaya, daha yüksek konsantrasyonlarda sitokin ve kemokin denen kimyasal sinyallerin salınmasına neden olur. Bağışıklık hücrelerinin bu aktivasyonu nedeniyle, normal makrofajlar granülomaya neden olan makrofajlara dönüşerek iltihaplanma kaynaklı makrofaj baskın lezyonlara neden olur. Bu lezyonlar ölümcül organ bozukluklarına ve Çoklu Organ Yetmezliğine neden olur.",
      p7: "Virüsün enfekte ettiği yerlerde vücut iltihaplanma olarak bilinen inflamasyon tepkisi verir. Bu inflamasyon nedeniyle damarlarda yada lenfatik direnaj sisteminde bozulma meydana geldiğinde damar yada lenf sistemindeki sıvılar çevresindeki dokulara sızarak ödem oluşturmaya başlar. FIP hastalığı nedeniyle gelişen kalp yetmezliği, karaciğer yetmezliği, venöz yetmezlik ve nefrotik sendrom gibi klinik durumların seyri esnasında ödem gelişebilir yada bacaklarda, karında, akciğer ve diğer dokularda sıvı birikir.",
      legal: "Yasal Uyarı: Bu bilgiler bilgilendirme amaçlıdır. Teşhis ve tedavi için veteriner hekiminize danışınız."
    },
    en: {
      title: "WHAT IS FIP DISEASE?",
      p1: "FIP disease, known as Feline Infectious Peritonitis, is a fatal disease that affects the immune system of cats. Most cats carry coronavirus, which is contagious but not fatal. For any reason, such as weakened immunity, stress, or surgery, coronavirus (FCoV) mutates into the fatal FIP virus. This mutant virus is known as feline infectious peritonitis virus (FIPV) and is found in the gastrointestinal tissues at the onset of the disease.",
      p2: "The cat's immune system goes on the defense against the virus. Monocyte cells, a type of white blood cell, differentiate into macrophages. Macrophages act as giant cells that engulf viruses (and other microbes entering the body), forming the body's first line of defense. Macrophages pass from the blood vessels into the tissues where the viruses are located to engulf them.",
      p3: "The FIP virus attaches to the surface of macrophages arriving at the gastrointestinal wall cells, enters the macrophage cell, and infects it. Macrophages infected with the FIP virus then travel to other areas within the abdominal and chest cavities, internal organs, kidneys, lungs, liver, heart, nervous system, eyes, and brain, carrying the virus to different parts of the body.",
      p4: "As a defense response of the body, the permeability of blood vessels increases and they dilate. If this persists, the blood vessels become inflamed, and inflammation occurs in the vessels. Damage to blood vessels negatively affects blood circulation. Blood vessels cannot sufficiently supply tissues and internal organs with oxygen, and tissues and organs deprived of oxygen are damaged. Blood plasma (a protein-rich yellow fluid) leaks from the vessel walls. In the wet (effusive) form of FIP, this fluid usually begins to accumulate in the abdomen. In some cats, fluid also accumulates in the chest cavity.",
      p5: "Alarmed macrophages also begin to pile up in the infected area from the vessel walls. In this case, tissue deterioration called granulomas occurs in the tissues. It is these deteriorations that cause internal organ damage in cats with FIP. Therefore, immune stimulants are not used in cats with FIP as they activate macrophages.",
      p6: "The ability of immune cells to circulate between blood, lymph, and tissues and settle in necessary areas is important in defending the body. The virus is first recognized by macrophages in the intestine and is transported through the lymphatic pathway to regional lymph nodes, and the immune response begins in both the intestine and the associated lymph node. While macrophages travel to other parts of the body, they collect a large number of immune cells (macrophages, neutrophils, lymphocytes, and monocytes) and transport them from the bloodstream to the areas of infection. This causes inflammation and the release of chemical signals called cytokines and chemokines at higher concentrations. Due to this activation of immune cells, normal macrophages transform into granuloma-causing macrophages, leading to inflammation-driven macrophage-dominant lesions. These lesions cause fatal organ disorders and Multiple Organ Failure.",
      p7: "In the areas infected by the virus, the body responds with inflammation. When a disruption occurs in the vessels or lymphatic drainage system due to this inflammation, fluids in the vessel or lymph system leak into the surrounding tissues and begin to form edema. Edema may develop or fluid may accumulate in the legs, abdomen, lungs, and other tissues during the course of clinical conditions such as heart failure, liver failure, venous insufficiency, and nephrotic syndrome developed due to FIP disease.",
      legal: "Legal Disclaimer: This information is for informational purposes only. Consult your veterinarian for diagnosis and treatment."
    },
    ru: {
      title: "ЧТО ТАКОЕ БОЛЕЗНЬ ФИП?",
      p1: "Болезнь ФИП, известная как инфекционный перитонит кошек, представляет собой смертельное заболевание, поражающее иммунную систему кошек. Большинство кошек являются носителями коронавируса, который заразен, но не смертелен. По любой причине, такой как ослабление иммунитета, стресс или хирургическое вмешательство, коронавирус (FCoV) мутирует в смертельный вирус ФИП. Этот мутантный вирус известен как вирус инфекционного перитонита кошек (FIPV) и обнаруживается в тканях желудочно-кишечного тракта в начале заболевания.",
      p2: "Иммунная система кошки переходит к защите от вируса. Клетки моноциты, тип лейкоцитов, дифференцируются в макрофаги. Макрофаги действуют как гигантские клетки, которые поглощают вирусы (и другие микробы, попадающие в организм), формируя первую линию защиты организма. Макрофаги переходят из кровеносных сосудов в ткани, где локализованы вирусы, чтобы поглотить их.",
      p3: "Вирус ФИП прикрепляется к поверхности макрофагов, прибывающих к клеткам стенки желудочно-кишечного тракта, проникает внутрь клетки макрофага и инфицирует ее. Макрофаги, инфицированные вирусом ФИП, затем перемещаются в другие области брюшной и грудной полостей, внутренние органы, почки, легкие, печень, сердце, нервную систему, глаза и мозг, перенося вирус в различные части тела.",
      p4: "В качестве защитной реакции организма проницаемость кровеносных сосудов увеличивается, и они расширяются. Если это продолжается долго, кровеносные сосуды воспаляются, и в них возникает воспаление. Повреждение кровеносных сосудов отрицательно сказывается на кровообращении. Кровеносные сосуды не могут в достаточной мере снабжать ткани и внутренние органы кислородом, а ткани и органы, лишенные кислорода, повреждаются. Из стенок сосудов просачивается плазма крови (богатая белком желтая жидкость). При влажной (выпотной) форме ФИП эта жидкость обычно начинает скапливаться в брюшной полости. У некоторых кошек жидкость также скапливается в грудной полости.",
      p5: "В инфицированную зону из стенок сосудов также начинают стягиваться макрофаги. В этом случае в тканях возникают тканевые изменения, называемые гранулемами. Именно эти изменения вызывают повреждение внутренних органов у кошек с ФИП. Поэтому стимуляторы иммунитета не используются у кошек с ФИП, так как они активируют макрофаги.",
      p6: "Способность иммунных клеток циркулировать между кровью, лимфой и тканями и оседать в необходимых областях важна для защиты организма. Вирус сначала распознается макрофагами в кишечнике и транспортируется по лимфатическому пути в регионарные лимфатические узлы, и иммунный ответ начинается как в кишечнике, так и в связанном с ним лимфатическом узле. Пока макрофаги перемещаются в другие части тела, они собирают большое количество иммунных клеток (макрофаги, нейтрофилы, лимфоциты и моноциты) и транспортируют их из кровотока в очаги инфекции. Это вызывает воспаление и выброс химических сигналов, называемых цитокинами и хемокинами, в более высоких концентрациях. Из-за этой активации иммунных клеток нормальные макрофаги превращаются в макрофаги, вызывающие гранулему, что приводит к воспалительным макрофаг-доминантным поражениям. Эти поражения вызывают смертельные расстройства органов и полиорганную недостаточность.",
      p7: "В местах, инфицированных вирусом, организм реагирует воспалением. Когда из-за этого воспаления происходит нарушение в сосудах или лимфодренажной системе, жидкости из сосудистой или лимфатической системы просачиваются в окружающие ткани и начинают формировать отек. Отек может развиться или жидкость может скопиться в конечностях, животе, легких и других тканях в ходе таких клинических состояний, как сердечная недостаточность, печеночная недостаточность, венозная недостаточность и нефротический синдром, развившихся вследствие болезни ФИП.",
      legal: "Правовая оговорка: Данная информация носит ознакомительный характер. Проконсультируйтесь с ветеринаром для диагностики и лечения."
    }
  }[lang];

  return (
    <div className="fip-article">
      <section className="bg-brand-blue py-20 text-white" style={{
        backgroundColor: 'var(--brand-blue)',
        padding: '100px 0 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 className="headline headline--lg text-white">{t.title}</h1>
        </div>
      </section>

      <Section>
        <div className="markdown" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p>{t.p1}</p>
        </div>

        <figure style={{ margin: '40px 0', textAlign: 'center' }}>
          <img
            src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_174957276-1024x483.png"
            alt="FIP Disease"
            style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }}
          />
        </figure>
      </Section>

      <Section dark>
        <div className="markdown">
          <p>{t.p2}</p>
        </div>

        <div style={{ margin: '32px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_175316990.png" alt="Defense" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>

        <div style={{ margin: '32px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_175205111.png" alt="Monocyte" style={{ maxWidth: '300px', borderRadius: '12px' }} />
        </div>

        <div className="markdown">
          <p>{t.p3}</p>
        </div>
      </Section>

      <Section>
        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_175543699.png" alt="Spread" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>

        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_175646620-768x141.png" alt="Vessel" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>

        <div className="markdown">
          <p>{t.p4}</p>
        </div>

        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_175847540-1024x516.png" alt="Fluid Accumulation" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
      </Section>

      <Section dark>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '32px', alignItems: 'center' }}>
          <div className="markdown">
            <p>{t.p5}</p>
          </div>
          <div>
            <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_180114086.png" alt="Granuloma" style={{ width: '100%', borderRadius: '12px' }} />
          </div>
        </div>
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_180159420.png" alt="Diagram" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>
      </Section>

      <Section>
        <div className="markdown">
          <p>{t.p6}</p>
        </div>

        <div style={{ margin: '32px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_180501883.png" alt="Cell Activation" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>

        <div style={{ margin: '32px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_180602172-1024x124.png" alt="Inflammation" style={{ maxWidth: '100%', borderRadius: '12px' }} />
        </div>

        <div className="markdown">
          <p>{t.p7}</p>
        </div>

        <div style={{ margin: '32px 0', textAlign: 'center' }}>
          <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_180740202-1024x583.png" alt="Edema" style={{ width: '100%', borderRadius: '12px' }} />
        </div>
      </Section>

      <Section>
        <InfoCard type="warning">
          <strong>{t.legal.split(':')[0]}:</strong> {t.legal.split(':')[1]}
        </InfoCard>
      </Section>
    </div>
  );
}
