import { useState } from "react";
import {
  Wand2,
  Boxes,
  Tag,
  Trash2,
  Edit2,
  Home,
  Search,
  User,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { VetteDemandDialog } from "../components/VetteDemandDialog";

export const ComponentLab: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="space-y-6 pb-12">
      {/* Title */}
      <div className="pb-2 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="tactical">SHADCN / UI + REACT-HOOK-FORM</Badge>
            <span className="text-[11px] font-mono text-muted-foreground">
              MARITIME TACTICAL INTELLIGENCE SYSTEM
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mt-1">
            MTIS Tactical Component System
          </h2>
        </div>

        <div>
          <VetteDemandDialog />
        </div>
      </div>

      {/* Tabs for Organization */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all">All Tokens</TabsTrigger>
          <TabsTrigger value="components">UI Components</TabsTrigger>
          <TabsTrigger value="badges">Badges & Status</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6 mt-6">
          {/* Grid of UI Showcase Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Color Swatch Card: Primary */}
            <Card className="p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-foreground">Primary Palette</span>
                <span className="text-muted-foreground">Action Blue</span>
              </div>
              <div className="h-16 rounded bg-primary shadow-inner flex items-end p-2">
                <span className="text-primary-foreground text-xs font-mono font-semibold">
                  Action Blue Base
                </span>
              </div>
              {/* Palette steps */}
              <div className="flex h-6 rounded overflow-hidden border border-border">
                <div className="flex-1 bg-[#001a42]" title="on-primary-fixed" />
                <div className="flex-1 bg-[#004395]" />
                <div className="flex-1 bg-[#0058be]" />
                <div className="flex-1 bg-[#2170e4]" />
                <div className="flex-1 bg-[#3b82f6]" />
                <div className="flex-1 bg-[#60a5fa]" />
                <div className="flex-1 bg-[#adc6ff]" />
                <div className="flex-1 bg-[#d8e2ff]" />
                <div className="flex-1 bg-[#ffffff]" />
              </div>
            </Card>

            {/* Color Swatch Card: Secondary */}
            <Card className="p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-foreground">Secondary (Tactical Cyan)</span>
                <span className="text-muted-foreground">Tactical Cyan</span>
              </div>
              <div className="h-16 rounded bg-secondary shadow-inner flex items-end p-2">
                <span className="text-secondary-foreground text-xs font-mono font-semibold">
                  Secondary Operations
                </span>
              </div>
              {/* Palette steps */}
              <div className="flex h-6 rounded overflow-hidden border border-border">
                <div className="flex-1 bg-[#001e2f]" />
                <div className="flex-1 bg-[#004c6e]" />
                <div className="flex-1 bg-[#006591]" />
                <div className="flex-1 bg-[#0284c7]" />
                <div className="flex-1 bg-[#0ea5e9]" />
                <div className="flex-1 bg-[#38bdf8]" />
                <div className="flex-1 bg-[#89ceff]" />
                <div className="flex-1 bg-[#c9e6ff]" />
                <div className="flex-1 bg-[#ffffff]" />
              </div>
            </Card>

            {/* Color Swatch Card: Tertiary */}
            <Card className="p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-semibold text-foreground">Tertiary (Nominal Emerald)</span>
                <span className="text-muted-foreground">Nominal Emerald</span>
              </div>
              <div className="h-16 rounded bg-tertiary shadow-inner flex items-end p-2">
                <span className="text-tertiary-foreground text-xs font-mono font-semibold">
                  Nominal Flow / Secure
                </span>
              </div>
              {/* Palette steps */}
              <div className="flex h-6 rounded overflow-hidden border border-border">
                <div className="flex-1 bg-[#002113]" />
                <div className="flex-1 bg-[#005236]" />
                <div className="flex-1 bg-[#006947]" />
                <div className="flex-1 bg-[#00855b]" />
                <div className="flex-1 bg-[#10b981]" />
                <div className="flex-1 bg-[#34d399]" />
                <div className="flex-1 bg-[#4edea3]" />
                <div className="flex-1 bg-[#6ffbbe]" />
                <div className="flex-1 bg-[#ffffff]" />
              </div>
            </Card>

            {/* Typography Specs */}
            <Card className="p-4 space-y-2">
              <div className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Dual Typography Engine
              </div>
              <div className="flex items-baseline justify-around pt-2">
                <div className="text-5xl font-bold text-foreground font-sans">Aa</div>
                <div className="text-4xl font-semibold text-muted-foreground font-sans">Aa</div>
                <div className="text-3xl font-mono text-primary">Aa</div>
              </div>
              <div className="flex justify-between text-[11px] font-mono text-muted-foreground pt-2 border-t border-border">
                <span>Inter (UI/Headers)</span>
                <span>JetBrains Mono (Data/Telemetry)</span>
              </div>
            </Card>

            {/* Button Hierarchy (shadcn CVA) */}
            <Card className="p-4 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                shadcn Button Hierarchy
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="actionGradient" size="sm">
                  Action Gradient
                </Button>
                <Button variant="outline" size="sm">
                  Outline Ghost
                </Button>
                <Button variant="inverted" size="sm">
                  Inverted Slate
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
              </div>
            </Card>

            {/* Technical Search Field */}
            <Card className="p-4 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                shadcn Input Component
              </div>
              <div className="relative">
                <Input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search GPS, Vessel IMO, Part SKU..."
                />
              </div>
            </Card>

            {/* Data Telemetry Progress Bars */}
            <Card className="p-4 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                shadcn Progress Component
              </div>
              <div className="space-y-3 pt-1">
                <Progress value={78} indicatorClassName="bg-primary" />
                <Progress value={88} indicatorClassName="bg-secondary" />
                <Progress value={94} indicatorClassName="bg-tertiary" />
              </div>
            </Card>

            {/* Tactical Floating Pill Navigation */}
            <Card className="p-4 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Tactical Pill Navigation
              </div>
              <div className="flex items-center justify-center pt-1">
                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-muted border border-border shadow-xs">
                  <Button size="iconSm" variant="default" className="rounded-full">
                    <Home className="w-4 h-4" />
                  </Button>
                  <Button size="iconSm" variant="ghost" className="rounded-full text-muted-foreground">
                    <Search className="w-4 h-4" />
                  </Button>
                  <Button size="iconSm" variant="ghost" className="rounded-full text-muted-foreground">
                    <User className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Icon Buttons & Action Cluster */}
            <Card className="p-4 space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase text-muted-foreground">
                Action Icon Cluster
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Button variant="secure" size="iconSm">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="actionGradient" size="sm" className="gap-1.5">
                  <Edit2 className="w-3.5 h-3.5" />
                  <span>Label</span>
                </Button>
                <div className="flex items-center gap-1 ml-auto">
                  <Button size="iconSm" variant="default">
                    <Wand2 className="w-4 h-4" />
                  </Button>
                  <Button size="iconSm" variant="secondary">
                    <Boxes className="w-4 h-4" />
                  </Button>
                  <Button size="iconSm" variant="secure">
                    <Tag className="w-4 h-4" />
                  </Button>
                  <Button size="iconSm" variant="destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-4 mt-6">
          <Card className="p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle>Interactive Modal & Form Demo</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              <p className="text-xs text-muted-foreground">
                Click below to test the full <strong>React Hook Form + Zod</strong> validated demand vetting dialog.
              </p>
              <VetteDemandDialog />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="space-y-4 mt-6">
          <Card className="p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle>Tactical Status Badges</CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex flex-wrap gap-3">
              <Badge variant="secure" dot={true}>SECURE // NOMINAL</Badge>
              <Badge variant="warning" dot={true}>WARNING // BOTTLENECK</Badge>
              <Badge variant="immediate" dot={true}>IMMEDIATE // CRITICAL</Badge>
              <Badge variant="tactical">TACTICAL GRID 7</Badge>
              <Badge variant="outline">DEFCON 4</Badge>
              <Badge variant="secondary">ILMS V2.4</Badge>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentLab;

