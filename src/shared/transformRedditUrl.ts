const createTldFromParts = (parts: string[]) =>
  "." + parts.slice(parts.indexOf("reddit") + 1).join(".");

const isInvalidRedditUrl = (url: URL) => {
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
    return true;
  }
  return false;
};

const createUrl = (tld: string, subreddit: string = "") => {
  return "https://reddit" + tld + (subreddit ? "/r/" + subreddit : "");
};

export function transformRedditUrl(originalUrl: string): string | null {
  const url = new URL(originalUrl);

  if (isInvalidRedditUrl(url)) {
    return null;
  }

  if (url.pathname.startsWith("/r/")) {
    return null;
  }

  if (url.pathname.length > 1) {
    return null; // skip pathed urls like https://www.reddit.com/message/unread/
  }

  if (url.pathname === "/" && originalUrl.endsWith("/")) {
    return null;
  }

  const hostnameParts = url.hostname.split(".");
  const tld = createTldFromParts(hostnameParts);

  if (hostnameParts[0] === "reddit") {
    return createUrl(tld);
  }

  if (hostnameParts[0] === "www") {
    if (hostnameParts[1] === "reddit") {
      return createUrl(tld);
    }
    hostnameParts.shift();
  }

  const specialSubdomains = ["new", "old"];
  if (specialSubdomains.includes(hostnameParts[0])) {
    return null; // don't modify old.reddit.com or new.reddit.com urls
  }

  return createUrl(tld, hostnameParts[0]);
}
