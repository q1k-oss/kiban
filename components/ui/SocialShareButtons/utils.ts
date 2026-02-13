/**
 * Builds a URL query string from an object's entries.
 *
 * URL-encodes keys and values and omits entries whose value is `null` or `undefined`.
 *
 * @param object - Mapping of query parameter names to string, number, `null`, or `undefined`.
 * @returns The query string prefixed with `?` (for example `"?a=1&b=foo"`) or an empty string if no parameters remain.
 */
export default function objectToGetParams(object: {
  [key: string]: string | number | undefined | null;
}) {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`,
    );

  return params.length > 0 ? `?${params.join("&")}` : "";
}

/**
 * Opens a centered popup window to load a sharing URL.
 *
 * If the popup is created, its opener is detached (`popup.opener = null`) to reduce cross-window access.
 *
 * @param shareUrl - The URL to load in the popup.
 * @param windowWidth - Popup width in pixels (default 550).
 * @param windowHeight - Popup height in pixels (default 400).
 */
export function openShareWindow(
  shareUrl: string,
  windowWidth = 550,
  windowHeight = 400,
) {
  const left = window.screen.width / 2 - windowWidth / 2;
  const top = window.screen.height / 2 - windowHeight / 2;
  const popup = window.open(
    shareUrl,
    "share-window",
    `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes,noopener,noreferrer`,
  );
  if (popup) popup.opener = null;
}