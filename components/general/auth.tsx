"use client";

import React from "react";
import { Button } from "../ui/button";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn("google")} className="px-8 font-bold">
      Login
    </Button>
  );
};

export const LogoutButton = () => {
  return (
    <Button variant={"outline"} onClick={() => signOut()}>
      Logout
    </Button>
  );
};
