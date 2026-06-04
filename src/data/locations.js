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
  { lat: 35.715, lng: 139.797, name: "Асакуса",             day: "День 4",           cat: "sight" },
  { lat: 35.719, lng: 139.774, name: "Уэно",                day: "День 4",           cat: "art"   },
  { lat: 35.702, lng: 139.774, name: "Акихабара",           day: "День 4",           cat: "shop"  },
  { lat: 35.694, lng: 139.704, name: "Синдзюку",            day: "День 5",           cat: "sight" },
  { lat: 35.676, lng: 139.699, name: "Мэйдзи-дзингу",       day: "День 6",           cat: "sight" },
  { lat: 35.670, lng: 139.703, name: "Харадзюку",           day: "День 6",           cat: "shop"  },
  { lat: 35.658, lng: 139.702, name: "Сибуя",               day: "День 6",           cat: "sight" },
  { lat: 35.648, lng: 139.703, name: "Дайканьяма",          day: "День 7",           cat: "art"   },
  { lat: 35.644, lng: 139.699, name: "Накамэгуро",          day: "День 7",           cat: "sight" },
  { lat: 35.672, lng: 139.765, name: "Гиндза",              day: "День 7",           cat: "shop"  },
  { lat: 35.659, lng: 139.741, name: "teamLab Borderless",  day: "День 8",           cat: "art"   },
  { lat: 35.732, lng: 139.750, name: "Кагурадзака",         day: "День 8",           cat: "sight" },
  { lat: 35.660, lng: 139.729, name: "Роппонги (Mori/NACT)", day: "День 11",         cat: "art"   },
  { lat: 35.727, lng: 139.765, name: "Янака",               day: "День 10",          cat: "sight" },
  { lat: 35.633, lng: 139.880, name: "Disneyland",          day: "День 9",           cat: "fun"   },
  { lat: 35.454, lng: 139.649, name: "Daikoku PA",          day: "Ночь дня 6",       cat: "night" },
  { lat: 35.234, lng: 139.106, name: "Хаконэ (рёкан)",      day: "День 2–3",         cat: "trip"  },
  { lat: 35.262, lng: 138.998, name: "Гора Кинтоки",        day: "День 3 ☀️",        cat: "trip"  },
  { lat: 35.096, lng: 139.072, name: "Атами",               day: "День 3 ⛅",         cat: "trip"  },
  { lat: 35.509, lng: 138.754, name: "Фудзи / Кавагутико",  day: "День 2",           cat: "trip"  },
];

// Границы для двух режимов карты [юг, запад, север, восток]
export const BOUNDS = {
  tokyo: [[35.575, 139.595], [35.78, 139.92]],
  all:   [[35.02, 138.60], [35.86, 140.05]],
};
