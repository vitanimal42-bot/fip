import { getDictionary } from "@/i18n/get-dictionary";
import Link from "next/link";

const Section = ({ title, children, dark = false }) => (
  <section className={`py-12 ${dark ? 'bg-slate-50' : 'bg-white'}`} style={{
    padding: '60px 0',
    backgroundColor: dark ? '#f8fafc' : '#ffffff'
  }}>
    <div className="container" style={{ maxWidth: '900px' }}>
      {title && <h2 className="headline headline--sm mb-8" style={{ color: 'var(--brand-blue)', marginBottom: '32px' }}>{title}</h2>}
      {children}
    </div>
  </section>
);

const Checklist = ({ items }) => (
  <ul className="stack" style={{ gap: '16px', listStyle: 'none', padding: 0 }}>
    {items.map((item, index) => (
      <li key={index} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <span style={{
          backgroundColor: '#dcfce7',
          color: '#166534',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginTop: '2px',
          fontSize: '14px'
        }}>✓</span>
        <span style={{ fontSize: '1.05rem', lineHeight: '1.5', color: '#334155' }}>{item}</span>
      </li>
    ))}
  </ul>
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
      margin: '24px 0',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    }}>
      <span style={{ fontSize: '24px' }}>{styles.icon}</span>
      <div style={{ color: styles.color, fontWeight: '500', lineHeight: '1.6' }}>{children}</div>
    </div>
  );
};

