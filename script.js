const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const caseGrid = document.querySelector("[data-case-grid]");
const caseDetail = document.querySelector("[data-case-detail]");
const carousel = document.querySelector("[data-carousel]");
const carouselDots = document.querySelector("[data-carousel-dots]");
const carouselMeta = document.querySelector("[data-carousel-meta]");
const languageButtons = [...document.querySelectorAll("[data-lang-btn]")];

const translations = {
  zh: {
    navWorks: "作品集",
    navAbout: "关于",
    navProfile: "简介",
    navContact: "联系",
    heroEyebrow: "Rainwoo Design / Brand & Packaging",
    heroTitleA: "润物设计",
    heroTitleB: "以云南文化与商业洞察，建立可落地的品牌视觉系统。",
    heroText: "专注品牌策划、包装设计、插画创作与制作落地，让地域文化、产品价值和市场识别在同一套视觉语言中形成合力。",
    viewCases: "查看案例",
    downloadProfile: "查看案例 PDF",
    heroCaption: "精选包装案例",
    tickerA: "品牌策划",
    tickerB: "包装系统",
    tickerC: "原创插画",
    tickerD: "工艺落地",
    worksEyebrow: "Selected Cases",
    carouselEyebrow: "Works Collection",
    worksTitle: "全部项目",
    worksSubTitle: "品牌策划 / 包装系统 / 原创插画 / 工艺落地",
    aboutEyebrow: "About Rainwoo",
    aboutTitle: "长期服务云南品牌与产品，用原创设计连接文化、商业与生产。",
    aboutTextA: "润物设计专注云南品牌与产品形象策划设计，核心成员拥有近二十年行业经验，服务对象覆盖茶叶、文创、食品与地方农特品牌。",
    aboutTextB: "团队由策划、插画、设计、制作等专业角色协同工作，重视从概念、视觉到材质工艺的完整实现，为客户提供清晰、独立且可销售的设计方案。",
    statA: "年行业实践",
    statB: "服务品牌",
    statC: "上市产品设计",
    profileEyebrow: "Company Profile",
    profileTitle: "完整介绍与部分案例合集",
    profileLink: "打开 PDF 文件",
    contactEyebrow: "Contact",
    contactTitle: "让产品价值，被更准确地看见。",
    openCase: "查看项目",
    closeCase: "收起项目",
    galleryLabel: "项目图集"
  },
  en: {
    navWorks: "Works",
    navAbout: "About",
    navProfile: "Profile",
    navContact: "Contact",
    heroEyebrow: "Rainwoo Design / Brand & Packaging",
    heroTitleA: "Rainwoo Design",
    heroTitleB: "Brand systems shaped by Yunnan culture, market insight and production craft.",
    heroText: "Rainwoo works across brand strategy, packaging, illustration and production, turning regional culture and product value into clear market recognition.",
    viewCases: "View Cases",
    downloadProfile: "View Case PDF",
    heroCaption: "Selected Packaging Work",
    tickerA: "Brand Strategy",
    tickerB: "Packaging System",
    tickerC: "Original Illustration",
    tickerD: "Production Craft",
    worksEyebrow: "Selected Cases",
    carouselEyebrow: "Works Collection",
    worksTitle: "All Projects",
    worksSubTitle: "Brand Strategy / Packaging System / Original Illustration / Production Craft",
    aboutEyebrow: "About Rainwoo",
    aboutTitle: "Rainwoo builds original design systems for Yunnan brands, from idea to market-ready production.",
    aboutTextA: "Rainwoo Design focuses on brand and product image planning in Yunnan. Its core team brings nearly two decades of experience across tea, cultural products, food and regional agricultural brands.",
    aboutTextB: "Strategy, illustration, design and production roles work together, with close attention to concept, visual language, material process and final implementation.",
    statA: "Years of Practice",
    statB: "Served Brands",
    statC: "Marketed Products",
    profileEyebrow: "Company Profile",
    profileTitle: "Full introduction and selected case collection",
    profileLink: "Open PDF File",
    contactEyebrow: "Contact",
    contactTitle: "Make product value visible with precision.",
    openCase: "View Project",
    closeCase: "Close Project",
    galleryLabel: "Project Gallery"
  }
};

