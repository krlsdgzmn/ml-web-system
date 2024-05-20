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
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function WeekBarCard({ className, month, data, week, loading }) {
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
        {loading && (
          <div className="flex w-full justify-center py-28">
            <AiOutlineLoading3Quarters className="animate-spin" size={24} />
          </div>
        )}

        {data.length === 0 && !loading && (
          <div className="flex w-full justify-center py-28">
            <p className="text-sm text-muted-foreground">No records found</p>
          </div>
        )}
        {data.length > 0 && !loading && <WeekBarChart data={data} />}
      </CardContent>
    </Card>
  );
}
