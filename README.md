<p align="center">\n  <img src=".github/assets/project-banner.svg" alt="Animated Life Management project banner" width="100%" />\n</p>\n\n# Life Management

A collection of small browser-based productivity interfaces built with vanilla JavaScript, HTML, and CSS. The repository currently contains separate task manager, weekly habit tracker, Mogadishu clock, and login-form prototypes.

## ✨ Implemented features

### ✅ Task manager

- Add a task with a General, Study, or Work category
- Mark tasks complete
- View total, in-progress, and completed counters

### 🔁 Habit tracker

- Track three predefined habits across seven day buttons
- View the percentage of weekly habit checks completed
- Navigate between the habit and task pages

### 🧪 Additional prototypes

- Display Mogadishu time using the WorldTimeAPI service
- Validate a login form against a JSON response expected from a local endpoint

## 🧰 Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser DOM and event APIs
- Fetch API

## 🚀 Run locally

No build step is required. Start a static server from the repository root:

```powershell
python -m http.server 8000
```

Then open:

- Task manager: <http://localhost:8000/src/task/task.html>
- Habit tracker: <http://localhost:8000/src/habit/habit.html>
- Mogadishu clock: <http://localhost:8000/src/timer/timer.html>
- Login prototype: <http://localhost:8000/src/Log/log.html>

The clock requires an internet connection to call WorldTimeAPI. The login prototype also expects a separate JSON endpoint at `http://localhost:3000/users.json`.

## 💾 Data persistence and offline behavior

The current task and habit data are stored only in JavaScript memory. They reset when the page reloads, and the repository does not currently use LocalStorage for persistence. The task and habit interfaces can run from local static files, while the clock and login prototypes depend on external or local HTTP services.

## 📌 Scope

Goals, notes management, focus sessions, search, streak tracking, data export/import, theme switching, and keyboard shortcuts are not implemented in the current codebase.

## 🎯 Skills demonstrated

- DOM creation and updates
- Form and button event handling
- In-memory state and derived progress counters
- Basic responsive page styling
- Fetching JSON from an HTTP endpoint

## 👤 Author

Khalid Abdullahi Isse

[GitHub](https://github.com/khalidabdullahiesse-hash) · [LinkedIn](https://www.linkedin.com/in/khalid-abdullahi-isse-0461a3366)
