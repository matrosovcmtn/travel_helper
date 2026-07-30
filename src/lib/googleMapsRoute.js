// Собирает ссылку на маршрут в Google Maps из списка точек в порядке посещения
export function buildRouteUrl(points, mode = "transit") {
  if (!points || points.length < 2) return null;
  const coord = (p) => `${p.lat},${p.lng}`;
  const params = new URLSearchParams({
    api: "1",
    origin: coord(points[0]),
    destination: coord(points[points.length - 1]),
    travelmode: mode,
  });
  const waypoints = points.slice(1, -1).map(coord).join("|");
  if (waypoints) params.set("waypoints", waypoints);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

// Ссылка на одну точку в Google Maps (пин с поиском по координатам)
export function buildPinUrl(loc) {
  if (!loc) return null;
  const params = new URLSearchParams({ api: "1", query: `${loc.lat},${loc.lng}` });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
