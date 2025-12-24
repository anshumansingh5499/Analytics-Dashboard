import type { User } from "../types";

export const users: User[] = Array.from({ length: 28 }).map((_, i) => ({
  id: String(i + 1),
  name: `User ${i + 1}`,
  email: `user${i + 1}@company.com`,
  avatar: `https://i.pravatar.cc/150?img=${i + 5}`,
  status: i % 4 === 0 ? "inactive" : "active",
  createdAt: new Date(
    Date.now() - i * 24 * 60 * 60 * 1000
  ).toISOString(),
}));
