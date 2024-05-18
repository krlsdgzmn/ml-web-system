import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { month as monthOptions } from "@/constants";
import WeekBarChart from "./figures/week-bar-chart.jsx";

export default function WeekBarCard({ className, month, data, week }) {
  return (
    <Card className={cn("h-[400px] overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Completed vs Cancelled by Week
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
        <WeekBarChart data={data} />
      </CardContent>
    </Card>
  );
}
