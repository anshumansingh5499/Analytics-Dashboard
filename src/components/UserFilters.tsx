/* eslint-disable @typescript-eslint/no-explicit-any */
import { useUserStore } from "../store/userStore";

export default function UserFilters() {
  const {
    search,
    statusFilter,
    setSearch,
    setStatusFilter,
  } = useUserStore();

  return (
    <div className="flex gap-4">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
        className="w-full rounded border px-3 py-2"
      />

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value as any)
        }
        className="rounded border px-3 py-2"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
