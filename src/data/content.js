export const site = {
  name: "FIPGL23",
  tagline: "FIP Hastalığına Karşı Geliştirilmiş En Etkili Çözümdür!",
  legalNote:
    "Tüm bilgiler tavsiye niteliğindedir. En doğru karar için veteriner hekiminize danışmanız gerekir.",
  contact: {
    email: "info@fipgl23.com",
    phone: "+90 533 351 90 50",
    whatsapp: "https://wa.me/905333519050",
    instagram: "https://www.instagram.com/fipgl23",
    youtube:
      "https://www.youtube.com/watch?v=xEMIDIKTVCQ&list=PLo7XYrMRRhiwhw9Yu3FC4JsiIgUldpbQG&pp=iAQB",
  },
  assets: {
    logo: "/assets/source/logo-qcm82rdrqt3loak1ztdtrztsci5gzny23v38c2ksn4.png",
    hero: "/assets/source/image-83425-800.png",
    heroAlt: "FIPGL23",
    heroSecondary: "/assets/source/WhatsApp-Image-2025-05-09-at-21.06.46-1-scaled.png",
    heroSecondaryAlt: "FIPGL23 ürün görseli",
  },
};

export const navLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "FIP Nedir", href: "/fip-nedir" },
  {
    label: "FIP Tedavisi",
    href: "/fip-tedavisi",
  },
  {
    label: "Ürünlerimiz",
    href: "/urunlerimiz",
  },
  { label: "SSS", href: "/sss" },
  { label: "Bilgi Formları", href: "/bilgi-formlari" },
  { label: "İletişim", href: "/iletisim" },
];

export const home = {
  hero: {
    title: "FIPGL23",
    subtitle: site.tagline,
    description: site.legalNote,
    cta: [
      { label: "Ürünlerimiz", href: "/urunlerimiz" },
      { label: "Bilgi Formları", href: "/bilgi-formlari", variant: "ghost" },
    ],
  },
  heroSlides: [
    {
      image: "/assets/source/image-83425-800.png",
      alt: "FIPGL23",
    },
    {
      image: "/assets/source/medical-supplies.jpg",
      alt: "FIPGL23",
    },
    {
      image: "/assets/source/ofis.png",
      alt: "FIPGL23",
    },
  ],
  highlights: [
    {
      title: "FIP Tedavisi",
      description: "FIPGL 23 Feline Infectious Peritonitis Klavuzu",
      href: "/assets/source/fipgl23_feline_infectious_peritonitis.pdf",
      external: true,
      ctaLabel: "PDF İndir",
    },
    {
      title: "Hasta İzlem",
      description: "Hasta izlem formu",
      href: "/",
      ctaLabel: "Giriş",
    },
    {
      title: "FIP Bilgi Kılavuzu",
      description: "Hasta sahipleri için FIP Bilgi Kılavuzudur.",
      href: "/assets/source/FIP-BILGI-KILAVUZU-HASTA-SAHIBI.pdf",
      external: true,
      ctaLabel: "PDF İndir",
    },
  ],
  stats: [],
};

export const about = {
  title: "Hakkımızda",
  lead:
    "FIPGL23 olarak, kedi sahiplerinin sevdikleri dostlarının sağlığını korumak ve iyileştirmek için teknoloji ve araştırmadan beslenen kapsamlı bir çözüm sunuyoruz.",
  paragraphs: [
    "FIP (Feline Infectious Peritonitis) hastalığının tedavisi konusunda uzmanlaşmış bir ekibiz. Bilimsel araştırmalardan elde edilen sonuç ve teknolojileri kullanarak etkili ve güvenilir bir tedavi yöntemi geliştirdik.",
    "Amacımız, FIP hastalığıyla mücadelede yeni bir dönem başlatmak ve kedilere umut vermek. Müşteri memnuniyeti ve dostlarımızın sağlığı her zaman önceliğimizdir.",
  ],
  values: [
    {
      title: "Güvenilirlik",
      description:
        "Müşterilerimize ve temsilcilerimize karşı güvenilirliği sağlamak, ticari faaliyetleri evrensel etik kurallara uygun yürütmek temel ilkemizdir.",
    },
    {
      title: "Ürün Kalitesi",
      description:
        "Ürünlerimizin kalite standartlarına uygunluğunu sağlamak için kalite onaylı malzemeler kullanır, GMP ve GLP standartlarına uygun üretim yaparız.",
    },
    {
      title: "Sağlık ve Çevre",
      description:
        "İnsan, hayvan ve çevre sağlığını korumaya yönelik en yüksek standartları benimser, riskleri minimize etmek için titizlikle çalışırız.",
    },
  ],
};

