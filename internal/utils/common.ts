export const sanitizeUrl = (url: string) => {
  return url.replace(/\s+/g, '-').toLowerCase();
}