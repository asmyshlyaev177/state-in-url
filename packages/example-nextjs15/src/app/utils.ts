export function stringToHash(text: string) {
  if (!text.length) return '0';

  let hash = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  return String(hash);
}
