import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { groupByMonth } from "@/data/billingData";
import type { BillingRecord } from "@/data/billingData";

const MonthlyBarChart = ({ data }: { data: BillingRecord[] }) => {
  const chartData = groupByMonth(data);

  return (
    <div className="rounded-lg border border-border bg-card p-5 glow-border">
      <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
        Monthly Cost Trend
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis dataKey="month" tick={{ fill: "hsl(215, 12%, 50%)", fontFamily: "JetBrains Mono", fontSize: 11 }} />
          <YAxis tick={{ fill: "hsl(215, 12%, 50%)", fontFamily: "JetBrains Mono", fontSize: 11 }} tickFormatter={v => `$${(v/1000).toFixed(1)}k`} />
          <Tooltip
            contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, fontFamily: "JetBrains Mono", fontSize: 12 }}
            formatter={(val: number) => [`$${val.toLocaleString()}`, "Cost"]}
          />
          <Bar dataKey="cost" fill="hsl(160, 84%, 39%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyBarChart;
