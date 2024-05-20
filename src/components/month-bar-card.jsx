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
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function MonthBarCard({
  className,
  month,
  data,
  week,
  loading,
}) {
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
        {data.length > 0 && !loading && <MonthBarChart data={data} />}
      </CardContent>
    </Card>
  );
}
