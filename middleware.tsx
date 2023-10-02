export { default } from "next-auth/middleware";

// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   callbacks: {
//     authorized: ({ req, token }) => {
//       console.log({ token });
//       if (req.nextUrl.pathname === "/dashboard") {
//         return token?.role === "ADMIN";
//       }

//       return Boolean(token);
//     },
//   },
// });

export const config = {
  matcher: ["/dashboard/:path*"],
};
