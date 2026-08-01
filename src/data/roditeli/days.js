// Координаты общих точек (переиспользуются в loc/startLoc/route по всему файлу)
const PEK = { lat: 40.080, lng: 116.584 };
const MUTIANYU = { lat: 40.431, lng: 116.564 };
const KIX = { lat: 34.427, lng: 135.244 };
const OSAKA_HOTEL = { lat: 34.665, lng: 135.502 };
const OSAKA_CASTLE = { lat: 34.687, lng: 135.526 };
const DOTONBORI = { lat: 34.668, lng: 135.501 };
const KATSUOJI = { lat: 34.855, lng: 135.474 };
const NAMBA_YASAKA = { lat: 34.658, lng: 135.502 };
const SHINSEKAI = { lat: 34.652, lng: 135.506 };
const NARA_PARK = { lat: 34.685, lng: 135.843 };
const KASUGA_TAISHA = { lat: 34.681, lng: 135.848 };
const KYOTO_HOTEL = { lat: 35.006, lng: 135.768 };
const KIYOMIZU = { lat: 34.995, lng: 135.785 };
const FUSHIMI_INARI = { lat: 34.967, lng: 135.773 };
const RYOANJI = { lat: 35.034, lng: 135.718 };
const KINKAKUJI = { lat: 35.039, lng: 135.729 };
const ARASHIYAMA = { lat: 35.017, lng: 135.667 };
const NIJO_CASTLE = { lat: 35.014, lng: 135.748 };
const TOKYO_AIRBNB = { lat: 35.708, lng: 139.649 };
const SHINJUKU_GODZILLA = { lat: 35.694, lng: 139.700 };
const UENO_MUSEUM = { lat: 35.719, lng: 139.776 };
const AKIHABARA = { lat: 35.702, lng: 139.771 };
const SHIBUYA = { lat: 35.658, lng: 139.702 };
const TOKYO_TOWER = { lat: 35.659, lng: 139.745 };
const IMPERIAL_PALACE = { lat: 35.686, lng: 139.755 };
const GINZA = { lat: 35.672, lng: 139.765 };
const HAKONE_YUMOTO = { lat: 35.233, lng: 139.106 };
const HAKONE_GORA = { lat: 35.246, lng: 139.049 };
const OWAKUDANI = { lat: 35.244, lng: 139.019 };
const LAKE_ASHI = { lat: 35.205, lng: 139.026 };
const KAMAKURA = { lat: 35.317, lng: 139.536 };
const ENOSHIMA = { lat: 35.299, lng: 139.480 };

