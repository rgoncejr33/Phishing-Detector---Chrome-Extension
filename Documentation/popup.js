chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tabId = String(tabs[0].id);

  chrome.storage.session.get([tabId], (data) => {
    const result = data[tabId];

    if (result) {
      document.getElementById('statusLabel').textContent = result.status.toUpperCase();
      document.getElementById('urlDisplay').textContent = result.url;
    } else {
      document.getElementById('statusLabel').textContent = 'Reload the page to scan';
      document.getElementById('urlDisplay').textContent = location.href;
    }
  });
});