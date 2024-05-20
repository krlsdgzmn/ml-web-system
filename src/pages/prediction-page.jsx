import { useState, useMemo } from "react";
import axios from "axios";
import DataTable from "@/components/data-table";
import Header from "@/components/header";
import { useToast } from "@/components/ui/use-toast";
import { useFetchData } from "@/hooks/use-fetch-data";
import Filters from "@/components/filters";
import KPICard from "@/components/kpi-card";
import OrderStatusPieCard from "@/components/order-status-pie-card";
import DistanceRangeBarCard from "@/components/distance-range-bar-card";
import MonthBarCard from "@/components/month-bar-card";
import WeekBarCard from "@/components/week-bar-card";

const buildQuery = (month, week, orderStatus) => {
  const params = new URLSearchParams();
  if (month) params.append("month", month);
  if (week) params.append("week", week);
  if (orderStatus !== null) params.append("order_status", orderStatus);
  return `https://mksg-clothing.onrender.com/api/predictions/?${params.toString()}`;
};

export default function PredictionPage() {
  const [month, setMonth] = useState(null);
  const [week, setWeek] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const query = useMemo(
    () => buildQuery(month, week, orderStatus),
    [month, week, orderStatus],
  );
  const { data, loading } = useFetchData(query, [query, refresh]);

  const { toast } = useToast();

  const handlePost = async (newData) => {
    try {
      await axios.post(query, newData);
      toast({ description: "New record has been added successfully" });
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      toast({ description: "Failed to add new record" });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://mksg-clothing.onrender.com/api/predictions/${id}/`,
      );
      toast({
        description: `You have successfully deleted the record with ID ${id}`,
      });
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
      toast({ description: "Failed to delete the record" });
    }
  };

  return (
    <>
      <Header />
      <main className="font-ubuntu container mx-auto flex min-h-[50vh] items-center justify-center text-base">
        <section className="my-4 h-full w-full">
          <div className="mb-2 flex h-fit w-full flex-col justify-between md:mb-4 md:flex-row md:items-end">
            <div className="mb-2 md:mb-0">
              <p className="text-xl font-semibold text-foreground md:text-2xl">
                Prediction Dashboard
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                Here you can predict order status.
              </p>
            </div>

            <Filters
              setMonth={setMonth}
              setWeek={setWeek}
              setOrderStatus={setOrderStatus}
              month={month}
              week={week}
              orderStatus={orderStatus}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            <div className="grid gap-2 lg:col-span-3 lg:gap-4">
              <div className="row-span-1 grid grid-cols-3 gap-2 lg:gap-4">
                <KPICard
                  title="Total Orders"
                  dataLength={data.length}
                  className="bg-background invert"
                />
                <KPICard
                  title="Completed Orders"
                  dataLength={
                    data.filter((item) => item.order_status === 0).length
                  }
                  className="bg-green-500"
                />
                <KPICard
                  title="Cancelled Orders"
                  dataLength={
                    data.filter((item) => item.order_status === 1).length
                  }
                  className="bg-red-500"
                />
              </div>

              <div className="row-span-2 grid flex-col gap-2 md:grid-cols-2 lg:col-span-2 lg:hidden lg:gap-4">
                <DistanceRangeBarCard
                  month={month}
                  week={week}
                  data={data}
                  loading={loading}
                />
                <OrderStatusPieCard
                  month={month}
                  week={week}
                  data={data}
                  loading={loading}
                />
              </div>
              <MonthBarCard
                month={month}
                week={week}
                data={data}
                loading={loading}
              />
              <WeekBarCard
                month={month}
                week={week}
                data={data}
                className="lg:hidden"
                loading={loading}
              />
              <DataTable
                data={data}
                loading={loading}
                handleDelete={handleDelete}
                handlePost={handlePost}
              />
            </div>

            <div className="row-span-2 hidden flex-col gap-2 lg:col-span-2 lg:flex lg:gap-4">
              <DistanceRangeBarCard
                month={month}
                week={week}
                data={data}
                loading={loading}
              />
              <OrderStatusPieCard
                month={month}
                week={week}
                data={data}
                loading={loading}
              />
              <WeekBarCard
                month={month}
                week={week}
                data={data}
                loading={loading}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
