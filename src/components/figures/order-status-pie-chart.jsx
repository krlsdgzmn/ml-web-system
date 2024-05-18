import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

export default function OrderStatusPieChart({ data }) {
  const completedCount = data
    ? data.filter((item) => item.order_status === 0).length
    : 0;
  const cancelledCount = data
    ? data.filter((item) => item.order_status === 1).length
    : 0;

  const dataPoints = [
    { name: "Completed", value: completedCount },
    { name: "Cancelled", value: cancelledCount },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <ResponsiveContainer>
      <PieChart width={400} height={400}>
        <Pie
          data={dataPoints}
          // cx="50%"
          // cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={completedCount === 0 || cancelledCount === 0 ? 0 : 5}
          dataKey="value"
          stroke="transparent"
          // cx={420}
          // cy={200}
          // startAngle={180}
          // endAngle={0}
          animationBegin={15}
          labelLine={false}
          // change the color and fontsize label
          // label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
          //   const RADIAN = Math.PI / 180;
          //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
          //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

          //   return (
          //     <text
          //       x={x}
          //       y={y}
          //       fill="white"
          //       textAnchor={x > cx ? "start" : "end"}
          //       dominantBaseline="central"
          //       fontSize={12}
          //     >
          //       {value}
          //     </text>
          //   );
          // }}
        >
          {dataPoints.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip
          content={({ payload }) => {
            if (payload.length === 0) return null;

            return (
              <div className="rounded-md bg-background/95 p-2 text-sm shadow-md">
                <p className="font-medium text-foreground">
                  Order Status: {payload[0].payload.name}
                </p>
                <div className="flex flex-col text-muted-foreground">
                  <p>Count: {payload[0].payload.value}</p>
                </div>
              </div>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
