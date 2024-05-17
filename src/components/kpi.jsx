import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KPI() {
  return (
    <div className="mb-2 grid grid-cols-2 gap-2 md:mb-4 md:gap-4 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-semibold">Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-ubuntu text-2xl font-semibold">₱15,500</div>
          <p className="mt-1 text-xs text-green-500">+20.1% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-semibold">
            Total Visitors
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-ubuntu text-2xl font-semibold">256</div>
          <p className="mt-1 text-xs text-green-500">+5.3% from yesterday</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-semibold">Total Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-ubuntu text-2xl font-semibold">153</div>
          <p className="mt-1 text-xs text-green-500">+10.13% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-semibold">
            Cancelled Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="font-ubuntu text-2xl font-semibold">12</div>
          <p className="mt-1 text-xs text-red-500">+75% from last month (3)</p>
        </CardContent>
      </Card>
    </div>
  );
}
