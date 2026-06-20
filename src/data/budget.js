export const JPY = 0.48; // 1 JPY = 0,48 ₽
export const USD = 75;   // 1 USD = 75 ₽

// Итоговая сводка по поездке
export const SUMMARY_DATE = "18 июня 2026 · ИТОГ";
export const RATE_NOTE = "Курс: $1 = 75 ₽ · наличные: $900 обмен + 10 000¥ с карты — потрачено всё.";

// Потрачено — по категориям (всё по факту)
export const SPENT_GROUPS = [
  {
    title: "До поездки", color: "#3a9a5a",
    items: [
      { name: "Авиабилеты (2 чел., China Southern)", rub: 105430 },
      { name: "Airbnb Коэндзи (12 ночей)", rub: 62000 },
      { name: "Тинькофф Премиум (страховка + зал)", rub: 3000 },
    ],
  },
  {
    title: "Транспорт в Японии", color: "#5566cc",
    items: [
      { name: "Хаконэ Фрипасс (2 чел.)", rub: 7100 },
      { name: "Романскар (Синдзюку → Хаконэ)", rub: 2400 },
      { name: "Keikyu (Ханеда → Синагава)", rub: 555 },
    ],
  },
  {
    title: "Жильё в Японии", color: "#c07020",
    items: [
      { name: "Рёкан Merveille, 1 ночь", rub: 19250, note: "кайсэки-ужин + завтрак + онсэн" },
    ],
  },
  {
    title: "Связь", color: "#8844cc",
    items: [
      { name: "Airalo eSIM ×3 ($49 + $24 + $4)", rub: 5775 },
    ],
  },
  {
    title: "Еда и прочее", color: "#cc3322",
    items: [
      { name: "Наличными ~136 500¥ — рестораны, конбини, продукты, спортзал", rub: 65290 },
      { name: "Карта — рестораны / конбини / кафе / аптека (вся поездка)", rub: 25964, note: "$~346" },
    ],
  },
  {
    title: "Развлечения", color: "#aa4488",
    items: [
      { name: "Disneyland — билеты (2 чел.)", rub: 8826, note: "$117,68" },
      { name: "Disneyland — фасттреки (Premier Access)", rub: 4713, note: "$62,84" },
      { name: "Disneyland — еда / мерч в парке", rub: 1532, note: "$20,43" },
      { name: "teamLab Borderless (2 чел.)", rub: 3767, note: "$50,23" },
      { name: "Дайкоку: драйв с 303 Garage", rub: 4000 },
    ],
  },
  {
    title: "Шоппинг", color: "#d07020",
    items: [
      { name: "Одежда (Гинза), наличными", rub: 6985, note: "14 600¥" },
      { name: "По карте — Uniqlo, Don Quijote ×2, ABC-Mart", rub: 19127, note: "$255" },
    ],
  },
  {
    title: "Пересадка (Гуанчжоу)", color: "#8a8a9a",
    items: [
      { name: "Отель Lemeian + 7-Eleven (не Япония)", rub: 3659, note: "$48,79" },
    ],
  },
];

// Поездка завершена — планов больше нет
export const PLANNED = [];

export const CASH_ON_HAND = { yen: 0, rub: 0 };

export const totalSpent = SPENT_GROUPS.reduce(
  (s, g) => s + g.items.reduce((a, i) => a + i.rub, 0), 0
);
export const totalPlanned = PLANNED.reduce((s, i) => s + i.rub, 0);

export const FORECAST_TOTAL = totalSpent; // итог по факту

export function fmt(n) {
  return n.toLocaleString("ru-RU") + " ₽";
}
