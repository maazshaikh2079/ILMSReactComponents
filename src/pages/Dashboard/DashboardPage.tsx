import React, { useState } from "react";
import { FileText, Fingerprint, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { VetteDemandDialog, type DemandFormValues } from "../../components/VetteDemandDialog";

export interface ActivityItem {
  timestamp: string;
  vessel: string;
  material: string;
  status: "SECURE" | "IMMEDIATE" | "WARNING";
  priority: "Low" | "High" | "Medium" | "Immediate";
}

const initialActivities: ActivityItem[] = [
  {
    timestamp: "1024-14:32Z",
    vessel: "USS Nimitz",
    material: "MK-48 Torpedo Parts",
    status: "SECURE",
    priority: "Low",
  },
  {
    timestamp: "1024-12:15Z",
    vessel: "USS Gerald R. Ford",
    material: "Aviation Fuel Hose",
    status: "IMMEDIATE",
    priority: "High",
  },
  {
    timestamp: "1024-09:44Z",
    vessel: "USS Zumwalt",
    material: "Radar Array Module",
    status: "WARNING",
    priority: "Medium",
  },
  {
    timestamp: "1023-22:10Z",
    vessel: "USS Arleigh Burke",
    material: "Sonar Transducer",
    status: "SECURE",
    priority: "Low",
  },
];

const chartData = [
  { month: "MAR", height: "30%", isHighlight: false },
  { month: "APR", height: "46%", isHighlight: false },
  { month: "MAY", height: "64%", isHighlight: false },
  { month: "JUN", height: "78%", isHighlight: "primary" },
  { month: "JUL", height: "54%", isHighlight: false },
  { month: "AUG", height: "70%", isHighlight: false },
  { month: "SEP", height: "92%", isHighlight: "tertiary" },
  { month: "OCT", height: "36%", isHighlight: false },
];

export const DashboardPage: React.FC = () => {
  const [activities, setActivities] = useState<ActivityItem[]>(initialActivities);

  const handleDemandCreated = (data: DemandFormValues) => {
    const newActivity: ActivityItem = {
      timestamp: "JUST NOW",
      vessel: data.vessel,
      material: `${data.material} (Qty: ${data.quantity})`,
      status: data.priority === "Immediate" ? "IMMEDIATE" : data.priority === "High" ? "WARNING" : "SECURE",
      priority: data.priority,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  const getStatusBadge = (status: ActivityItem["status"]) => {
    switch (status) {
      case "SECURE":
        return <Badge variant="secure">SECURE</Badge>;
      case "IMMEDIATE":
        return <Badge variant="immediate">IMMEDIATE</Badge>;
      case "WARNING":
        return <Badge variant="warning">WARNING</Badge>;
    }
  };

  const getPriorityDisplay = (priority: ActivityItem["priority"]) => {
    switch (priority) {
      case "Low":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs text-foreground">
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            Low
          </span>
        );
      case "High":
      case "Immediate":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs text-destructive font-medium">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            {priority}
          </span>
        );
      case "Medium":
        return (
          <span className="inline-flex items-center gap-1.5 text-xs text-accent-amber font-medium">
            <span className="w-2 h-2 rounded-full bg-badge-warning-dot" />
            Medium
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Top 4 Metric KPI Cards (shadcn Card + MTIS borders) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: TOTAL DEMANDS */}
        <Card accent="primary" className="min-h-[130px] flex flex-col justify-between p-5">
          <div className="text-[11px] font-bold tracking-wider text-foreground uppercase select-none">
            TOTAL DEMANDS
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-sans">
            14,282
          </div>
        </Card>

        {/* Card 2: TOTAL QUANTITY */}
        <Card accent="secondary" className="min-h-[130px] flex flex-col justify-between p-5">
          <div className="text-[11px] font-bold tracking-wider text-foreground uppercase select-none">
            TOTAL QUANTITY
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight font-sans">
            1.2M
          </div>
        </Card>

        {/* Card 3: OPEN DEMANDS */}
        <Card accent="tertiary" className="min-h-[130px] flex flex-col justify-between p-5">
          <div className="flex items-center justify-between select-none">
            <span className="text-[11px] font-bold tracking-wider text-foreground uppercase">
              OPEN DEMANDS
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-kpi-dot-open animate-ping" />
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-kpi-accent-open tracking-tight font-sans">
            842
          </div>
        </Card>

        {/* Card 4: PEAK MONTH */}
        <Card className="min-h-[130px] flex flex-col justify-between p-5 border-kpi-border-4">
          <div className="text-[11px] font-bold tracking-wider text-foreground uppercase select-none">
            PEAK MONTH
          </div>
          <div className="text-2xl sm:text-2xl font-bold text-foreground tracking-tight uppercase font-sans">
            SEPTEMBER
          </div>
        </Card>
      </div>

      {/* 2. Supply Demand Trends Chart Card */}
      <Card className="p-6">
        <CardHeader className="p-0 pb-6">
          <CardTitle className="text-base sm:text-lg">Supply Demand Trends</CardTitle>
        </CardHeader>

        {/* Chart Box with grid lines */}
        <CardContent className="p-0">
          <div className="relative border border-chart-box-border bg-chart-box-bg p-4 pt-10 pb-0 rounded-xs">
            {/* Horizontal reference gridlines */}
            <div className="absolute inset-x-0 top-12 border-b border-chart-grid-line pointer-events-none" />
            <div className="absolute inset-x-0 top-28 border-b border-chart-grid-line pointer-events-none" />

            {/* Bar Chart Columns */}
            <div className="h-56 grid grid-cols-8 gap-2 sm:gap-4 items-end">
              {chartData.map((d) => (
                <div key={d.month} className="flex flex-col items-center h-full justify-end group cursor-pointer">
                  <div
                    className={`w-full transition-all duration-300 ${
                      d.isHighlight === "tertiary"
                        ? "bg-chart-bar-sep border-t-4 border-chart-bar-sep-border"
                        : d.isHighlight === "primary"
                        ? "bg-chart-bar-jun border-t-4 border-chart-bar-jun-border"
                        : "bg-chart-bar-default hover:bg-chart-bar-hover"
                    }`}
                    style={{ height: d.height }}
                    title={`${d.month} Demand Index`}
                  />
                </div>
              ))}
            </div>

            {/* Month Labels below bars */}
            <div className="grid grid-cols-8 gap-2 sm:gap-4 border-t border-border pt-3 pb-2 select-none">
              {chartData.map((d) => (
                <div
                  key={d.month}
                  className="text-center font-mono text-[11px] font-bold text-foreground uppercase"
                >
                  {d.month}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. Bottom Row (Split: Recent Activity & Quick Actions) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Recent Activity Table (8 cols) */}
        <Card className="lg:col-span-8 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4">
              <CardTitle className="text-base sm:text-lg">Recent Activity</CardTitle>
              <Button
                variant="link"
                className="text-xs font-bold text-primary p-0 h-auto gap-1 uppercase tracking-wider"
              >
                <span>VIEW ALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[120px]">TIMESTAMP</TableHead>
                  <TableHead>VESSEL</TableHead>
                  <TableHead>MATERIAL</TableHead>
                  <TableHead className="w-[100px]">STATUS</TableHead>
                  <TableHead className="w-[90px]">PRIORITY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-mono text-[11px] text-muted-foreground">
                      {item.timestamp}
                    </TableCell>
                    <TableCell className="font-bold text-foreground">
                      {item.vessel}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {item.material}
                    </TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
                    <TableCell>{getPriorityDisplay(item.priority)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Right: Quick Actions (4 cols) */}
        <Card className="lg:col-span-4 p-6 flex flex-col justify-between">
          <div>
            <CardTitle className="text-base sm:text-lg mb-4">Quick Actions</CardTitle>

            <div className="space-y-3">
              {/* VETTE NEW DEMAND (powered by react-hook-form modal dialog) */}
              <VetteDemandDialog onDemandCreated={handleDemandCreated} />

              {/* GENERATE MANIFEST */}
              <Button
                variant="outline"
                className="w-full justify-between h-12 text-foreground shadow-2xs"
              >
                <span>GENERATE MANIFEST</span>
                <FileText className="w-4 h-4 text-foreground" />
              </Button>
            </div>
          </div>

          {/* SYSTEM AUDIT */}
          <div className="pt-8">
            <Button
              variant="outline"
              className="w-full justify-between h-12 text-foreground shadow-2xs"
            >
              <span>SYSTEM AUDIT</span>
              <Fingerprint className="w-4 h-4 text-foreground" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;


