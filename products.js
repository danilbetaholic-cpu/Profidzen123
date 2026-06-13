// ============================================================
//  ТОВАРЫ И НАСТРОЙКИ МАГАЗИНА (цены в BYN)
//  Менять можно здесь ИЛИ через админ-панель (admin.html)
// ============================================================

window.SHOP_CONFIG = {
  shopName: "TechPro",
  currency: "BYN",
  // bePaid «единый домен»: при true сайт игнорирует внешние фото-рендеры (apple.com)
  // и показывает только локальные фото (img/) и фирменные SVG-иллюстрации.
  // Включите ПЕРЕД боевым запуском на своём .by-домене.
  localImagesOnly: false,
  // Показывать ссылки на свои соцсети (Instagram и т.п.).
  // Это ВАШИ официальные аккаунты — bePaid обычно их допускает.
  // Если банк потребует строгий «единый домен без внешних ссылок» —
  // поставьте false, и все ссылки на соцсети скроются автоматически.
  showSocial: true,
  // Контакты для плавающей кнопки связи (впишите реальные):
  contacts: {
    telegram: "https://t.me/",        // ссылка на ваш Telegram
    whatsapp: "",                      // например "https://wa.me/375291234567"
    phone: "+375000000000",            // для кнопки звонка
    instagram: "https://www.instagram.com/techpro.belarus"  // основной Instagram
  },
  // Пароль админки хранится в виде SHA-256 хеша — в коде сайта
  // самого пароля нет. Текущий пароль: admin123 — ОБЯЗАТЕЛЬНО смените:
  // войдите в админку → кнопка «Сменить пароль» → вставьте новую строку сюда.
  adminPasswordHash: "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
  payment: {
    // 'demo'   — имитация (сайт работает, оплата понарошку)
    // 'bepaid' — оплата через bePaid: укажите ниже адрес воркера
    // 'link'   — готовая платёжная ссылка из кабинета bePaid
    mode: "demo",

    // Адрес вашего Cloudflare Worker (см. worker.js):
    // например "https://istore-pay.username.workers.dev"
    bepaidTokenUrl: "",

    paymentLink: ""
  }
};

window.SHOP_CATEGORIES = [
  ["iphone", "iPhone"],
  ["ipad",   "iPad"],
  ["mac",    "Mac"],
  ["watch",  "Watch"],
  ["audio",  "AirPods"],
  ["home",   "ТВ и дом"],
  ["acc",    "Аксессуары"],
  ["sale",   "Акции"],
  ["all",    "Все"],
  ["used",   "Б/У техника"]
];

// Варианты SIM: [название, наценка/скидка к цене]
// −0.06 = на 6% дешевле, +0.04 = на 4% дороже. Меняйте свободно.
// ---------- БЛОК «МЫ В INSTAGRAM» ----------
// Вставьте сюда ссылки на СВОИ фото (отзывы, упаковка, довольные клиенты).
// Пустой массив = показываются фирменные плейсхолдеры TechPro.
// ---------- ОТЗЫВЫ ----------
// source: "site" — отзыв на сайте, "instagram" — из Instagram, "telegram" — из Telegram
window.SHOP_INSTAGRAM = {
  reviews: "1 248 отзывов",
  rating: "4.92",
  showCount: 10,          // сколько отзывов показывать за раз
  rotate: true,           // перемешивать пул при каждом заходе
  // ПУЛ ОТЗЫВОВ: при каждом открытии сайта показывается случайная «пачка».
  cards: [
    { name: "Алексей М.",  city: "Минск",     source: "site",      rating: 5,   text: "Заказал iPhone 17 Pro, привезли в тот же день. Всё оригинальное, проверили серийник при мне. Рекомендую!" },
    { name: "Дарья К.",    city: "Гомель",    source: "instagram", rating: 4.5, text: "Брала MacBook Air, помогли перенести данные со старого ноута. Доставка чуть задержалась, но в целом довольна." },
    { name: "Сергей П.",   city: "Минск",     source: "telegram",  rating: 5,   text: "Купил Apple Watch Ultra, цена ниже чем у других, гарантия на месте. Доставка быстрая." },
    { name: "Ольга В.",    city: "Брест",     source: "site",      rating: 4.5, text: "Заказывала AirPods Pro, всё пришло в плёнке, чек и гарантия. Хотелось бы больше расцветок в наличии." },
    { name: "Иван Т.",     city: "Витебск",   source: "instagram", rating: 5,   text: "Взял б/у iPhone 16 Pro как новый — реально без единой царапины, батарея 99%. Честный магазин." },
    { name: "Марина Л.",   city: "Минск",     source: "telegram",  rating: 5,   text: "Понравилось, что всё прозрачно: цены, состояние, гарантия. Консультант ответил на все вопросы." },
    { name: "Дмитрий К.",  city: "Гродно",    source: "site",      rating: 5,   text: "Долго выбирал, где брать iPhone 17. Здесь самая низкая цена и без всяких рассрочек. Привезли на следующий день." },
    { name: "Екатерина С.",city: "Минск",     source: "instagram", rating: 5,   text: "Купила iPad Air для учёбы, помогли с выбором памяти и аксессуарами. Всё запечатано, гарантия есть." },
    { name: "Артём В.",    city: "Могилёв",   source: "telegram",  rating: 4.5, text: "Брал AirPods Pro 2. Звук отличный, всё ок. Единственное — хотелось чуть быстрее доставку в область." },
    { name: "Юлия Н.",     city: "Минск",     source: "site",      rating: 5,   text: "Очень довольна Apple Watch Series 10. Настроили прямо при получении, показали как пользоваться. Спасибо!" },
    { name: "Павел Р.",    city: "Брест",     source: "instagram", rating: 5,   text: "Взял б/у iPhone 14 Pro в идеале. Состояние честно описано, батарея как заявлено. Рекомендую за честность." },
    { name: "Анна Ж.",     city: "Витебск",   source: "telegram",  rating: 5,   text: "Заказывала чехол и зарядку MagSafe, всё оригинал. Приятно, что мелочи тоже привозят быстро." },
    { name: "Виктор Л.",   city: "Гомель",    source: "site",      rating: 4.5, text: "MacBook Pro M4 — мощь. Цена приятно удивила. Немного ждал доставку, но это мелочь на фоне сервиса." },
    { name: "Наталья Б.",  city: "Минск",     source: "instagram", rating: 5,   text: "Меняла старый телефон по trade-in, оценили честно, доплата вышла небольшая. Очень удобно!" },
    { name: "Кирилл М.",   city: "Гродно",    source: "telegram",  rating: 5,   text: "iPhone 17 Pro Max в оранжевом титане — огонь. Проверили всё при мне, дали чек и гарантию. Топ." },
    { name: "Светлана Д.", city: "Минск",     source: "site",      rating: 5,   text: "Заказывала маме iPhone 16 — простой и понятный. Менеджер всё объяснил без навязывания. Спасибо большое!" },
    { name: "Олег Т.",     city: "Бобруйск",  source: "instagram", rating: 4.5, text: "Купил iPad Pro. Всё отлично, придраться не к чему. Хотелось бы пункт самовывоза поближе." },
    { name: "Татьяна К.",  city: "Минск",     source: "telegram",  rating: 5,   text: "Очень вежливые ребята, ответили на кучу моих вопросов про память и eSIM. Купила iPhone 17, всё работает." },
    { name: "Андрей С.",   city: "Пинск",     source: "site",      rating: 5,   text: "Брал AirPods Max. Оригинал 100%, серийник пробивается в Apple. Доставка в область быстрее, чем ожидал." },
    { name: "Вероника П.", city: "Минск",     source: "instagram", rating: 5,   text: "Долго не решалась заказывать технику онлайн, но тут всё прозрачно. iPhone 15 пришёл идеальный." },
    { name: "Максим Г.",   city: "Орша",      source: "telegram",  rating: 4.5, text: "Apple Watch SE для бега — то что надо. Всё хорошо, только хотелось бы больше ремешков в наличии." },
    { name: "Ирина В.",    city: "Минск",     source: "site",      rating: 5,   text: "Заказала iPhone 17 Pro и чехол, собрали в один заказ, привезли вечером. Сервис на уровне Apple Store." },
    { name: "Денис Ф.",    city: "Жлобин",    source: "instagram", rating: 5,   text: "Взял б/у iPhone 13 Pro Max. Состояние супер, цена ниже рынка. Спасибо за честное описание!" },
    { name: "Алина Р.",    city: "Минск",     source: "telegram",  rating: 5,   text: "Покупала iPad для ребёнка, помогли с настройкой родительского контроля прямо при получении. Класс!" }
  ]
};

window.SIM_OPTIONS = [
  ["Только eSIM", -0.06],
  ["eSIM + физ. SIM", 0],
  ["2 физ. SIM (Китай)", 0.04]
];
window.SIM_DEFAULT = "eSIM + физ. SIM";

// ---------- ДОСТАВКА (редактируйте свободно) ----------
// freeFrom — сумма заказа, от которой доставка бесплатна (BYN).
// byTariff — стоимость по тарифам перевозчика, оплачивается при получении.
window.SHOP_DELIVERY = {
  freeFrom: 1000,
  methods: [
    { id:"pickup",     label:"Самовывоз",              sub:"Могилёв, ул. Кедровая 13",                     cost:0 },
    { id:"courier",    label:"Курьер по Могилёву",     sub:"в день заказа",                                cost:15 },
    { id:"europochta", label:"Европочта по Беларуси",  sub:"по тарифам перевозчика, оплата при получении", byTariff:true },
    { id:"belpochta",  label:"Белпочта по Беларуси",   sub:"по тарифам перевозчика, оплата при получении", byTariff:true }
  ]
};

