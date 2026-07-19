chrome.runtime.onInstalled.addListener(() => {
    console.log('Phishing Detector ready');
});
chrome.runtime.onMessage.addListener((message, sender) => {
    if (!sender.tab?.id) return;
    console.log(`Tab ${sender.tab.id}: ${message.status}`);
    chrome.storage.session.set({
        [sender.tab.id]: { status: message.status, url: message.url }
    })
});
