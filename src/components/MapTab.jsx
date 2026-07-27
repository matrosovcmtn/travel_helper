import { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, Popup, useMap } from "react-leaflet";
import { T } from "../theme.js";

// Плавно подгоняет видимую область под выбранный режим
function FitBounds({ bounds }) {
  const map = useMap();
  useEffect(() => {
    map.flyToBounds(bounds, { padding: [40, 40], duration: 0.6 });
  }, [bounds, map]);
  return null;
}

export default function MapTab({ locations, categories, bounds, views, defaultView }) {
  const [view, setView] = useState(defaultView || views[0][0]);

  // В "узком" режиме показываем только точки внутри его рамки
  const visible = useMemo(() => {
    if (view === "all") return locations;
    const [[s, w], [n, e]] = bounds[view];
    return locations.filter((l) => l.lat >= s && l.lat <= n && l.lng >= w && l.lng <= e);
  }, [view, locations, bounds]);

  const cats = useMemo(() => [...new Set(visible.map((m) => m.cat))], [visible]);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
        {views.map(([k, l]) => (
          <button
            key={k}
            onClick={() => setView(k)}
            style={{
              padding: "7px 16px", borderRadius: 8, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600,
              background: view === k ? T.RED : T.CHIP, color: view === k ? "#fff" : "#555",
            }}
          >
            {l}
          </button>
        ))}
      </div>

      <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${T.BORDER}` }}>
        <MapContainer
          bounds={bounds[defaultView || views[0][0]]}
          boundsOptions={{ padding: [40, 40] }}
          scrollWheelZoom
          style={{ width: "100%", height: 460 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FitBounds bounds={bounds[view]} />
          {visible.map((m, i) => {
            const color = categories[m.cat]?.color || "#888";
            return (
              <CircleMarker
                key={m.name + i}
                center={[m.lat, m.lng]}
                radius={m.cat === "base" ? 9 : 7}
                pathOptions={{ color: "#fff", weight: 2, fillColor: color, fillOpacity: 0.95 }}
              >
                <Tooltip direction="top" offset={[0, -6]} opacity={1} className="loc-label">
                  {m.name}
                </Tooltip>
                <Popup>
                  <div style={{ fontFamily: "Outfit, sans-serif" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: T.TEXT }}>{m.name}</div>
                    <div style={{ fontSize: 12, color: T.MUTED, marginTop: 2 }}>{m.day}</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 6, fontSize: 11, color: "#555" }}>
                      <span style={{ width: 8, height: 8, borderRadius: "50%", background: color }} />
                      {categories[m.cat]?.label || m.cat}
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>
      </div>
      <div style={{ marginTop: 6, fontSize: 11, color: T.MUTED, textAlign: "center" }}>
        Карта OpenStreetMap · колесо мыши — зум · наведите на точку для названия, кликните для деталей
      </div>

      {/* Легенда */}
      <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 10 }}>
        {cats.map((c) => (
          <div key={c} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11.5, color: "#555" }}>
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: categories[c]?.color || "#888" }} />
            {categories[c]?.label || c}
          </div>
        ))}
      </div>

      {/* Список мест */}
      <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
        {visible.map((loc, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "5px 10px", borderRadius: 20,
              background: "#fff", border: `1px solid ${T.BORDER}`, fontSize: 12,
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: categories[loc.cat]?.color || "#888", flexShrink: 0 }} />
            <b style={{ color: T.TEXT }}>{loc.name}</b>
            <span style={{ color: T.MUTED }}>{loc.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
