import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserFilters from "../components/UserFilters";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Pagination from "../components/ui/Pagination";
import UserTableSkeleton from "../components/UserTableSkeleton";
import { useUserStore } from "../store/userStore";
import logo from "/image.png";

const PAGE_SIZE = 6;

export default function UsersPage() {
  const navigate = useNavigate();
  const { users, search, statusFilter } = useUserStore();
  const [page, setPage] = useState(1);

  if (users.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl space-y-6 px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="mt-2 h-4 w-64 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <Card>
            <div className="flex gap-4">
              <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-40 bg-gray-200 rounded animate-pulse" />
            </div>
          </Card>

          <UserTableSkeleton />
        </div>
      </div>
    );
  }

  const filteredUsers = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .filter((u) => statusFilter === "all" || u.status === statusFilter);

  const totalPages = Math.ceil(filteredUsers.length / PAGE_SIZE);

  const paginatedUsers = filteredUsers.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl space-y-6 px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Company Logo"
              className="h-10 w-10 object-contain"
            />

            <div>
              <h1 className="text-4xl font-extrabold text-gray-900">
                Dashboard<span className="text-yellow-500">.</span>
              </h1>
              <p className="text-sm text-gray-500">
                Manage users and view detailed information
              </p>
            </div>
          </div>

          <Button onClick={() => navigate("/analytics")}>Analytics</Button>
        </div>

        <Card>
          <UserFilters />
        </Card>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr className="text-left text-gray-600">
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Email</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Created</th>
                  <th className="px-6 py-4 text-right font-medium">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    onClick={() => navigate(`/users/${user.id}`)}
                    className="cursor-pointer hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-9 w-9 rounded-full"
                        />
                        <span className="font-medium text-gray-900">
                          {user.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-600">{user.email}</td>

                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {user.createdAt.slice(0, 10)}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/users/${user.id}`);
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}

                {paginatedUsers.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No users found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="border-t px-6 py-4">
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
              />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