const cases = [
  {
    slug: "zhongcha-25-cellar",
    year: "2026",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    zh: {
      name: "中茶 - 廿五醇藏",
      type: "纪念茶包装系统",
      title: "以时间为窖，沉淀二十五年的醇厚秩序。",
      desc: "设计以年份感和收藏属性为核心，通过稳重构图、金色细节与典藏式版面建立礼品级识别，突出茶品的时间价值与品牌可信度。"
    },
    en: {
      name: "China Tea - 25 Cellar",
      type: "Commemorative Tea Packaging",
      title: "A cellar of time, holding twenty-five years of mellow order.",
      desc: "The system centers on age, collection and ceremony, using composed layouts and gold detailing to express time value and brand credibility."
    }
  },
  {
    slug: "yunnan-zhongcha-90s",
    year: "2026",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp"],
    zh: {
      name: "云南中茶 - 90年代",
      type: "复古系列包装",
      title: "把九十年代的茶叶记忆，整理成可销售的复古资产。",
      desc: "以年代符号、熊猫意象和朴素色彩唤起市场记忆，控制怀旧感不过度装饰，让系列在货架上形成统一而亲切的辨识度。"
    },
    en: {
      name: "Yunnan China Tea - 90s",
      type: "Retro Packaging Series",
      title: "Turning tea memories of the 1990s into sellable visual assets.",
      desc: "Period symbols, panda imagery and restrained colors build recognition with warmth, keeping nostalgia clear, unified and commercially useful."
    }
  },
  {
    slug: "yunnan-zhongcha-black-gold-banzhang",
    year: "2026",
    images: ["01.webp", "02.webp"],
    zh: {
      name: "云南中茶 - 黑金班章",
      type: "高端茶包装",
      title: "用黑金对比，放大班章的力量感与稀缺感。",
      desc: "以黑色压住气场，以金色建立价值锚点，版面减少多余信息，突出产品等级、产区识别与高端礼赠属性。"
    },
    en: {
      name: "Yunnan China Tea - Black Gold Banzhang",
      type: "Premium Tea Packaging",
      title: "Black and gold contrast amplifies rarity and strength.",
      desc: "A dark base carries authority while gold details anchor value. The layout reduces noise and highlights grade, origin and premium gifting."
    }
  },
  {
    slug: "yunnan-zhongcha-cake-tea",
    year: "2025",
    images: ["01.webp", "02.webp"],
    zh: {
      name: "云南中茶饼茶",
      type: "饼茶产品包装",
      title: "在传统饼茶结构中，建立更清晰的现代品牌识别。",
      desc: "设计保留茶饼包装的熟悉秩序，同时强化主标识、产品信息与视觉层级，让传统品类拥有更利落的终端表达。"
    },
    en: {
      name: "Yunnan China Tea Cake",
      type: "Tea Cake Packaging",
      title: "A clearer modern identity within the classic tea cake format.",
      desc: "The design respects familiar packaging order while strengthening brand mark, product information and visual hierarchy for sharper retail presence."
    }
  },
  {
    slug: "bajiaoting-mansong",
    year: "2025",
    images: ["01.webp", "02.webp"],
    zh: {
      name: "八角亭 - 曼松",
      type: "山头茶包装",
      title: "以克制的视觉语言，表现曼松的细腻与珍贵。",
      desc: "用清晰留白、材质质感和低噪音构图表达山头茶的稀缺气质，避免过度图案化，让产品本身成为视觉中心。"
    },
    en: {
      name: "Bajiaoting - Mansong",
      type: "Origin Tea Packaging",
      title: "A restrained language for the delicacy and rarity of Mansong.",
      desc: "Whitespace, material texture and quiet composition express origin value without excessive ornament, keeping the product itself at the center."
    }
  },
  {
    slug: "bajiaoting-ji",
    year: "2025",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp", "07.webp"],
    zh: {
      name: "八角亭 - 极",
      type: "高端系列包装",
      title: "把“极”的概念转化为锋利、克制、可延展的包装系统。",
      desc: "设计通过强识别符号、深色基调和结构化版式建立系列感，兼顾单品冲击力与多 SKU 延展，形成高端产品线的统一气质。"
    },
    en: {
      name: "Bajiaoting - Ji",
      type: "Premium Packaging Series",
      title: "Translating the idea of ultimate into a sharp and expandable system.",
      desc: "A strong symbol, deep palette and structured layout create a premium series that works for both hero products and multiple SKU extensions."
    }
  },
  {
    slug: "bajiaoting-jia-guan-tianxia",
    year: "2025",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"],
    zh: {
      name: "八角亭 - 甲冠天下",
      type: "礼盒包装系统",
      title: "以冠军感建立礼赠秩序，让产品拥有仪式性的展开。",
      desc: "通过稳重构图、金色工艺和礼盒层级强化“甲冠”概念，兼顾开盒体验、陈列气场与品牌传播记忆。"
    },
    en: {
      name: "Bajiaoting - Jia Guan Tianxia",
      type: "Gift Box Packaging",
      title: "A ceremonial gift system built around the idea of distinction.",
      desc: "Composed layouts, gold finishing and layered packaging reinforce the concept of excellence while supporting display, unboxing and recall."
    }
  },
  {
    slug: "bajiaoting-wild-organic",
    year: "2025",
    images: ["01.webp", "02.webp", "03.webp"],
    zh: {
      name: "八角亭 - 荒野有机",
      type: "有机茶包装",
      title: "让荒野感保持自然，同时具备品牌化的秩序。",
      desc: "设计将有机、山野、生态等关键词收束为清晰的视觉系统，以自然质感和现代版式平衡原生气息与商业识别。"
    },
    en: {
      name: "Bajiaoting - Wild Organic",
      type: "Organic Tea Packaging",
      title: "Keeping wilderness natural while giving it brand order.",
      desc: "Organic, mountain and ecological cues are organized into a clear system, balancing raw texture with contemporary commercial recognition."
    }
  },
  {
    slug: "fengyu-hupo",
    year: "2025",
    images: ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp", "06.webp", "07.webp"],
    zh: {
      name: "凤羽琥珀",
      type: "产品包装与插画",
      title: "用凤羽的轻盈与琥珀的温润，塑造东方质感的产品记忆。",
      desc: "以原创图形、色彩层次和材质光泽建立诗意联想，让包装在文化意象与产品利益之间形成优雅的转换。"
    },
    en: {
      name: "Phoenix Feather Amber",
      type: "Packaging & Illustration",
      title: "Feather lightness and amber warmth create an eastern product memory.",
      desc: "Original graphics, layered color and material sheen build a poetic bridge between cultural imagery and product value."
    }
  },
  {
    slug: "villages-series",
    year: "2025",
    images: ["01.webp", "02.webp", "03.webp", "04.webp"],
    zh: {
      name: "村村寨寨",
      type: "地域文化系列",
      title: "把村寨风貌转译为连续的地域文化包装叙事。",
      desc: "设计以地方生活、村寨记忆和系列化图像为线索，形成有温度的视觉叙事，让地域资产从风景变成品牌内容。"
    },
    en: {
      name: "Villages Series",
      type: "Regional Culture Series",
      title: "A continuous packaging narrative translated from village landscapes.",
      desc: "Local life, village memory and serial imagery turn regional assets from scenery into warm and recognizable brand content."
    }
  }
];

