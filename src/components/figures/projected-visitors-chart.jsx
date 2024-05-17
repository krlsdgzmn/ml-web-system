import {
  ComposedChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    hour: "00",
    traffic: Math.floor(Math.random() * 50),
  },
  {
    hour: "01",
    traffic: Math.floor(Math.random() * 50),
  },
  {
    hour: "02",
    traffic: Math.floor(Math.random() * 50),
  },
  {
    hour: "03",
    traffic: Math.floor(Math.random() * 50),
  },
  {
    hour: "04",
    traffic: Math.floor(Math.random() * 100),
  },
  {
    hour: "05",
    traffic: Math.floor(Math.random() * 100),
  },
  {
    hour: "06",
    traffic: Math.floor(Math.random() * 100),
  },
  {
    hour: "07",
    traffic: Math.floor(Math.random() * 150),
  },
  {
    hour: "08",
    traffic: Math.floor(Math.random() * 150),
  },
  {
    hour: "09",
    traffic: Math.floor(Math.random() * 150),
  },
  {
    hour: "10",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "11",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "12",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "13",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "14",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "15",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "16",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "17",
    traffic: Math.floor(Math.random() * 200),
  },
  {
    hour: "18",
    traffic: Math.floor(Math.random() * 150),
  },
  {
    hour: "19",
    traffic: Math.floor(Math.random() * 150),
  },
  {
    hour: "20",
    traffic: Math.floor(Math.random() * 150),
  },
  {
    hour: "21",
    traffic: Math.floor(Math.random() * 100),
  },
  {
    hour: "22",
    traffic: Math.floor(Math.random() * 100),
  },
  {
    hour: "23",
    traffic: Math.floor(Math.random() * 100),
  },
];

export function ProjectedVisitorsChart() {
  return (
    <ResponsiveContainer width="100%" aspect={5 / 2}>
      <ComposedChart data={data}>
        <XAxis
          dataKey="hour"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          interval={() => (window.width < 768 ? 2 : 0)}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          interval={0}
        />
        <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
        <Bar
          dataKey="traffic"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
          classhour="fill-primary"
          strokeWidth={1.5}
        />
        <Tooltip
          content={({ payload }) => {
            if (payload.length === 0) return null;

            return (
              <div className="rounded-md bg-background/95 p-2 text-sm shadow-md">
                <p className="font-medium text-foreground">
                  {payload[0].payload.hour}:00
                </p>
                <p className="text-muted-foreground">
                  Traffic: {payload[0].payload.traffic}
                </p>
              </div>
            );
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