// ---------- НОВОСТИ (редактируйте свободно) ----------
window.SHOP_NEWS = [
  { date: "10 июня 2026", tag: "Событие",
    title: "WWDC 2026: Apple представила iOS 27",
    text: "Новый дизайн Liquid Glass 2.0, умные функции Apple Intelligence на русском языке и переработанная Siri. Обновление выйдет осенью — все iPhone из нашего каталога его получат бесплатно." },
  { date: "2 июня 2026", tag: "Поступление",
    title: "iPhone 17 Pro Max снова в наличии",
    text: "Привезли все цвета, включая титановый оранжевый. Память от 256 ГБ до 2 ТБ, любые варианты SIM — забирайте сегодня с доставкой по Могилёву в день заказа или по Беларуси." },
  { date: "25 мая 2026", tag: "Новинка",
    title: "AirTag 2-го поколения уже у нас",
    text: "Динамик на 50% громче, точный поиск работает в 1,5 раза дальше. Идеальный способ не терять ключи, сумку или чемодан этим летом." },
  { date: "18 мая 2026", tag: "Акция",
    title: "Снижены цены на технику Apple",
    text: "Обновили прайс: iPhone, iPad и Mac стали доступнее. Загляните во вкладку «Акции» — там собраны самые интересные предложения." }
];

// ---------- ПРЕИМУЩЕСТВА ПО КАТЕГОРИЯМ (показываются в карточке товара) ----------
window.CAT_BENEFITS = {
  iphone: ["Официальная гарантия 12 месяцев","Проверка по серийному номеру при вас","Полный комплект: коробка, кабель, документация","Бесплатная настройка, перенос данных со старого телефона","Поддержка Apple Intelligence и обновлений iOS на годы вперёд","Доставка по Могилёву в день заказа, по Беларуси — бесплатно от 1000 BYN"],
  used:   ["Гарантия 6 месяцев на аппарат","Диагностика по 40 пунктам перед продажей","Реальная ёмкость АКБ указана честно","Аппарат не в ремонте: оригинальные запчасти","Обмен в течение 14 дней, если что-то не так","Доставка по Могилёву в день заказа, по Беларуси — бесплатно от 1000 BYN"],
  ipad:   ["Официальная гарантия 12 месяцев","Полный комплект и проверка при получении","Бесплатная настройка и перенос данных","Поддержка Apple Pencil и клавиатур","Доставка по Беларуси 1–2 дня"],
  mac:    ["Официальная гарантия 12 месяцев","Помощь с переездом с Windows или старого Mac","Русская раскладка клавиатуры","Установка нужных программ при покупке","Доставка по Беларуси 1–2 дня"],
  watch:  ["Официальная гарантия 12 месяцев","Подбор размера ремешка при получении","Активация и привязка к iPhone в подарок","Доставка по Могилёву в день заказа, по Беларуси — бесплатно от 1000 BYN"],
  audio:  ["Официальная гарантия 12 месяцев","Проверка звука и шумоподавления при вас","Оригинал — серийный номер проверяется на сайте Apple","Доставка по Могилёву в день заказа, по Беларуси — бесплатно от 1000 BYN"],
  home:   ["Официальная гарантия 12 месяцев","Помощь с настройкой и подключением","Оригинал с проверкой по серийному номеру","Доставка по Беларуси 1–2 дня"],
  acc:    ["Оригинал Apple — не реплика","Гарантия 12 месяцев","Подходит к вашей модели — подскажем при заказе","Доставка вместе с основным заказом бесплатно"]
};

// Стоковые фото не используются: каталог показывает реальные фото (img/) или
// фирменные SVG-иллюстрации — без внешних ссылок (требование bePaid «единый домен»).

