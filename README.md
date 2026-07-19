# Phishing Detector (Chrome Extension)(Heuristic Analysis)

## Problem Statement
Phishing attacks are one of the most common entry points for cybercriminals, yet most everyday users have no real-time feedback on whether the site they are visiting is legitimate. Existing solutions either require paid subscriptions or rely entirely on cloud lookups that expose browsing history to third parties. There was no lightweight, local-first tool that could analyse a URL the moment a page loaded and surface a clear warning before the user entered any credentials. Without visibility into URL structure, protocol, and domain patterns, users are left vulnerable to lookalike domains, raw IP-based hosting, and abnormally long redirect URLs — all common phishing tactics.

## Solution Overview
This project is a Chrome Manifest V3 extension that performs real-time heuristic analysis on every URL a user visits and displays a Safe, Warning, or Danger status via a toolbar popup. A content script injected into every page parses the URL and runs four checks: HTTPS protocol enforcement, raw IP address detection, subdomain depth analysis, and URL length thresholding. Results are passed to a background service worker via the Chrome messaging API and stored in session storage, so the popup can retrieve them instantly on demand without timing conflicts. The architecture separates concerns cleanly across three scripts — content.js for detection, background.js for storage, and popup.js for display — following Chrome MV3 best practices. This approach requires no external API calls, no user data leaving the browser, and no account or subscription to function.

## Video Walkthrough
[Add your video walkthrough link placeholder here. You will record this tomorrow and update this link so visitors can see a live demonstration of your lab environment.]

## Tools Used
* HTML5
* CSS3
* JavaScript (ES6)
* Chrome Extension API's (Manifest V3)
* chrome.storage.session
* chrome.runtime messaging
* VS Code
* GitHub

## Project Timeline
* Day 1: Project setup — manifest.json, folder structure, and file scaffolding
* Day 2: Detection logic — content.js heuristics and IIFE implementation
* Day 3: Messaging architecture — background.js service worker and session storage
* Day 4: Popup UI — popup.html, popup.css, and popup.js storage reads
* Day 5: Debugging, testing, and GitHub documentation

## Key Accomplishments
* Built a fully functional Chrome MV3 extension from scratch with zero dependencies
* Implemented a four-signal heuristic detection engine that classifies URLs as Safe, Warning, or Danger in real time
* Designed a three-script messaging architecture that correctly handles the timing gap between content script execution and popup rendering
* Resolved a Chrome CSP violation by refactoring inline scripts into an IIFE pattern inside an external content script
* Documented the full project on GitHub with a structured README, file breakdown, and roadmap for Phase 2 API integration
