(function() {
  if (!location.href.startsWith('http')) return;

  const u = new URL(location.href);
  const flags = [
    u.protocol !== 'https:',
    /^(\d{1,3}\.){3}\d{1,3}$/.test(u.hostname),
    u.hostname.split('.').length > 4,
    location.href.length > 100,
  ].filter(Boolean).length;

  const status = flags === 0 ? 'safe' : flags === 1 ? 'warning' : 'danger';
  chrome.runtime.sendMessage({ status, url: location.href });
})();