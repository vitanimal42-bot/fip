export default async function TreatmentPage({ params }) {
  const { lang } = await params;

  const t = {
    tr: {
      title: "FIP Hastalığı (Feline Infectious Peritonitis) Tedavisi",
      protocolTitle: "Genel Protokol",
      symptomaticTitle: "Semptomatik Tedavi",
      nutritionTitle: "FIP HASTASI KEDİMİ NASIL BESLEMELİYİM?",
      protocol: [
        "Erken teşhiste tedavi başarı ve sağ kalım %85-90 arasındadır.",
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
      symptomatic1: [
        "Tedavi sürecinde ve tedavi sonrasında en az 1 yıl aşı yapılmamalıdır",
        "İç ve dış anti parazit uygulamasında sakınca yoktur ve yapılmadıysa gereklidir",
        "Nefes darlığını önlemek için göğüsteki sıvı boşaltılmalı, karındaki sıvı ise gerekmedikçe boşaltılmamalıdır. Diüretik desteği ile karındaki sıvı 7-10 gün içinde kaybolacaktır.",
        "Üst solunum yolu, idrar yolları, ve diğer ikincil enfeksiyonlar varsa mutlaka antibiyotik kullanılmalıdır. Zitromax (Azitromisin, Sef (Sefaleksin), Clavamox, Augmentin (Amoksisilin/Klavulanik asit), Convenia (Sefovesin), Clindan, Clindamed, Clindamax,ZydaClin (Klindamisin) kullanılabilir.",
        "Kullanılmayacak antibiyotikler: Baytril (Enrofloksasin), Marbofloksasin (Zeniquin), Orbax (Orbifloksasin), Veraflox (Pradofloxacin) gibi florokinolon grubu antibiyotikler.",
        "Tedavi süresince bağışıklık güçlendirici etkiye sahip olan lizin, beta glukan, interferon vb. kesinlikle verilmemelidir."
      ],
      symptomatic2: [
        "Özellikle yaş formda bağışıklığın inflamasyon tepkisini azaltmak ve kontrol etmek için kortizon kullanılabilir. Ancak kortizon kullanımı bağışıklığı baskılayacağından ikincil enfeksiyonlar gelişebilir (bakteri, mantar vb).",
        "Kan ve biyokimya değerlerine göre tedavi sürecinde karaciğer, böbrek, vitamin ve mineral desteği mutlaka verilmelidir.",
        "Sinirsel ataklar mutlaka kontrol edilmelidir. Kontrol edilemeyen ataklarda acil müdahale için hemen kliniğe gidilmelidir.",
        "Kedi su içmesine rağmen 1 günden fazla idrar yapmadıysa yada yemek yemesine rağmen 2 günden fazla dışkı yapmadıysa mutlaka kliniğe gidilmelidir.",
        "Kedi su içmiyor yada sıvı almıyorsa mutlaka serum desteği almalıdır.",
        "Sürekli ishal, kabızlık, kusma, ateş varsa kliniğe gidilmelidir."
      ],
      nutrition: [
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190512460.png",
          text: "Kediler hastalandıklarında yemek yemeyi bırakırlar. Yemek yemeyi bıraktıklarında kendilerini daha kötü hissederler ve yemek yeme ihtimalleri daha da azalır. Bu, bir kedinin iyileşmesi için derhal durdurulması gereken bir kısır döngüdür. Yemek yemesi, ihtiyacı olan enerjiyi alması için şarttır. Yemek yemeyen kedide anemi ve karaciğer yetmezliği gelişir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190614173.png",
          text: "Kediler yemek yemeden biraz daha uzun süre kalabilirler, ancak su hayatta kalmak için çok önemlidir. Su içemeyen her kedi hızla kötüleşir. Su içmeyi reddeden kedilere ağızdan enjektör ile dikkatli şekilde su verilmesi gerekebilir. Su içmeyen, susuz kalan kedide böbrek yetmezliği gelişir, kan dolaşımı bozulur ve kalp krizi olur."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190643311.png",
          text: "Kedinin su içmeyi reddettiği ve aşırı susuz kaldığı durumlarda, veterinerde serum almaya ihtiyaç duyabilir. Serum yavaş hızda verilmelidir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Hasta kediler için doğru mamayı bulmak çoğu zaman zordur. FIPGL23 ürünlerini alırken kedinizi aynı zamanda güçlü tutmak için yemek yemesinin çok önemli olduğu unutulmamalıdır. Ancak iştahı olmayan kediniz için mamayı çekici ve karşı konulamaz hale getirmek için bazı hilelere başvurmanız gerekebilir. Aksi takdirde, sunulan yiyeceğe burun kıvırabilirler."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Kedinizi lezzetli, yüksek enerjili, yüksek oranda sindirilebilir püre, çorba gibi sıvı kıvama getirilmiş proteinden oluşan küçük, sık öğünler yemeye teşvik edin. Böbrek yetmezliği riski bulunan kedilerde proteini yüksek besinlerin verilmesinin sakıncalı olduğu unutulmamalıdır."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Kedinize mutlu olması için hazır yaş mama verebilirsiniz ancak yaş mamalar lezzetli olsa da besin değerleri yoktur. Kediniz kuru mama yemek istemiyorsa yada iştahsız ise içeriği uygun (içinde lizin ve beta glukan katkısı olmayan) bir kuru mamayı öğütüp toz haline getirip et suyu ile sulandırarak az az sık sık yedirebilirsiniz. Büyük miktarda yiyeceği bir kerede bırakmaktansa, sık aralıklarla az miktarda yiyecek vermek en iyisidir. Yiyecekleri vücut sıcaklığına ısıtmak genellikle onu daha çekici hale getirir. Bazı hasta kediler elle beslenerek daha fazla yemeye teşvik edilebilir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190910513.png",
          text: "Hasta kediniz için bir tencere kemik suyu yapabilirsiniz. Baharatsız kemik suyu lezzetli, besleyici ve protein açısından yüksektir. Herhangi bir et protein kaynağı olarak işe yarayacaktır. Yalayabilecekleri küçük et suyu paketleri de cazip gelebilir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190936045.png",
          text: "Kedinizi, baharat eklenmeden pişirilmiş etle besleyebilirsiniz. Kümes hayvanları, sığır eti veya kuzu eti deneyebilirsiniz. Eti küçük parçalar halinde kesip ve içine seviyorsa birkaç havuç veya bezelye ekleyin. Pişmiş tavuk veya hindi sakatatları da kedilere verilebilir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191001027.png",
          text: "Sade pişmiş balık da deneyebilirsiniz. Sardalya, Mezgit gibi bazı beyaz balıkları haşlayabilirsiniz. Bazen konserve ton balığı veya sardalye hasta bir kediyi de cezbedebilir. Omega 3 ve 6 gereklidir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191035441.png",
          text: "Haşlanmış yumurta da iyi bir protein ve besin kaynağı olarak verilebilir. Yumurta kedinizin esansiyel aminoasit ihtiyacını karşılar. Yumurta piştiğinde besin değeri artar. Çiğ yumurta tercih edilmemelidir."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191102922.png",
          text: "Kefir ve yoğurt probiyotik desteği sağlar, sindirimi düzenlemeye yardımcı olur."
        }
      ]
    },
    en: {
      title: "FIP Disease (Feline Infectious Peritonitis) Treatment",
      protocolTitle: "General Protocol",
      symptomaticTitle: "Symptomatic Treatment",
      nutritionTitle: "HOW SHOULD I FEED MY CAT WITH FIP?",
      protocol: [
        "In early diagnosis, the treatment success and survival rate is between 85-90%.",
        "The survival rate decreases as the diagnosis and treatment process is delayed.",
        "The recommended treatment period is 90 days. In some cases, it may be decided to extend this period.",
        "In treatment, FIPGL23 is given orally for 90 days, every 12 hours (morning and evening) according to the cat's weight.",
        "If you forget or skip the dose, give it immediately.",
        "Symptoms start to disappear from 10 days onwards. If treatment is stopped assuming the cat has recovered, symptoms will return.",
        "FIPGL23 should be used for a sufficient period of time to eliminate the virus (at least 90 days) and in adequate doses according to the cat's weight.",
        "The cat should be isolated from other cats during treatment.",
        "The cat should be kept in a safe area or in a cage during treatment. It is not possible to apply treatment regularly at the same time to free-roaming cats.",
        "There is no harm in using antibiotics during treatment.",
        "Internal and external parasite applications can be made during treatment; there is no harm.",
        "Neutering should not be performed during treatment.",
        "Vaccination should not be performed during treatment.",
        "Immune boosters should be discontinued during treatment.",
        "Good care and nutrition are very important during treatment."
      ],
      symptomatic1: [
        "No vaccination should be done for at least 1 year during and after the treatment process.",
        "There is no harm in internal and external anti-parasite application and it is necessary if not already done.",
        "To prevent shortness of breath, the fluid in the chest should be drained, while the fluid in the abdomen should not be drained unless necessary. With diuretic support, abdominal fluid will disappear within 7-10 days.",
        "If there are upper respiratory tract, urinary tract, and other secondary infections, antibiotics must be used (Zitromax, Sef, Clavamox, Augmentin, Convenia, Clindan, etc.).",
        "Antibiotics not to be used: Fluoroquinolone group antibiotics such as Baytril, Zeniquin, Orbax, Veraflox.",
        "Immune boosters such as lysine, beta glucan, interferon, etc., should definitely not be given during treatment."
      ],
      symptomatic2: [
        "Cortisone can be used to reduce and control the immune inflammation response, especially in the wet form. However, since its use will suppress immunity, secondary infections may develop.",
        "Liver, kidney, vitamin, and mineral support must be given during the treatment process according to blood and biochemistry values.",
        "Neurological attacks must be controlled. In case of uncontrollable attacks, go to the clinic immediately.",
        "If the cat has not urinated for more than 1 day despite drinking water, or has not defecated for more than 2 days despite eating, go to the clinic.",
        "If the cat does not drink water or take fluids, it must receive IV fluid support.",
        "If there is constant diarrhea, constipation, vomiting, or fever, go to the clinic."
      ],
      nutrition: [
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190512460.png",
          text: "Cats stop eating when they get sick. This is a vicious cycle that must be stopped immediately. Eating is essential for taking the energy they need. Anemia and liver failure develop in cats that do not eat."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190614173.png",
          text: "Water is crucial for survival. Every cat that cannot drink water deteriorates rapidly. Kidney failure develops in cats that do not drink water and become dehydrated."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190643311.png",
          text: "In cases where the cat refuses to drink water, they may need IV fluids at the vet. The fluid should be given at a slow rate."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "It should not be forgotten that eating is very important to keep your cat strong while taking FIPGL23 products. You may need to resort to some tricks to make the food attractive."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Encourage your cat to eat small, frequent meals of protein made into a liquid consistency like puree or soup."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "You can give ready-made wet food to make your cat happy, but combine it with high-quality dry food ground into powder and mixed with broth for actual nutrition."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190910513.png",
          text: "Unseasoned bone broth is tasty, nutritious, and high in protein. Any meat protein source will work."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190936045.png",
          text: "You can feed your cat with meat (poultry, beef, lamb) cooked without adding spices. Cut into small pieces."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191001027.png",
          text: "Sade cooked fish (Sardines, Haddock) can attract a sick cat. Omega 3 and 6 are necessary."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191035441.png",
          text: "Boiled eggs are a good source of protein and essential amino acids. Nutritional value increases when cooked."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191102922.png",
          text: "Kefir and yogurt provide probiotic support and help regulate digestion."
        }
      ]
    },
    ru: {
      title: "Лечение болезни ФИП (инфекционный перитонита кошек)",
      protocolTitle: "Общий протокол",
      symptomaticTitle: "Симптоматическое лечение",
      nutritionTitle: "КАК Я ДОЛЖЕН КОРМИТЬ СВОЮ КОШКУ С ФИП?",
      protocol: [
        "При ранней диагностике выживаемость и успех лечения составляют 85-90%.",
        "Выживаемость снижается при задержке диагностики и начала лечения.",
        "Рекомендуемый период лечения — 90 дней. В ряде случаев он может быть продлен.",
        "Препарат FIPGL23 вводится перорально в течение 90 дней, каждые 12 часов согласно весу кошки.",
        "Если вы пропустили прием, дайте дозу немедленно.",
        "Симптомы начинают исчезать с 10-го дня. Не прекращайте лечение раньше времени.",
        "FIPGL23 следует использовать не менее 90 дней для полного уничтожения вируса.",
        "Кошка должна быть изолирована от других кошек во время лечения.",
        "Кошка должна находиться в безопасном месте или клетке во время лечения.",
        "Антибиотики можно использовать во время лечения, если это необходимо.",
        "Обработку от паразитов можно проводить во время лечения.",
        "Стерилизацию/кастрацию не следует проводить во время лечения.",
        "Вакцинацию не следует проводить во время лечения.",
        "Иммуностимуляторы следует прекратить во время лечения.",
        "Хороший уход и питание очень важны во время лечения."
      ],
      symptomatic1: [
        "Вакцинация не должна проводиться в течение как минимум 1 года после начала лечения.",
        "Антипаразитарная обработка разрешена и необходима, если она не проводилась.",
        "Жидкость в грудной полости следует дренировать при одышке; в животе — только при необходимости.",
        "При наличии вторичных инфекций обязательны антибиотики (Zitromax, Clavamox и др.).",
        "Нельзя использовать: фторхинолоны (Байтрил и др.).",
        "Ни в коем случае не давать лизин, бета-глюкан, интерферон и т.д. во время лечения."
      ],
      symptomatic2: [
        "Кортизон можно использовать для контроля воспаления, особенно при влажной форме.",
        "Необходима поддержка печени, почек, витамины и минералы согласно анализам.",
        "Неврологические приступы должны быть под контролем. При приступах срочно в клинику.",
        "Если кошка не мочится более 1 дня или нет кала более 2 дней — срочно в клинику.",
        "Если кошка не пьет, ей необходима инфузионная терапия (серум).",
        "При постоянной диарее, рвоте или температуре обращайтесь в клинику."
      ],
      nutrition: [
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190512460.png",
          text: "Кошки перестают есть, когда болеют. Это порочный круг, который нужно разорвать. Питание необходимо для получения энергии."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190614173.png",
          text: "Вода критически важна для жизни. Если кошка не пьет, ее состояние быстро ухудшается."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190643311.png",
          text: "При отказе от воды может потребоваться капельница в клинике. Вводить жидкость нужно медленно."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Важно, чтобы кошка ела, чтобы оставаться сильной. Используйте хитрости, чтобы еда была привлекательной."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Поощряйте кошку есть небольшими порциями высокобелковую пищу (пюре, супы)."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_192118426.png",
          text: "Можно давать влажный корм, но для питательности лучше измельченный сухой корм с бульоном."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190910513.png",
          text: "Несоленый костный бульон очень питателен. Любой источник мясного белка подойдет."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_190936045.png",
          text: "Можно давать мясо (птица, говядина), приготовленное без специй, мелкими кусочками."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191001027.png",
          text: "Вареная морская рыба может привлечь кошку. Омега 3 и 6 необходимы."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191035441.png",
          text: "Вареные яйца — отличный источник белка и аминокислот. Сырые яйца не рекомендуются."
        },
        {
          img: "https://fipgl23.com/wp-content/uploads/2024/04/resim_2024-04-10_191102922.png",
          text: "Кефир и йогурт обеспечивают пробиотическую поддержку и помогают пищеварению."
        }
      ]
    }
  }[lang] || t.tr;

  return (
    <div className="treatment-page" style={{ background: 'white', paddingBottom: '100px' }}>
      {/* Hero / Header */}
      <section style={{ backgroundColor: '#f8fafc', padding: '100px 0 60px', borderBottom: '1px solid #edf2f7' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 className="headline headline--md" style={{ color: '#3498db', textAlign: 'center' }}>
            {t.title}
          </h1>
        </div>
      </section>

      {/* Section 1: Genel Protokol */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="headline headline--sm" style={{ color: '#2c3e50', marginBottom: '40px', textAlign: 'center' }}>{t.protocolTitle}</h2>
          <ul className="stack" style={{ listStyle: 'none', padding: 0, gap: '16px' }}>
            {t.protocol.map((text, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 512 512" style={{ color: '#3498db', marginTop: '4px', flexShrink: 0 }}>
                  <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <span style={{ fontSize: '1.05rem', color: '#4a5568' }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 2: Semptomatik Tedavi */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="headline headline--sm" style={{ color: '#2c3e50', marginBottom: '40px', textAlign: 'center' }}>{t.symptomaticTitle}</h2>
          <div className="grid-2" style={{ gap: '40px' }}>
            <ul className="stack" style={{ listStyle: 'none', padding: 0, gap: '16px' }}>
              {t.symptomatic1.map((text, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 512 512" style={{ color: '#3498db', marginTop: '4px', flexShrink: 0 }}>
                    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <span style={{ fontSize: '1rem', color: '#4a5568' }}>{text}</span>
                </li>
              ))}
            </ul>
            <ul className="stack" style={{ listStyle: 'none', padding: 0, gap: '16px' }}>
              {t.symptomatic2.map((text, i) => (
                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 512 512" style={{ color: '#3498db', marginTop: '4px', flexShrink: 0 }}>
                    <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <span style={{ fontSize: '1rem', color: '#4a5568' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Beslenme */}
      <section className="section">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="headline headline--sm" style={{ color: '#2c3e50', marginBottom: '48px', textAlign: 'center' }}>{t.nutritionTitle}</h2>

          <div className="stack" style={{ gap: '48px' }}>
            {t.nutrition.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                <img src={item.img} alt={`Nutrition ${i + 1}`} style={{ width: '180px', borderRadius: '12px', flexShrink: 0, border: '1px solid #edf2f7' }} />
                <p style={{ color: '#4a5568', lineHeight: '1.7', fontSize: '1rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

