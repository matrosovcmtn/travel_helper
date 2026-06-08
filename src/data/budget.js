export const JPY = 0.48; // 1 JPY = 0,48 ₽
export const USD = 75;   // 1 USD = 75 ₽

export const BUDGET = {
  paid: [
    { name: "Авиабилеты (2 чел.)", rub: 105430, note: "China Southern, оплачено" },
    { name: "Airbnb Коэндзи (12 ночей)", rub: 62000, note: "Suginami City, 6–18 июня" },
    { name: "Tinkoff Premium", rub: 3000, note: "Страховка + бизнес-зал включены" },
  ],
  upcoming: [
    { name: "Merveille Hakone Gora (1 ночь)", rub: Math.round(250 * USD), note: "Гора, 5 мин от станции · онсэн + кайсэки" },
    { name: "Odakyu Romancecar (2 чел.)", rub: Math.round(4940 * JPY), note: "Синдзюку↔Хаконэ-Юмото ¥2,470/чел (доплата) — уже куплена" },
    { name: "Hakone Freepass (2 чел.)", rub: Math.round(6100 * 2 * JPY), note: "2-дневный из Синдзюку ¥6,100/чел — Tozan, канатка, кораблик, автобусы" },
    { name: "Disneyland (2 билета)", rub: Math.round(10900 * 2 * JPY), note: "¥10,900 × 2 — tokyodisneyresort.jp" },
    { name: "teamLab Borderless (2 билета)", rub: Math.round(4800 * 2 * JPY), note: "¥4,800 × 2 (вс, Адзабудай) — teamlab.art" },
  ],
  variable: [
    { name: "Еда (12 дней × 2 чел.)", rub: 40000, note: "Kombini + обеды + ужины" },
    { name: "Транспорт по Токио (Suica)", rub: Math.round(500 * 2 * 12 * JPY), note: "~¥500 × 2 × 12 дней" },
    { name: "Daikoku (Uber туда-обратно)", rub: Math.round(8500 * JPY), note: "~¥8,500 обе стороны" },
    { name: "Клуб (вход + напитки, 2 чел.)", rub: Math.round(11000 * JPY), note: "WOMB или Zero Tokyo" },
    { name: "Музеи / смотровые / прочее", rub: Math.round(22000 * JPY), note: "Уэно (TNM+NMWA+Хорюдзи), Нэдзу, Мэйдзи, Асакура, Тэйэн, Mori — на двоих" },
  ],
};

export const totalPaid = BUDGET.paid.reduce((s, i) => s + i.rub, 0);
export const totalUpcoming = BUDGET.upcoming.reduce((s, i) => s + i.rub, 0);
export const totalVariable = BUDGET.variable.reduce((s, i) => s + i.rub, 0);
export const grandTotal = totalPaid + totalUpcoming + totalVariable;

export function fmt(n) {
  return n.toLocaleString("ru-RU") + " ₽";
}
