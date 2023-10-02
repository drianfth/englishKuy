import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import { User } from "next-auth";
// import { usePathname } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session: User = await getUserSession();
  return (
    <main className="mt-16">
      welcome
      {JSON.stringify(session)}
      {/* {pathname} */}
    </main>
  );
};

export default page;
