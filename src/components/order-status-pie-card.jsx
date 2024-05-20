import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import OrderStatusPieChart from "./figures/order-status-pie-chart";
import { cn } from "@/lib/utils";
import { month as monthOptions } from "@/constants";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function OrderStatusPieCard({
  className,
  month,
  week,
  data,
  loading,
}) {
  return (
    <Card className={cn(" overflow-hidden", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          Order Status Distribution
        </CardTitle>
        <CardDescription>
          {month
            ? `For ${Object.keys(monthOptions)[month - 1]}`
            : `For all months`}{" "}
          {week && `- Week ${week}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[227px] w-full pl-0">
        {loading && (
          <div className="flex w-full justify-center py-20">
            <AiOutlineLoading3Quarters className="animate-spin" size={24} />
          </div>
        )}

        {data.length === 0 && !loading && (
          <div className="flex w-full justify-center py-20">
            <p className="text-sm text-muted-foreground">No records found</p>
          </div>
        )}
        {data.length > 0 && !loading && <OrderStatusPieChart data={data} />}
      </CardContent>
    </Card>
  );
}
