import { DefaultSession, DefaultUser } from "next-auth";
// import { JWT, DefaultJWT } from "next-auth/jwt";

export enum Role {
  user = "user",
  admin = "admin",
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      name: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    role: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string;
    role: Role;
  }
}
