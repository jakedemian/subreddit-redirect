import { transformRedditUrl } from "./transformRedditUrl";

describe("transformRedditUrl", () => {
  it("should transform https://xyz.reddit.com to https://reddit.com/r/xyz", () => {
    const originalUrl = "https://xyz.reddit.com";
    const expectedUrl = "https://reddit.com/r/xyz/";

    const result = transformRedditUrl(originalUrl);

    expect(result).toBe(expectedUrl);
  });
});
