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
    brandName: "润物设计",
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
    worksTitle: "项目选集",
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
    closeCase: "返回",
    galleryLabel: "项目图集",
    legalNotice: "以上案例均为设计效果展示，不作为实际产品对比依据；未经授权，禁止转载、截取、复制或以任何形式传播。"
  },
  en: {
    brandName: "Rainwoo Design",
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
    worksTitle: "Selected Projects",
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
    closeCase: "Back",
    galleryLabel: "Project Gallery",
    legalNotice: "The cases above are design visuals only and are not intended for product comparison. Reposting, screenshots, copying or redistribution is prohibited without permission."
  }
};

function imageSequence(count, ext = "jpg") {
  return Array.from({ length: count }, (_, index) => `${String(index + 1).padStart(2, "0")}.${ext}`);
}

function projectCase({ slug, year = "2026", count, ext = "jpg", hidden = false, zh, en }) {
  return {
    slug,
    year,
    hidden,
    images: imageSequence(count, ext),
    zh,
    en
  };
}

const cases = [
  projectCase({
    slug: "yunnan-zhongcha-black-gold-banzhang",
    count: 2,
    ext: "webp",
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
  }),
  projectCase({
    slug: "zhongcha-amber-gold-needle-bud",
    count: 2,
    zh: {
      name: "中茶 - 琥珀金针&金芽",
      type: "茶品系列包装",
      title: "以琥珀色泽与金芽意象，建立清润明亮的茶礼识别。",
      desc: "设计围绕金针、金芽的色泽联想展开，通过通透色彩、精致版式与系列化信息层级，让产品在礼赠和陈列场景中保持清晰的品牌气质。"
    },
    en: {
      name: "China Tea - Amber Gold Needle & Bud",
      type: "Tea Series Packaging",
      title: "Amber color and golden bud imagery shape a bright tea identity.",
      desc: "Transparent color, refined layout and a clear information hierarchy help the series feel precise, giftable and recognizable at retail."
    }
  }),
  projectCase({
    slug: "zhongcha-weisuan",
    count: 6,
    zh: {
      name: "中茶 - 微酸",
      type: "风味茶包装",
      title: "把微酸口感转译成轻盈、清爽且有记忆点的视觉语言。",
      desc: "以明快色彩和简洁结构表达口感特征，让年轻化的风味体验与中茶品牌识别保持同场呈现。"
    },
    en: {
      name: "China Tea - Wei Suan",
      type: "Flavor Tea Packaging",
      title: "A light visual language for a fresh, lightly sour taste.",
      desc: "Bright colors and clean structure translate the flavor cue into a modern package while retaining China Tea brand recognition."
    }
  }),
  projectCase({
    slug: "century-tongchang-nature",
    count: 3,
    zh: {
      name: "百年同昌 - 自然",
      type: "茶品包装系统",
      title: "用自然秩序回应百年品牌的沉稳与温度。",
      desc: "视觉以自然意象、沉静色调和克制版面组织产品信息，让老品牌拥有更舒展、更当代的呈现方式。"
    },
    en: {
      name: "Century Tongchang - Nature",
      type: "Tea Packaging System",
      title: "Natural order gives a century-old brand calm and warmth.",
      desc: "Natural imagery, quiet tones and restrained layout refresh the heritage brand with a more contemporary expression."
    }
  }),
  projectCase({
    slug: "haoke-zhongcha-bingdao-xigui",
    count: 8,
    zh: {
      name: "好客×中茶 - 冰岛昔归",
      type: "联名茶礼包装",
      title: "在联名语境中，呈现冰岛与昔归的产区价值。",
      desc: "设计将联名关系、山头识别和礼盒体验整合为统一系统，兼顾品牌气场、产品层级与开盒记忆。"
    },
    en: {
      name: "Haoke x China Tea - Bingdao Xigui",
      type: "Co-branded Tea Gift Packaging",
      title: "A co-branded system for the origin value of Bingdao and Xigui.",
      desc: "The design unifies partnership, origin recognition and gifting experience into a polished, memorable packaging system."
    }
  }),
  projectCase({
    slug: "jikeshu-pujin-years",
    count: 3,
    zh: {
      name: "几棵树 - 普金岁月",
      type: "普洱茶包装",
      title: "以岁月感与金色记忆，建立普洱茶的收藏气质。",
      desc: "视觉通过稳重色彩、时间符号与简洁信息层级，强化产品的陈化价值和礼赠属性。"
    },
    en: {
      name: "Jikeshu - Pujin Years",
      type: "Puer Tea Packaging",
      title: "Golden memory and age value shape a collectible tea presence.",
      desc: "A composed palette, time cues and clear hierarchy reinforce aged value and gifting quality."
    }
  }),
  projectCase({
    slug: "zhongcha-tea-bags",
    count: 7,
    zh: {
      name: "中茶 - 袋泡茶",
      type: "袋泡茶系列包装",
      title: "把多种风味整理成轻便、清楚、可连续购买的系列。",
      desc: "以风味命名、色彩分区和统一结构建立货架秩序，让日常饮用场景更易识别和选择。"
    },
    en: {
      name: "China Tea - Tea Bags",
      type: "Tea Bag Series Packaging",
      title: "A clear and repeatable system for multiple everyday flavors.",
      desc: "Flavor names, color zoning and a unified structure make the series easy to scan, choose and repurchase."
    }
  }),
  projectCase({
    slug: "yunnan-zhongcha-cake-collection",
    count: 8,
    zh: {
      name: "云南中茶 - 饼茶集",
      type: "饼茶系列包装",
      title: "让多款饼茶在统一系统中各自成立。",
      desc: "设计以系列化版式承载不同产品信息，既保证品牌整体感，也为单品保留独立识别。"
    },
    en: {
      name: "Yunnan China Tea - Cake Tea Collection",
      type: "Cake Tea Series Packaging",
      title: "A unified system where each cake tea keeps its own identity.",
      desc: "A modular layout carries varied product information while preserving both brand unity and individual recognition."
    }
  }),
  projectCase({
    slug: "zhongcha-gold-ticket",
    count: 2,
    zh: {
      name: "中茶 - 金票",
      type: "茶品包装",
      title: "以票据概念组织价值感，让产品具备收藏与礼赠双重识别。",
      desc: "视觉从金票意象出发，通过细节工艺和秩序化版面强化产品的稀缺感与纪念属性。"
    },
    en: {
      name: "China Tea - Gold Ticket",
      type: "Tea Packaging",
      title: "A ticket-inspired concept for collectible and giftable value.",
      desc: "Ticket cues, detailed finishing and ordered layout enhance rarity, ceremony and recall."
    }
  }),
  projectCase({
    slug: "jintai-sour-tea",
    count: 4,
    zh: {
      name: "金泰酸茶",
      type: "酸茶包装",
      title: "用直接而鲜明的视觉，突出酸茶品类的地域特征。",
      desc: "设计将口感记忆、地方气质与终端识别结合，帮助小众品类建立更清楚的市场表达。"
    },
    en: {
      name: "Jintai Sour Tea",
      type: "Sour Tea Packaging",
      title: "A direct visual identity for a regional sour tea category.",
      desc: "Taste memory, local character and shelf clarity come together to make a niche category easier to understand."
    }
  }),
  projectCase({
    slug: "zhongcha-jingmai",
    count: 2,
    zh: {
      name: "中茶 - 景迈",
      type: "山头茶包装",
      title: "以景迈产区气质，建立清晰的山头茶表达。",
      desc: "包装控制信息层级与视觉节奏，让产区价值、品牌资产和礼盒观感形成统一。"
    },
    en: {
      name: "China Tea - Jingmai",
      type: "Origin Tea Packaging",
      title: "A clear packaging expression for Jingmai origin value.",
      desc: "Controlled hierarchy and visual rhythm connect origin value, brand assets and gifting presence."
    }
  }),
  projectCase({
    slug: "zhongcha-12-years-aged",
    count: 9,
    zh: {
      name: "中茶 - 12年陈",
      type: "陈年茶包装",
      title: "以十二年陈化为核心，表达时间带来的厚度。",
      desc: "设计通过沉稳色彩、年份信息和产品层级，强化陈年茶的可靠感与收藏价值。"
    },
    en: {
      name: "China Tea - 12 Years Aged",
      type: "Aged Tea Packaging",
      title: "Twelve years of aging expressed with depth and composure.",
      desc: "A calm palette, year information and clear hierarchy communicate trust, maturity and collectible value."
    }
  }),
  projectCase({
    slug: "qianyi-loose-tea",
    count: 7,
    zh: {
      name: "千一 - 散茶",
      type: "散茶系列包装",
      title: "让散茶产品形成清楚、灵活的系列识别。",
      desc: "以统一包装结构和差异化色彩管理多款单品，兼顾日常销售与品牌系列感。"
    },
    en: {
      name: "Qianyi - Loose Tea",
      type: "Loose Tea Series Packaging",
      title: "A flexible series identity for loose tea products.",
      desc: "Unified structure and differentiated colors organize multiple SKUs for everyday sales and brand consistency."
    }
  }),
  projectCase({
    slug: "zhongjihao-laobanzhang",
    count: 3,
    zh: {
      name: "中吉号 - 老班章",
      type: "山头茶包装",
      title: "以老班章的力量感，塑造高识别度的产品气场。",
      desc: "设计控制画面密度和色彩重量，让产区名片、产品等级与品牌风格彼此支撑。"
    },
    en: {
      name: "Zhongjihao - Lao Banzhang",
      type: "Origin Tea Packaging",
      title: "A strong product presence for Lao Banzhang origin tea.",
      desc: "Visual density and color weight are tuned to support origin recognition, product grade and brand character."
    }
  }),
  projectCase({
    slug: "yingsuan",
    count: 3,
    zh: {
      name: "盈酸",
      type: "风味饮品包装",
      title: "用轻盈酸甜的感受，建立更鲜活的产品识别。",
      desc: "视觉以明快节奏和醒目色彩传递口感利益，强化年轻、轻松的消费场景。"
    },
    en: {
      name: "Yingsuan",
      type: "Flavor Beverage Packaging",
      title: "A lively identity built around a light sweet-sour taste.",
      desc: "Bright rhythm and vivid color communicate the taste benefit and a relaxed, youthful consumption scene."
    }
  }),
  projectCase({
    slug: "hongjigong-ethnic-series",
    count: 4,
    zh: {
      name: "鸿稷贡 - 民族系列",
      type: "地域文化包装",
      title: "把民族图形语言转化为可延展的产品系列。",
      desc: "设计在文化符号与现代秩序之间建立平衡，让系列保持地域温度，同时具备清楚的商业识别。"
    },
    en: {
      name: "Hongjigong - Ethnic Series",
      type: "Regional Culture Packaging",
      title: "Ethnic visual language translated into an expandable series.",
      desc: "Cultural symbols and modern order are balanced to keep regional warmth and commercial clarity."
    }
  }),
  projectCase({
    slug: "zhongcha-china-red-palace-puer",
    count: 4,
    zh: {
      name: "中茶 - 中国红&宫廷普洱",
      type: "普洱茶包装",
      title: "以中国红与宫廷气质，建立喜庆而稳重的礼茶表达。",
      desc: "视觉将红色礼赠属性、普洱品类特征和品牌信息整合，形成适合节庆与礼品场景的包装系统。"
    },
    en: {
      name: "China Tea - China Red & Palace Puer",
      type: "Puer Tea Packaging",
      title: "A festive yet composed gift expression for puer tea.",
      desc: "Red gifting cues, puer category signals and brand information are integrated for holiday and premium gift occasions."
    }
  }),
  projectCase({
    slug: "bingdao-impression-bars",
    count: 5,
    zh: {
      name: "冰岛印象 - 条装",
      type: "便携茶包装",
      title: "把冰岛印象浓缩进轻便条装的连续体验。",
      desc: "设计以便携规格为基础，建立清晰的系列节奏和产区识别，方便陈列、携带与分享。"
    },
    en: {
      name: "Bingdao Impression - Bar Pack",
      type: "Portable Tea Packaging",
      title: "Bingdao impression condensed into a portable bar format.",
      desc: "The compact format builds a clear series rhythm and origin recognition for display, carrying and sharing."
    }
  }),
  projectCase({
    slug: "zhongcha-forbidden-city",
    count: 6,
    zh: {
      name: "中茶 - 紫禁城",
      type: "文化茶礼包装",
      title: "以紫禁城文化意象，建立庄重而可传播的茶礼视觉。",
      desc: "设计整合宫廷符号、熊猫记忆与中茶品牌资产，让文化主题在礼盒系统中更具仪式感。"
    },
    en: {
      name: "China Tea - Forbidden City",
      type: "Cultural Tea Gift Packaging",
      title: "Forbidden City imagery creates a ceremonial tea gift identity.",
      desc: "Palace symbols, panda memory and China Tea assets are integrated into a culturally resonant gift system."
    }
  }),
  projectCase({
    slug: "longmaotang-ancient-tree",
    count: 9,
    zh: {
      name: "龙卯堂 - 古树",
      type: "古树茶系列包装",
      title: "以古树茶的产地脉络，建立多单品系列秩序。",
      desc: "包装通过统一结构承载不同山头与产品信息，突出古树价值，同时保证系列陈列的完整感。"
    },
    en: {
      name: "Longmaotang - Ancient Tree",
      type: "Ancient Tree Tea Series",
      title: "A multi-SKU system rooted in ancient tree tea origins.",
      desc: "A unified structure carries different origin and product details while preserving ancient tree value and series coherence."
    }
  }),
  projectCase({
    slug: "zhongcha-cui",
    count: 10,
    zh: {
      name: "中茶萃",
      type: "茶饮产品包装",
      title: "以萃取感与现代节奏，表达更轻的茶饮方式。",
      desc: "设计强调清爽、便捷和系列识别，让产品在日常饮用与新消费场景中更容易被理解。"
    },
    en: {
      name: "China Tea Cui",
      type: "Tea Drink Packaging",
      title: "A modern tea-drink rhythm shaped by extraction and lightness.",
      desc: "Freshness, convenience and series recognition make the product easier to read in everyday and new-consumption contexts."
    }
  }),
  projectCase({
    slug: "chenshenghong-junyi",
    count: 6,
    zh: {
      name: "陈升红 - 骏逸",
      type: "茶品包装",
      title: "以骏逸气质组织画面，塑造舒展而有力度的产品印象。",
      desc: "设计通过结构化版式和稳健色彩，强化品牌识别、产品名称和礼赠场景的统一表达。"
    },
    en: {
      name: "Chenshenghong - Junyi",
      type: "Tea Packaging",
      title: "A poised and energetic product image shaped around Junyi.",
      desc: "Structured layout and steady color unify brand recognition, product naming and gift presentation."
    }
  }),
  projectCase({
    slug: "zhongcha-25-cellar",
    count: 4,
    ext: "webp",
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
  }),
  projectCase({
    slug: "yunnan-zhongcha-90s",
    count: 6,
    ext: "webp",
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
  }),
  projectCase({
    slug: "yunnan-zhongcha-cake-tea",
    count: 2,
    ext: "webp",
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
  }),
  projectCase({
    slug: "bajiaoting-mansong",
    year: "2025",
    count: 2,
    ext: "webp",
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
  }),
  projectCase({
    slug: "bajiaoting-jia-guan-tianxia",
    year: "2025",
    count: 5,
    ext: "webp",
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
  }),
  projectCase({
    slug: "bajiaoting-wild-organic",
    year: "2025",
    count: 3,
    ext: "webp",
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
  }),
  projectCase({
    slug: "villages-series",
    year: "2025",
    count: 4,
    ext: "webp",
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
  }),
  projectCase({
    slug: "bajiaoting-ji",
    year: "2025",
    count: 7,
    ext: "webp",
    hidden: true,
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
  }),
  projectCase({
    slug: "fengyu-hupo",
    year: "2025",
    count: 7,
    ext: "webp",
    hidden: true,
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
  })
];

