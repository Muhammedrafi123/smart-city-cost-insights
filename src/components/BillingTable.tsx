import type { BillingRecord } from "@/data/billingData";

const BillingTable = ({ data }: { data: BillingRecord[] }) => (
  <div className="rounded-lg border border-border bg-card p-5 glow-border overflow-auto">
    <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-4">
      Billing Records
    </h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border">
          {["Invoice", "Month", "Service", "Department", "Hours", "Cost"].map(h => (
            <th key={h} className="text-left py-2 px-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(r => (
          <tr key={r.invoiceId} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
            <td className="py-2 px-3 font-mono text-primary text-xs">{r.invoiceId}</td>
            <td className="py-2 px-3 text-foreground">{r.month}</td>
            <td className="py-2 px-3 text-foreground">{r.serviceType}</td>
            <td className="py-2 px-3 text-muted-foreground">{r.department}</td>
            <td className="py-2 px-3 font-mono text-foreground">{r.usageHours}</td>
            <td className="py-2 px-3 font-mono text-primary font-semibold">${r.costUsd.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BillingTable;
