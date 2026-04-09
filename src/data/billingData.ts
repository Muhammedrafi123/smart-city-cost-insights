export interface BillingRecord {
  invoiceId: string;
  month: string;
  serviceType: string;
  department: string;
  usageHours: number;
  costUsd: number;
}

export const billingData: BillingRecord[] = [
  { invoiceId: "INV-001", month: "January", serviceType: "Compute", department: "Traffic Management", usageHours: 720, costUsd: 1440 },
  { invoiceId: "INV-002", month: "January", serviceType: "Storage", department: "Public Safety", usageHours: 500, costUsd: 75 },
  { invoiceId: "INV-003", month: "January", serviceType: "Networking", department: "Smart Lighting", usageHours: 300, costUsd: 180 },
  { invoiceId: "INV-004", month: "January", serviceType: "Database", department: "Waste Management", usageHours: 200, costUsd: 300 },
  { invoiceId: "INV-005", month: "January", serviceType: "AI/ML Services", department: "Traffic Management", usageHours: 100, costUsd: 850 },
  { invoiceId: "INV-006", month: "February", serviceType: "Compute", department: "Traffic Management", usageHours: 750, costUsd: 1500 },
  { invoiceId: "INV-007", month: "February", serviceType: "Storage", department: "Public Safety", usageHours: 520, costUsd: 78 },
  { invoiceId: "INV-008", month: "February", serviceType: "Networking", department: "Smart Lighting", usageHours: 310, costUsd: 186 },
  { invoiceId: "INV-009", month: "February", serviceType: "Database", department: "Water Supply", usageHours: 210, costUsd: 315 },
  { invoiceId: "INV-010", month: "February", serviceType: "AI/ML Services", department: "Traffic Management", usageHours: 120, costUsd: 1020 },
  { invoiceId: "INV-011", month: "March", serviceType: "Compute", department: "Public Safety", usageHours: 800, costUsd: 1600 },
  { invoiceId: "INV-012", month: "March", serviceType: "Storage", department: "Waste Management", usageHours: 600, costUsd: 90 },
  { invoiceId: "INV-013", month: "March", serviceType: "Networking", department: "Water Supply", usageHours: 350, costUsd: 210 },
  { invoiceId: "INV-014", month: "March", serviceType: "Database", department: "Traffic Management", usageHours: 230, costUsd: 345 },
  { invoiceId: "INV-015", month: "March", serviceType: "AI/ML Services", department: "Smart Lighting", usageHours: 90, costUsd: 765 },
  { invoiceId: "INV-016", month: "April", serviceType: "Compute", department: "Water Supply", usageHours: 780, costUsd: 1560 },
  { invoiceId: "INV-017", month: "April", serviceType: "Storage", department: "Traffic Management", usageHours: 480, costUsd: 72 },
  { invoiceId: "INV-018", month: "April", serviceType: "Networking", department: "Public Safety", usageHours: 320, costUsd: 192 },
  { invoiceId: "INV-019", month: "April", serviceType: "Database", department: "Smart Lighting", usageHours: 215, costUsd: 322.5 },
  { invoiceId: "INV-020", month: "April", serviceType: "AI/ML Services", department: "Waste Management", usageHours: 110, costUsd: 935 },
  { invoiceId: "INV-021", month: "May", serviceType: "Compute", department: "Smart Lighting", usageHours: 810, costUsd: 1620 },
  { invoiceId: "INV-022", month: "May", serviceType: "Storage", department: "Water Supply", usageHours: 550, costUsd: 82.5 },
  { invoiceId: "INV-023", month: "May", serviceType: "Networking", department: "Traffic Management", usageHours: 330, costUsd: 198 },
  { invoiceId: "INV-024", month: "May", serviceType: "Database", department: "Public Safety", usageHours: 245, costUsd: 367.5 },
  { invoiceId: "INV-025", month: "May", serviceType: "AI/ML Services", department: "Water Supply", usageHours: 130, costUsd: 1105 },
  { invoiceId: "INV-026", month: "June", serviceType: "Compute", department: "Waste Management", usageHours: 850, costUsd: 1700 },
  { invoiceId: "INV-027", month: "June", serviceType: "Storage", department: "Traffic Management", usageHours: 610, costUsd: 91.5 },
  { invoiceId: "INV-028", month: "June", serviceType: "Networking", department: "Waste Management", usageHours: 340, costUsd: 204 },
  { invoiceId: "INV-029", month: "June", serviceType: "Database", department: "Smart Lighting", usageHours: 260, costUsd: 390 },
  { invoiceId: "INV-030", month: "June", serviceType: "AI/ML Services", department: "Public Safety", usageHours: 140, costUsd: 1190 },
  { invoiceId: "INV-031", month: "July", serviceType: "Compute", department: "Traffic Management", usageHours: 880, costUsd: 1760 },
  { invoiceId: "INV-032", month: "July", serviceType: "Storage", department: "Smart Lighting", usageHours: 630, costUsd: 94.5 },
  { invoiceId: "INV-033", month: "July", serviceType: "Networking", department: "Public Safety", usageHours: 360, costUsd: 216 },
  { invoiceId: "INV-034", month: "July", serviceType: "Database", department: "Water Supply", usageHours: 270, costUsd: 405 },
  { invoiceId: "INV-035", month: "July", serviceType: "AI/ML Services", department: "Traffic Management", usageHours: 155, costUsd: 1317.5 },
  { invoiceId: "INV-036", month: "August", serviceType: "Compute", department: "Public Safety", usageHours: 910, costUsd: 1820 },
  { invoiceId: "INV-037", month: "August", serviceType: "Storage", department: "Waste Management", usageHours: 650, costUsd: 97.5 },
  { invoiceId: "INV-038", month: "August", serviceType: "Networking", department: "Traffic Management", usageHours: 375, costUsd: 225 },
  { invoiceId: "INV-039", month: "August", serviceType: "Database", department: "Smart Lighting", usageHours: 280, costUsd: 420 },
  { invoiceId: "INV-040", month: "August", serviceType: "AI/ML Services", department: "Water Supply", usageHours: 160, costUsd: 1360 },
  { invoiceId: "INV-041", month: "September", serviceType: "Compute", department: "Water Supply", usageHours: 870, costUsd: 1740 },
  { invoiceId: "INV-042", month: "September", serviceType: "Storage", department: "Traffic Management", usageHours: 620, costUsd: 93 },
  { invoiceId: "INV-043", month: "September", serviceType: "Networking", department: "Waste Management", usageHours: 355, costUsd: 213 },
  { invoiceId: "INV-044", month: "September", serviceType: "Database", department: "Public Safety", usageHours: 265, costUsd: 397.5 },
  { invoiceId: "INV-045", month: "September", serviceType: "AI/ML Services", department: "Smart Lighting", usageHours: 145, costUsd: 1232.5 },
  { invoiceId: "INV-046", month: "October", serviceType: "Compute", department: "Smart Lighting", usageHours: 840, costUsd: 1680 },
  { invoiceId: "INV-047", month: "October", serviceType: "Storage", department: "Water Supply", usageHours: 590, costUsd: 88.5 },
  { invoiceId: "INV-048", month: "October", serviceType: "Networking", department: "Smart Lighting", usageHours: 345, costUsd: 207 },
  { invoiceId: "INV-049", month: "October", serviceType: "Database", department: "Traffic Management", usageHours: 255, costUsd: 382.5 },
  { invoiceId: "INV-050", month: "October", serviceType: "AI/ML Services", department: "Waste Management", usageHours: 150, costUsd: 1275 },
  { invoiceId: "INV-051", month: "November", serviceType: "Compute", department: "Waste Management", usageHours: 800, costUsd: 1600 },
  { invoiceId: "INV-052", month: "November", serviceType: "Storage", department: "Public Safety", usageHours: 560, costUsd: 84 },
  { invoiceId: "INV-053", month: "November", serviceType: "Networking", department: "Water Supply", usageHours: 330, costUsd: 198 },
  { invoiceId: "INV-054", month: "November", serviceType: "Database", department: "Waste Management", usageHours: 240, costUsd: 360 },
  { invoiceId: "INV-055", month: "November", serviceType: "AI/ML Services", department: "Traffic Management", usageHours: 135, costUsd: 1147.5 },
  { invoiceId: "INV-056", month: "December", serviceType: "Compute", department: "Traffic Management", usageHours: 950, costUsd: 1900 },
  { invoiceId: "INV-057", month: "December", serviceType: "Storage", department: "Smart Lighting", usageHours: 700, costUsd: 105 },
  { invoiceId: "INV-058", month: "December", serviceType: "Networking", department: "Traffic Management", usageHours: 400, costUsd: 240 },
  { invoiceId: "INV-059", month: "December", serviceType: "Database", department: "Public Safety", usageHours: 300, costUsd: 450 },
  { invoiceId: "INV-060", month: "December", serviceType: "AI/ML Services", department: "Public Safety", usageHours: 180, costUsd: 1530 },
];