let currentLang = "zh";
let activeCase = null;
let activeSlide = 0;
let activeDetailSlide = 0;
let carouselTimer;
let detailTimer;

function caseImagePath(item, image) {
  return `assets/cases/${item.slug}/${image}`;
}

function originalImagePath(item, image) {
  return `assets/large-cases/${item.slug}/${image}`;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || "";
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langBtn === lang);
  });
  renderCarousel();
  renderCases();
  renderCaseDetail();
}

function featuredCases() {
  return [cases[3], cases[2], cases[8], cases[4], cases[1]];
}

function renderCarousel() {
  const items = featuredCases();
  carousel.innerHTML = items.map((item, index) => {
    const content = item[currentLang];
    return `
      <button class="showcase-slide ${index === activeSlide ? "is-active" : ""}" type="button" data-carousel-case="${item.slug}" aria-label="${translations[currentLang].openCase}: ${content.name}">
        <img src="${originalImagePath(item, item.images[0])}" alt="${content.name}" loading="${index === 0 ? "eager" : "lazy"}" />
      </button>
    `;
  }).join("");

  carouselDots.innerHTML = items.map((_, index) => `
    <button class="${index === activeSlide ? "is-active" : ""}" type="button" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
  `).join("");

  const active = items[activeSlide];
  const activeContent = active[currentLang];
  carouselMeta.innerHTML = `
    <p class="eyebrow">${translations[currentLang].carouselEyebrow}</p>
    <p class="carousel-caption">
      <span>${String(activeSlide + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}</span>
      <span>${activeContent.name}</span>
    </p>
  `;
}

