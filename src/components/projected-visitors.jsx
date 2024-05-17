import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ProjectedVisitorsChart } from "./figures/projected-visitors-chart";

export default function ProjecterVisitors() {
  return (
    <div className="col-span-5 h-fit overflow-hidden">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-xl font-semibold md:text-2xl">
            Visitors Projection
          </CardTitle>
          <CardDescription>Today&apos;s projected visitors</CardDescription>
        </CardHeader>
        <CardContent className="pl-0">
          <ProjectedVisitorsChart />
        </CardContent>
      </Card>
    </div>
  );
}
