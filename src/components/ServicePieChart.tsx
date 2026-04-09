import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { groupByService, SERVICE_COLORS } from "@/data/billingData";
import type { BillingRecord } from "@/data/billingData";

const ServicePieChart = ({ data }: { data: BillingRecord[] }) => {
  const chartData = groupByService(data);
  const colors = Object.values(SERVICE_COLORS);

  return (
    <div className="rounded-lg border border-border bg-card p-5 glow-border">
      <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
        Cost by Service Type
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            dataKey="value"
            nameKey="name"
            stroke="hsl(220, 20%, 7%)"
            strokeWidth={2}
          >
            {chartData.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, fontFamily: "JetBrains Mono", fontSize: 12 }}
            formatter={(val: number) => [`$${val.toLocaleString()}`, ""]}
          />
          <Legend wrapperStyle={{ fontFamily: "JetBrains Mono", fontSize: 11 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ServicePieChart;
