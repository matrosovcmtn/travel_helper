// Лёгкий парсер **bold** внутри строк данных — чтобы не хранить JSX в data-файлах.
export function rich(text) {
  if (!text) return text;
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part));
}
