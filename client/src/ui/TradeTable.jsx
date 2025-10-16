import React from 'react';

export default function TradeTable({ trades }) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md overflow-auto">
      <h2 className="text-lg font-bold mb-4 text-foreground">
        Recent 10 Trades
      </h2>
      <table className="w-full table-auto text-left text-sm border-collapse">
        <thead>
          <tr className="border-b border-border text-muted-foreground">
            <th className="p-2">ID</th>
            <th className="p-2">Symbol</th>
            <th className="p-2">Result</th>
            <th className="p-2">P/L ($)</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <tr
              key={trade.id}
              className="transition-all border-b border-border hover:bg-muted cursor-pointer"
            >
              <td className="p-2 text-foreground">{trade.id}</td>
              <td className="p-2 text-foreground">{trade.symbol}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    trade.result === 'Win'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-destructive/20 text-destructive'
                  }`}
                >
                  {trade.result}
                </span>
              </td>
              <td
                className={`p-2 font-medium ${
                  trade.pnl >= 0 ? 'text-primary' : 'text-destructive'
                }`}
              >
                {trade.pnl}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
