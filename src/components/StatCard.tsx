interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  sub?: string;
}

const StatCard = ({ label, value, icon, sub }: StatCardProps) => (
  <div className="rounded-lg border border-border bg-card p-3 sm:p-5 glow-border transition-all hover:scale-[1.02]">
    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
      <span className="text-primary">{icon}</span>
      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
    <p className="text-lg sm:text-2xl font-mono font-bold text-foreground truncate">{value}</p>
    {sub && <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">{sub}</p>}
  </div>
);

export default StatCard;