let currentLang = "zh";
let activeCase = null;
let activeSlide = 0;
let activeDetailSlide = 0;
let carouselTimer;
let carouselStartToken = 0;
let detailTimer;

function caseImagePath(item, image) {
  return `assets/cases/${item.slug}/${image}`;
}

function originalImagePath(item, image) {
  return `assets/large-cases/${item.slug}/${image}`;
}

function visibleCases() {
  return cases.filter((item) => !item.hidden);
}

function visibleCaseBySlug(slug) {
  return visibleCases().find((item) => item.slug === slug);
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
  return [
    {
      image: "assets/banners/02.jpg",
      zh: { name: "冰岛昔归" },
      en: { name: "Bingdao Xigui" }
    },
    {
      image: "assets/banners/03.jpg",
      zh: { name: "琥珀/凤羽×琥珀" },
      en: { name: "Amber / Fengyu x Amber" }
    },
    {
      image: "assets/banners/04.jpg",
      zh: { name: "老班章 / 金票 / 七子饼" },
      en: { name: "Lao Banzhang / Gold Ticket / Qizi Cake" }
    },
    {
      image: "assets/banners/05.jpg",
      zh: { name: "藏龙 / 宫廷普洱 / 金中茶 / 琥珀" },
      en: { name: "Canglong / Palace Puer / Gold China Tea / Amber" }
    }
  ];
}

