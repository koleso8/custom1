export function convertMilliseconds(ms) {
  let total_seconds = parseInt(Math.floor(ms / 1000));
  let total_minutes = parseInt(Math.floor(total_seconds / 60));
  let total_hours = parseInt(Math.floor(total_minutes / 60));
  let days = parseInt(Math.floor(total_hours / 24));

  let seconds = parseInt(total_seconds % 60);
  let minutes = parseInt(total_minutes % 60);
  let hours = parseInt(total_hours % 24);

  return { d: days, h: hours, m: minutes, s: seconds };
}

export function time2Str({ d, h, m, s }) {
  d = d.toString().padStart(2, '0');
  h = h.toString().padStart(2, '0');
  m = m.toString().padStart(2, '0');
  s = s.toString().padStart(2, '0');
  return `${d} днів              ${h}:${m}:${s}`;
}
