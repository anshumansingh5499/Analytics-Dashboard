import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";
import Card from "../components/ui/Card";
import { useUserStore } from "../store/userStore";

const SIGNUP_COLOR = "#2563eb";
const ACTIVE_COLOR = "#22c55e";
const INACTIVE_COLOR = "#ef4444";

export default function AnalyticsPage() {
  const users = useUserStore((s) => s.users);

  const signupTrend = Array.from({ length: 7 }).map(
    (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));

      return {
        day: date.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        users: Math.floor(Math.random() * 8) + 3,
      };
    }
  );

  const activeCount = users.filter(
    (u) => u.status === "active"
  ).length;

  const inactiveCount = users.length - activeCount;

  const statusData = [
    { name: "Active", value: activeCount },
    { name: "Inactive", value: inactiveCount },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-6">
      <h1 className="text-xl font-semibold">
        Analytics Overview
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="mb-4">
            <h2 className="font-semibold">
              User Signup Trend
            </h2>
            <p className="text-sm text-gray-500">
              Last 7 days
            </p>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={signupTrend}>
              <CartesianGrid
                strokeDasharray="3 3"
              />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke={SIGNUP_COLOR}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card>
          <div className="mb-4">
            <h2 className="font-semibold">
              User Status
            </h2>
            <p className="text-sm text-gray-500">
              Active vs Inactive
            </p>
          </div>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
              >
                <Cell fill={ACTIVE_COLOR} />
                <Cell fill={INACTIVE_COLOR} />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Active ({activeCount})
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              Inactive ({inactiveCount})
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
