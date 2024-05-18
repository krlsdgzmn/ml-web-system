import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function KPICard({ title, dataLength, className }) {
  return (
    <Card className="transform overflow-clip text-center transition-all duration-500 ease-in-out hover:scale-[1.03] ">
      <div className={cn("py-2", className)} />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6 sm:pb-0">
        <CardTitle className="h-8 w-full text-sm font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="font-ubuntu text-xl font-semibold sm:text-3xl">
          {dataLength}
        </div>
      </CardContent>
    </Card>
  );
}
