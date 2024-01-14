export enum UserProfile {
  OWNER = "OWNER",
  EMPLOYEE = "EMPLOYEE",
}
export interface User {
  name: string;
  email: string;
  password: string;
  phone?: string;
  profile: UserProfile;
}
