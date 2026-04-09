import { useState, useMemo } from "react";
import { billingData, groupByService, groupByDepartment } from "@/data/billingData";
import StatCard from "@/components/StatCard";
import ServicePieChart from "@/components/ServicePieChart";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import StackedServiceChart from "@/components/StackedAreaChart";
import BillingTable from "@/components/BillingTable";
import CostCalculator from "@/components/CostCalculator";

const Index = () => {
  const [filter, setFilter] = useState("All");
  const services = ["All", ...new Set(billingData.map(r => r.serviceType))];

  const filtered = useMemo(
    () => filter === "All" ? billingData : billingData.filter(r => r.serviceType === filter),
    [filter]
  );

  const totalCost = filtered.reduce((s, r) => s + r.costUsd, 0);
  const totalHours = filtered.reduce((s, r) => s + r.usageHours, 0);
  const avgCost = totalCost / filtered.length;
  const topDept = groupByDepartment(filtered)[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-xl font-mono font-bold text-gradient">☁️ Cloud Cost Intelligence</h1>
            <p className="text-xs text-muted-foreground">Smart City Infrastructure · AI, Cloud Computing & DevOps</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-mono text-foreground">Shuhaib Abdulla</p>
            <p className="text-xs font-mono text-primary">Reg: 23BCAICD101</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Filter */}
        <div className="flex gap-2 flex-wrap">
          {services.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                filter === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Cost" value={`$${totalCost.toLocaleString()}`} icon={<span className="text-lg">💰</span>} sub={`${filtered.length} invoices`} />
          <StatCard label="Usage Hours" value={totalHours.toLocaleString()} icon={<span className="text-lg">⏱️</span>} sub="Total hours" />
          <StatCard label="Avg / Invoice" value={`$${avgCost.toFixed(2)}`} icon={<span className="text-lg">📊</span>} />
          <StatCard label="Top Department" value={topDept?.name || "—"} icon={<span className="text-lg">🏢</span>} sub={topDept ? `$${topDept.value.toLocaleString()}` : ""} />
        </div>

        {/* Charts row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <ServicePieChart data={filtered} />
          <MonthlyBarChart data={filtered} />
        </div>

        {/* Charts row 2 + Calculator */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <StackedServiceChart data={filtered} />
          </div>
          <CostCalculator />
        </div>

        {/* Table */}
        <BillingTable data={filtered} />

        {/* Footer */}
        <footer className="text-center py-6 border-t border-border">
          <p className="text-xs text-muted-foreground font-mono">
            Built with Python · Pandas · React · Recharts | Project B — AI, Cloud Computing & DevOps
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
