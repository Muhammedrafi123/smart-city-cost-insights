import type { BillingRecord } from "@/data/billingData";

const BillingTable = ({ data }: { data: BillingRecord[] }) => (
  <div className="rounded-lg border border-border bg-card p-3 sm:p-5 glow-border overflow-hidden">
    <h3 className="font-mono text-xs sm:text-sm uppercase tracking-wider text-muted-foreground mb-3 sm:mb-4">
      Billing Records ({data.length})
    </h3>
    <div className="overflow-x-auto -mx-3 sm:-mx-5 px-3 sm:px-5">
      <table className="w-full text-xs sm:text-sm min-w-[500px]">
        <thead>
          <tr className="border-b border-border">
            {["Invoice", "Month", "Service", "Dept", "Hrs", "Cost"].map(h => (
              <th key={h} className="text-left py-2 px-2 sm:px-3 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(r => (
            <tr key={r.invoiceId} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
              <td className="py-1.5 sm:py-2 px-2 sm:px-3 font-mono text-primary text-[10px] sm:text-xs">{r.invoiceId}</td>
              <td className="py-1.5 sm:py-2 px-2 sm:px-3 text-foreground">{r.month.slice(0, 3)}</td>
              <td className="py-1.5 sm:py-2 px-2 sm:px-3 text-foreground">{r.serviceType}</td>
              <td className="py-1.5 sm:py-2 px-2 sm:px-3 text-muted-foreground">{r.department}</td>
              <td className="py-1.5 sm:py-2 px-2 sm:px-3 font-mono text-foreground">{r.usageHours}</td>
              <td className="py-1.5 sm:py-2 px-2 sm:px-3 font-mono text-primary font-semibold">${r.costUsd.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default BillingTable;
