import React from "react";
import { BookCopy } from "lucide-react";
import { getUserSession } from "@/lib/session";
import { ModeToggle } from "../ui/toggle-mode";
import ProfilMenu from "./profil-menu";
import { User } from "next-auth";

const Navbar = async () => {
  const session: User = await getUserSession();
  // const navItems = [{ label: "4000 Englisg", childs: [{}] }];

  return (
    <nav className="h-16 flex items-center z-50 border-b  fixed top-0 right-0 left-0  backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto flex justify-between px-4 items-center">
        <div className="flex gap-4">
          <BookCopy className="text-teal-400" />
          <h1 className="font-semibold text-secondary-foreground">
            EnglishKuy
          </h1>
        </div>

        <div className="flex gap-2">
          {session && (
            <>
              <ProfilMenu
                avatar={session.image}
                name={session.name}
                email={session.email}
              />
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
