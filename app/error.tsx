"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RotateCw, Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen w-full bg-[#B7DFFF]">
      <div className="max-w-7xl w-full mx-auto py-6 text-slate-900 flex flex-col items-center">
        <h3 className=" font-medium">Something went wrong!</h3>
        <h1 className="text-3xl font-bold mb-6">{error.message}</h1>
        <Image src="/Error.png" alt="error" width={380} height={400} />
        <div className="flex gap-10 mt-10">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "bg-transparent flex gap-2  "
            )}
          >
            <Undo2 /> Go Home
          </Link>
          <Button
            className="flex bg-sky-500 text-white gap-2"
            onClick={() => reset()}
          >
            <RotateCw /> Try Again
          </Button>
        </div>
      </div>
    </main>
  );
}
