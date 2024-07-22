import { User } from "../types/userType";

export interface UserRepository {
  createUser: (user: User) => Promise<User>;
  updateUser: (user: User) => Promise<User>;
  deleteUser: (userId: string) => Promise<User>;
  getUser: (userId: string) => Promise<User | null>;
}
