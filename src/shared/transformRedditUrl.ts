const createTldFromParts = (parts: string[]) =>
  "." + parts.slice(parts.indexOf("reddit") + 1).join(".");

export function transformRedditUrl(originalUrl: string): string | null {
  const url = new URL(originalUrl);

  if (url.pathname.startsWith("/r/")) {
    return null;
  }

  const hostnameParts = url.hostname.split(".");

  const tld = createTldFromParts(hostnameParts);
  if (hostnameParts[0] === "www") {
    if (hostnameParts[1] === "reddit") {
      return "https://reddit" + tld;
    }
    hostnameParts.shift();
  }

  const specialSubdomains = ["new", "old"];
  if (specialSubdomains.includes(hostnameParts[0])) {
    return null; // don't modify old.reddit.com or new.reddit.com urls
  }

  return "https://reddit" + tld + "/r/" + hostnameParts[0];
}
