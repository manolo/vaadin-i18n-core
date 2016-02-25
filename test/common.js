
function waitUntilLocaleAvailable(locale, callback) {
  if (window.moment && moment.localeData(locale)) {
    Polymer.Base.async(callback, 100);
  } else {
    setTimeout(waitUntilLocaleAvailable, 10, locale, callback);
  }
}