export const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export const SERVICE_COLORS: Record<string, string> = {
  "Compute": "hsl(160, 84%, 39%)",
  "Storage": "hsl(200, 80%, 50%)",
  "Networking": "hsl(270, 60%, 60%)",
  "Database": "hsl(35, 90%, 55%)",
  "AI/ML Services": "hsl(340, 75%, 55%)",
};

export function groupByService(data: BillingRecord[]) {
  const map: Record<string, number> = {};
  data.forEach(r => { map[r.serviceType] = (map[r.serviceType] || 0) + r.costUsd; });
  return Object.entries(map).map(([name, value]) => ({ name, value: +value.toFixed(2) }));
}

export function groupByMonth(data: BillingRecord[]) {
  const map: Record<string, number> = {};
  data.forEach(r => { map[r.month] = (map[r.month] || 0) + r.costUsd; });
  return MONTHS.filter(m => map[m]).map(m => ({ month: m.slice(0, 3), cost: +map[m].toFixed(2) }));
}

export function groupByDepartment(data: BillingRecord[]) {
  const map: Record<string, number> = {};
  data.forEach(r => { map[r.department] = (map[r.department] || 0) + r.costUsd; });
  return Object.entries(map).map(([name, value]) => ({ name, value: +value.toFixed(2) })).sort((a, b) => b.value - a.value);
}

export function monthlyByService(data: BillingRecord[]) {
  const map: Record<string, Record<string, number>> = {};
  data.forEach(r => {
    if (!map[r.month]) map[r.month] = {};
    map[r.month][r.serviceType] = (map[r.month][r.serviceType] || 0) + r.costUsd;
  });
  return MONTHS.filter(m => map[m]).map(m => ({ month: m.slice(0, 3), ...map[m] }));
}
