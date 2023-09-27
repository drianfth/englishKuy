"use client";
import { SessionProvider } from "next-auth/react";
import { FC } from "react";
import { ThemeProvider } from "@/components/general/theme-provider";
interface providerProps {
  children: React.ReactNode;
}

const Providers: FC<providerProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
