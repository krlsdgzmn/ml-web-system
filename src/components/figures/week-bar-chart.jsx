import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  BarChart,
  ComposedChart,
  Area,
} from "recharts";

// Transform the data
const transformData = (data) => {
  const result = {};

  data.forEach((item) => {
    const bin = item.week;
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
const weekBinLabels = {
  1: "Week 1",
  2: "Week 2",
  3: "Week 3",
  4: "Week 4",
};

export default function WeekBarChart({ data }) {
  const transformedData = transformData(data);
  const isFiltered = transformedData.length === 1;

  return (
    data.length > 0 && (
      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={transformedData}>
          <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
          <XAxis
            dataKey="bin"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(tick) => weekBinLabels[tick]}
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
                    {weekBinLabels[payload[0].payload.bin]}
                  </p>
                  <div className="flex flex-col text-muted-foreground">
                    <p>Completed: {payload[0].payload.completed}</p>
                    <p>Cancelled: {payload[0].payload.cancelled}</p>
                  </div>
                </div>
              );
            }}
          />
          {!isFiltered ? (
            <>
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
            </>
          ) : (
            <>
              <Bar
                dataKey="cancelled"
                fill="#ef4444"
                stroke="transparent"
                name="Cancelled Orders"
              />
              <Bar
                dataKey="completed"
                fill="#22c55e"
                stroke="transparent"
                name="Completed Orders"
              />
            </>
          )}
        </ComposedChart>
      </ResponsiveContainer>
    )
  );
}
