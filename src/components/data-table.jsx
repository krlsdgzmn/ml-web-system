import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  discount_bin,
  distance_bin,
  month,
  order_status,
  price_bin,
  week,
} from "@/constants";
import { MdDelete } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import FormDialog from "./form-dialog";
import { cn } from "@/lib/utils";

export default function DataTable({
  data,
  loading,
  handleDelete,
  handlePost,
  className,
}) {
  return (
    <Card className={cn("h-[600px] max-h-[600px] overflow-auto", className)}>
      <CardHeader>
        <div className="flex items-end justify-between">
          <div className="w-fit">
            <CardTitle className="text-xl ">Prediction Table</CardTitle>
            <CardDescription>
              Record of all predictions made by the model
            </CardDescription>
          </div>

          <FormDialog onSubmit={handlePost} />
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Price Range</TableHead>
              <TableHead>Discount Range</TableHead>
              <TableHead>Month</TableHead>
              <TableHead>Week</TableHead>
              <TableHead>Distance Range</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                className="transition-all duration-300 ease-in-out hover:scale-[1.02]"
              >
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  {Object.keys(price_bin)[item.price_bin - 1]}
                </TableCell>
                <TableCell>
                  {Object.keys(discount_bin)[item.discount_bin - 1]}
                </TableCell>
                <TableCell>{Object.keys(month)[item.month - 1]}</TableCell>
                <TableCell>{Object.keys(week)[item.week - 1]}</TableCell>
                <TableCell>
                  {Object.keys(distance_bin)[item.distance_bin - 1]}
                </TableCell>
                <TableCell>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold text-white ${
                      item.order_status === 0 ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {Object.keys(order_status)[item.order_status]}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDelete size={20} className="fill-red-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {loading && (
          <div className="flex w-full justify-center py-8">
            <AiOutlineLoading3Quarters className="animate-spin" size={20} />
          </div>
        )}

        {data.length === 0 && !loading && (
          <div className="flex w-full justify-center py-8">
            <p className="text-sm text-muted-foreground">No records found</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
