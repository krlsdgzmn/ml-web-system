import { useState, useMemo } from "react";
import axios from "axios";
import DataTable from "@/components/data-table";
import Header from "@/components/header";
import { useToast } from "@/components/ui/use-toast";
import { useFetchData } from "@/hooks/use-fetch-data";
import Filters from "@/components/filters";
import KPICard from "@/components/kpi-card";

const buildQuery = (month, week, orderStatus) => {
  const params = new URLSearchParams();
  if (month) params.append("month", month);
  if (week) params.append("week", week);
  if (orderStatus !== null) params.append("order_status", orderStatus);
  return `http://localhost:8000/api/predictions/?${params.toString()}`;
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
      await axios.delete(`http://localhost:8000/api/predictions/${id}/`);
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

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-8">
            <div className="col-span-5 grid gap-2 sm:grid-cols-3 md:gap-4">
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

            <DataTable
              data={data}
              loading={loading}
              handleDelete={handleDelete}
              handlePost={handlePost}
              className="col-span-5"
            />
          </div>
        </section>
      </main>
    </>
  );
}
