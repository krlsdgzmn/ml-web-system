import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  AreaChart,
  Area,
  BarChart,
} from "recharts";

// Transform the data
const transformData = (data) => {
  const result = {};

  data.forEach((item) => {
    const bin = item.month;
    if (!result[bin]) {
      result[bin] = { bin, completed: 0, cancelled: 0 };
    }
    if (item.order_status === 0) {
      result[bin].completed += 1;
    } else if (item.order_status === 1) {
      result[bin].cancelled += 1;
    }
  });

  return Object.values(result);
};

// month bin labels
const monthBinLabels = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export default function MonthBarChart({ data }) {
  const transformedData = transformData(data);

  // Check if there's a filter applied
  const isFiltered = transformedData.length === 1;

  return (
    data.length > 0 && (
      <ResponsiveContainer width="100%" height={250}>
        {isFiltered ? (
          <BarChart data={transformedData}>
            <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
            <XAxis
              dataKey="bin"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(tick) => monthBinLabels[tick]}
              textAnchor="end"
              interval={0}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              interval={0}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;

                return (
                  <div className="rounded-md bg-background/95 p-2 text-sm shadow-md">
                    <p className="font-medium text-foreground">
                      Month: {monthBinLabels[payload[0].payload.bin]}
                    </p>
                    <div className="flex flex-col text-muted-foreground">
                      <p>Completed: {payload[0].payload.completed}</p>
                      <p>Cancelled: {payload[0].payload.cancelled}</p>
                    </div>
                  </div>
                );
              }}
            />
            <Bar dataKey="completed" fill="#22c55e" name="Completed Orders" />
            <Bar dataKey="cancelled" fill="#ef4444" name="Cancelled Orders" />
          </BarChart>
        ) : (
          <AreaChart data={transformedData}>
            <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
            <XAxis
              dataKey="bin"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(tick) => monthBinLabels[tick]}
              textAnchor="end"
              interval={0}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
              interval={0}
            />
            <Tooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;

                return (
                  <div className="rounded-md bg-background/95 p-2 text-sm shadow-md">
                    <p className="font-medium text-foreground">
                      Month: {monthBinLabels[payload[0].payload.bin]}
                    </p>
                    <div className="flex flex-col text-muted-foreground">
                      <p>Completed: {payload[0].payload.completed}</p>
                      <p>Cancelled: {payload[0].payload.cancelled}</p>
                    </div>
                  </div>
                );
              }}
            />
            <Area
              dataKey="cancelled"
              fill="#ef4444"
              stroke="#ef4444"
              name="Cancelled Orders"
              stackId="a"
              type="monotone"
            />
            <Area
              dataKey="completed"
              fill="#22c55e"
              stroke="#22c55e"
              name="Completed Orders"
              stackId="a"
              type="monotone"
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
    )
  );
}