export const fipInfo = {
  title: "FIP Nedir?",
  intro: [
    "FIP (Feline Infectious Peritonitis), kedilerin bağışıklık sistemini etkileyen ve tedavi edilmezse ölümcül olabilen bir hastalıktır.",
    "Kedilerin birçoğunda koronavirüs bulunabilir; bağışıklık düşmesi, stres veya ameliyat gibi nedenlerle bu virüs mutasyona uğrayarak FIPV formuna dönüşebilir.",
  ],
  sections: [
    {
      title: "Hastalık nasıl gelişir?",
      text: [
        "Mutasyona uğrayan virüs, makrofajları enfekte ederek vücudun farklı bölgelerine taşınır.",
        "Bu süreç, damar geçirgenliğini artırır ve iç organlarda inflamasyona, sıvı birikimine ve granülomlara neden olabilir.",
      ],
    },
    {
      title: "Bağışıklık tepkisi",
      text: [
        "Makrofajlar ve diğer bağışıklık hücrelerinin yoğun aktivasyonu, damar iltihabı ve organ hasarı riskini artırır.",
        "FIP hastalığının ıslak formunda karın veya göğüs boşluğunda sıvı birikimi sık görülür.",
      ],
    },
  ],
  symptoms: [
    {
      title: "Genel Durum",
      items: [
        "Yüksek ateş, kilo kaybı, halsizlik, durgunluk",
        "İştahsızlık, susuzluk, saklanma, titreme",
        "Tüy dökülmesi, soluk diş etleri, topallama",
      ],
    },
    {
      title: "Gözler",
      items: [
        "Göz bebeklerinde farklılık, iris renginde değişim",
        "Üveit, konjonktivit, gözde sıvı birikimi",
        "Geçici görme kaybı",
      ],
    },
    {
      title: "Sinirsel",
      items: [
        "Dengesiz yürüyüş, ataklar, güçsüzlük",
        "Geçici felç, idrar/dışkı kaçırma",
        "Başını yana yatırma, kendi etrafında dönme",
      ],
    },
    {
      title: "Sindirim - Boşaltım",
      items: ["İştahsızlık, kusma, ishal, kabızlık"],
    },
    {
      title: "Karaciğer - Böbrek",
      items: [
        "Sarılık, fazla su içme, sık idrar",
        "Dışkı renginde açılma, organlarda büyüme",
      ],
    },
    {
      title: "Kalp - Akciğer - Dolaşım",
      items: [
        "Karın veya göğüs boşluğunda sıvı birikimi",
        "Nefes darlığı, kalp yetmezliği, kansızlık",
        "Kol ve bacaklarda ödem",
      ],
    },
    {
      title: "Kan Testi ve Ölçümler",
      items: [
        "Total protein artışı, albumin/globulin oranı düşüşü",
        "Globulin artışı, lenfosit azalması, bilirubin artışı",
        "Ultrason ve röntgende sıvı birikimi bulguları",
      ],
    },
  ],
};

