import Card from "./ui/Card";
import Skeleton from "./ui/Skeleton";

const ROWS = 6;

export default function UserTableSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              {["User", "Email", "Status", "Created", "Action"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-6 py-4 text-left font-medium text-gray-400"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="divide-y">
            {Array.from({ length: ROWS }).map((_, i) => (
              <tr key={i}>
                {/* User */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-9 w-9 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </td>

                <td className="px-6 py-4">
                  <Skeleton className="h-4 w-40" />
                </td>

                <td className="px-6 py-4">
                  <Skeleton className="h-6 w-20 rounded-full" />
                </td>

                <td className="px-6 py-4">
                  <Skeleton className="h-4 w-24" />
                </td>

                <td className="px-6 py-4 text-right">
                  <Skeleton className="h-4 w-10 ml-auto" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
