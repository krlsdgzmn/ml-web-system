import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function KPICard({ title, dataLength, className }) {
  return (
    <Card className="transform overflow-clip text-center transition-all duration-500 ease-in-out hover:scale-105 sm:text-left">
      <div className={cn("py-2", className)} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md w-full font-semibold sm:text-sm">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-ubuntu text-3xl font-semibold sm:text-2xl">
          {dataLength}
        </div>
      </CardContent>
    </Card>
  );
}