export const treatment = {
  title: "FIP Tedavisi",
  intro: [
    "Erken teşhis edilen vakalarda tedavi başarısı ve sağ kalım oranı %85-90 arasındadır. Süreç geciktikçe oran düşmektedir.",
    "Önerilen tedavi süresi minimum 90 gündür. FIPGL23, kedinin kilosuna göre sabah ve akşam 12 saat arayla uygulanır.",
  ],
  rules: [
    "Tedavi süresince kedi diğer kedilerden izole edilmelidir.",
    "Tedavi süresince aşı yapılmamalı, bağışıklık güçlendiriciler kullanılmamalıdır.",
    "Antibiyotik kullanımı veteriner kontrolünde yapılabilir (yasaklı antibiyotikler hariç).",
    "Kısırlaştırma ve rutine aykırı işlemler ertelenmelidir.",
    "Semptomlar 10 günden itibaren azalabilir; tedavi yarıda bırakılmamalıdır.",
  ],
  supportiveCare: [
    "Solunum sıkıntısında göğüste biriken sıvı boşaltılabilir.",
    "Karaciğer, böbrek, vitamin ve mineral desteği gerekebilir.",
    "Sıvı alımı ve beslenme hayati önemlidir; ishal, kabızlık ve susuzluk yakından izlenmelidir.",
    "Veteriner hekim kontrolü olmadan kortizon veya ek tedavi uygulanmamalı.",
  ],
  feeding: [
    "Yemek yemeyen kedide anemi ve karaciğer yetmezliği riski artar.",
    "Su içmeyen kedilere enjektörle dikkatli şekilde sıvı verilmelidir.",
    "Yüksek sindirilebilir, sıvı kıvamlı ve enerji yoğun öğünler tercih edilmelidir.",
    "Böbrek yetmezliği riski olan kedilerde protein miktarı veterinere göre ayarlanmalıdır.",
  ],
};

export const faq = [
  {
    question: "FIP hastalığı öldürücü müdür?",
    answer: "Müdahale edilmezse ölümcül olabilir.",
  },
  {
    question: "FIP hastalığı bulaşıcı mıdır?",
    answer:
      "Aynı alanları kullanan kedilerde dışkı yoluyla bulaşma riski vardır.",
  },
  {
    question: "Tedaviye nasıl başlayabilirim?",
    answer: "Veteriner hekim görüşü ve testlerle teşhis konduktan sonra.",
  },
  {
    question: "Tedavi ne kadar sürer?",
    answer:
      "Minimum 12 haftadır. Nörolojik ve oküler formlarda süre uzayabilir.",
  },
  {
    question: "Semptomlar bitti, tedaviyi bırakabilir miyim?",
    answer:
      "Hayır. Semptomların kaybolması virüsün tamamen yok olduğu anlamına gelmez.",
  },
  {
    question: "Evde başka kedilerim var, bulaşır mı?",
    answer:
      "FIP başlanan kedinin diğer kedilerden ayrılması, mama ve su kaplarını paylaşmamaları gerekir.",
  },
  {
    question: "Yasaklı antibiyotikler nelerdir?",
    answer:
      "Baytril ve diğer florokinolon grubu antibiyotikler kullanılmamalıdır.",
  },
  {
    question: "Kedim su içmiyor, ne yapmalıyım?",
    answer:
      "Susuz kalmamak hayati önemlidir. Sıvı alımını teşvik edin veya veteriner desteği alın.",
  },
  {
    question: "Kedim yemek yemiyor, ne yapmalıyım?",
    answer:
      "İştahsız kediler beslenmelidir. Sevilen yiyecekleri deneyin ve gerekirse elle besleyin.",
  },
];

export const returnPolicy = {
  title: "Ürün İade Politikası",
  intro:
    "İade edilecek ürünlerin açılmamış ve orijinal ambalajında olması gerekir.",
  items: [
    {
      title: "Ürün Saklama Koşulları",
      description:
        "Flakon şişeler güneş ışığından uzak serin ortamda, kapsül ve toz ürünler oda sıcaklığında saklanmalıdır.",
    },
    {
      title: "Orijinal Durum ve Ambalaj",
      description:
        "Açılmış veya kısmen kullanılmış ürünlerin iadesi kabul edilmez.",
    },
    {
      title: "İade Süreci",
      description:
        "Ürünler incelendikten sonra geri ödeme bilgilendirmesi yapılır. Paketleme ve kargo giderleri kesinti olabilir.",
    },
    {
      title: "Kargo Masrafları",
      description: "İade kargosunun ücreti gönderene aittir.",
    },
  ],
};
