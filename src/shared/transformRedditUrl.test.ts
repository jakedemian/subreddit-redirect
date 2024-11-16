import { transformRedditUrl } from "./transformRedditUrl";

describe("transformRedditUrl", () => {
  it("xyz.reddit.com -> reddit.com/r/xyz", () => {
    const originalUrl = "https://xyz.reddit.com";
    const transformedUrl = "https://reddit.com/r/xyz";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("new.reddit.com -> new.reddit.com", () => {
    const originalUrl = "https://new.reddit.com";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("old.reddit.com -> old.reddit.com", () => {
    const originalUrl = "https://old.reddit.com";
    const transformedUrl = null; // url is unchanged

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("www.reddit.com -> www.reddit.com", () => {
    const originalUrl = "https://www.reddit.com";
    const transformedUrl = "https://reddit.com";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("www.xyz.reddit.com -> reddit.com/r/xyz", () => {
    const originalUrl = "https://www.xyz.reddit.com";
    const transformedUrl = "https://reddit.com/r/xyz";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
  it("www.xyz.reddit.co.uk -> reddit.co.uk/r/xyz", () => {
    const originalUrl = "https://xyz.reddit.co.uk";
    const transformedUrl = "https://reddit.co.uk/r/xyz";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(transformedUrl);
  });
});
