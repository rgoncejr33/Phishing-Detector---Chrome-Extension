# What it does

Every time you visit a page, the extension silently checks the URL against a set of phishing signals and displays one of three statuses when you click the toolbar icon:

| Status | Meaning of the message |
| :--- | :--- |
| ✅ Safe | No phishing signals detected |
| ⚠️ Warning | One suspicious signal found |
| ❌ Danger | Multiple high-risk signals detected |

# Detection checks

The extension currently runs four heuristic checks on every URL:


* HTTPS protocol — flags pages not using a secure connection
* Raw IP address — flags hostnames like 192.168.1.1 instead of a real domain
* Subdomain depth — flags URLs with an unusual number of subdomains
* URL length — flags URLs over 100 characters, a common phishing tactic

# Project Structure

phishing-detector/
* manifest.json      # Extension config and permissions (MV3)
* popup.html         # Toolbar popup UI
* popup.css          # Popup styles
* popup.js           # Reads scan result from storage and updates the UI
* content.js         # Injected into every page — runs heuristic checks
*  background.js      # Service worker — receives messages and stores results
