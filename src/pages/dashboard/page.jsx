import React from "react";
import MainLayout from "../../layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Download, Filter, SlidersHorizontal, Upload } from "lucide-react";
import { ChartComponent } from "./components/chart-component";
import { PieChartComponent } from "./components/pie-chart";
import { ReviewCard } from "./components/review-card";

function Dashboard() {
  const cardsData = [
    { id: 1, label: "New Reviews", value: 150, icon: "📘" },
    { id: 2, label: "Open Reviews", value: 200, icon: "🔺" },
    { id: 3, label: "New Reviews", value: 350, icon: "✔️" },
    { id: 4, label: "Complaints", value: 20, icon: "❌" },
  ];

  return (
    <div className="min-h-screen pt-6">
      <div className="dashboard-container gap-4 flex px-2 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full p-2 max-w-6xl bg-gradient-to-r from-slate-800 via-orange-300 to-pink-700">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className=" p-4 border-r flex items-center justify-between text-white"
            >
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{card.icon}</div>
                <div>
                  <h3 className="text-lg">{card.label}</h3>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 bg-slate-700 p-2 rounded">
          <Button variant="default" className="bg-slate-500 w-full">
          <SlidersHorizontal className="w-4 h-4 mr-4" color="white" />
            Filter
          </Button>
          <Button variant="default" className="bg-slate-500 w-full">
            <Upload className="w-4 h-4" color="white" />
          </Button>
        </div>
      </div>
      <div className="max-w-4xl mx-">
        <ChartComponent />
      </div>
      <div className="flex justify-around w-full gap-2  p-2 rounded">
        <PieChartComponent />
        <ReviewCard />
      </div>
    </div>
  );
}

export default MainLayout(Dashboard);
