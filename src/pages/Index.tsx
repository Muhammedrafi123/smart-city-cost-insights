import { useState, useMemo } from "react";
import { billingData, groupByDepartment } from "@/data/billingData";
import type { BillingRecord } from "@/data/billingData";
import StatCard from "@/components/StatCard";
import ServicePieChart from "@/components/ServicePieChart";
import MonthlyBarChart from "@/components/MonthlyBarChart";
import StackedServiceChart from "@/components/StackedAreaChart";
import BillingTable from "@/components/BillingTable";
import CostCalculator from "@/components/CostCalculator";
import CsvUpload from "@/components/CsvUpload";

const Index = () => {
  const [filter, setFilter] = useState("All");
  const [customData, setCustomData] = useState<BillingRecord[] | null>(null);
  const activeData = customData || billingData;

  const services = ["All", ...Array.from(new Set(activeData.map(r => r.serviceType)))];

  const filtered = useMemo(
    () => filter === "All" ? activeData : activeData.filter(r => r.serviceType === filter),
    [filter, activeData]
  );

  const totalCost = filtered.reduce((s, r) => s + r.costUsd, 0);
  const totalHours = filtered.reduce((s, r) => s + r.usageHours, 0);
  const avgCost = filtered.length ? totalCost / filtered.length : 0;
  const topDept = groupByDepartment(filtered)[0];

  const handleUpload = (data: BillingRecord[]) => {
    setCustomData(data);
    setFilter("All");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-4 sm:px-6 py-3 sm:py-4 sticky top-0 bg-background/90 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h1 className="text-lg sm:text-xl font-mono font-bold text-gradient">☁️ Cloud Cost Intelligence</h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground">Smart City Infrastructure · AI, Cloud Computing & DevOps</p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs sm:text-sm font-mono text-foreground">Shuhaib Abdulla</p>
            <p className="text-[10px] sm:text-xs font-mono text-primary">Reg: 23BCAICD101</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Upload */}
        <CsvUpload
          onUpload={handleUpload}
          onReset={() => { setCustomData(null); setFilter("All"); }}
          hasCustomData={!!customData}
        />

        {/* Filter */}
        <div className="flex gap-1.5 sm:gap-2 flex-wrap">
          {services.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-mono transition-all ${
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
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <StatCard label="Total Cost" value={`$${totalCost.toLocaleString()}`} icon={<span className="text-base sm:text-lg">💰</span>} sub={`${filtered.length} invoices`} />
          <StatCard label="Usage Hours" value={totalHours.toLocaleString()} icon={<span className="text-base sm:text-lg">⏱️</span>} sub="Total hours" />
          <StatCard label="Avg / Invoice" value={`$${avgCost.toFixed(2)}`} icon={<span className="text-base sm:text-lg">📊</span>} />
          <StatCard label="Top Department" value={topDept?.name || "—"} icon={<span className="text-base sm:text-lg">🏢</span>} sub={topDept ? `$${topDept.value.toLocaleString()}` : ""} />
        </div>

        {/* Charts */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <ServicePieChart data={filtered} />
          <MonthlyBarChart data={filtered} />
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <StackedServiceChart data={filtered} />
          </div>
          <CostCalculator />
        </div>

        {/* Table */}
        <BillingTable data={filtered} />

        {/* Footer */}
        <footer className="text-center py-4 sm:py-6 border-t border-border">
          <p className="text-[10px] sm:text-xs text-muted-foreground font-mono">
            Built with Python · Pandas · React · Recharts | Project B — AI, Cloud Computing & DevOps
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
