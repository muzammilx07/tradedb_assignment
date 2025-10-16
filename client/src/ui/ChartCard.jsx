import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function ChartCard({ data, title }) {
  const chartData = data.map((trade, index) => ({
    name: `#${index + 1}`,
    pnl: trade.pnl,
  }));

  return (
    <div
      className="p-4 rounded shadow"
      style={{ backgroundColor: "var(--card)", color: "var(--card-foreground)" }}
    >
      <h2 className="text-lg font-bold mb-2">{title}</h2> 
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="name" stroke="var(--muted-foreground)" />
          <YAxis stroke="var(--muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--popover)",
              borderRadius: "8px",
              borderColor: "var(--border)",
            }}
            labelStyle={{ color: "var(--popover-foreground)" }}
            formatter={(value) => [`$${value}`, "P/L"]}
          />
          <Line
            type="monotone"
            dataKey="pnl"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={{ r: 4, stroke: "var(--chart-1)", fill: "var(--chart-1)" }}
            activeDot={{ r: 6, stroke: "var(--chart-1)", fill: "var(--chart-1)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