// memory: [метка, доплата] · colors: [название, hex] · photo:"img/..." (своё фото)
window.DEFAULT_PRODUCTS = [

  // ================= iPHONE =================
  { id:1, cat:"iphone", name:"iPhone 17 Pro Max", price:3850, oldPrice:4050, badge:"Хит", left:7,
    img:"https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    gradient:["#ff9a3c","#ff5e62"], sim:true,
    colors:[["Cosmic Orange","#e8762e"],["Deep Blue","#1f2a44"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900],["2 ТБ",1800]],
    desc:"Чип A19 Pro, камеры 48 Мп ×3, дисплей 6,9″",
    full:"Максимальный iPhone: самая большая батарея в истории iPhone, телеобъектив с 8-кратным оптическим зумом и система охлаждения с испарительной камерой — мощность не падает даже под нагрузкой.",
    specs:["Дисплей 6,9″ ProMotion 120 Гц, 3000 нит","Чип Apple A19 Pro","Камеры 48+48+48 Мп, зум 8×","Селфи 18 Мп Center Stage","До 39 часов видео","Ceramic Shield 2"] },

  { id:2, cat:"iphone", name:"iPhone 17 Pro", price:3220, oldPrice:null, badge:"Новинка",
    img:"https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
    gradient:["#4e7cff","#2b4bcf"], sim:true,
    colors:[["Cosmic Orange","#e8762e"],["Deep Blue","#1f2a44"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Чип A19 Pro, тройная камера 48 Мп, дисплей 6,3″",
    full:"Вся мощность Pro в компактном корпусе: тройная камера 48 Мп, съёмка ProRes RAW и рекордная автономность.",
    specs:["Дисплей 6,3″ ProMotion 120 Гц","Чип Apple A19 Pro","Камеры 48+48+48 Мп, зум 8×","До 33 часов видео","USB-C 3.2"] },

  { id:3, cat:"iphone", name:"iPhone 17 Air", price:2660, oldPrice:null, badge:"Самый тонкий",
    img:"https://www.apple.com/v/iphone-air/f/images/meta/iphone-air_overview__dwhg6l117yqa_og.png",
    gradient:["#7fd6ff","#4a9fe8"], sim:true,
    colors:[["Sky Blue","#b8d3e8"],["Light Gold","#e6d8b8"],["Cloud White","#eceae6"],["Space Black","#2a2c31"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Толщина 5,6 мм, чип A19 Pro, дисплей 6,5″",
    full:"Самый тонкий iPhone в истории — всего 5,6 мм и 165 граммов. Титановая рама и полноценный чип A19 Pro.",
    specs:["Толщина 5,6 мм, 165 г","Дисплей 6,5″ ProMotion 120 Гц","Чип Apple A19 Pro","Камера 48 Мп Fusion","Титановая рама"] },

  { id:4, cat:"iphone", name:"iPhone 17", price:2100, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/iphone-17/f/images/meta/iphone-17_overview__cg0rlzmbhl7m_og.png",
    gradient:["#c9b6e4","#8e6fe8"], sim:true,
    colors:[["Lavender","#c9b6e4"],["Mist Blue","#b5c9dd"],["Sage","#b9c4a8"],["Black","#1d1e22"],["White","#f2f2ef"]],
    memory:[["256 ГБ",0],["512 ГБ",450]],
    desc:"Чип A19, камера 48 Мп, дисплей 6,3″ 120 Гц",
    full:"Золотая середина линейки: впервые в базовой модели — дисплей ProMotion 120 Гц и стартовые 256 ГБ памяти.",
    specs:["Дисплей 6,3″ ProMotion 120 Гц","Чип Apple A19","Камеры 48+48 Мп","Селфи 18 Мп Center Stage","До 30 часов видео"] },

  { id:5, cat:"iphone", name:"iPhone 17e", price:1750, oldPrice:1840, badge:null,
    img:"https://www.apple.com/v/iphone-17e/a/images/overview/welcome/hero_endframe__eafizd06t6qa_large.jpg",
    gradient:["#5f6b7a","#2c3440"], sim:true,
    colors:[["Black","#1d1e22"],["White","#f2f2ef"]],
    memory:[["128 ГБ",0],["256 ГБ",250],["512 ГБ",700]],
    desc:"Чип A19, Face ID, дисплей 6,1″ OLED",
    full:"Самый доступный вход в экосистему Apple: флагманский чип A19, OLED-дисплей и поддержка Apple Intelligence.",
    specs:["Дисплей 6,1″ Super Retina XDR","Чип Apple A19","Камера 48 Мп 2-в-1","Face ID","До 26 часов видео"] },

  { id:6, cat:"iphone", name:"iPhone 16 Pro Max", price:2890, oldPrice:3040, badge:"Выгодно", left:5,
    img:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg",
    gradient:["#bfa98a","#7a6a4f"], sim:true,
    colors:[["Desert Titanium","#bfa98a"],["Natural Titanium","#c2bcb2"],["Белый титан","#e8e6e2"],["Black Titanium","#3a3c40"]],
    memory:[["256 ГБ",0],["512 ГБ",400],["1 ТБ",800]],
    desc:"Новый, прошлогодний флагман — лучшая цена за титановый Pro Max",
    full:"Совершенно новый iPhone 16 Pro Max в плёнке: титановый корпус, большой дисплей 6,9″, камера 48 Мп с 5-кратным зумом и кнопка Camera Control. Та же премиальная линейка Pro — на треть доступнее новинки.",
    specs:["Дисплей 6,9″ ProMotion 120 Гц","Чип Apple A18 Pro","Камеры 48+48+12 Мп, зум 5×","Кнопка Camera Control","До 33 часов видео","Титановый корпус"] },

  { id:7, cat:"iphone", name:"iPhone 16 Pro", price:2390, oldPrice:null, badge:null,
    img:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg",
    gradient:["#bfa98a","#7a6a4f"], sim:true,
    colors:[["Desert Titanium","#bfa98a"],["Natural Titanium","#c2bcb2"],["Белый титан","#e8e6e2"],["Black Titanium","#3a3c40"]],
    memory:[["128 ГБ",0],["256 ГБ",250],["512 ГБ",550],["1 ТБ",900]],
    desc:"Новый титановый Pro прошлого поколения — отличная цена",
    full:"Совершенно новый iPhone 16 Pro: титановый корпус, дисплей 6,3″ ProMotion, камера 48 Мп с 5-кратным зумом и кнопка Camera Control.",
    specs:["Дисплей 6,3″ ProMotion 120 Гц","Чип Apple A18 Pro","Камеры 48+48+12 Мп, зум 5×","Кнопка Camera Control","Титановый корпус"] },

  { id:8, cat:"iphone", name:"iPhone 16 Plus", price:1990, oldPrice:null, badge:null,
    img:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg",
    gradient:["#5a6cff","#2b3bbf"], sim:true,
    colors:[["Ultramarine","#4a5ccf"],["Бирюзовый","#6fb8b0"],["Pink","#e8a8bc"],["White","#f2f2ef"],["Black","#1d1e22"]],
    memory:[["128 ГБ",0],["256 ГБ",250],["512 ГБ",550]],
    desc:"Большой экран 6,7″ и батарея на весь день — новый",
    full:"Новый iPhone 16 Plus: большой дисплей 6,7″, чип A18 с поддержкой Apple Intelligence, кнопка Camera Control и лучшая в линейке автономность.",
    specs:["Дисплей 6,7″ Super Retina XDR","Чип Apple A18","Камера 48 Мп Fusion","Кнопка Camera Control","До 27 часов видео"] },

  { id:9, cat:"iphone", name:"iPhone 16", price:1690, oldPrice:null, badge:null,
    img:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg",
    gradient:["#5a6cff","#2b3bbf"], sim:true,
    colors:[["Ultramarine","#4a5ccf"],["Бирюзовый","#6fb8b0"],["Pink","#e8a8bc"],["White","#f2f2ef"],["Black","#1d1e22"]],
    memory:[["128 ГБ",0],["256 ГБ",250],["512 ГБ",550]],
    desc:"Новый, с Apple Intelligence и Camera Control",
    full:"Новый iPhone 16: чип A18, поддержка Apple Intelligence, камера 48 Мп и кнопка Camera Control — всё главное по разумной цене.",
    specs:["Дисплей 6,1″ Super Retina XDR","Чип Apple A18","Камера 48 Мп Fusion","Кнопка Camera Control","До 22 часов видео"] },

  { id:10, cat:"iphone", name:"iPhone 15", price:1390, oldPrice:null, badge:null,
    img:"https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/tile/Apple-iPhone-15-lineup-hero-230912.jpg.og.jpg",
    gradient:["#e8a8bc","#b86a88"], sim:true,
    colors:[["Pink","#e8c4d0"],["Blue","#b5c9dd"],["Green","#c4d4c0"],["Жёлтый","#e8e0b0"],["Black","#1d1e22"]],
    memory:[["128 ГБ",0],["256 ГБ",220],["512 ГБ",500]],
    desc:"Новый, самый доступный iPhone с Dynamic Island",
    full:"Новый iPhone 15: Dynamic Island, камера 48 Мп и USB-C. Проверенная классика по самой приятной цене среди новых iPhone.",
    specs:["Дисплей 6,1″ Super Retina XDR","Чип A16 Bionic","Камера 48 Мп","Dynamic Island","USB-C"] },

  // ================= Б/У iPHONE =================
  { id:101, cat:"used", name:"iPhone 17 Pro Max", price:3080, oldPrice:null, badge:"Как новый",
    photo:"img/iphone17-promax-orange-1.jpg",
    gallery:["img/iphone17-promax-orange-1.jpg","img/iphone17-promax-orange-2.jpg","img/iphone17-promax-orange-3.jpg","img/iphone17-promax-orange-4.jpg"],
    img:"https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-cosmic-orange-250909_inline.jpg.large.jpg",
    condition:"Как новый", gradient:["#ff9a3c","#ff5e62"], sim:true,
    colors:[["Cosmic Orange","#e8762e"],["Deep Blue","#1f2a44"]],
    memory:[["256 ГБ",0],["512 ГБ",350]],
    desc:"Состояние 10/10, АКБ 98%+, полный комплект",
    full:"Аппарат в идеальном состоянии: без царапин и сколов, аккумулятор от 98%. Проверка по 40 пунктам, гарантия 6 месяцев.",
    specs:["Состояние 10/10 «как новый»","АКБ 98–100%","Полный комплект, коробка","Гарантия 6 месяцев"] },

  { id:102, cat:"used", name:"iPhone 17 Pro", price:2580, oldPrice:null, badge:"Как новый",
    img:"https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
    condition:"Как новый", gradient:["#4e7cff","#2b4bcf"], sim:true,
    colors:[["Deep Blue","#1f2a44"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",350]],
    desc:"Состояние 10/10, АКБ 97%+, комплект",
    full:"Витринный образец или аппарат с минимальным пробегом. Внешне неотличим от нового, гарантия 6 месяцев.",
    specs:["Состояние 10/10","АКБ 97–100%","Полный комплект","Гарантия 6 месяцев"] },

  { id:103, cat:"used", name:"iPhone 17 Pro Max (восст.)", price:2690, oldPrice:null, badge:"Восстановленный",
    img:"https://www.apple.com/newsroom/images/2025/09/apple-unveils-iphone-17-pro-and-iphone-17-pro-max/article/Apple-iPhone-17-Pro-color-lineup-250909_inline.jpg.large.jpg",
    condition:"Восстановленный", gradient:["#8a93a6","#3a4150"], sim:true,
    colors:[["Silver","#d6dade"],["Deep Blue","#1f2a44"]],
    memory:[["256 ГБ",0],["512 ГБ",350]],
    desc:"Официально восстановлен: новый корпус и АКБ",
    full:"Профессионально восстановленный флагман: новый аккумулятор, новый корпус, оригинальные комплектующие. Работает как новый — стоит заметно дешевле.",
    specs:["Новый аккумулятор (100%)","Новый корпус и стекло","Оригинальные запчасти","Гарантия 6 месяцев"] },

  { id:104, cat:"used", name:"iPhone 17", price:1680, oldPrice:null, badge:"Как новый",
    img:"https://www.apple.com/v/iphone-17/f/images/meta/iphone-17_overview__cg0rlzmbhl7m_og.png",
    condition:"Как новый", gradient:["#c9b6e4","#8e6fe8"], sim:true,
    colors:[["Lavender","#c9b6e4"],["Black","#1d1e22"]],
    memory:[["256 ГБ",0]],
    desc:"Состояние 10/10, АКБ 98%+",
    full:"Практически новый iPhone 17 ощутимо дешевле. Полная проверка, гарантия 6 месяцев.",
    specs:["Состояние 10/10","АКБ 98–100%","Гарантия 6 месяцев"] },

  { id:105, cat:"used", name:"iPhone 16 Pro", price:1890, oldPrice:null, badge:"Как новый",
    img:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg",
    condition:"Как новый", gradient:["#bfa98a","#7a6a4f"], sim:true,
    colors:[["Natural Titanium","#bfa98a"],["Black Titanium","#3a3c40"]],
    memory:[["128 ГБ",0],["256 ГБ",200],["512 ГБ",450]],
    desc:"Прошлогодний флагман в идеальном состоянии",
    full:"Флагман 2025 года: титановый корпус, камера 48 Мп, кнопка Camera Control. АКБ от 95%, гарантия 6 месяцев.",
    specs:["Дисплей 6,3″ ProMotion","Чип A18 Pro","АКБ от 95%","Гарантия 6 месяцев"] },

  { id:106, cat:"used", name:"iPhone 16", price:1090, oldPrice:null, badge:"Восстановленный",
    img:"https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg",
    condition:"Восстановленный", gradient:["#5a6cff","#2b3bbf"], sim:true,
    colors:[["Ultramarine","#4a5ccf"],["Black","#1d1e22"]],
    memory:[["128 ГБ",0],["256 ГБ",200]],
    desc:"Новый АКБ и корпус, гарантия 6 месяцев",
    full:"Восстановленный iPhone 16: новый аккумулятор, новый корпус. Лучшее соотношение цены и возможностей.",
    specs:["Новый аккумулятор","Новый корпус","Чип A18","Гарантия 6 месяцев"] },

  { id:117, cat:"used", name:"iPhone 16 Pro Max", price:2190, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#bfb8ad","#8a8378"], sim:true,
    colors:[["Natural Titanium","#bfb8ad"]],
    memory:[["256 ГБ",0]],
    img:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg",
    photo:"img/iphone16-promax-natural-1.jpg",
    gallery:["img/iphone16-promax-natural-1.jpg","img/iphone16-promax-natural-2.jpg","img/iphone16-promax-natural-3.jpg","img/iphone16-promax-natural-4.jpg"],
    desc:"Natural Titanium, eSIM, АКБ 93%",
    full:"iPhone 16 Pro Max 256 ГБ в цвете Natural Titanium, версия eSIM. Состояние «как новый», аккумулятор 93%. Дисплей 6,9″ ProMotion 120 Гц, кнопка Camera Control, титановый корпус. Гарантия 6 месяцев.",
    specs:["Дисплей 6,9″ ProMotion 120 Гц","Чип A18 Pro","Камеры 48+48+12 Мп, зум 5×","Кнопка Camera Control","АКБ 93%","Только eSIM","Гарантия 6 месяцев"] },

  { id:116, cat:"used", name:"iPhone 16 Pro Max", price:2290, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#e8e6e2","#c2bcb2"], sim:true,
    colors:[["White Titanium","#e8e6e2"]],
    memory:[["256 ГБ",0]],
    img:"https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg",
    photo:"img/iphone16-promax-white-1.jpg",
    gallery:["img/iphone16-promax-white-1.jpg","img/iphone16-promax-white-2.jpg","img/iphone16-promax-white-3.jpg","img/iphone16-promax-white-4.jpg"],
    desc:"White Titanium, eSIM, АКБ 98%, циклов 191",
    full:"iPhone 16 Pro Max 256 ГБ в цвете White Titanium, версия eSIM. Состояние «как новый»: аккумулятор 98%, всего 191 цикл, выпущен в ноябре 2024, первое включение — январь 2025. Дисплей 6,9″ ProMotion 120 Гц, кнопка Camera Control, титановый корпус. Гарантия 6 месяцев.",
    specs:["Дисплей 6,9″ ProMotion 120 Гц","Чип A18 Pro","Камеры 48+48+12 Мп, зум 5×","Кнопка Camera Control","АКБ 98% (191 цикл)","Только eSIM","Гарантия 6 месяцев"] },

  { id:114, cat:"used", name:"iPhone 14 Pro Max", price:1790, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#5a4e7a","#332b50"], sim:true,
    colors:[["Deep Purple","#5a4e7a"]],
    memory:[["128 ГБ",0],["256 ГБ",200],["512 ГБ",500]],
    photo:"img/iphone14-promax-purple-1.jpg",
    gallery:["img/iphone14-promax-purple-1.jpg","img/iphone14-promax-purple-2.jpg","img/iphone14-promax-purple-3.jpg","img/iphone14-promax-purple-4.jpg"],
    desc:"Deep Purple, Dynamic Island, полный комплект",
    full:"iPhone 14 Pro Max в цвете Deep Purple, состояние «как новый», в полном комплекте с коробкой. Dynamic Island, дисплей 6,7″ ProMotion 120 Гц с Always-On, тройная камера Pro 48 Мп. Гарантия 6 месяцев.",
    specs:["Дисплей 6,7″ ProMotion 120 Гц, Always-On","Dynamic Island","Чип A16 Bionic","Камера 48 Мп Pro","Спутниковый SOS","Гарантия 6 месяцев"] },

  { id:108, cat:"used", name:"iPhone 13 Pro Max", price:1490, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#a9c4e0","#5a7da0"], sim:true,
    colors:[["Sierra Blue","#9fc0dd"]],
    memory:[["256 ГБ",0]],
    photo:"img/iphone13-promax-blue-1.jpg",
    gallery:["img/iphone13-promax-blue-1.jpg","img/iphone13-promax-blue-2.jpg","img/iphone13-promax-blue-3.jpg"],
    desc:"Состояние 10/10, цвет Sierra Blue, АКБ 90%+",
    full:"iPhone 13 Pro Max 256 ГБ в цвете Sierra Blue, состояние «как новый» — без царапин и сколов. Дисплей 6,7″ ProMotion 120 Гц, тройная камера Pro, ёмкость аккумулятора от 90%. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,7″ ProMotion 120 Гц","Чип A15 Bionic","Тройная камера Pro 12 Мп","АКБ от 90%","Полный комплект","Гарантия 6 месяцев"] },

  { id:126, cat:"used", name:"iPhone 16 Pro Max", price:2240, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#c9a86a","#9a7b44"], sim:true,
    colors:[["Desert Titanium","#c9a86a"]],
    memory:[["256 ГБ",0]],
    photo:"img/iphone16-promax-desert-1.jpg",
    gallery:["img/iphone16-promax-desert-1.jpg","img/iphone16-promax-desert-2.jpg","img/iphone16-promax-desert-3.jpg","img/iphone16-promax-desert-4.jpg"],
    desc:"Состояние 10/10, цвет Desert Titanium, АКБ 95%+",
    full:"iPhone 16 Pro Max 256 ГБ в цвете Desert Titanium, состояние «как новый» — без царапин и сколов. Титановый корпус, дисплей 6,9″ ProMotion 120 Гц, кнопка Camera Control, камера 48 Мп, USB-C. Ёмкость аккумулятора от 95%, полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,9″ ProMotion 120 Гц","Чип A18 Pro","Камера 48 Мп Pro + Camera Control","Титановый корпус","USB-C","АКБ от 95%","Гарантия 6 месяцев"] },

  { id:109, cat:"used", name:"iPhone 12 Pro Max", price:1090, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#e6d2a8","#c2a36a"], sim:true,
    colors:[["Gold","#e6cfa0"]],
    memory:[["128 ГБ",0],["256 ГБ",150]],
    photo:"img/iphone12-promax-gold-1.jpg",
    gallery:["img/iphone12-promax-gold-1.jpg","img/iphone12-promax-gold-2.jpg","img/iphone12-promax-gold-3.jpg","img/iphone12-promax-gold-4.jpg","img/iphone12-promax-gold-5.jpg"],
    desc:"Состояние 10/10, золотой, АКБ 88%+",
    full:"iPhone 12 Pro Max в золотом цвете, состояние «как новый». Дисплей 6,7″ Super Retina XDR, тройная камера Pro с LiDAR, нержавеющая сталь по периметру. Полная проверка по 40 пунктам, гарантия 6 месяцев.",
    specs:["Дисплей 6,7″ Super Retina XDR","Чип A14 Bionic","Тройная камера Pro + LiDAR","АКБ от 88%","Стальная рамка","Гарантия 6 месяцев"] },

  { id:110, cat:"used", name:"iPhone 12 Pro Max Dual SIM", price:1190, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#3a6ea8","#1e3f66"], sim:true,
    colors:[["Pacific Blue","#3a6ea8"]],
    memory:[["128 ГБ",0]],
    photo:"img/iphone12-promax-blue-1.jpg",
    gallery:["img/iphone12-promax-blue-1.jpg","img/iphone12-promax-blue-2.jpg"],
    desc:"Dual SIM, цвет Pacific Blue, полный комплект",
    full:"iPhone 12 Pro Max с двумя физическими SIM (Dual SIM), 128 ГБ, цвет Pacific Blue. Состояние «как новый», в полном комплекте с коробкой. Дисплей 6,7″ Super Retina XDR, тройная камера Pro с LiDAR. Гарантия 6 месяцев.",
    specs:["Две физические SIM (Dual SIM)","Дисплей 6,7″ Super Retina XDR","Чип A14 Bionic","Тройная камера Pro + LiDAR","Полный комплект, коробка","Гарантия 6 месяцев"] },

  { id:115, cat:"used", name:"iPhone 12 Pro Max", price:1290, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#e8e6e2","#bcbcbc"], sim:true,
    colors:[["Silver","#e8e6e2"]],
    memory:[["512 ГБ",0]],
    photo:"img/iphone12-promax-silver-1.jpg",
    gallery:["img/iphone12-promax-silver-1.jpg","img/iphone12-promax-silver-2.jpg","img/iphone12-promax-silver-3.jpg"],
    desc:"512 ГБ, цвет Silver, полный комплект",
    full:"iPhone 12 Pro Max 512 ГБ в цвете Silver, состояние «как новый», в полном комплекте с коробкой. Максимальный объём памяти, дисплей 6,7″ Super Retina XDR, тройная камера Pro с LiDAR. Гарантия 6 месяцев.",
    specs:["Память 512 ГБ","Дисплей 6,7″ Super Retina XDR","Чип A14 Bionic","Тройная камера Pro + LiDAR","Полный комплект, коробка","Гарантия 6 месяцев"] },

  { id:118, cat:"used", name:"iPhone 15", price:990, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#1d1e22","#3a3c40"], sim:true,
    colors:[["Black","#1d1e22"]],
    memory:[["128 ГБ",0]],
    photo:"img/iphone15-black-1.jpg",
    gallery:["img/iphone15-black-1.jpg"],
    desc:"Black, 128 ГБ, состояние 10/10",
    full:"iPhone 15 128 ГБ в чёрном цвете, состояние «как новый». Dynamic Island, дисплей 6,1″ Super Retina XDR, камера 48 Мп, USB-C. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ Super Retina XDR","Dynamic Island","Чип A16 Bionic","Камера 48 Мп","USB-C","Гарантия 6 месяцев"] },

  { id:119, cat:"used", name:"iPhone 15", price:990, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#b5c9dd","#7a93b8"], sim:true,
    colors:[["Blue","#b5c9dd"]],
    memory:[["128 ГБ",0]],
    photo:"img/iphone15-blue-1.jpg",
    gallery:["img/iphone15-blue-1.jpg"],
    desc:"Blue, 128 ГБ, состояние 10/10",
    full:"iPhone 15 128 ГБ в голубом цвете, состояние «как новый». Dynamic Island, дисплей 6,1″ Super Retina XDR, камера 48 Мп, USB-C. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ Super Retina XDR","Dynamic Island","Чип A16 Bionic","Камера 48 Мп","USB-C","Гарантия 6 месяцев"] },

  { id:120, cat:"used", name:"iPhone 15", price:990, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#c4d4c0","#9ab098"], sim:true,
    colors:[["Green","#c4d4c0"]],
    memory:[["128 ГБ",0]],
    photo:"img/iphone15-green-1.jpg",
    gallery:["img/iphone15-green-1.jpg","img/iphone15-green-2.jpg","img/iphone15-green-3.jpg"],
    desc:"Green, 128 ГБ, состояние 10/10",
    full:"iPhone 15 128 ГБ в зелёном цвете, состояние «как новый». Dynamic Island, дисплей 6,1″ Super Retina XDR, камера 48 Мп, USB-C. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ Super Retina XDR","Dynamic Island","Чип A16 Bionic","Камера 48 Мп","USB-C","Гарантия 6 месяцев"] },

  { id:121, cat:"used", name:"iPhone 15", price:990, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#e8c4d0","#d09cb0"], sim:true,
    colors:[["Pink","#e8c4d0"]],
    memory:[["128 ГБ",0]],
    photo:"img/iphone15-pink-1.jpg",
    gallery:["img/iphone15-pink-1.jpg","img/iphone15-pink-2.jpg"],
    desc:"Pink, 128 ГБ, состояние 10/10",
    full:"iPhone 15 128 ГБ в розовом цвете, состояние «как новый». Dynamic Island, дисплей 6,1″ Super Retina XDR, камера 48 Мп, USB-C. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ Super Retina XDR","Dynamic Island","Чип A16 Bionic","Камера 48 Мп","USB-C","Гарантия 6 месяцев"] },

  { id:125, cat:"used", name:"iPhone 14 Pro", price:1390, oldPrice:null, badge:"Как новый", stock:"out",
    condition:"Как новый", gradient:["#e8e6e2","#bcbcbc"], sim:true,
    colors:[["Silver","#e8e6e2"]],
    memory:[["256 ГБ",0]],
    desc:"Silver, 256 ГБ — ожидаем поставку",
    full:"iPhone 14 Pro 256 ГБ в цвете Silver. Dynamic Island, дисплей 6,1″ ProMotion 120 Гц с Always-On, тройная камера Pro 48 Мп. Сейчас нет в наличии — ожидаем поставку, оставьте заявку и мы сообщим о поступлении.",
    specs:["Дисплей 6,1″ ProMotion 120 Гц, Always-On","Dynamic Island","Чип A16 Bionic","Камера 48 Мп Pro","Стальная рамка","Гарантия 6 месяцев"] },

  { id:124, cat:"used", name:"iPhone 14 Pro", price:1290, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#2a2c31","#4a4c52"], sim:true,
    colors:[["Space Black","#2a2c31"]],
    memory:[["128 ГБ",0],["256 ГБ",200]],
    photo:"img/iphone14-pro-black-1.jpg",
    gallery:["img/iphone14-pro-black-1.jpg","img/iphone14-pro-black-2.jpg"],
    desc:"Space Black, 128 ГБ, Dynamic Island, состояние 10/10",
    full:"iPhone 14 Pro 128 ГБ в цвете Space Black, состояние «как новый». Dynamic Island, дисплей 6,1″ ProMotion 120 Гц с Always-On, тройная камера Pro 48 Мп, нержавеющая сталь. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ ProMotion 120 Гц, Always-On","Dynamic Island","Чип A16 Bionic","Камера 48 Мп Pro","Стальная рамка","Гарантия 6 месяцев"] },

  { id:123, cat:"used", name:"iPhone 14", price:790, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#b5c9dd","#7a93b8"], sim:true,
    colors:[["Blue","#a9c4e0"]],
    memory:[["128 ГБ",0],["256 ГБ",150]],
    photo:"img/iphone14-blue-1.jpg",
    gallery:["img/iphone14-blue-1.jpg","img/iphone14-blue-2.jpg"],
    desc:"Blue, состояние 10/10, отличный выбор за свои деньги",
    full:"iPhone 14 в голубом цвете, состояние «как новый». Дисплей 6,1″ Super Retina XDR, двойная камера 12 Мп, чип A15 Bionic, аварийный спутниковый SOS. Полная проверка, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ Super Retina XDR","Чип A15 Bionic","Двойная камера 12 Мп","Аварийный SOS","Face ID","Гарантия 6 месяцев"] },

  { id:122, cat:"used", name:"iPhone 15 Plus", price:1190, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#1d1e22","#3a3c40"], sim:true,
    colors:[["Black","#1d1e22"],["Blue","#b5c9dd"],["Green","#c4d4c0"],["Pink","#e8c4d0"]],
    memory:[["128 ГБ",0]],
    photo:"img/iphone15-black-1.jpg",
    gallery:["img/iphone15-black-1.jpg","img/iphone15-blue-1.jpg","img/iphone15-green-1.jpg","img/iphone15-pink-1.jpg"],
    desc:"Большой экран 6,7″, 128 ГБ, состояние 10/10",
    full:"iPhone 15 Plus 128 ГБ, состояние «как новый». Большой дисплей 6,7″ Super Retina XDR, Dynamic Island, камера 48 Мп, USB-C и увеличенная батарея. Доступен в чёрном, голубом, зелёном и розовом. Гарантия 6 месяцев.",
    specs:["Дисплей 6,7″ Super Retina XDR","Dynamic Island","Чип A16 Bionic","Камера 48 Мп","Увеличенная батарея","USB-C","Гарантия 6 месяцев"] },

  { id:107, cat:"used", name:"iPhone 15", price:840, oldPrice:null, badge:"Восстановленный",
    img:"https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/tile/Apple-iPhone-15-lineup-hero-230912.jpg.og.jpg",
    condition:"Восстановленный", gradient:["#3d4356","#191c26"], sim:true,
    colors:[["Black","#1d1e22"],["Blue","#b5c9dd"]],
    memory:[["128 ГБ",0],["256 ГБ",180]],
    desc:"Самый доступный iPhone с Dynamic Island",
    full:"Проверенная классика: Dynamic Island, камера 48 Мп, USB-C. Полностью восстановлен, гарантия 6 месяцев.",
    specs:["Дисплей 6,1″ OLED","Чип A16 Bionic","Камера 48 Мп","Гарантия 6 месяцев"] },

  // ================= Б/У MAC =================
  { id:111, cat:"used", name:"MacBook Air 13 (M2)", price:1890, oldPrice:null, badge:"Как новый",
    img:"https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png",
    condition:"Как новый", gradient:["#2e3650","#141927"],
    colors:[["Midnight","#2e3650"],["Starlight","#e8dcc8"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",300]],
    desc:"Состояние 10/10, циклов АКБ меньше 50",
    full:"MacBook Air на чипе M2 в идеальном состоянии: без царапин, аккумулятор практически новый (до 50 циклов). Полная диагностика, гарантия 6 месяцев.",
    specs:["Дисплей 13,6″ Liquid Retina","Чип Apple M2","8/16 ГБ памяти","АКБ: до 50 циклов","Гарантия 6 месяцев"] },

  { id:112, cat:"used", name:"MacBook Pro 14 (M3 Pro)", price:3590, oldPrice:null, badge:"Как новый",
    img:"https://www.apple.com/v/macbook-pro/ax/images/meta/macbook-pro__difvbgz1plsi_og.png",
    condition:"Как новый", gradient:["#3d4356","#15171f"],
    colors:[["Space Black","#2a2c31"],["Silver","#d6dade"]],
    memory:[["512 ГБ",0],["1 ТБ",350]],
    desc:"Профессиональный ноутбук с дисплеем XDR — дешевле нового",
    full:"MacBook Pro 14 на M3 Pro в состоянии нового: дисплей XDR 120 Гц, 18 ГБ памяти. Проверен по всем пунктам, гарантия 6 месяцев.",
    specs:["Дисплей 14,2″ XDR 120 Гц","Чип Apple M3 Pro","18 ГБ памяти","АКБ от 95%","Гарантия 6 месяцев"] },

  { id:113, cat:"used", name:"Mac mini (M2)", price:990, oldPrice:null, badge:"Восстановленный",
    img:"https://www.apple.com/v/mac-mini/aa/images/meta/mac-mini__dvce2jrm11w2_og.jpg",
    condition:"Восстановленный", gradient:["#aab4c4","#5e6878"],
    memory:[["256 ГБ",0],["512 ГБ",250]],
    desc:"Самый доступный способ получить Mac",
    full:"Восстановленный Mac mini на чипе M2: полностью проверен, установлена свежая macOS. Подключите монитор и работайте.",
    specs:["Чип Apple M2","8 ГБ памяти","Thunderbolt 4, HDMI","Гарантия 6 месяцев"] },

  { id:127, cat:"used", name:"MacBook Pro 16″ (2021) M1 Pro", price:3290, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#d6dade","#a6abb2"],
    colors:[["Silver","#d6dade"]],
    memory:[["512 ГБ SSD",0]],
    photo:"img/macbook-pro16-m1pro-silver-1.jpg",
    gallery:["img/macbook-pro16-m1pro-silver-1.jpg"],
    desc:"M1 Pro · 32 ГБ · 512 ГБ · Silver · АКБ 92%",
    full:"MacBook Pro 16″ 2021 на чипе M1 Pro (16-ядерный GPU), 32 ГБ оперативной памяти и 512 ГБ SSD, цвет Silver. Состояние «как новый», ёмкость аккумулятора 92%. Дисплей 16,2″ Liquid Retina XDR 120 Гц. Полная диагностика, гарантия 6 месяцев.",
    specs:["Дисплей 16,2″ Liquid Retina XDR 120 Гц","Чип M1 Pro, 16-ядерный GPU","32 ГБ объединённой памяти","SSD 512 ГБ","АКБ 92%","Гарантия 6 месяцев"] },

  { id:128, cat:"used", name:"MacBook Pro 16″ (2021) M1 Max", price:3990, oldPrice:null, badge:"Как новый", left:1,
    condition:"Как новый", gradient:["#3a3c40","#1d1e22"],
    colors:[["Space Gray","#3a3c40"]],
    memory:[["1 ТБ SSD",0]],
    photo:"img/macbook-pro16-m1max-spacegray-1.jpg",
    gallery:["img/macbook-pro16-m1max-spacegray-1.jpg"],
    desc:"M1 Max 32-ядра · 32 ГБ · 1 ТБ · Space Gray · АКБ 86%",
    full:"MacBook Pro 16″ 2021 на топовом чипе M1 Max (32-ядерный GPU), 32 ГБ памяти и 1 ТБ SSD, цвет Space Gray. Состояние отличное, ёмкость аккумулятора 86%. Мощность для монтажа 4K, 3D и тяжёлых задач. Гарантия 6 месяцев.",
    specs:["Дисплей 16,2″ Liquid Retina XDR 120 Гц","Чип M1 Max, 32-ядерный GPU","32 ГБ объединённой памяти","SSD 1 ТБ","АКБ 86%","Гарантия 6 месяцев"] },

  { id:129, cat:"used", name:"MacBook Pro 13″ (2015) Core i5", price:790, oldPrice:null, badge:"Б/У", left:1,
    condition:"Б/У, хорошее", gradient:["#d6dade","#a6abb2"],
    colors:[["Silver","#d6dade"]],
    memory:[["256 ГБ SSD",0]],
    photo:"img/macbook-pro13-2015-silver-1.jpg",
    gallery:["img/macbook-pro13-2015-silver-1.jpg"],
    desc:"Intel i5 · 16 ГБ · 256 ГБ · Silver · АКБ 84%",
    full:"MacBook Pro 13″ 2015 года на Intel Core i5, 16 ГБ оперативной памяти и 256 ГБ SSD, цвет Silver. Рабочее состояние, ёмкость аккумулятора 84%. Надёжный вариант для учёбы, документов и интернета по доступной цене.",
    specs:["Дисплей 13,3″ Retina","Intel Core i5","16 ГБ ОЗУ","SSD 256 ГБ","АКБ 84%","Гарантия 3 месяца"] },

  { id:130, cat:"used", name:"MacBook Air 15″ (2025) M4", price:3690, oldPrice:null, badge:"Как новый", left:2,
    condition:"Как новый", gradient:["#d6dade","#a6abb2"],
    colors:[["Silver","#d6dade"]],
    memory:[["512 ГБ SSD",0]],
    photo:"img/macbook-air15-m4-1.jpg",
    gallery:["img/macbook-air15-m4-1.jpg"],
    desc:"M4 · 16 ГБ · 512 ГБ · АКБ 100% · как новый",
    full:"MacBook Air 15″ 2025 на новейшем чипе Apple M4, 16 ГБ памяти и 512 ГБ SSD. Состояние «как новый», ёмкость аккумулятора 100%. Тонкий, лёгкий, тихий — без вентилятора. В наличии 2 шт. Гарантия 6 месяцев.",
    specs:["Дисплей 15,3″ Liquid Retina","Чип Apple M4","16 ГБ объединённой памяти","SSD 512 ГБ","АКБ 100%","Гарантия 6 месяцев"] },

  // ================= iPAD =================
  { id:21, cat:"ipad", name:"iPad", price:1190, oldPrice:1250, badge:null,
    img:"https://www.apple.com/v/ipad-11/d/images/meta/ipad-11_overview__brh97xhhd8b6_og.png",
    gradient:["#9fb4d8","#5e76a8"],
    colors:[["Silver","#d6dade"],["Blue","#b8d3e8"],["Pink","#e8c4d0"],["Жёлтый","#e8dc9a"]],
    memory:[["128 ГБ",0],["256 ГБ",220],["512 ГБ",660]],
    desc:"Дисплей 11″, чип A16 — для учёбы и развлечений",
    full:"Универсальный планшет для всей семьи: учёба, фильмы, игры, заметки. Поддержка Apple Pencil и Magic Keyboard Folio.",
    specs:["Дисплей 11″ Liquid Retina","Чип A16","Камера 12 Мп","Touch ID","До 10 часов работы"] },

  { id:22, cat:"ipad", name:"iPad mini", price:1610, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/ipad-mini/v/images/overview/hero/fan__mub6p4ua0t2y_large.jpg",
    gradient:["#b18ae8","#7050b8"],
    colors:[["Purple","#b8a8d8"],["Blue","#7a93b8"],["Starlight","#e8dcc8"],["Space Gray","#5f6368"]],
    memory:[["128 ГБ",0],["256 ГБ",220],["512 ГБ",660]],
    desc:"Компактный 8,3″, чип A17 Pro, Apple Pencil Pro",
    full:"Целый iPad в одной руке: 298 граммов. Идеален для чтения, заметок и поездок.",
    specs:["Дисплей 8,3″ Liquid Retina","Чип A17 Pro","Apple Pencil Pro","Wi-Fi 6E","298 грамм"] },

  { id:23, cat:"ipad", name:"iPad Air", price:2240, oldPrice:null, badge:"Хит",
    img:"https://www.apple.com/v/ipad-air/ah/images/meta/ipad-air_overview__bc2fd15uec0y_og.png",
    gradient:["#7fd6ff","#4a9fe8"],
    colors:[["Blue","#b8d3e8"],["Purple","#c9bfe0"],["Starlight","#e8dcc8"],["Space Gray","#5f6368"]],
    memory:[["128 ГБ",0],["256 ГБ",220],["512 ГБ",660],["1 ТБ",1100]],
    desc:"Дисплей 11″/13″, чип M4 — мощность ноутбука",
    full:"Мощность чипа M4 в тонком планшете: монтаж видео, рисование, многозадачность. Поддержка Magic Keyboard.",
    specs:["Дисплей 11″ Liquid Retina","Чип Apple M4","Apple Pencil Pro","Камера 12 Мп","Touch ID"] },

  { id:24, cat:"ipad", name:"iPad Pro", price:3850, oldPrice:null, badge:"Pro",
    img:"https://www.apple.com/v/ipad-pro/aw/images/meta/ipad-pro_overview__bu4cql27diaa_og.png",
    gradient:["#3d4356","#15171f"],
    colors:[["Space Black","#2a2c31"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",1350],["2 ТБ",2250]],
    desc:"OLED-дисплей, чип M5 — мощнее многих ноутбуков",
    full:"Самый продвинутый iPad: дисплей Ultra Retina XDR на OLED, чип M5 и толщина 5,1 мм. Полноценная замена ноутбуку.",
    specs:["Дисплей Ultra Retina XDR (OLED)","Чип Apple M5","Толщина 5,1 мм","Face ID","Thunderbolt / USB 4"] },

  // ================= MAC =================
  { id:31, cat:"mac", name:"Mac mini", price:1890, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/mac-mini/aa/images/meta/mac-mini__dvce2jrm11w2_og.jpg",
    gradient:["#aab4c4","#5e6878"],
    colors:[["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Чип M4, компактный системный блок 12,7 см",
    full:"Самый доступный Mac: корпус 12,7 × 12,7 см, чип M4 и порты Thunderbolt. Подключите монитор — и готово.",
    specs:["Чип Apple M4","16 ГБ объединённой памяти","Thunderbolt 4 × 3, HDMI","Wi-Fi 6E"] },

  { id:32, cat:"mac", name:"MacBook Air 13", price:2940, oldPrice:3090, badge:"Хит",
    img:"https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png",
    gradient:["#2e3650","#141927"],
    colors:[["Sky Blue","#b8d3e8"],["Midnight","#2e3650"],["Starlight","#e8dcc8"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Чип M4, 1,24 кг, до 18 часов без розетки",
    full:"Самый популярный ноутбук Apple: тонкий, бесшумный (без вентилятора) и работает весь день от батареи.",
    specs:["Дисплей 13,6″ Liquid Retina","Чип Apple M4","16 ГБ памяти","До 18 часов работы","1,24 кг"] },

  { id:33, cat:"mac", name:"MacBook Air 15", price:3640, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png",
    gradient:["#e8dcc8","#b8a888"],
    colors:[["Sky Blue","#b8d3e8"],["Midnight","#2e3650"],["Starlight","#e8dcc8"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Большой экран 15,3″ в тонком корпусе",
    full:"Тот же тонкий и лёгкий Air, но с большим экраном 15,3″ — для тех, кому нужно больше пространства.",
    specs:["Дисплей 15,3″ Liquid Retina","Чип Apple M4","16 ГБ памяти","До 18 часов работы","1,51 кг"] },

  { id:34, cat:"mac", name:"MacBook Pro 14", price:5250, oldPrice:null, badge:"Pro",
    img:"https://www.apple.com/v/macbook-pro/ax/images/meta/macbook-pro__difvbgz1plsi_og.png",
    gradient:["#3d4356","#15171f"],
    colors:[["Space Black","#2a2c31"],["Silver","#d6dade"]],
    memory:[["512 ГБ",0],["1 ТБ",450],["2 ТБ",1350]],
    desc:"Чип M5 Pro, дисплей Liquid Retina XDR 120 Гц",
    full:"Профессиональный инструмент: чип M5 Pro, лучший в индустрии дисплей XDR и до 24 часов автономности.",
    specs:["Дисплей 14,2″ XDR 120 Гц","Чип Apple M5 Pro","24 ГБ памяти","До 24 часов работы","HDMI, SDXC, Thunderbolt 5"] },

  { id:35, cat:"mac", name:"MacBook Pro 16", price:7000, oldPrice:null, badge:"Pro",
    img:"https://www.apple.com/v/macbook-pro/ax/images/meta/macbook-pro__difvbgz1plsi_og.png",
    gradient:["#3d4356","#15171f"],
    colors:[["Space Black","#2a2c31"],["Silver","#d6dade"]],
    memory:[["512 ГБ",0],["1 ТБ",450],["2 ТБ",1350],["4 ТБ",3150]],
    desc:"Чип M5 Max — максимум мощности Apple",
    full:"Флагманский ноутбук для монтажа, 3D и разработки: чип M5 Max и экран 16,2″ XDR.",
    specs:["Дисплей 16,2″ XDR 120 Гц","Чип Apple M5 Max","36 ГБ памяти","До 24 часов работы","Thunderbolt 5"] },

  { id:36, cat:"mac", name:"iMac", price:4200, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/imac/v/images/meta/imac__d7trotporb6u_og.png",
    gradient:["#7fd6ff","#4a9fe8"],
    colors:[["Blue","#b8d3e8"],["Green","#b9c4a8"],["Pink","#e8c4d0"],["Orange","#e8a05c"],["Silver","#d6dade"]],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Моноблок 24″ 4.5K, чип M4, 7 цветов",
    full:"Компьютер-моноблок, который украсит любой стол: экран 24″ 4.5K, чип M4 и толщина 11,5 мм.",
    specs:["Дисплей 24″ 4.5K Retina","Чип Apple M4","16 ГБ памяти","Камера 12 Мп Center Stage","7 цветов"] },

  { id:37, cat:"mac", name:"Mac Studio", price:8400, oldPrice:null, badge:"Pro",
    img:"https://www.apple.com/v/mac-studio/m/images/meta/mac-studio_overview__eedzbosm1t26_og.png",
    gradient:["#aab4c4","#5e6878"],
    colors:[["Silver","#d6dade"]],
    memory:[["512 ГБ",0],["1 ТБ",450],["2 ТБ",1350],["4 ТБ",3150]],
    desc:"Чип M4 Max / M3 Ultra для студийных задач",
    full:"Студийная мощность в компактном корпусе: рендеринг, цветокоррекция, нейросети — всё летает.",
    specs:["Чип M4 Max / M3 Ultra","До 512 ГБ памяти","Thunderbolt 5 × 6","10G Ethernet"] },

  { id:38, cat:"mac", name:"Mac Pro", price:17500, oldPrice:null, badge:"Pro",
    img:"https://www.apple.com/assets-www/en_WW/mac/05_og/mac_og_9c1c26340.png",
    gradient:["#c8d0dc","#7e8898"],
    colors:[["Silver","#d6dade"]],
    memory:[["1 ТБ",0],["2 ТБ",900],["4 ТБ",1800],["8 ТБ",3600]],
    desc:"Максимальная конфигурация Apple, слоты PCIe",
    full:"Бескомпромиссная рабочая станция: слоты расширения PCIe и безграничные возможности апгрейда.",
    specs:["Чип Apple M3 Ultra","До 512 ГБ памяти","7 слотов PCIe","Thunderbolt × 8"] },

  // ================= WATCH =================
  { id:41, cat:"watch", name:"Apple Watch SE", price:700, oldPrice:730, badge:null,
    img:"https://www.apple.com/v/apple-watch-se-3/b/images/meta/apple-watch-se-3__d0wwc67lzg02_og.png",
    gradient:["#2e3650","#141927"],
    colors:[["Midnight","#2e3650"],["Starlight","#e8dcc8"],["Silver","#d6dade"]],
    desc:"Все главные функции Apple Watch по доступной цене",
    full:"Уведомления, тренировки, пульс, обнаружение падений — всё важное по самой доступной цене.",
    specs:["Дисплей Retina","Пульс и тренировки","Обнаружение падений","Влагозащита 50 м","До 18 часов работы"] },

  { id:42, cat:"watch", name:"Apple Watch Series 11", price:1260, oldPrice:null, badge:"Новинка",
    img:"https://www.apple.com/v/apple-watch-series-11/c/images/meta/apple-watch-series-11__cim89z1i9spe_og.png",
    gradient:["#f0c4d8","#c88aa8"],
    colors:[["Rose Gold","#e0b8c4"],["Silver","#d6dade"],["Графитовый","#3a3c40"],["Угольный","#1d1e22"]],
    desc:"ЭКГ, кислород в крови, Always-On дисплей",
    full:"Главные часы Apple: ЭКГ, кислород в крови, отслеживание сна и яркий Always-On дисплей.",
    specs:["Always-On Retina дисплей","ЭКГ + кислород в крови","Отслеживание сна","5G + GPS","До 24 часов работы"] },

  { id:43, cat:"watch", name:"Apple Watch Ultra 3", price:2450, oldPrice:null, badge:"Ultra",
    img:"https://www.apple.com/v/apple-watch-ultra-3/b/images/overview/welcome/hero_endframe__e4ls9pihykya_large.jpg",
    gradient:["#bfa98a","#7a6a4f"],
    colors:[["Natural Titanium","#bfa98a"],["Black Titanium","#3a3c40"]],
    desc:"Титан, 100 м, спутниковая связь, 42 часа",
    full:"Часы для экстремальных условий: титановый корпус, погружения до 100 м, спутниковая связь и батарея на 42 часа.",
    specs:["Титановый корпус 49 мм","Спутниковая связь","Погружения до 100 м","До 42 часов работы"] },

  // ================= AIRPODS =================
  { id:51, cat:"audio", name:"AirPods 4", price:420, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/airpods-4/g/images/meta/airpods-4__gnjh1t3yjxm6_og.png",
    gradient:["#e8ecf2","#aab4c4"],
    colors:[["White","#f2f2ef"]],
    desc:"Новая посадка, чип H2, пространственное аудио",
    full:"Самые удобные AirPods: переработанная форма, пространственное аудио и до 30 часов с кейсом.",
    specs:["Чип Apple H2","Пространственное аудио","USB-C кейс","До 30 часов с кейсом","IP54"] },

  { id:52, cat:"audio", name:"AirPods Pro 3", price:770, oldPrice:810, badge:"Хит",
    img:"https://www.apple.com/v/airpods-pro/r/images/meta/og__c0ceegchesom_overview.png",
    gradient:["#e8ecf2","#aab4c4"],
    colors:[["White","#f2f2ef"]],
    desc:"Лучшее шумоподавление в мире + датчик пульса",
    full:"Шумоподавление в 2 раза мощнее предыдущего поколения, измерение пульса в ушах и функция слухового аппарата.",
    specs:["Шумоподавление ×2","Датчик пульса","Адаптивное аудио","До 8 часов на заряде","IP57"] },

  { id:53, cat:"audio", name:"AirPods Max", price:1540, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/airpods-max/k/images/meta/airpods-max_overview__c2mz40a3bugm_og.png",
    gradient:["#2e3650","#141927"],
    colors:[["Midnight","#2e3650"],["Starlight","#e8dcc8"],["Blue","#7a93b8"],["Purple","#c9bfe0"],["Orange","#e8a05c"]],
    desc:"Полноразмерные наушники Hi-Fi класса",
    full:"Полноразмерные наушники Apple: фирменное звучание, шумоподавление, алюминий и премиальные материалы.",
    specs:["Динамики Apple 40 мм","Активное шумоподавление","Пространственное аудио","До 20 часов работы","USB-C"] },

  { id:54, cat:"audio", name:"AirPods Pro 2", price:590, oldPrice:620, badge:null, stock:"out",
    img:"https://www.apple.com/v/airpods-pro/r/images/meta/og__c0ceegchesom_overview.png",
    gradient:["#e8ecf2","#aab4c4"],
    colors:[["White","#f2f2ef"]],
    desc:"Закончились — ожидаем новую поставку",
    full:"Прошлое поколение Pro по сниженной цене: фирменное шумоподавление, адаптивное аудио и кейс с динамиком для поиска. Партия закончилась — ожидаем поставку, оставьте заявку и мы сообщим о поступлении.",
    specs:["Чип Apple H2","Активное шумоподавление","Адаптивное аудио","До 6 часов на заряде","USB-C кейс с динамиком"] },

  // ================= ТВ И ДОМ =================
  // stock: "soon" — скоро в наличии (предзаказ), "out" — закончились, ожидаем
  { id:61, cat:"home", name:"Apple Vision Pro", price:10500, oldPrice:null, badge:"Будущее", stock:"soon",
    img:"https://www.apple.com/v/apple-vision-pro/k/images/meta/apple-vision-pro-us__f28gp8ey4vam_og.png",
    gradient:["#8a93a6","#3a4150"],
    memory:[["256 ГБ",0],["512 ГБ",450],["1 ТБ",900]],
    desc:"Пространственный компьютер Apple, чип M5",
    full:"Компьютер новой эры: приложения парят в воздухе вокруг вас, экраны любого размера, кино как в IMAX.",
    specs:["micro-OLED 23 млн пикселей","Чип M5 + R1","Управление глазами и жестами","visionOS","3D-фото и видео"] },

  { id:62, cat:"home", name:"Apple TV 4K", price:560, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/apple-tv-4k/am/images/meta/apple-tv-4k__efpszaiqoh2e_og.png",
    gradient:["#3d4356","#15171f"],
    desc:"Приставка 4K HDR с Dolby Vision и Atmos",
    full:"Кинотеатр дома: 4K HDR10+, Dolby Atmos, игры из Apple Arcade и колонки HomePod в пару.",
    specs:["4K HDR10+ / Dolby Vision","Чип A15 Bionic","Dolby Atmos","Siri Remote в комплекте"] },

  { id:63, cat:"home", name:"HomePod", price:840, oldPrice:null, badge:null,
    img:"https://www.apple.com/v/homepod/shared/compare/b/images/overview/compare/homepod__f07iekemvy62_large.jpg",
    gradient:["#2e3650","#141927"],
    colors:[["Midnight","#2e3650"],["White","#f2f2ef"]],
    desc:"Большая умная колонка с объёмным звуком",
    full:"Колонка, которая заполняет звуком всю комнату и управляет умным домом.",
    specs:["5 высокочастотных динамиков","Пространственное аудио","Датчики температуры","Стереопара"] },

  { id:64, cat:"home", name:"HomePod mini", price:350, oldPrice:365, badge:null,
    img:"https://www.apple.com/v/homepod-mini/j/images/meta/homepod-mini__bnxwvz5xrtpy_og.png",
    gradient:["#ff9a3c","#ff5e62"],
    colors:[["Orange","#e8762e"],["Blue","#7a93b8"],["Жёлтый","#e8dc9a"],["White","#f2f2ef"],["Midnight","#2e3650"]],
    desc:"Компактная умная колонка, звук 360°",
    full:"Маленькая колонка с большим звуком 360°. Отличный первый шаг в умный дом Apple.",
    specs:["Звук 360°","Siri","Хаб умного дома","Интерком","5 цветов"] },

  { id:65, cat:"home", name:"AirTag", price:105, oldPrice:null, badge:"Новинка",
    img:"https://www.apple.com/v/airtag/g/images/meta/og__ck3n0k1jl6j6.png",
    gradient:["#e8ecf2","#aab4c4"],
    desc:"Брелок-трекер 2-го поколения: найдёт что угодно",
    full:"Повесьте на ключи или положите в чемодан — вещь всегда найдётся на карте. Динамик на 50% громче, поиск в 1,5 раза дальше.",
    specs:["Точный поиск (UWB 2)","Сеть Локатора","Батарейка на год+","IP67"] },

  // ================= АКСЕССУАРЫ =================
  { id:71, cat:"acc", name:"Чехол MagSafe для iPhone 17 Pro", price:105, oldPrice:null, badge:null,
    gradient:["#3d4356","#15171f"],
    colors:[["Black","#1d1e22"],["Blue","#1f2a44"],["Orange","#e8762e"],["Прозрачный","#e8ecf2"]],
    desc:"Оригинальный чехол с поддержкой MagSafe",
    full:"Фирменный чехол Apple: точные вырезы, приятный на ощупь материал и магниты MagSafe для зарядки и аксессуаров.",
    specs:["Поддержка MagSafe","Оригинал Apple","Защита камеры","Микрофибра внутри"] },

  { id:72, cat:"acc", name:"Зарядное устройство MagSafe", price:119, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-magsafe.jpg",
    desc:"Беспроводная зарядка до 25 Вт, кабель 1 м",
    full:"Магнитная беспроводная зарядка для iPhone и AirPods: идеально выравнивается и заряжает до 25 Вт.",
    specs:["Мощность до 25 Вт","Кабель USB-C 1 м","Совместима с чехлами MagSafe"] },

  { id:73, cat:"acc", name:"Адаптер питания 20 Вт USB-C", price:55, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-adapter-20w.jpg",
    desc:"Быстрая зарядка iPhone и iPad",
    full:"Компактный оригинальный адаптер: заряжает iPhone до 50% за 30 минут.",
    specs:["20 Вт, USB-C","Быстрая зарядка","Оригинал Apple"] },

  { id:74, cat:"acc", name:"Кабель USB-C — USB-C (1 м)", price:49, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-cable-usbc.jpg",
    desc:"Плетёный кабель для зарядки и данных",
    full:"Прочный плетёный кабель Apple: зарядка до 60 Вт и передача данных для iPhone, iPad и Mac.",
    specs:["Длина 1 м","До 60 Вт","Плетёная оплётка"] },

  { id:75, cat:"acc", name:"Ремешок Sport Band", price:79, oldPrice:null, badge:null,
    gradient:["#4e7cff","#2b4bcf"],
    colors:[["Blue","#4a6cdf"],["Black","#1d1e22"],["Звёздный свет","#e8dcc8"],["Pink","#e8c4d0"]],
    desc:"Спортивный ремешок для Apple Watch",
    full:"Фирменный ремешок из фторэластомера: прочный, удобный, не боится воды и пота.",
    specs:["Фторэластомер","Размеры S/M и M/L","Для всех Apple Watch"] },

  { id:76, cat:"acc", name:"Чехол Smart Folio для iPad", price:159, oldPrice:null, badge:null,
    gradient:["#9fb4d8","#5e76a8"],
    colors:[["Black","#1d1e22"],["Blue","#b8d3e8"],["Лавандовый","#c9b6e4"]],
    desc:"Обложка-подставка с магнитным креплением",
    full:"Тонкая обложка защищает iPad с двух сторон и складывается в удобную подставку для просмотра и набора текста.",
    specs:["Магнитное крепление","Режимы подставки","Автопробуждение"] },

  // ---------- ЗАРЯДНЫЕ БЛОКИ И КАБЕЛИ ----------
  { id:77, cat:"acc", name:"Адаптер питания 30 Вт USB-C", price:65, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-adapter-30w.jpg",
    desc:"Быстрая зарядка iPhone, iPad и MacBook Air",
    full:"Компактный оригинальный адаптер Apple на 30 Вт: быстро заряжает iPhone, iPad и даже MacBook Air. Складные контакты.",
    specs:["30 Вт, USB-C","Быстрая зарядка","Складные контакты","Оригинал Apple"] },

  { id:78, cat:"acc", name:"Адаптер питания 35 Вт (2 × USB-C)", price:99, oldPrice:null, badge:"Хит",
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-adapter-35w.jpg",
    desc:"Два порта — заряжайте два устройства сразу",
    full:"Компактный адаптер Apple с двумя портами USB-C: заряжайте iPhone и AirPods (или Apple Watch) одновременно. Складные контакты, удобно брать в дорогу.",
    specs:["35 Вт, 2 × USB-C","Зарядка двух устройств сразу","Складные контакты","Оригинал Apple"] },

  { id:79, cat:"acc", name:"Адаптер питания 67 Вт USB-C", price:119, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-adapter-67w.jpg",
    desc:"Быстрая зарядка MacBook Pro 14″ и iPad",
    full:"Оригинальный адаптер Apple на 67 Вт: быстро заряжает MacBook Pro 14″, iPad и iPhone. Подходит для кабеля USB-C и MagSafe 3.",
    specs:["67 Вт, USB-C","Для MacBook Pro 14″","Быстрая зарядка","Оригинал Apple"] },

  { id:80, cat:"acc", name:"Адаптер питания 70 Вт USB-C", price:129, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-adapter-70w.jpg",
    desc:"Для MacBook Air и MacBook Pro 14″",
    full:"Адаптер Apple на 70 Вт для быстрой зарядки MacBook Air 15″ и MacBook Pro 14″. Один порт USB-C.",
    specs:["70 Вт, USB-C","Для MacBook Air/Pro","Быстрая зарядка","Оригинал Apple"] },

  { id:81, cat:"acc", name:"Адаптер питания 96 Вт USB-C", price:159, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-adapter-96w.jpg",
    desc:"Максимальная скорость для MacBook Pro 14″/16″",
    full:"Мощный адаптер Apple на 96 Вт: максимально быстрая зарядка MacBook Pro 14″ и 16″. Совместим с кабелями USB-C и MagSafe 3.",
    specs:["96 Вт, USB-C","Для MacBook Pro 16″","Максимальная скорость","Оригинал Apple"] },

  { id:82, cat:"acc", name:"Автомобильный адаптер 36 Вт (2 × USB-C)", price:79, oldPrice:null, badge:null,
    gradient:["#cdd5e0","#8a93a6"],
    photo:"img/acc-adapter-car.jpg",
    desc:"Зарядка в авто на два устройства",
    full:"Автомобильный адаптер с двумя портами USB-C 36 Вт: быстрая зарядка iPhone и iPad прямо в дороге.",
    specs:["36 Вт, 2 × USB-C","Для автомобиля","Быстрая зарядка","Два устройства сразу"] },

  { id:83, cat:"acc", name:"Кабель USB-C — Lightning (1 м)", price:49, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-cable-lightning.jpg",
    desc:"Для iPhone 14 и более ранних, AirPods",
    full:"Оригинальный кабель Apple USB-C — Lightning для быстрой зарядки iPhone 14 и более ранних моделей, а также AirPods.",
    specs:["Длина 1 м","USB-C — Lightning","Быстрая зарядка","Оригинал Apple"] },

  { id:84, cat:"acc", name:"Кабель USB-C — USB-C (2 м)", price:65, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-cable-usbc-2m.jpg",
    desc:"Плетёный кабель увеличенной длины",
    full:"Прочный плетёный кабель Apple длиной 2 метра: зарядка до 60 Вт и передача данных для iPhone 15/16/17, iPad и Mac.",
    specs:["Длина 2 м","До 60 Вт","Плетёная оплётка","USB-C — USB-C"] },

  { id:85, cat:"acc", name:"Кабель Thunderbolt 4 USB-C (1,8 м)", price:219, oldPrice:null, badge:null,
    gradient:["#cdd5e0","#8a93a6"],
    photo:"img/acc-cable-thunderbolt.jpg",
    desc:"До 40 Гбит/с и 100 Вт зарядки",
    full:"Профессиональный кабель Apple Thunderbolt 4: передача данных до 40 Гбит/с, вывод видео и зарядка до 100 Вт. Для Mac, дисплеев и накопителей.",
    specs:["Thunderbolt 4 / USB-C","До 40 Гбит/с","Зарядка до 100 Вт","Длина 1,8 м"] },

  { id:86, cat:"acc", name:"Зарядное устройство MagSafe (2-е поколение)", price:135, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#aab4c4"],
    photo:"img/acc-magsafe2.jpg",
    desc:"Беспроводная зарядка до 25 Вт для iPhone 16/17",
    full:"Обновлённая магнитная зарядка MagSafe: до 25 Вт для iPhone 16 и 17, точное выравнивание, кабель USB-C 1 м.",
    specs:["До 25 Вт","Для iPhone 16/17","Кабель USB-C 1 м","Магнитное крепление"] },

  // ---------- ЧЕХЛЫ ----------
  { id:87, cat:"acc", name:"Силиконовый чехол MagSafe", price:95, oldPrice:null, badge:null,
    gradient:["#3d4356","#15171f"],
    colors:[["Чёрный","#1d1e22"],["Синий","#1f2a44"],["Розовый","#e8c4d0"],["Оранжевый","#e8762e"]],
    photo:"img/acc-case-silicone-1.jpg",
    desc:"Мягкий силикон, поддержка MagSafe",
    full:"Фирменный силиконовый чехол с приятным на ощупь покрытием и микрофиброй внутри. Магниты MagSafe для зарядки и аксессуаров, точные вырезы под камеры и кнопки.",
    specs:["Поддержка MagSafe","Силикон софт-тач","Микрофибра внутри","Защита камеры"] },

  { id:88, cat:"acc", name:"Прозрачный чехол MagSafe", price:89, oldPrice:null, badge:null,
    gradient:["#e8ecf2","#c4ccd6"],
    photo:"img/acc-case-clear-1.jpg",
    desc:"Прозрачный, не желтеет, MagSafe",
    full:"Прозрачный чехол, который показывает цвет вашего iPhone и не желтеет со временем. Встроенные магниты MagSafe, усиленные борта и защита камеры.",
    specs:["Поддержка MagSafe","Не желтеет","Усиленные борта","Защита камеры"] },

  { id:89, cat:"acc", name:"Чехол-книжка с отделением для карт", price:120, oldPrice:null, badge:null,
    gradient:["#3a2e26","#1d1712"],
    colors:[["Чёрный","#1d1e22"],["Коричневый","#6b4a2e"]],
    photo:"img/acc-case-wallet-1.jpg",
    desc:"Эко-кожа, карман для карт, MagSafe",
    full:"Чехол-книжка из качественной эко-кожи с отделением для банковских карт. Поддержка MagSafe, защита экрана и камеры, удобная подставка.",
    specs:["Поддержка MagSafe","Отделение для карт","Эко-кожа","Защита экрана"] },

  { id:90, cat:"acc", name:"Противоударный чехол", price:79, oldPrice:null, badge:null,
    gradient:["#2a2c31","#4a4c52"],
    colors:[["Чёрный","#1d1e22"],["Прозрачный","#e8ecf2"]],
    photo:"img/acc-case-armor-1.jpg",
    desc:"Усиленная защита от падений",
    full:"Прочный чехол с противоударными углами и приподнятыми бортами вокруг экрана и камеры. Защищает iPhone при падении с высоты до 2 метров.",
    specs:["Защита от падений","Усиленные углы","Приподнятые борта","Антискользящее покрытие"] }
];
