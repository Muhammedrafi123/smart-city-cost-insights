import { useState, useRef } from "react";
import type { BillingRecord } from "@/data/billingData";

interface CsvUploadProps {
  onUpload: (data: BillingRecord[]) => void;
  onReset: () => void;
  hasCustomData: boolean;
}

const REQUIRED_COLUMNS = ["Invoice_ID", "Month", "Service_Type", "Department", "Usage_Hours", "Cost_USD"];

const CsvUpload = ({ onUpload, onReset, hasCustomData }: CsvUploadProps) => {
  const [error, setError] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const text = ev.target?.result as string;
        const lines = text.trim().split("\n");
        if (lines.length < 2) { setError("File is empty or has no data rows."); return; }

        const headers = lines[0].split(",").map(h => h.trim());
        const missing = REQUIRED_COLUMNS.filter(c => !headers.includes(c));
        if (missing.length > 0) {
          setError(`Missing columns: ${missing.join(", ")}. See the guide below for the required format.`);
          setShowGuide(true);
          return;
        }

        const colIdx = Object.fromEntries(REQUIRED_COLUMNS.map(c => [c, headers.indexOf(c)]));
        const records: BillingRecord[] = [];

        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(",").map(c => c.trim());
          if (cols.length < headers.length) continue;
          const hours = parseFloat(cols[colIdx["Usage_Hours"]]);
          const cost = parseFloat(cols[colIdx["Cost_USD"]]);
          if (isNaN(hours) || isNaN(cost)) continue;
          records.push({
            invoiceId: cols[colIdx["Invoice_ID"]],
            month: cols[colIdx["Month"]],
            serviceType: cols[colIdx["Service_Type"]],
            department: cols[colIdx["Department"]],
            usageHours: hours,
            costUsd: cost,
          });
        }

        if (records.length === 0) { setError("No valid data rows found."); return; }
        onUpload(records);
      } catch {
        setError("Failed to parse CSV file.");
      }
    };
    reader.readAsText(file);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="rounded-lg border border-border bg-card p-4 sm:p-5 glow-border space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
          📂 Data Source
        </h3>
        <div className="flex gap-2 flex-wrap">
          <label className="cursor-pointer px-3 py-1.5 rounded-md text-xs font-mono bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
            Upload CSV
            <input ref={fileRef} type="file" accept=".csv" onChange={handleFile} className="hidden" />
          </label>
          {hasCustomData && (
            <button onClick={onReset} className="px-3 py-1.5 rounded-md text-xs font-mono bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors">
              Reset to Default
            </button>
          )}
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="px-3 py-1.5 rounded-md text-xs font-mono bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
          >
            {showGuide ? "Hide Guide" : "📖 Format Guide"}
          </button>
        </div>
      </div>

      {hasCustomData && (
        <p className="text-xs font-mono text-primary">✅ Using uploaded data</p>
      )}
      {!hasCustomData && (
        <p className="text-xs text-muted-foreground">Showing default Smart City billing data (60 records). Upload your own CSV to analyze custom data.</p>
      )}

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/30 p-3">
          <p className="text-xs font-mono text-destructive">{error}</p>
        </div>
      )}

      {showGuide && (
        <div className="rounded-md bg-secondary/50 border border-border p-4 space-y-3">
          <h4 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider">Required CSV Format</h4>
          <p className="text-xs text-muted-foreground">Your CSV file must have these exact column headers:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-1.5 px-2 font-mono text-primary">Column</th>
                  <th className="text-left py-1.5 px-2 font-mono text-primary">Type</th>
                  <th className="text-left py-1.5 px-2 font-mono text-primary">Example</th>
                  <th className="text-left py-1.5 px-2 font-mono text-primary hidden sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/30"><td className="py-1.5 px-2 font-mono">Invoice_ID</td><td className="py-1.5 px-2">Text</td><td className="py-1.5 px-2">INV-001</td><td className="py-1.5 px-2 hidden sm:table-cell">Unique invoice identifier</td></tr>
                <tr className="border-b border-border/30"><td className="py-1.5 px-2 font-mono">Month</td><td className="py-1.5 px-2">Text</td><td className="py-1.5 px-2">January</td><td className="py-1.5 px-2 hidden sm:table-cell">Full month name</td></tr>
                <tr className="border-b border-border/30"><td className="py-1.5 px-2 font-mono">Service_Type</td><td className="py-1.5 px-2">Text</td><td className="py-1.5 px-2">Compute</td><td className="py-1.5 px-2 hidden sm:table-cell">Cloud service category</td></tr>
                <tr className="border-b border-border/30"><td className="py-1.5 px-2 font-mono">Department</td><td className="py-1.5 px-2">Text</td><td className="py-1.5 px-2">Traffic Mgmt</td><td className="py-1.5 px-2 hidden sm:table-cell">Department using the service</td></tr>
                <tr className="border-b border-border/30"><td className="py-1.5 px-2 font-mono">Usage_Hours</td><td className="py-1.5 px-2">Number</td><td className="py-1.5 px-2">720</td><td className="py-1.5 px-2 hidden sm:table-cell">Hours of usage</td></tr>
                <tr><td className="py-1.5 px-2 font-mono">Cost_USD</td><td className="py-1.5 px-2">Number</td><td className="py-1.5 px-2">1440.00</td><td className="py-1.5 px-2 hidden sm:table-cell">Cost in US dollars</td></tr>
              </tbody>
            </table>
          </div>
          <div className="rounded bg-muted p-3">
            <p className="text-xs font-mono text-muted-foreground mb-1">Example CSV:</p>
            <pre className="text-xs font-mono text-foreground whitespace-pre-wrap break-all">Invoice_ID,Month,Service_Type,Department,Usage_Hours,Cost_USD
INV-001,January,Compute,Traffic Management,720,1440.00
INV-002,January,Storage,Public Safety,500,75.00</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CsvUpload;
