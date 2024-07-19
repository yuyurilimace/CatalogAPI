import { User } from "../types/userType";

export interface UserRepository {
  createUser: (user: User) => Promise<User>;
  updateUser: (user: User) => Promise<User>;
  deleteUser: (user: User) => Promise<User>;
  getUser: (user: User) => Promise<User | null>;
}