export default async function TreatmentPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const t = {
    tr: {
      heroTitle: "FIP Hastalığı (Feline Infectious Peritonitis) Tedavisi",
      genelProtokol: [
        "Erken teşhiste tedavi başarısı ve sağ kalım %85-90 arasındadır.",
        "Teşhis ve tedavi süreci geciktikçe sağ kalım oranı düşer.",
        "Önerilen tedavi süresi 90 gündür. Bazı vakalarda bu sürenin uzatılmasına karar verilebilir.",
        "Tedavide 90 gün boyunca sabah ve akşam 12 saat arayla kedinin kilosuna göre oral yolla FIPGL23 verilir.",
        "Saati unutmanız yada atlamanız halinde derhal veriniz.",
        "Semptomlar 10 günden itibaren, ortadan kalkmaya başlar. Kedinin iyileştiği sanılarak tedavi kesilirse belirtiler geri gelir",
        "Virüsün yok edilmesine yetecek süre boyunca (en az 90 gün) ve kedinin kilosuna göre yeterli dozda FIPGL23 kullanılmalıdır.",
        "Tedavi süresince kedi diğer kedilerden izole edilmelidir.",
        "Tedavi süresince kedi güvenli bir alanda yada kafeste tutulmalıdır. Serbest haldeki kedilere düzenli olarak aynı saatte tedavi uygulamak mümkün değildir.",
        "Tedavi süresince antibiyotik kullanımında sakınca yoktur.",
        "Tedavi süresince iç ve dış parazit uygulaması yapılabilir sakınca yoktur.",
        "Tedavi süresince kısırlaştırma yapılmamalıdır.",
        "Tedavi süresince aşı yapılmamalıdır.",
        "Tedavi süresince bağışıklık güçlendiriciler kesilmelidir.",
        "Tedavi süresince iyi bakım ve beslenme çok önemlidir."
      ],
      semptomatikTitle: "Semptomatik Tedavi",
      semptomatikChecklist: [
        "Tedavi sürecinde ve tedavi sonrasında en az 1 yıl aşı yapılmamalıdır",
        "İç ve dış anti parazit uygulamasında sakınca yoktur ve yapılmadıysa gereklidir",
        "Nefes darlığını önlemek için göğüsteki sıvı boşaltılmalı, karındaki sıvı ise gerekmedikçe boşaltılmamalıdır. Diüretik desteği ile karındaki sıvı 7-10 gün içinde kaybolacaktır.",
        "Üst solunum yolu, idrar yolları, ve diğer ikincil enfeksiyonlar varsa mutlaka antibiyotik kullanılmalıdır.",
        "Kullanılmayacak antibiyotikler: Baytril (Enrofloksasin), Marbofloksasin (Zeniquin), Orbax (Orbifloksasin), Veraflox (Pradofloxacin) gibi florokinolon grubu antibiyotikler.",
        "Tedavi süresince bağışıklık güçlendirici etkiye sahip olan lizin, beta glukan, interferon vb. kesinlikle verilmemelidir.",
        "Özellikle yaş formda bağışıklığın inflamasyon tepkisini azaltmak ve kontrol etmek için kortizon kullanılabilir.",
        "Kan ve biyokimya değerlerine göre tedavi sürecinde karaciğer, böbrek, vitamin ve mineral desteği mutlaka verilmelidir.",
        "Sinirsel ataklar mutlaka kontrol edilmelidir.",
        "Kedi su içmesine rağmen 1 günden fazla idrar yapmadıysa yada yemek yemesine rağmen 2 günden fazla dışkı yapmadıysa mutlaka kliniğe gidilmelidir.",
        "Kedi su içmiyor yada sıvı almıyorsa mutlaka serum desteği almalıdır.",
        "Sürekli ishal, kabızlık, kusma, ateş varsa kliniğe gidilmelidir."
      ],
      uygulamaTitle: "Ürün Uygulama ve Bakım",
      uygulamaP1: "Ürün uygulamasının en kolay yöntemi, kedinizin en sevdiği mamanın az bir miktarının içine alması gereken dozu doğrudan karıştırmaktır.",
      uygulamaImages: [
        "Kedinizi sakince bir havluya sarabilirsiniz.",
        "İlacı doğrudan yada aromalı bir sıvı ile karıştırıp enjektör ile ağzının yan tarafından içeri sıkabilirsiniz.",
        "Kediye ürün verdikten sonra bir süre sevip okşayarak rahatlatabilirsiniz."
      ],
      beslenmeTitle: "FIP HASTASI KEDİMİ NASIL BESLEMELİYİM?",
      beslenmeText1: "Kediler hastalandıklarında yemek yemeyi bırakırlar. Yemek yemeleri, ihtiyacı olan enerjiyi alması için şarttır. Yemek yemeyen kedide anemi ve karaciğer yetmezliği gelişir.",
      beslenmeText2: "Su hayatta kalmak için çok önemlidir. Su içmeyen, susuz kalan kedide böbrek yetmezliği gelişir, kan dolaşımı bozulur ve kalp krizi olabilir.",
      legal: "Yasal Uyarı: Bu bilgiler bilgilendirme amaçlıdır. Teşhis ve tedavi için veteriner hekiminize danışınız."
    },
    en: {
      heroTitle: "FIP Disease (Feline Infectious Peritonitis) Treatment",
      genelProtokol: [
        "The treatment success and survival rate are between 85-90% in early diagnosis.",
        "As the diagnosis and treatment process is delayed, the survival rate decreases.",
        "The recommended treatment period is 90 days. In some cases, it may be decided to extend this period.",
        "In treatment, FIPGL23 is given orally for 90 days, in the morning and evening with 12-hour intervals, according to the cat's weight.",
        "If you forget or skip the time, give it immediately.",
        "Symptoms begin to disappear from the 10th day onwards. If treatment is stopped thinking the cat has recovered, symptoms will return.",
        "FIPGL23 should be used for a sufficient period to eliminate the virus (at least 90 days) and in adequate doses according to the cat's weight.",
        "The cat must be isolated from other cats during treatment.",
        "The cat must be kept in a safe area or cage during treatment. It is not possible to consistently treat free-roaming cats at the same time.",
        "There is no harm in using antibiotics during treatment.",
        "Internal and external parasite applications can be done during treatment.",
        "Sterilization (neutering/spaying) should not be performed during treatment.",
        "Vaccination should not be performed during treatment.",
        "Immune boosters should be discontinued during treatment.",
        "Good care and nutrition are very important during treatment."
      ],
      semptomatikTitle: "Symptomatic Treatment",
      semptomatikChecklist: [
        "Vaccination should not be performed for at least 1 year during and after treatment.",
        "Internal and external anti-parasite applications are harmless and necessary if not done.",
        "To prevent shortness of breath, fluid in the chest should be drained, but fluid in the abdomen should not be drained unless necessary. With diuretic support, fluid in the abdomen will disappear within 7-10 days.",
        "Antibiotics must be used if there is an upper respiratory tract, urinary tract, or other secondary infections.",
        "Prohibited antibiotics: Fluoroquinolone group antibiotics such as Baytril (Enrofloxacin), Marbofloxacin (Zeniquin), Orbax (Orbifloxacin), Veraflox (Pradofloxacin).",
        "Lysine, beta-glucan, interferon, etc., which have immune-boosting effects, should definitely not be given during treatment.",
        "Cortisone can be used to reduce and control the immune inflammation response, especially in the wet form.",
        "Liver, kidney, vitamin, and mineral support must be given during the treatment process according to blood and biochemistry values.",
        "Neurological attacks must be controlled.",
        "If the cat has not urinated for more than 1 day despite drinking water, or has not defecated for more than 2 days despite eating, you must go to the clinic.",
        "If the cat is not drinking water or taking fluid, it must receive serum support.",
        "If there is persistent diarrhea, constipation, vomiting, or fever, you should go to the clinic."
      ],
      uygulamaTitle: "Product Application and Care",
      uygulamaP1: "The easiest method of product application is to directly mix the required dose into a small amount of your cat's favorite food.",
      uygulamaImages: [
        "You can calmly wrap your cat in a towel.",
        "You can squeeze the medicine directly or mixed with a flavored liquid into the side of the mouth with a syringe.",
        "After giving the product to the cat, you can comfort them by petting and stroking for a while."
      ],
      beslenmeTitle: "HOW SHOULD I FEED MY CAT WITH FIP?",
      beslenmeText1: "Cats stop eating when they get sick. Eating is essential for them to get the energy they need. Anemia and liver failure develop in cats that do not eat.",
      beslenmeText2: "Water is vital for survival. Kidney failure, poor blood circulation, and heart attack can occur in cats that do not drink water and become dehydrated.",
      legal: "Legal Disclaimer: This information is for informational purposes only. Consult your veterinarian for diagnosis and treatment."
    },
    ru: {
      heroTitle: "Лечение болезни ФИП (инфекционный перитонит кошек)",
      genelProtokol: [
        "При ранней диагностике вероятность успеха лечения и выживаемость составляют 85-90%.",
        "По мере задержки процесса диагностики и лечения показатель выживаемости снижается.",
        "Рекомендуемая продолжительность лечения составляет 90 дней. В некоторых случаях может быть принято решение о продлении этого срока.",
        "При лечении в течение 90 дней препарат FIPGL23 вводится перорально утром и вечером с интервалом в 12 часов в зависимости от веса кошки.",
        "Если вы забыли или пропустили время, дайте препарат немедленно.",
        "Симптомы начинают исчезать с 10-го дня. Если прекратить лечение, полагая, что кошка выздоровела, симптомы вернутся.",
        "Препарат FIPGL23 следует использовать в течение периода, достаточного для уничтожения вируса (не менее 90 дней), и в дозах, соответствующих весу кошки.",
        "Во время лечения кошку необходимо изолировать от других кошек.",
        "Во время лечения кошку необходимо держать в безопасном месте или клетке. Невозможно регулярно лечить свободно гуляющих кошек в одно и тот же время.",
        "Использование антибиотиков во время лечения не противопоказано.",
        "Во время лечения можно проводить обработку от внутренних и внешних паразитов.",
        "Стерилизацию не следует проводить во время лечения.",
        "Вакцинацию не следует проводить во время лечения.",
        "Прием иммуностимуляторов следует прекратить на время лечения.",
        "Хороший уход и правильное питание очень важны во время лечения."
      ],
      semptomatikTitle: "Симптоматическое лечение",
      semptomatikChecklist: [
        "Вакцинацию не следует проводить в течение как минимум 1 года во время и после лечения.",
        "Обработка от внутренних и внешних паразитов безвредна и необходима, если она не была проведена.",
        "Для предотвращения одышки следует откачивать жидкость из грудной клетки, но жидкость из брюшной полости не следует откачивать без необходимости. При поддержке диуретиками жидкость в животе исчезнет в течение 7-10 дней.",
        "Антибиотики необходимо использовать при наличии инфекций верхних дыхательных путей, мочевыводящих путей и других вторичных инфекций.",
        "Запрещенные антибиотики: антибиотики группы фторхинолонов, такие как Байтрил (Энрофлоксацин), Марбофлоксацин (Зениквин), Орбакс (Орбифлоксацин), Верафлокс (Прадофлоксацин).",
        "Лизин, бета-глюкан, интерферон и т. д., обладающие иммуностимулирующим действием, категорически не следует давать во время лечения.",
        "Кортизон можно использовать для уменьшения и контроля иммунного воспалительного ответа, особенно при влажной форме.",
        "В процессе лечения обязательно должна проводиться поддержка печени, почек, прием витаминов и минералов в соответствии с показателями крови и биохимии.",
        "Неврологические приступы должны быть под контролем.",
        "Если кошка не мочилась более 1 дня, несмотря на потребление воды, или не испражнялась более 2 дней, несмотря на еду, необходимо обратиться в клинику.",
        "Если кошка не пьет воду или не принимает жидкость, она должна получать поддержку в виде инфузий (сыворотки).",
        "При постоянной диарее, запоре, рвоте или повышении температуры следует обратиться в клинику."
      ],
      uygulamaTitle: "Применение препарата и уход",
      uygulamaP1: "Самый простой способ применения препарата — смешать необходимую дозу непосредственно с небольшим количеством любимого корма вашей кошки.",
      uygulamaImages: [
        "Вы можете спокойно завернуть кошку в полотенце.",
        "Вы можете ввести лекарство непосредственно или в смеси с ароматизированной жидкостью в боковую часть рта с помощью шприца.",
        "После введения препарата кошке можно успокоить ее, поглаживая некоторое время."
      ],
      beslenmeTitle: "КАК КОРМИТЬ КОШКУ С ФИП?",
      beslenmeText1: "Кошки перестают есть, когда болеют. Питание необходимо для получения ими энергии. У кошек, которые не едят, развивается анемия и печеночная недостаточность.",
      beslenmeText2: "Вода жизненно важна для выживания. У кошек, которые не пьют воду и страдают от обезвоживания, развивается почечная недостаточность, нарушается кровообращение и может случиться сердечный приступ.",
      legal: "Правовая оговорка: Данная информация носит ознакомительный характер. Проконсультируйтесь с ветеринаром для диагностики и лечения."
    }
  }[lang];

  return (
    <div className="treatment-page">
      <section className="bg-brand-blue py-20 text-white" style={{
        backgroundColor: 'var(--brand-blue)',
        padding: '100px 0 60px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container">
          <h1 className="headline headline--lg text-white">{t.heroTitle}</h1>
        </div>
      </section>

      <Section>
        <Checklist items={t.genelProtokol} />
      </Section>

      <Section dark title={t.semptomatikTitle}>
        <Checklist items={t.semptomatikChecklist} />
      </Section>

      <Section title={t.uygulamaTitle}>
        <div className="markdown" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>
          <p style={{ marginBottom: '40px' }}>{t.uygulamaP1}</p>
        </div>

        <div className="grid-3" style={{ gap: '24px' }}>
          <div className="card text-center" style={{ padding: '20px' }}>
            <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_185130527.png" alt="Step 1" style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }} />
            <p className="text-sm">{t.uygulamaImages[0]}</p>
          </div>
          <div className="card text-center" style={{ padding: '20px' }}>
            <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_185417468.png" alt="Step 2" style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }} />
            <p className="text-sm">{t.uygulamaImages[1]}</p>
          </div>
          <div className="card text-center" style={{ padding: '20px' }}>
            <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_185431506.png" alt="Step 3" style={{ width: '100%', borderRadius: '12px', marginBottom: '16px' }} />
            <p className="text-sm">{t.uygulamaImages[2]}</p>
          </div>
        </div>
      </Section>

      <Section dark title={t.beslenmeTitle}>
        <div className="stack" style={{ gap: '32px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190512460.png" alt="Eating" style={{ width: '200px', borderRadius: '12px', flexShrink: 0 }} />
            <p>{t.beslenmeText1}</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <img src="https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190614173.png" alt="Water" style={{ width: '200px', borderRadius: '12px', flexShrink: 0 }} />
            <p>{t.beslenmeText2}</p>
          </div>
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
