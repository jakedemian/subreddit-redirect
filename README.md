# Subreddit Redirect

![Subreddit Redirect](./subreddit-redirect.png)

A browser extension that redirects Reddit URLs according to specified rules. This extension modifies Reddit URLs to ensure you're always directed to the correct subreddit, even if the URL contains unexpected subdomains.

## Features

- Redirects Reddit URLs with non-standard subdomains to the appropriate subreddit.
- Supports various Reddit domains, including international domains like `reddit.co.uk`, `reddit.fr`, etc.
- Compatible with both Chrome and Firefox browsers.

## How It Works

When you navigate to a Reddit URL, the extension checks:

- If the URL contains a subdomain other than `www`, `new`, or `old`, and **does not** contain `/r/` in the path, it moves the subdomain to the path as `/r/{subdomain}`.
- If the URL contains a subdomain other than `www`, `new`, or `old`, and **does** contain `/r/` in the path, it removes the subdomain.
- Special subdomains `www`, `new`, and `old` are left unchanged.

## Examples

- `https://xyz.reddit.com` redirects to `https://reddit.com/r/xyz`
- `politics.reddit.com/r/gaming` redirects to `https://reddit.com/r/gaming`
- `https://old.reddit.com/r/AskReddit` remains unchanged

## Installation

### Chrome

1. Clone or download this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the extension.
4. Open Chrome and navigate to `chrome://extensions/`.
5. Enable "Developer mode" by toggling the switch in the upper-right corner.
6. Click "Load unpacked" and select the `builds/chrome` directory within the project.

### Firefox

1. Clone or download this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to build the extension.
4. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
5. Click "Load Temporary Add-on..."
6. Select the `manifest.json` file inside the `builds/firefox` directory within the project.

## Development

### Prerequisites

- Node.js and npm installed on your machine.

### Building the Extension

```bash
npm install
npm run build
```

### Testing

```bash
npm install
npm run test
```
