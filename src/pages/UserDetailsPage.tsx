import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../store/userStore";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import UserEditModal from "../components/UserEditModal";

export default function UserDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const user = useUserStore((s) =>
    s.users.find((u) => u.id === id)
  );

  const [open, setOpen] = useState(false);

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-500">
        User not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 space-y-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              User Profile
            </h1>
            <p className="text-sm text-gray-500">
              View and manage user information
            </p>
          </div>

          <Button onClick={() => setOpen(true)}>
            Edit User
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          <Card className="lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-24 w-24 rounded-full"
              />

              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                {user.name}
              </h2>

              <p className="text-sm text-gray-500">
                {user.email}
              </p>

              <span
                className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                  user.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>

              <div className="mt-4 text-xs text-gray-400">
                Joined on {user.createdAt.slice(0, 10)}
              </div>
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-6">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card>
                <p className="text-sm text-gray-500">
                  Total Logins
                </p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  42
                </p>
              </Card>

              <Card>
                <p className="text-sm text-gray-500">
                  Sessions
                </p>
                <p className="mt-1 text-2xl font-semibold text-gray-900">
                  128
                </p>
              </Card>

              <Card>
                <p className="text-sm text-gray-500">
                  Last Active
                </p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  2 hours ago
                </p>
              </Card>
            </div>

            <Card>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                Recent Activity
              </h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Logged in
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Updated profile
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-500" />
                  Viewed analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />
                  Changed password
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gray-400" />
                  Logged out
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <UserEditModal
          user={user}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
