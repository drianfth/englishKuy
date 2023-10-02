import { Metadata } from "next";
import Link from "next/link";
import { BookCopy } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SignUpForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/auth/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          SignIn
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[url('/bookbackground.jpg')] bg-cover " />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <BookCopy className="text-teal-400" />
            EnglishgKuy
          </div>
        </div>
        <div className="lg:px-8 flex items-center  h-screen ">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email and password below to Sign Up
              </p>
            </div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}
