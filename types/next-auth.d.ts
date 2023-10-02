import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { User as IUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
    role: string;
  }

  interface User {
    id: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
  }
}
