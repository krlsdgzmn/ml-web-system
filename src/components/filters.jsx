import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { month as monthOptions } from "@/constants";

export default function Filters({
  setMonth,
  setWeek,
  setOrderStatus,
  month,
  week,
  orderStatus,
}) {
  return (
    <div className="flex gap-2">
      <Select onValueChange={setMonth} value={month}>
        <SelectTrigger className="w-36">
          <SelectValue>
            {month ? Object.keys(monthOptions)[month - 1] : "Select Month"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={null}>All</SelectItem>
          {Object.keys(monthOptions).map((key, index) => (
            <SelectItem key={index} value={index + 1}>
              {key}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={setWeek} value={week}>
        <SelectTrigger className="w-36">
          <SelectValue>{week ? `Week ${week}` : "Select Week"}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={null}>All</SelectItem>
          {[1, 2, 3, 4].map((week) => (
            <SelectItem key={week} value={week}>
              Week {week}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={setOrderStatus} value={orderStatus}>
        <SelectTrigger className="w-44">
          <SelectValue>
            {orderStatus !== null
              ? orderStatus == 1
                ? "Cancelled"
                : "Completed"
              : "Select Order Status"}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={null}>All</SelectItem>
          <SelectItem value="0">Completed</SelectItem>
          <SelectItem value="1">Cancelled</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
