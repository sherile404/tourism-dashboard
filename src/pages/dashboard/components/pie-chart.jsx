"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { tripType: "Couple", visitors: 275, fill: "#4f9cf0" },
  { tripType: "Solo", visitors: 200, fill: "#f4a022" },
  { tripType: "Friends", visitors: 287, fill: "#99c3ff" },
  { tripType: "Family", visitors: 173, fill: "#b184eb" },
  { tripType: "Business", visitors: 190, fill: "#56c15f" },
];

export function PieChartComponent() {
  return (
    <Card className="w-full max-w-lg bg-gradient-to-b from-slate-900 to-blue-900 border-none rounded-lg shadow-lg">
      <CardHeader className="text-white text-center">
        <CardTitle className="text-lg font-bold">
          Trip Type Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="tripType"
            innerRadius={80}
            outerRadius={100}
            stroke="none"
          />
        </PieChart>
      </CardContent>

      <CardContent className="text-center">
        <div className="flex justify-center gap-4 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#4f9cf0] rounded-full mr-2"></span>
            Couple
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#f4a022] rounded-full mr-2"></span>Solo
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#99c3ff] rounded-full mr-2"></span>
            Friends
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#b184eb] rounded-full mr-2"></span>
            Family
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#56c15f] rounded-full mr-2"></span>
            Business
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