function setSlide(index) {
  const items = featuredCases();
  activeSlide = (index + items.length) % items.length;
  renderCarousel();
}

function startCarousel() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => setSlide(activeSlide + 1), 4200);
}

function renderCases() {
  caseGrid.innerHTML = cases.map((item, index) => {
    const content = item[currentLang];
    const isActive = item.slug === activeCase;
    return `
      <article class="case-card ${isActive ? "is-active" : ""}" style="--delay: ${Math.min(index * 45, 360)}ms">
        <button type="button" data-case="${item.slug}" aria-label="${translations[currentLang].openCase}: ${content.name}">
          <img src="${caseImagePath(item, item.images[0])}" alt="${content.name}" loading="${index < 2 ? "eager" : "lazy"}" />
          <span class="case-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="case-copy">
            <small>${content.type} / ${item.year}</small>
            <strong>${content.name}</strong>
            <em>${content.title}</em>
          </span>
        </button>
      </article>
    `;
  }).join("");
  requestAnimationFrame(setupReveal);
}

function renderCaseDetail() {
  const item = cases.find((caseItem) => caseItem.slug === activeCase) || cases[0];
  if (!activeCase) {
    caseDetail.classList.add("is-empty");
    caseDetail.innerHTML = "";
    return;
  }
  const content = item[currentLang];
  activeDetailSlide = Math.min(activeDetailSlide, item.images.length - 1);
  caseDetail.classList.remove("is-empty");
  caseDetail.innerHTML = `
    <div class="detail-copy">
      <p class="eyebrow">${content.type} / ${item.year}</p>
      <h2>${content.title}</h2>
      <p>${content.desc}</p>
    </div>
    <div class="detail-carousel" aria-label="${translations[currentLang].galleryLabel}">
      ${item.images.map((image, index) => `
        <figure class="detail-slide ${index === activeDetailSlide ? "is-active" : ""}">
          <img src="${originalImagePath(item, image)}" alt="${content.name} ${index + 1}" loading="${index < 2 ? "eager" : "lazy"}" />
        </figure>
      `).join("")}
      <div class="detail-controls">
        <button type="button" data-detail-prev aria-label="Previous image">←</button>
        <span>${String(activeDetailSlide + 1).padStart(2, "0")} / ${String(item.images.length).padStart(2, "0")}</span>
        <button type="button" data-detail-next aria-label="Next image">→</button>
      </div>
    </div>
  `;
}

function setDetailSlide(index) {
  if (!activeCase) return;
  const item = cases.find((caseItem) => caseItem.slug === activeCase);
  if (!item) return;
  activeDetailSlide = (index + item.images.length) % item.images.length;
  renderCaseDetail();
}

function startDetailCarousel() {
  clearInterval(detailTimer);
  const item = cases.find((caseItem) => caseItem.slug === activeCase);
  if (!item || item.images.length < 2) return;
  detailTimer = setInterval(() => setDetailSlide(activeDetailSlide + 1), 4600);
}

function openCase(slug) {
  activeCase = slug;
  activeDetailSlide = 0;
  renderCases();
  renderCaseDetail();
  startDetailCarousel();
  caseDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".case-card").forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".case-card").forEach((card) => observer.observe(card));
}

toggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  }
});

caseGrid?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-case]");
  if (!button) return;
  openCase(button.dataset.case);
});

carousel?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-carousel-case]");
  if (!button) return;
  openCase(button.dataset.carouselCase);
});

carouselDots?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slide]");
  if (!button) return;
  setSlide(Number(button.dataset.slide));
  startCarousel();
});

document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => {
  setSlide(activeSlide - 1);
  startCarousel();
});

document.querySelector("[data-carousel-next]")?.addEventListener("click", () => {
  setSlide(activeSlide + 1);
  startCarousel();
});

caseDetail?.addEventListener("click", (event) => {
  if (event.target.closest("[data-detail-prev]")) {
    setDetailSlide(activeDetailSlide - 1);
    startDetailCarousel();
  }

  if (event.target.closest("[data-detail-next]")) {
    setDetailSlide(activeDetailSlide + 1);
    startDetailCarousel();
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langBtn));
});

setLanguage(currentLang);
setupReveal();
startCarousel();
