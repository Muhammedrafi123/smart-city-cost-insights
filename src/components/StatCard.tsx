interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  sub?: string;
}

const StatCard = ({ label, value, icon, sub }: StatCardProps) => (
  <div className="rounded-lg border border-border bg-card p-5 glow-border transition-all hover:scale-[1.02]">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-primary">{icon}</span>
      <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
    <p className="text-2xl font-mono font-bold text-foreground">{value}</p>
    {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
  </div>
);

export default StatCard;
