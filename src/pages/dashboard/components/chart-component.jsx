"use client";

import { TrendingUp, Upload } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";

export const description = "A multiple line chart";

const chartData = [
  { month: "January 2024", compliments: 20, complaints: 50 },
  { month: "February 2024", compliments: 70, complaints: 30 },
  { month: "March 2024", compliments: 40, complaints: 90 },
  { month: "April 2024", compliments: 110, complaints: 20 },
  { month: "May 2024", compliments: 60, complaints: 70 },
  { month: "June 2024", compliments: 120, complaints: 10 },
];

const chartConfig = {
  compliments: {
    label: "Compliments",
    color: "hsl(210, 80%, 60%)",
  },
  complaints: {
    label: "Complaints",
    color: "hsl(35, 90%, 50%)",
  },
};

export function ChartComponent() {
  return (
    <Card className="bg-transparent  border-none ">
      <CardHeader className="flex justify-between w-full">
        <CardTitle className="text-white flex justify-between w-full">
          Distribution of Compliments/Complaints
          <CardContent className="text-center">
        <div className="flex justify-center gap-4 text-sm">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#4f9cf0] rounded-full mr-2"></span>
            Compliments
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#f4a022] rounded-full mr-2"></span>Complaints
          </div>
          
        </div>
      </CardContent>
          <Button className="bg-slate-500">
            <Upload className="w-4 h-4 " />
          </Button>
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <Tooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="compliments"
              stroke={chartConfig.compliments.color}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="complaints"
              stroke={chartConfig.complaints.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
