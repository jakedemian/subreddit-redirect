export function transformRedditUrl(originalUrl: string): string | null {
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
    return null;
  }

  const hostnameParts = url.hostname.split(".");
  let domainParts = hostnameParts.slice(-2);

  if (domainParts[1].length <= 2 && hostnameParts.length >= 3) {
    // Handle domains like 'reddit.co.uk'
    domainParts = hostnameParts.slice(-3);
  }

  const subdomains = hostnameParts.slice(
    0,
    hostnameParts.length - domainParts.length
  );

  const specialSubdomains = ["www", "new", "old"];

  if (subdomains.length > 0) {
    const subdomain = subdomains.join(".");

    if (!specialSubdomains.includes(subdomain)) {
      if (url.pathname.startsWith("/r/")) {
        // Remove the subdomain
        url.hostname = domainParts.join(".");
      } else {
        // Move the subdomain to the path
        url.hostname = domainParts.join(".");
        url.pathname = `/r/${subdomain}${url.pathname}`;
      }
      return url.toString();
    }
  }

  return null;
}
