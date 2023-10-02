"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/general/icons";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { addUser } from "@/lib/actions/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
interface SignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpForm({ className, ...props }: SignUpFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { data: session } = useSession();

  if (session) {
    router.push("/dashboard");
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const user = await addUser({ email, name, password });
    if (user) {
      router.push("/auth/login");
      toast.success("User success created");
    } else {
      toast.error("user already exist");
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
            <Label className="sr-only">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              className="mt-3"
              autoCorrect="off"
              onChange={(e) => setName(e.target.value)}
              disabled={isLoading}
            />
            <Label className="sr-only">password</Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              className="mt-3"
              autoCorrect="off"
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
