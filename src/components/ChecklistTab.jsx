import { useState, useEffect } from "react";
import { T } from "../theme.js";

const SECTIONS = [
  {
    title: "❗ СРОЧНО — ДО ПОЕЗДКИ", color: T.RED,
    items: [
      { key: "ryokan", text: "Купить Hakone Freepass (2 чел.)", sub: "2-дневный из Синдзюку ~¥6,100/чел — Tozan, канатка, кораблик, автобусы (Romancecar отдельно)", urgent: true },
      { key: "disney", text: "Купить билеты Disneyland на 12 июня (пт)", sub: "tokyodisneyresort.jp — билеты ДАТНЫЕ, конкретно на пятницу; даты раскупают, брать сейчас", urgent: true },
      { key: "teamlab", text: "Перебронировать teamLab Borderless", sub: "teamlab.art — Адзабудай, 17 июня (ср): пропал в пн (болезнь), во вт закрыт. Слот на среду!", urgent: true },
      { key: "romance", text: "Купить Odakyu Romancecar", sub: "odakyu.jp/english — Синдзюку→Хаконэ 9 июня, ¥2,470/чел", urgent: true },
      { key: "cafe", text: "Забронировать тематическое кафе", sub: "Temari no Ouchi (кошки) или Mèow — онлайн, день 9 (15 июня)", urgent: true },
    ],
  },
  {
    title: "📱 СКАЧАТЬ ПРИЛОЖЕНИЯ", color: "#5566cc",
    items: [
      { key: "gmaps", text: "Google Maps", sub: "Скачать офлайн-карты: Tokyo, Kanagawa Prefecture" },
      { key: "gtrans", text: "Google Translate", sub: "Скачать офлайн языковой пакет: Японский — нужен для меню и вывесок" },
      { key: "suica", text: "Suica (Apple/Google Wallet)", sub: "Или купить физическую карту на станции Коэндзи в первый день" },
      { key: "go", text: "GO — такси", sub: "По городу / ночью, если нет прямого метро" },
      { key: "odakyu", text: "Odakyu App", sub: "Для покупки/проверки билетов Romancecar" },
      { key: "navitime", text: "Japan Travel by NAVITIME", sub: "Лучший навигатор по японскому транспорту — маршруты поездов/автобусов" },
      { key: "deepl", text: "DeepL или Yandex Translate", sub: "Резервный переводчик" },
    ],
  },
  {
    title: "🎫 БИЛЕТЫ И БРОНИРОВАНИЯ", color: "#3a9a5a",
    items: [
      { key: "t_disney", text: "Disneyland", sub: "tokyodisneyresort.jp — 12 июня (пт), датный билет", urgent: true },
      { key: "t_teamlab", text: "teamLab Borderless", sub: "teamlab.art — Адзабудай, 17 июня (ср)", urgent: true },
      { key: "t_romance", text: "Romancecar", sub: "odakyu.jp — 9 июня, поезд 8:31 из Синдзюку (прибытие 10:18)", urgent: true },
      { key: "t_ryokan", text: "✅ Merveille Hakone Gora", sub: "Гора · ночь 9 июня · заезд 15–18, выезд до 10" },
      { key: "t_daikoku", text: "✅ Дайкоку drive (303 Garage) — куплено", sub: "8 июня 19:00 — старт от гаража в Синдзюку" },
      { key: "t_enoden", text: "Камакура: Enoden 1-day pass (Noriorikun)", sub: "~¥800 — покупается на месте, на ст. Камакура. 13 июня" },
    ],
  },
  {
    title: "🧳 ЧТО ВЗЯТЬ", color: "#c07020",
    items: [
      { key: "p_passport", text: "Загранпаспорта (оба)" },
      { key: "p_tickets", text: "Авиабилеты — скриншот или распечатка", sub: "Рейс CZ-656 5 июня 21:15 SVO" },
      { key: "p_airbnb", text: "Код Airbnb: HMK8PS4PTW", sub: "3-chome-29-14 Matsunoki, Suginami City" },
      { key: "p_insure", text: "Страховка Tinkoff Premium — активна" },
      { key: "p_umbrella", text: "Складной зонт или дождевик", sub: "Июнь = сезон дождей, без вариантов" },
      { key: "p_shoes", text: "Удобная обувь — только удобная", sub: "15,000–20,000 шагов в день" },
      { key: "p_powerbank", text: "Powerbank" },
      { key: "p_adapter", text: "Адаптер не нужен", sub: "Japan Type A = EU вилка совместима" },
      { key: "p_cash", text: "Наличные ¥20,000–30,000", sub: "Снять в банкомате 7-Eleven или Japan Post в Ханеде" },
      { key: "p_plasters", text: "Пластыри для ног", sub: "Много ходьбы — аптека в Ханеде или первый kombini" },
    ],
  },
];

const STORE_KEY = "travel_helper_checklist";

export default function ChecklistTab() {
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(done));
  }, [done]);

  const tog = (k) => setDone((p) => ({ ...p, [k]: !p[k] }));

  return (
    <div>
      {SECTIONS.map(({ title, color, items }) => (
        <div key={title} style={{ marginBottom: 12, padding: "14px 16px", background: T.CARD, borderRadius: 12, border: `1px solid ${T.BORDER}` }}>
          <div style={{ fontSize: 10, letterSpacing: 2.5, fontWeight: 700, color, marginBottom: 12 }}>{title}</div>
          {items.map(({ key, text, sub, urgent }) => (
            <div
              key={key}
              onClick={() => tog(key)}
              style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10, cursor: "pointer", opacity: done[key] ? 0.45 : 1 }}
            >
              <div
                style={{
                  width: 18, height: 18, borderRadius: 4,
                  border: `2px solid ${done[key] ? "#3a9a5a" : T.BORDER}`,
                  background: done[key] ? "#3a9a5a" : "#fff",
                  flexShrink: 0, marginTop: 2,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {done[key] && <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>✓</span>}
              </div>
              <div>
                <div style={{ fontSize: 13.5, color: T.TEXT, fontWeight: 500, textDecoration: done[key] ? "line-through" : "none" }}>
                  {urgent && !done[key] && <span style={{ color: T.RED, fontWeight: 700, marginRight: 4 }}>❗</span>}
                  {text}
                </div>
                {sub && <div style={{ fontSize: 11, color: T.MUTED, marginTop: 2 }}>{sub}</div>}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div style={{ padding: "10px 14px", background: "#fffdf5", borderRadius: 10, border: "1px solid #e8e0c0", fontSize: 12, color: T.MUTED }}>
        💡 Японские банкоматы 7-Eleven и Japan Post принимают иностранные карты Visa/Mastercard. Наличные нужны — многие кафе и рёканы не берут карту.
      </div>
    </div>
  );
}
