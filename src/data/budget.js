export const JPY = 0.48; // 1 JPY = 0,48 ₽
export const USD = 75;   // 1 USD = 75 ₽

// Сводка фактических трат
export const SUMMARY_DATE = "11 июня 2026";
export const RATE_NOTE = "Курс: $1 = 75 ₽ · обмен наличных 158¥/$";

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
    title: "Еда и прочее", color: "#cc3322",
    items: [
      { name: "Наличными ~45 300¥ — комбини, рестораны, продукты, спортзал", rub: 21500 },
      { name: "RAKUTENPAY OMUKAI (ресторан)", rub: 1845 },
      { name: "Village Vanguard Симокитадзава", rub: 1143 },
      { name: "7-Eleven + FamilyMart", rub: 467 },
    ],
  },
];

// Ещё запланировано (не оплачено)
export const PLANNED = [
  { name: "Disneyland (12 июня, 2 чел.)", rub: 11000 },
  { name: "teamLab Borderless (15 июня, 2 чел.)", rub: 3600 },
  { name: "Еда + транспорт, оставшиеся 7 дней", rub: 35000, note: "оценка" },
];

export const CASH_ON_HAND = { yen: 5000, rub: 2370 };
export const FORECAST_TOTAL = 302000; // оценка итога поездки, без шоппинга

export const totalSpent = SPENT_GROUPS.reduce(
  (s, g) => s + g.items.reduce((a, i) => a + i.rub, 0), 0
);
export const totalPlanned = PLANNED.reduce((s, i) => s + i.rub, 0);

export function fmt(n) {
  return n.toLocaleString("ru-RU") + " ₽";
}
