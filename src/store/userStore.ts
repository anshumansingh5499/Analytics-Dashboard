import { create } from "zustand";
import { users as initialUsers } from "../data/users";
import type { User, UserStatus } from "../types";

interface UserStore {
  users: User[];
  search: string;
  statusFilter: "all" | UserStatus;
  updateUser: (id: string, data: Partial<User>) => void;
  setSearch: (v: string) => void;
  setStatusFilter: (v: "all" | UserStatus) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: initialUsers,
  search: "",
  statusFilter: "all",

  setSearch: (search) => set({ search }),
  setStatusFilter: (statusFilter) => set({ statusFilter }),

  updateUser: (id, data) =>
    set((state) => ({
      users: state.users.map((u) =>
        u.id === id ? { ...u, ...data } : u
      ),
    })),
}));
