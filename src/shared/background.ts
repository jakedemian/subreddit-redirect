import { transformRedditUrl } from "./transformRedditUrl";

if (typeof chrome !== "undefined" && chrome.webNavigation) {
  chrome.webNavigation.onBeforeNavigate.addListener(
    (details) => {
      if (details.frameId !== 0) {
        return;
      }

      const originalUrl = details.url;
      const newUrl = transformRedditUrl(originalUrl);

      if (newUrl && newUrl !== originalUrl) {
        chrome.tabs.update(details.tabId, { url: newUrl });
      }
    },
    { url: [{ urlMatches: ".*" }] }
  );
}