export const DAYS = [
  {
    date: "10 сентября", weekday: "четверг", label: "ДЕНЬ 1", title: "Вылет из Москвы",
    color: "#6699cc", icon: "✈️",
    items: [
      { time: "20:05", text: "Москва (Шереметьево) → Пекин", sub: "Рейс SVO→PEK, 7ч50м, ночной перелёт" },
    ],
  },
  {
    date: "11 сентября", weekday: "пятница", label: "ДЕНЬ 2", title: "Пекин — Великая Китайская стена",
    color: "#cc4433", icon: "🇨🇳",
    items: [
      { time: "08:55", text: "Прилёт в Пекин (PEK)", sub: "На стойке пограничного контроля оформить безвизовый транзит 144 часа (нужен паспорт + билет/посадочный на рейс в Осаку)", loc: PEK },
      { time: "~10:15", text: "Встреча с водителем у терминала", sub: "Частный трансфер, забронированный заранее — от аэропорта до Мутяньюй ~1ч45м" },
      { time: "12:00", text: "Великая стена — участок Мутяньюй", sub: "Канатная дорога наверх + тобогган вниз (меньше нагрузки, чем лестницы), прогулка по стене", loc: MUTIANYU, legMode: "driving" },
      { time: "14:30", text: "Обед рядом со стеной" },
      { time: "15:30", text: "Трансфер обратно в аэропорт", sub: "~2ч с учётом вечернего трафика", loc: PEK, legMode: "driving" },
      { time: "17:30", text: "Заселение в транзитный отель у аэропорта, ужин", sub: "Ранний отбой — подъём около 05:30 перед утренним рейсом" },
    ],
    note: "Билет с долгой стыковкой в Пекине (114 902 ₽ за двоих; участок Пекин→Осака — Hainan Airlines HU473). День насыщенный: прилёт → стена → отель, спать лечь пораньше. Если хочется больше отдыха перед перелётом — участок Бадалин ближе (~1–1,5ч от аэропорта) и проще логистически, но люднее и без тобоггана.",
    route: [PEK, MUTIANYU, PEK],
    routeMode: "driving",
  },
  {
    date: "12 сентября", weekday: "суббота", label: "ДЕНЬ 3", title: "Прилёт в Осаку + замок и Дотонбори",
    color: "#77bb88", icon: "🛬",
    items: [
      { time: "08:45", text: "Пекин → Осака (Кансай)", sub: "Рейс Hainan Airlines HU473, 3ч, прилёт 12:45", loc: KIX },
      { time: "13:00", text: "Пополнить транспортную карту (ICOCA)", sub: "Карту привезём с собой — пополнить баланс в автомате в аэропорту или на вокзале" },
      { time: "Днём", text: "Трансфер в отель, заселение", sub: "Hotel The Lutheran", loc: OSAKA_HOTEL },
      { time: "Днём", text: "Замок Осаки", sub: "Парк вокруг — приятная прогулка", loc: OSAKA_CASTLE },
      { time: "Вечер", text: "Дотонбори", sub: "Прогулка и ужин там же", loc: DOTONBORI },
      { time: "Вечер", text: "Конбини — купить перекус на завтра", sub: "Взять с собой в храм Кацуо-дзи, чтобы утром не тратить на это время" },
    ],
    route: [KIX, OSAKA_HOTEL, OSAKA_CASTLE, DOTONBORI],
    routeMode: "driving",
  },
  {
    date: "13 сентября", weekday: "воскресенье", label: "ДЕНЬ 4", title: "Осака — Кацуо-дзи и Синсэкай",
    color: "#cc8844", icon: "🏯",
    startLoc: OSAKA_HOTEL,
    items: [
      { time: "Утро", text: "Завтрак в отеле", sub: "Дорога метро + автобус — пополнить Suica заранее, билет на автобус ~¥900" },
      { time: "День", text: "Храм Кацуо-дзи", sub: "«Храм с красными человечками» — тысячи фигурок дарума. Перекус — из того, что взяли с собой", loc: KATSUOJI },
      { time: "День", text: "Намба Ясака-дзиндзя", sub: "Святилище со знаменитой сценой-головой льва", loc: NAMBA_YASAKA },
      { time: "Вечер", text: "Синсэкай + башня Цутэнкаку", sub: "Прогулка по улице, игровые автоматы, ужин в кафе-баре", loc: SHINSEKAI },
    ],
    route: [OSAKA_HOTEL, KATSUOJI, NAMBA_YASAKA, SHINSEKAI],
    routeMode: "driving",
  },
  {
    date: "14 сентября", weekday: "понедельник", label: "ДЕНЬ 5", title: "Нара — поездка на день",
    color: "#5599bb", icon: "🦌",
    startLoc: OSAKA_HOTEL,
    items: [
      { time: "Утро", text: "Завтрак в отеле, перекус и напитки в дорогу", sub: "Взять солнцезащитный крем и зонт" },
      { time: "9:00", text: "Электричка Осака → Нара", sub: "~45 мин" },
      { time: "10:00", text: "Парк Нара", sub: "Олени свободно гуляют — покормить сэмбэй", loc: NARA_PARK },
      { time: "11:30", text: "Тодайдзи", sub: "Большой Будда — крупнейшее деревянное здание в мире" },
      { time: "13:30", text: "Касуга Тайся", sub: "Синтоистское святилище, тысячи каменных фонарей", loc: KASUGA_TAISHA },
      { time: "После", text: "Старбакс — по желанию" },
      { time: "16:00", text: "Назад в Осаку", loc: OSAKA_HOTEL },
      { time: "Вечер", text: "Ужин в суши-ресторане", sub: "[адрес суши-ресторана] — попробовать саке. Дальше — прогулка по центру и шоппинг" },
    ],
    route: [OSAKA_HOTEL, NARA_PARK, KASUGA_TAISHA, OSAKA_HOTEL],
    routeMode: "driving",
  },
  {
    date: "15 сентября", weekday: "вторник", label: "ДЕНЬ 6", title: "Переезд в Киото + Киёмидзу-дэра",
    color: "#aa5599", icon: "⛩️",
    startLoc: OSAKA_HOTEL,
    items: [
      { time: "Утро", text: "Завтрак, сборы, выселение до 11:00" },
      { time: "", text: "Поезд (метро) в Киото" },
      { time: "", text: "Оставить вещи в отеле", sub: "Hotel IL Verde Kyoto — заселение после 15:00", loc: KYOTO_HOTEL },
      { time: "", text: "Нинэн-дзака и Саннэн-дзака", sub: "Старые улочки (ретро Старбакс по пути) к храмовому комплексу Киёмидзу-дэра", loc: KIYOMIZU },
      { time: "", text: "Прогулка по территории Киёмидзу-дэра", sub: "Пагода, смотровая площадка, дорожки вокруг комплекса" },
      { time: "Вечер", text: "Ужин в городе", sub: "Зайти в магазин за завтраком, заселение, отдых", loc: KYOTO_HOTEL },
    ],
    route: [OSAKA_HOTEL, KYOTO_HOTEL, KIYOMIZU],
    routeMode: "driving",
  },
  {
    date: "16 сентября", weekday: "среда", label: "ДЕНЬ 7", title: "Фусими Инари + золотой павильон",
    color: "#dd7733", icon: "🎋",
    startLoc: KYOTO_HOTEL,
    items: [
      { time: "Утро", text: "Завтрак из купленного вчера, выход пораньше" },
      { time: "", text: "Фусими Инари Тайся", sub: "Тысячи оранжевых тории — идти пораньше, чтобы разминуться с толпой", loc: FUSHIMI_INARI },
      { time: "10:30", text: "Рёан-дзи", sub: "Знаменитый сад камней", loc: RYOANJI },
      { time: "13:00", text: "Обед по пути" },
      { time: "14:00", text: "Кинкаку-дзи (Золотой павильон)", sub: "Один из самых снимаемых видов Японии — после обеда", loc: KINKAKUJI },
      { time: "15:30", text: "Арасияма", sub: "Бамбуковая роща, мост Тогэцу-кё, при желании — парк обезьян Ивадаяма", loc: ARASHIYAMA },
      { time: "18:30", text: "Прощальный ужин в Киото", loc: KYOTO_HOTEL },
    ],
    note: "Киото — 2 ночи, рынок Нисики и Гион убраны из программы ради компактности (заменены на Кацуо-дзи, Синсэкай и Киёмидзу-дэра). Замок Нидзё — утром в день отъезда (17.09).",
    route: [KYOTO_HOTEL, FUSHIMI_INARI, RYOANJI, KINKAKUJI, ARASHIYAMA],
    routeMode: "driving",
  },
  {
    date: "17 сентября", weekday: "четверг", label: "ДЕНЬ 8", title: "Замок Нидзё + переезд в Токио",
    color: "#c060b0", icon: "🚄",
    startLoc: KYOTO_HOTEL,
    items: [
      { time: "9:00", text: "Замок Нидзё", sub: "«Соловьиные полы», сады", loc: NIJO_CASTLE },
      { time: "11:00", text: "Выселение из отеля", loc: KYOTO_HOTEL },
      { time: "", text: "Синкансэн Киото → Токио", sub: "~2ч15–40м" },
      { time: "16:00", text: "Заселение в отель", loc: TOKYO_AIRBNB },
      { time: "18:00", text: "Синдзюку вечером", sub: "Смотровая Tokyo Metropolitan Government Building (бесплатно) · голова Годзиллы на Toho Building (Кабукитё) · неоновые улицы, Omoide Yokocho — просто погулять", loc: SHINJUKU_GODZILLA },
    ],
    route: [KYOTO_HOTEL, NIJO_CASTLE, TOKYO_AIRBNB, SHINJUKU_GODZILLA],
    routeMode: "driving",
  },
  {
    date: "18 сентября", weekday: "пятница", label: "ДЕНЬ 9", title: "Токио — Уэно, Акихабара, Синдзюку, вечерний тур",
    color: "#5588aa", icon: "🌆",
    startLoc: TOKYO_AIRBNB,
    items: [
      { time: "9:30", text: "Уэно — Токийский национальный музей", sub: "Самурайские доспехи, буддийское искусство", loc: UENO_MUSEUM },
      { time: "13:00", text: "Обед в Уэно" },
      { time: "14:30", text: "Акихабара", sub: "Электроника, ретро-игры", loc: AKIHABARA },
      { time: "17:00", text: "Синдзюку: перекрёсток с котом", sub: "3D-кот на экране Cross Shinjuku Vision у вост. выхода станции", loc: SHINJUKU_GODZILLA },
      { time: "18:00", text: "Шоппинг в Синдзюку", sub: "Магазины, например Гарри Поттер" },
      { time: "19:00", text: "Сибуя вечером", sub: "Знаменитый перекрёсток в огнях", loc: SHIBUYA },
      { time: "20:00", text: "Минато: Токийская телебашня", sub: "Подсвеченная башня вечером, рядом храм Дзодзё-дзи — классический вид", loc: TOKYO_TOWER },
    ],
    route: [TOKYO_AIRBNB, UENO_MUSEUM, AKIHABARA, SHINJUKU_GODZILLA, SHIBUYA, TOKYO_TOWER],
    routeMode: "driving",
  },
  {
    date: "19 сентября", weekday: "суббота", label: "ДЕНЬ 10", title: "Токио — Гиндза и Императорский дворец",
    color: "#bb5588", icon: "🏯",
    startLoc: TOKYO_AIRBNB,
    items: [
      { time: "10:00", text: "Императорский дворец — Higashi Gyoen", sub: "Восточные сады, остатки замка Эдо — бесплатно", loc: IMPERIAL_PALACE },
      { time: "13:00", text: "Обед рядом (Отэмати / Гиндза)" },
      { time: "14:30", text: "Гиндза", sub: "Шоппинг, витрины, флагманские магазины (Uniqlo, Ginza Six)", loc: GINZA },
      { time: "19:00", text: "Ужин в Гиндзе" },
    ],
    route: [TOKYO_AIRBNB, IMPERIAL_PALACE, GINZA],
    routeMode: "driving",
  },
  {
    date: "20 сентября", weekday: "воскресенье", label: "ДЕНЬ 11", title: "Хаконэ — насыщенный день",
    color: "#7766aa", icon: "🗻",
    startLoc: TOKYO_AIRBNB,
    items: [
      { time: "7:30", text: "Romancecar Синдзюку → Хаконэ-Юмото", sub: "Ранний поезд, чтобы успеть весь маршрут за день", loc: HAKONE_YUMOTO },
      { time: "9:30", text: "Горная ж/д Tozan → Гора", sub: "Зигзаги-развороты, живописно", loc: HAKONE_GORA },
      { time: "11:00", text: "Фуникулёр + канатка → Овакудани", sub: "Вулканическая долина, чёрные яйца, в ясную погоду виден Фудзи", loc: OWAKUDANI },
      { time: "13:00", text: "Канатка → Тогэндай, кораблик по озеру Аси → Мото-Хаконэ", sub: "По Hakone Freepass", loc: LAKE_ASHI },
      { time: "14:30", text: "Святилище Хаконэ", sub: "Знаменитые тории на воде (Хэйва-но-Тории), прямо у пристани в Мото-Хаконэ" },
      { time: "16:00", text: "Автобус Мото-Хаконэ → Гора", sub: "По Hakone Freepass", loc: HAKONE_GORA },
      { time: "17:30", text: "Заселение в отель (Гора)", sub: "Простое жильё, без онсена — ужин из дневного бюджета" },
    ],
    note: "Кинтоки-хайк убран из программы ради более спокойного темпа — актуально, если родителям некомфортна 1,5-часовая тропа в гору.",
    route: [TOKYO_AIRBNB, HAKONE_YUMOTO, HAKONE_GORA, OWAKUDANI, LAKE_ASHI, HAKONE_GORA],
    routeMode: "driving",
  },
  {
    date: "21 сентября", weekday: "понедельник", label: "ДЕНЬ 12", title: "Хаконэ → Камакура и Эносима → Токио",
    color: "#5a8888", icon: "🌊",
    startLoc: HAKONE_GORA,
    items: [
      { time: "Утро", text: "Выселение из рёкана" },
      { time: "", text: "Гора → Одавара → Офуна → Камакура (JR)", sub: "~1ч, напрямую, без заезда в Токио", loc: KAMAKURA },
      { time: "", text: "Большой Будда (Котоку-ин) + Хасэдэра", sub: "Дайбуцу 13 м, вид на залив из Хасэдэра" },
      { time: "", text: "Трамвай Энодэн → Эносима", sub: "Самый живописный участок вдоль моря", loc: ENOSHIMA },
      { time: "", text: "Остров Эносима", sub: "Святилище, смотровая Sea Candle, закат над заливом" },
      { time: "Вечер", text: "Возврат в Токио", sub: "~1ч15м на электричке до Airbnb (Сугинами)", loc: TOKYO_AIRBNB },
      { time: "", text: "Ужин рядом с домом" },
    ],
    route: [HAKONE_GORA, KAMAKURA, ENOSHIMA, TOKYO_AIRBNB],
    routeMode: "driving",
  },
  {
    date: "22 сентября", weekday: "вторник", label: "ОТЪЕЗД", title: "Вылет из Токио",
    color: "#6699cc", icon: "🛫",
    items: [
      { time: "Утро", text: "Выезд из отеля" },
      { time: "14:30", text: "Токио (Нарита) → Пекин", sub: "Рейс NRT→PEK, 4ч, прилёт 17:30" },
      { time: "Вечер", text: "Ночь в транзитном отеле в Пекине", sub: "Стыковка ~21 час перед вылетом в Москву" },
    ],
  },
  {
    date: "23 сентября", weekday: "среда", label: "ДОМА", title: "Прилёт в Москву",
    color: "#6699cc", icon: "🏠",
    items: [
      { time: "14:25", text: "Пекин → Москва (Шереметьево)", sub: "Рейс PEK→SVO, 8ч40м, прилёт 18:05" },
    ],
  },
];
