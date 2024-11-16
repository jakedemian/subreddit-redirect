chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  console.log("Navigating to URL:", details.url);
});
