# Trade Analytics Dashboard

## 1. Introduction
**Trade Analytics Dashboard** is a web-based platform to monitor trading performance in real-time.  
Built with **React (Vite)** for frontend and **Node.js + Express** for backend, it visualizes metrics, recent trades, and charts for trading analytics.

---

## 2. Project Summary
- View recent trades with P/L and result (Win/Loss).  
- Monitor key metrics like total profit, win rate, and trades count.  
- Interactive charts for trading trends.  
- Responsive layout for desktop and mobile devices.  

---

## 3. Key Features / Functions
- **Analytics Sidebar & Topbar** – Navigation and quick access to sections.  
- **Metrics Cards** – Displays key statistics.  
- **Trade Table & Chart Table** – Shows trade history and performance charts.  
- **Dynamic Styling** – Positive and negative metrics highlighted with colors.  
- **Responsive UI** – Works on different screen sizes.  
- **Fetch Analytics** – Frontend fetches data from backend APIs.  

---

## 4. Directory Structure
project-root/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Layout components
│ │ │ ├── AnalyticsSidebar.jsx
│ │ │ ├── Topbar.jsx
│ │ │ └── ...
│ │ ├── ui/ # UI components
│ │ │ ├── MetricCard.jsx
│ │ │ ├── ToggleSwitch.jsx
│ │ │ ├── TradeTable.jsx
│ │ │ ├── ChartTable.jsx
│ │ │ └── ...
│ │ ├── fetchAnalystic/ # API fetch functions
│ │ │ └── fetchAnalytics.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ └── package.json
├── server/ # Node.js + Express backend
│ └── index.js # Server entry point
├── .gitignore
└── README.md

## 5. Theme & Styling
- **Tailwind CSS** for utility-first, responsive styling.  
- **CSS variables** for dynamic theme colors (positive/negative metrics).  
- **Lucide React** and **React Icons** for vector icons across components.  
- Consistent card, table, and chart styling to maintain a unified look.

---

## 6. Backend / Server
- **Node.js + Express** serves API endpoints for analytics.  
- Example endpoints:
  - `GET /analytics` → Returns aggregated metrics.  
- Can be extended with a database for persistent trade storage.  

---

## 7. Setup Instructions

### Backend
bash
cd server
npm install
npm run dev        # start server with nodemon
npm start          # start server normally
## 7. Setup Instructions

### Backend
cd server  
npm install  
npm run dev        # start server with nodemon  
npm start          # start server normally  

- Default port: 4000

### Frontend
cd client  
npm install  
npm run dev        # start Vite development server  
npm run build      # build production version  
npm run preview    # preview built version  

- Access at [http://localhost:5173](http://localhost:5173)

---

## 8. Packages Used

### Frontend (`client/package.json`)

**Dependencies**  
- react – Core React library  
- react-dom – React DOM renderer  
- recharts – Charting library  
- react-icons – Icon components  
- lucide-react – Modern vector icons  
- tailwindcss – Utility-first CSS framework  
- @tailwindcss/vite – Tailwind plugin for Vite  

**Dev Dependencies**  
- vite – Build tool and development server  
- @vitejs/plugin-react – React plugin for Vite  
- eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh – Linting tools  
- @types/react, @types/react-dom – TypeScript type definitions  
- globals – Defines global variables for ESLint  

### Backend (`server/package.json`)

**Dependencies**  
- express – Server framework  
- cors – Cross-origin resource sharing  
- nodemon – Development tool for auto-reloading server  

**Dev Dependencies**  
- None explicitly (nodemon used via scripts)  

---

## 9. Environment Variables

Create a `.env` file for configuration:

VITE_API_URL=http://localhost:4000  
PORT=4000  

---

## 10. Future Enhancements

- User authentication for secure dashboards.  
- Persistent database integration (MongoDB/MySQL).  
- Advanced filtering and interactive charting.  
- Dark mode and theme customization.  


