const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["https://tradedb-assignment-t4m3.vercel.app"], 
    methods: ["GET"]
  })
);

app.get("/analytics", (req, res) => {
  const plTrendTrades = [
    { id: 1, symbol: "AAPL", result: "Win", pnl: 120 },
    { id: 2, symbol: "TSLA", result: "Loss", pnl: -85 },
    { id: 3, symbol: "AMZN", result: "Win", pnl: 190 },
    { id: 4, symbol: "NFLX", result: "Win", pnl: 110 },
    { id: 5, symbol: "META", result: "Loss", pnl: -60 },
    { id: 6, symbol: "GOOG", result: "Loss", pnl: -100 },
    { id: 7, symbol: "NVDA", result: "Win", pnl: 150 },
    { id: 8, symbol: "MSFT", result: "Win", pnl: 200 },
    { id: 9, symbol: "AMD", result: "Win", pnl: 95 },
    { id: 10, symbol: "BABA", result: "Loss", pnl: -50 },
  ];

  const recentTrades = [
    { id: 101, symbol: "TSLA", result: "Win", pnl: 180 },
    { id: 102, symbol: "AAPL", result: "Loss", pnl: -70 },
    { id: 103, symbol: "NVDA", result: "Win", pnl: 150 },
    { id: 104, symbol: "AMZN", result: "Loss", pnl: -90 },
    { id: 105, symbol: "MSFT", result: "Win", pnl: 200 },
    { id: 106, symbol: "BABA", result: "Loss", pnl: -40 },
    { id: 107, symbol: "NFLX", result: "Win", pnl: 130 },
    { id: 108, symbol: "META", result: "Win", pnl: 110 },
    { id: 109, symbol: "GOOG", result: "Loss", pnl: -100 },
    { id: 110, symbol: "AMD", result: "Win", pnl: 90 },
  ];

  res.json({
    winRate: 65.3,
    profitFactor: 1.75,
    avgReturn: 2.8,
    maxDrawdown: -12.5,
    totalTrades: 50,
    winningTrades: 33,
    losingTrades: 17,
    longestWinStreak: 7,
    longestLossStreak: 3,
    sharpeRatio: 1.2,
    plBreakdown: {
      currency: 1530.45,
      percent: 12.2,
    },
    plTrendTrades,
    recentTrades,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
