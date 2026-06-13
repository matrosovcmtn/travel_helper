// Категории мест и их цвета (используются на карте и в легенде)
export const CAT = {
  base:  { color: "#e03020", label: "База" },
  sight: { color: "#2a7cc0", label: "Достопримечательности" },
  art:   { color: "#8844cc", label: "Искусство" },
  shop:  { color: "#d07020", label: "Шоппинг" },
  night: { color: "#223388", label: "Ночное" },
  trip:  { color: "#1a9050", label: "Поездки вне Токио" },
  fun:   { color: "#c03090", label: "Развлечения" },
};

// Точки маршрута с реальными координатами
export const LOCS = [
  { lat: 35.708, lng: 139.649, name: "Коэндзи (база)",      day: "Все дни — жильё",  cat: "base"  },
  { lat: 35.661, lng: 139.668, name: "Симокитадзава",       day: "День 1",           cat: "sight" },
  { lat: 35.700, lng: 139.573, name: "Кичидзодзи (парк)",   day: "День 1",           cat: "sight" },
  { lat: 35.715, lng: 139.797, name: "Асакуса",             day: "Опц. (к Дню 10)",  cat: "sight" },
  { lat: 35.694, lng: 139.704, name: "Синдзюку (303 Garage)", day: "День 2",         cat: "sight" },
  { lat: 35.676, lng: 139.699, name: "Мэйдзи-дзингу",       day: "День 9",           cat: "sight" },
  { lat: 35.670, lng: 139.703, name: "Харадзюку",           day: "День 9",           cat: "shop"  },
  { lat: 35.665, lng: 139.717, name: "Музей Нэдзу (Кума)",  day: "День 11",          cat: "art"   },
  { lat: 35.658, lng: 139.702, name: "Сибуя",               day: "День 9",           cat: "sight" },
  { lat: 35.648, lng: 139.703, name: "Дайканьяма",          day: "День 7",           cat: "art"   },
  { lat: 35.644, lng: 139.699, name: "Накамэгуро",          day: "День 7",           cat: "sight" },
  { lat: 35.638, lng: 139.719, name: "Музей Тэйэн",         day: "Опц. (своб.)",     cat: "art"   },
  { lat: 35.672, lng: 139.765, name: "Гиндза",              day: "Опц. (своб.)",     cat: "shop"  },
  { lat: 35.659, lng: 139.741, name: "teamLab Borderless",  day: "День 9 (вечер)",   cat: "art"   },
  { lat: 35.732, lng: 139.750, name: "Кагурадзака",         day: "Опц. (вечер)",     cat: "sight" },
  { lat: 35.660, lng: 139.729, name: "Роппонги (Mori/NACT)", day: "День 11",         cat: "art"   },
  { lat: 35.660, lng: 139.740, name: "Azabudai Hills",      day: "День 11",          cat: "shop"  },
  { lat: 35.718, lng: 139.776, name: "Уэно: TNM / NMWA / Хорюдзи", day: "День 10",   cat: "art"   },
  { lat: 35.727, lng: 139.765, name: "Янака + Асакура",     day: "День 10",          cat: "sight" },
  { lat: 35.633, lng: 139.880, name: "Disneyland",          day: "День 6",           cat: "fun"   },
  { lat: 35.454, lng: 139.649, name: "Daikoku PA (303 Garage drive)", day: "Ночь дня 2 · 8.06", cat: "night" },
  { lat: 35.246, lng: 139.052, name: "Хаконэ: Гора (Merveille)", day: "День 3–4",     cat: "trip"  },
  { lat: 35.244, lng: 139.019, name: "Овакудани (вид на Фудзи)", day: "День 3",       cat: "trip"  },
  { lat: 35.262, lng: 138.998, name: "Гора Кинтоки",        day: "День 4 ☀️",        cat: "trip"  },
  { lat: 35.205, lng: 139.026, name: "Озеро Аси + Хаконэ-дзиндзя", day: "День 4",     cat: "trip"  },
  { lat: 35.317, lng: 139.536, name: "Камакура (Большой Будда)", day: "День 8",       cat: "trip"  },
  { lat: 35.299, lng: 139.480, name: "Эносима",            day: "День 8",           cat: "trip"  },
];

// Границы для двух режимов карты [юг, запад, север, восток]
export const BOUNDS = {
  tokyo: [[35.575, 139.595], [35.78, 139.92]],
  all:   [[35.02, 138.60], [35.86, 140.05]],
};
