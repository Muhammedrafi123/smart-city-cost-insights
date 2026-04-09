import { useState } from "react";
import { SERVICE_COLORS } from "@/data/billingData";

const rates: Record<string, number> = {
  "Compute": 2.00,
  "Storage": 0.15,
  "Networking": 0.60,
  "Database": 1.50,
  "AI/ML Services": 8.50,
};

const CostCalculator = () => {
  const [service, setService] = useState("Compute");
  const [hours, setHours] = useState(100);

  const cost = hours * rates[service];

  return (
    <div className="rounded-lg border border-border bg-card p-5 glow-border">
      <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
        ⚡ Cost Calculator
      </h3>
      <div className="space-y-4">
        <div>
          <label className="text-xs font-mono text-muted-foreground block mb-1">Service Type</label>
          <select
            value={service}
            onChange={e => setService(e.target.value)}
            className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {Object.keys(rates).map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-mono text-muted-foreground block mb-1">Usage Hours</label>
          <input
            type="number"
            value={hours}
            onChange={e => setHours(+e.target.value)}
            min={0}
            className="w-full rounded-md border border-border bg-secondary px-3 py-2 text-sm text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div>
          <label className="text-xs font-mono text-muted-foreground block mb-1">Rate</label>
          <p className="text-sm font-mono text-accent">${rates[service].toFixed(2)}/hr</p>
        </div>
        <div className="pt-3 border-t border-border">
          <p className="text-xs font-mono text-muted-foreground">Estimated Cost</p>
          <p className="text-3xl font-mono font-bold text-gradient">${cost.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
