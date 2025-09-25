interface UserRequest {
  email: string;
  password: string;
  name: string;
}

interface UserResponse {
  token: string;
  name: string;
}

interface UserAuthRequest extends Pick<UserRequest, "email" | "password"> {}

export type { UserRequest, UserResponse, UserAuthRequest };
