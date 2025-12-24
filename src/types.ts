export type UserStatus = "active" | "inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: UserStatus;
  createdAt: string;
}
