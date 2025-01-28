import { transformRedditUrl } from "./transformRedditUrl";

describe("transformRedditUrl", () => {
  it("xyz.reddit.com          -> reddit.com/r/xyz", () => {
    const originalUrl = "https://xyz.reddit.com";
    const transformedUrl = "https://reddit.com/r/xyz";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("new.reddit.com          -> NOOP", () => {
    const originalUrl = "https://new.reddit.com";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("old.reddit.com          -> NOOP", () => {
    const originalUrl = "https://old.reddit.com";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("www.reddit.com          -> www.reddit.com", () => {
    const originalUrl = "https://www.reddit.com";
    const transformedUrl = "https://reddit.com";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("www.xyz.reddit.com      -> reddit.com/r/xyz", () => {
    const originalUrl = "https://www.xyz.reddit.com";
    const transformedUrl = "https://reddit.com/r/xyz";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("www.xyz.reddit.co.uk    -> reddit.co.uk/r/xyz", () => {
    const originalUrl = "https://xyz.reddit.co.uk";
    const transformedUrl = "https://reddit.co.uk/r/xyz";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("reddit.com              -> reddit.com", () => {
    const originalUrl = "https://reddit.com";
    const transformedUrl = "https://reddit.com";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("github.com              -> NOOP", () => {
    const originalUrl = "https://github.com";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("https://www.reddit.com/message/unread/ -> NOOP", () => {
    const originalUrl = "https://www.reddit.com/message/unread/";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("https://www.reddit.com/svc/shreddit/events -> NOOP", () => {
    const originalUrl = "https://www.reddit.com/svc/shreddit/events";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("https://www.reddit.com/ -> NOOP", () => {
    const originalUrl = "https://www.reddit.com/";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("http://nba.reddit.com/   -> https://reddit.com/r/nba", () => {
    const originalUrl = "http://nba.reddit.com/";
    const transformedUrl = "https://reddit.com/r/nba";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
});
