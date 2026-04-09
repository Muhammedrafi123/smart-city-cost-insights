import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { monthlyByService, SERVICE_COLORS } from "@/data/billingData";
import type { BillingRecord } from "@/data/billingData";

const StackedServiceChart = ({ data }: { data: BillingRecord[] }) => {
  const chartData = monthlyByService(data);
  const services = Object.keys(SERVICE_COLORS);

  return (
    <div className="rounded-lg border border-border bg-card p-5 glow-border">
      <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
        Monthly Breakdown by Service
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis dataKey="month" tick={{ fill: "hsl(215, 12%, 50%)", fontFamily: "JetBrains Mono", fontSize: 11 }} />
          <YAxis tick={{ fill: "hsl(215, 12%, 50%)", fontFamily: "JetBrains Mono", fontSize: 11 }} tickFormatter={v => `$${(v/1000).toFixed(1)}k`} />
          <Tooltip
            contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, fontFamily: "JetBrains Mono", fontSize: 12 }}
            formatter={(val: number) => [`$${val.toLocaleString()}`, ""]}
          />
          {services.map(s => (
            <Area key={s} type="monotone" dataKey={s} stackId="1" fill={SERVICE_COLORS[s]} stroke={SERVICE_COLORS[s]} fillOpacity={0.6} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackedServiceChart;
