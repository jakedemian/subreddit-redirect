chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    if (details.frameId !== 0) {
      return;
    }

    const originalUrl = details.url;
    const url = new URL(originalUrl);

    const redditDomains = [
      "reddit.com",
      "reddit.co.uk",
      "reddit.fr",
      "reddit.de",
      "reddit.jp",
      "reddit.in",
      "reddit.ca",
      "reddit.ru",
    ];

    if (!redditDomains.some((domain) => url.hostname.endsWith(domain))) {
      return;
    }

    const hostnameParts = url.hostname.split(".");
    const domainParts = hostnameParts.slice(-2);

    if (domainParts[1].length <= 2) {
      domainParts.unshift(hostnameParts[hostnameParts.length - 3]);
    }

    const subdomains = hostnameParts.slice(
      0,
      hostnameParts.length - domainParts.length
    );

    const specialSubdomains = ["www", "new", "old"];

    let shouldRedirect = false;

    if (subdomains.length > 0) {
      const subdomain = subdomains.join(".");

      if (!specialSubdomains.includes(subdomain)) {
        if (url.pathname.startsWith("/r/")) {
          url.hostname = domainParts.join(".");
        } else {
          url.hostname = domainParts.join(".");
          url.pathname = `/r/${subdomain}${url.pathname}`;
        }
        shouldRedirect = true;
      }
    }

    if (shouldRedirect) {
      if (originalUrl !== url.toString()) {
        chrome.tabs.update(details.tabId, { url: url.toString() });
      }
    }
  },
  { url: [{ urlMatches: ".*" }] }
);