const carouselImageCache = new Map();

function warmCarouselImage(src, priority = "low") {
  if (carouselImageCache.has(src)) {
    return carouselImageCache.get(src).ready;
  }

  const image = new Image();
  image.decoding = "async";
  image.loading = "eager";

  if ("fetchPriority" in image) {
    image.fetchPriority = priority;
  }

  const ready = new Promise((resolve) => {
    const settle = () => {
      if (typeof image.decode === "function") {
        image.decode().then(resolve).catch(resolve);
        return;
      }

      resolve();
    };

    image.addEventListener("load", settle, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });

  carouselImageCache.set(src, { image, ready });
  image.src = src;
  return ready;
}

function preloadCarouselImages(items) {
  return Promise.all(items.map((item, index) => (
    warmCarouselImage(item.image, index === 0 ? "high" : "low")
  )));
}

function updateCarouselState() {
  const items = featuredCases();
  if (!items.length) return;
  activeSlide = (activeSlide + items.length) % items.length;

  carousel.querySelectorAll("[data-carousel-slide]").forEach((button, index) => {
    const isActive = index === activeSlide;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-hidden", String(!isActive));
  });

  carouselDots.querySelectorAll("[data-slide]").forEach((button, index) => {
    button.classList.toggle("is-active", index === activeSlide);
  });

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

function renderCarousel() {
  const items = featuredCases();
  preloadCarouselImages(items);
  carouselDots.style.setProperty("--slide-count", items.length);

  carousel.innerHTML = items.map((item, index) => {
    const content = item[currentLang];
    return `
      <div class="showcase-slide" data-carousel-slide aria-label="${content.name}">
        <img src="${item.image}" alt="${content.name}" loading="eager" decoding="async" fetchpriority="${index === 0 ? "high" : "low"}" draggable="false" />
      </div>
    `;
  }).join("");

  carouselDots.innerHTML = items.map((_, index) => `
    <button type="button" data-slide="${index}" aria-label="Slide ${index + 1}"></button>
  `).join("");

  updateCarouselState();
}

function setSlide(index) {
  const items = featuredCases();
  activeSlide = (index + items.length) % items.length;
  updateCarouselState();
}

function startCarousel() {
  clearTimeout(carouselTimer);
  const token = ++carouselStartToken;
  const items = featuredCases();

  preloadCarouselImages(items).finally(() => {
    if (token !== carouselStartToken) return;

    const tick = () => {
      if (!document.hidden) {
        requestAnimationFrame(() => setSlide(activeSlide + 1));
      }

      carouselTimer = setTimeout(tick, 4600);
    };

    carouselTimer = setTimeout(tick, 4600);
  });
}

function renderCases() {
  const items = visibleCases();
  caseGrid.innerHTML = items.map((item, index) => {
    const content = item[currentLang];
    const isActive = item.slug === activeCase;
    return `
      <article class="case-card ${isActive ? "is-active" : ""}" style="--delay: ${Math.min(index * 45, 360)}ms">
        <button type="button" data-case="${item.slug}" aria-label="${translations[currentLang].openCase}: ${content.name}">
          <img src="${caseImagePath(item, item.images[0])}" alt="${content.name}" loading="${index < 2 ? "eager" : "lazy"}" draggable="false" />
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

function updateDetailState() {
  const item = visibleCaseBySlug(activeCase);
  if (!item) return;
  activeDetailSlide = (activeDetailSlide + item.images.length) % item.images.length;

  caseDetail.querySelectorAll(".detail-slide").forEach((slide, index) => {
    const isActive = index === activeDetailSlide;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  const count = caseDetail.querySelector("[data-detail-count]");
  if (count) {
    count.textContent = `${String(activeDetailSlide + 1).padStart(2, "0")} / ${String(item.images.length).padStart(2, "0")}`;
  }
}

function renderCaseDetail() {
  const item = visibleCaseBySlug(activeCase);
  if (!activeCase) {
    caseDetail.classList.add("is-empty");
    caseDetail.innerHTML = "";
    return;
  }
  if (!item) {
    activeCase = null;
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
      <button class="detail-back" type="button" data-close-case>${translations[currentLang].closeCase}</button>
    </div>
    <div class="detail-carousel" aria-label="${translations[currentLang].galleryLabel}">
      ${item.images.map((image, index) => `
        <figure class="detail-slide">
          <img src="${originalImagePath(item, image)}" alt="${content.name} ${index + 1}" loading="${index < 2 ? "eager" : "lazy"}" draggable="false" />
        </figure>
      `).join("")}
      <div class="detail-controls">
        <button type="button" data-detail-prev aria-label="Previous image">←</button>
        <span data-detail-count>${String(activeDetailSlide + 1).padStart(2, "0")} / ${String(item.images.length).padStart(2, "0")}</span>
        <button type="button" data-detail-next aria-label="Next image">→</button>
      </div>
    </div>
  `;
  updateDetailState();
}

function setDetailSlide(index) {
  if (!activeCase) return;
  const item = visibleCaseBySlug(activeCase);
  if (!item) return;
  activeDetailSlide = (index + item.images.length) % item.images.length;
  updateDetailState();
}

function startDetailCarousel() {
  clearInterval(detailTimer);
  const item = visibleCaseBySlug(activeCase);
  if (!item || item.images.length < 2) return;
  detailTimer = setInterval(() => setDetailSlide(activeDetailSlide + 1), 4600);
}

function setupSwipeNavigation(target, onPrevious, onNext, scopeSelector) {
  let startX = 0;
  let startY = 0;
  let tracking = false;
  const minDistance = 48;

  target.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (scopeSelector && !event.target.closest(scopeSelector)) return;
    startX = event.clientX;
    startY = event.clientY;
    tracking = true;
  });

  target.addEventListener("pointerup", (event) => {
    if (!tracking) return;
    tracking = false;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (Math.abs(deltaX) < minDistance || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    if (deltaX > 0) {
      onPrevious();
    } else {
      onNext();
    }
  });

  target.addEventListener("pointercancel", () => {
    tracking = false;
  });
}

function openCase(slug) {
  if (!visibleCaseBySlug(slug)) return;
  activeCase = slug;
  activeDetailSlide = 0;
  renderCases();
  renderCaseDetail();
  startDetailCarousel();
  caseDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeCaseDetail() {
  activeCase = null;
  activeDetailSlide = 0;
  clearInterval(detailTimer);
  renderCases();
  renderCaseDetail();
  document.querySelector("#works")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupDetailReturnSwipe() {
  let startX = 0;
  let startY = 0;
  let tracking = false;
  const minDistance = 56;
  const mobileQuery = window.matchMedia("(max-width: 720px)");

  document.addEventListener("pointerdown", (event) => {
    if (!activeCase || !mobileQuery.matches) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    startX = event.clientX;
    startY = event.clientY;
    tracking = true;
  });

  document.addEventListener("pointerup", (event) => {
    if (!tracking) return;
    tracking = false;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    if (Math.abs(deltaX) < minDistance || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    closeCaseDetail();
  });

  document.addEventListener("pointercancel", () => {
    tracking = false;
  });
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

function protectContent() {
  const blockedKeys = new Set(["s", "p", "u", "c", "x", "i", "j"]);

  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("dragstart", (event) => event.preventDefault());
  document.addEventListener("selectstart", (event) => event.preventDefault());

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    const commandKey = event.metaKey || event.ctrlKey;
    const macScreenshot = event.metaKey && event.shiftKey && ["3", "4", "5"].includes(key);
    const saveOrInspect = commandKey && blockedKeys.has(key);
    const printScreen = key === "printscreen";

    if (macScreenshot || saveOrInspect || printScreen) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);
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

setupSwipeNavigation(
  carousel,
  () => {
    setSlide(activeSlide - 1);
    startCarousel();
  },
  () => {
    setSlide(activeSlide + 1);
    startCarousel();
  }
);

caseDetail?.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-case]")) {
    closeCaseDetail();
    return;
  }

  if (event.target.closest("[data-detail-prev]")) {
    setDetailSlide(activeDetailSlide - 1);
    startDetailCarousel();
  }

  if (event.target.closest("[data-detail-next]")) {
    setDetailSlide(activeDetailSlide + 1);
    startDetailCarousel();
  }
});

setupSwipeNavigation(
  caseDetail,
  () => {
    if (window.matchMedia("(max-width: 720px)").matches) return;
    setDetailSlide(activeDetailSlide - 1);
    startDetailCarousel();
  },
  () => {
    if (window.matchMedia("(max-width: 720px)").matches) return;
    setDetailSlide(activeDetailSlide + 1);
    startDetailCarousel();
  },
  ".detail-carousel"
);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langBtn));
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearTimeout(carouselTimer);
    return;
  }

  startCarousel();
});

setLanguage(currentLang);
setupReveal();
protectContent();
setupDetailReturnSwipe();
startCarousel();
