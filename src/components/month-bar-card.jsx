import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import MonthBarChart from "./figures/month-bar-chart.jsx";
import { cn } from "@/lib/utils";
import { month as monthOptions } from "@/constants";

export default function MonthBarCard({ className, month, data, week }) {
  return (
    <Card className={cn("h-[400px] overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Completed vs Cancelled by Month
        </CardTitle>
        <CardDescription>
          {month
            ? `For ${Object.keys(monthOptions)[month - 1]}`
            : `For all months`}
          {week && ` - Week ${week}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full pl-0">
        {data && data.length === 0 && (
          <div className="pt-20 text-center text-sm text-gray-500">
            No data available
          </div>
        )}
        <MonthBarChart data={data} />
      </CardContent>
    </Card>
  );
}
