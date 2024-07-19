export type User = {
  id?: string;
  name: string;
  password: string;
  profile: { id: string; type: string };
};
