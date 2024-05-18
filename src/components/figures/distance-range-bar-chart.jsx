import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

// Transform the data
const transformData = (data) => {
  const result = {};

  data.forEach((item) => {
    const bin = item.distance_bin;
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

// Distance bin labels
const distanceBinLabels = {
  1: "0-199",
  2: "200-399",
  3: "400-599",
  4: "600-799",
  5: "800-999",
  6: ">1000",
};

export default function DistanceRangeBarChart({ data }) {
  const transformedData = transformData(data);

  return (
    data.length > 0 && (
      <ResponsiveContainer width="100%" height={275}>
        <ComposedChart data={transformedData}>
          <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />

          <XAxis
            dataKey="bin"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(tick) => distanceBinLabels[tick]}
            interval={0}
            // label={{
            //   value: "Distance Range",
            //   position: "insideBottom",
            //   fontSize: 12,
            //   offset: -5,
            // }}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
            interval={0}
            // label={{
            //   value: "Order Count",
            //   angle: -90,
            //   position: "outsideLeft",
            //   fontSize: 12,
            // }}
          />

          <Tooltip
            content={({ payload }) => {
              if (payload.length === 0) return null;

              return (
                <div className="rounded-md bg-background/95 p-2 text-sm shadow-md">
                  <p className="font-medium text-foreground">
                    Distance Range: {distanceBinLabels[payload[0].payload.bin]}
                  </p>
                  <div className="flex flex-col text-muted-foreground">
                    <p>Completed: {payload[0].payload.completed}</p>
                    <p>Cancelled: {payload[0].payload.cancelled}</p>
                  </div>
                </div>
              );
            }}
          />
          <Bar
            dataKey="completed"
            fill="#22c55e"
            name="Completed Orders"
            stackId="a"
          />
          <Bar
            dataKey="cancelled"
            fill="#ef4444"
            name="Cancelled Orders"
            stackId="a"
          />
        </ComposedChart>
      </ResponsiveContainer>
    )
  );
}
