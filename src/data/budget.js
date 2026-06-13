export const JPY = 0.48; // 1 JPY = 0,48 ₽
export const USD = 75;   // 1 USD = 75 ₽

// Сводка фактических трат
export const SUMMARY_DATE = "13 июня 2026";
export const RATE_NOTE = "Курс: $1 = 75 ₽ · наличные: $800 обмен + 30 000¥ с карты = 155 400¥, на руках 42 000¥";

// Уже потрачено — по категориям
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
      { name: "Дайкоку: драйв с 303 Garage", rub: 4000 },
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
    title: "Развлечения", color: "#aa4488",
    items: [
      { name: "Disneyland — билеты (2 чел.)", rub: 8826, note: "$117,68" },
      { name: "Disneyland — фасттреки (Premier Access)", rub: 4713, note: "$62,84 · «5к на фасттреки»" },
      { name: "Disneyland — еда / мерч в парке", rub: 1532, note: "$20,43" },
    ],
  },
  {
    title: "Еда и прочее", color: "#cc3322",
    items: [
      { name: "Наличными ~113 400¥ — комбини, рестораны, продукты, спортзал, онсэн", rub: 54270 },
      { name: "Карта 12–13 июня — конбини, Старбакс, аптека, Хамарикю", rub: 3994, note: "$53,25" },
      { name: "RAKUTENPAY OMUKAI (ресторан)", rub: 1845 },
      { name: "Village Vanguard Симокитадзава", rub: 1143 },
      { name: "7-Eleven + FamilyMart", rub: 467 },
    ],
  },
];

// Ещё запланировано (не оплачено)
export const PLANNED = [
  { name: "teamLab Borderless (15 июня, 2 чел.)", rub: 3600 },
  { name: "Еда + транспорт, оставшиеся ~5 дней", rub: 25000, note: "оценка" },
];

export const CASH_ON_HAND = { yen: 42000, rub: 20100 };
export const FORECAST_TOTAL = 318000; // оценка итога поездки, без шоппинга (поднята: налички ушло больше)

export const totalSpent = SPENT_GROUPS.reduce(
  (s, g) => s + g.items.reduce((a, i) => a + i.rub, 0), 0
);
export const totalPlanned = PLANNED.reduce((s, i) => s + i.rub, 0);

export function fmt(n) {
  return n.toLocaleString("ru-RU") + " ₽";
}
