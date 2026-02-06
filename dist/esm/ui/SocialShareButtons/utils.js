export default function objectToGetParams(object) {
    const params = Object.entries(object)
        .filter(([, value]) => value !== undefined && value !== null)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    return params.length > 0 ? `?${params.join("&")}` : "";
}
export function openShareWindow(shareUrl, windowWidth = 550, windowHeight = 400) {
    const left = window.screen.width / 2 - windowWidth / 2;
    const top = window.screen.height / 2 - windowHeight / 2;
    const popup = window.open(shareUrl, "share-window", `width=${windowWidth},height=${windowHeight},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes,noopener,noreferrer`);
    if (popup)
        popup.opener = null;
}
