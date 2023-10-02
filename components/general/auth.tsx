"use client";

import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const LoginButton = () => {
  return (
    <Link
      href="/auth/login"
      className={cn(buttonVariants({ variant: "default" }), "px-8 font-bold")}
    >
      Login
    </Link>
    // <Button onClick={() => signIn("google")} className="px-8 font-bold">
    //   Login
    // </Button>
  );
};

export const LogoutButton = () => {
  return (
    <Button variant={"outline"} onClick={() => signOut()}>
      Logout
    </Button>
  );
};
