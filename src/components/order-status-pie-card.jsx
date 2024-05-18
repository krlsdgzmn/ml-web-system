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

export default function OrderStatusPieCard({ className, month, week, data }) {
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
      <CardContent className="h-[231px] w-full pl-0">
        {data && data.length === 0 && (
          <div className="pt-20 text-center text-sm text-gray-500">
            No data available
          </div>
        )}
        <OrderStatusPieChart data={data} />
      </CardContent>
    </Card>
  );
}
