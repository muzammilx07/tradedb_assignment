import React, { useEffect, useState } from "react";
import MetricCard from "../ui/MetricCard";
import ChartCard from "../ui/ChartCard";
import TradeTable from "../ui/TradeTable";
import { fetchAnalytics } from "../utils/fetchAnalytics";

export default function AnalyticsPanel() {
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState("plTrend"); 

    useEffect(() => {
        fetchAnalytics().then(setData);
    }, []);

    if (!data)
        return (
            <div className="flex items-center justify-center h-full text-[var(--muted-foreground)]">
                Loading analytics...
            </div>
        );

    //defing the points to show in metrics cards, values from api data
    const metrics = [
        ["Win Rate (%)", data.winRate, "%", false, "Percentage of profitable trades."],
        ["Profit Factor", data.profitFactor, "", false, "Ratio of gross profits to gross losses."],
        ["Average Return", data.avgReturn, "%", false, "Average percentage return per trade."],
        ["Max Drawdown", data.maxDrawdown, "%", true, "Peak-to-trough equity drop."],
        ["Total Trades", data.totalTrades, "", false, "Number of trades analyzed."],
        ["Winning Trades", data.winningTrades, "", false, "Total profitable trades."],
        ["Losing Trades", data.losingTrades, "", true, "Total loss-making trades."],
        ["Longest Win Streak", data.longestWinStreak, "", false, "Max consecutive wins."],
        ["Longest Loss Streak", data.longestLossStreak, "", true, "Max consecutive losses."],
        ["Sharpe Ratio", data.sharpeRatio, "", false, "Risk-adjusted return."],
    ];

    // ftn to switch data to show based on active tab
    const chartData = activeTab === "plTrend" ? data.plTrendTrades : data.recentTrades;
    const tableData = activeTab === "plTrend" ? data.plTrendTrades : data.recentTrades;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">Performance Overview</h2>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {metrics.map(([label, value, unit, isNeg, tip], i) => (
                    <MetricCard
                        key={i}
                        label={label}
                        value={value}
                        unit={unit}
                        isNegative={isNeg}
                        tooltip={tip}
                    />
                ))}

                <MetricCard
                    label="P/L Breakdown"
                    value={`${data.plBreakdown.currency.toFixed(2)} (${data.plBreakdown.percent}%)`}
                    isNegative={data.plBreakdown.currency < 0}
                    tooltip="Cumulative profit/loss in currency & percent."
                />
            </div>

            {/* Tabs for chart and tabel data switching*/}
            <div className="flex gap-2 border-b border-border">
                <button
                    className={`px-4 py-2 font-medium rounded-t ${activeTab === "plTrend"
                            ? "bg-card text-card-foreground border-t border-l border-r border-border"
                            : "text-muted-foreground hover:bg-muted transition-colors"
                        }`}
                    onClick={() => setActiveTab("plTrend")}
                >
                    P/L Trend
                </button>
                <button
                    className={`px-4 py-2 font-medium rounded-t ${activeTab === "recent"
                            ? "bg-card text-card-foreground border-t border-l border-r border-border"
                            : "text-muted-foreground hover:bg-muted transition-colors"
                        }`}
                    onClick={() => setActiveTab("recent")}
                >
                    Recent Trades
                </button>
            </div>


            <div>
                <ChartCard
                    data={chartData}
                    title={activeTab === "plTrend" ? "P/L Trend Overview" : "Recent Trades Overview"}
                />
                <TradeTable trades={tableData} />
            </div>
        </div>
    );
}
