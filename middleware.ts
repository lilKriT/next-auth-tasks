import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

// export { default } from "next-auth/middleware"; // this wont be needed - it just completely locks out access.

// with auth augments the request with users token
export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    // console.log("Pathname: ", request.nextUrl.pathname);
    console.log("Token: ", request.nextauth.token);
  },
  {
    // What does this do?
    // If "authorized" returns true, middleware executes. Otherwise it wont
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
);

export const config = { matcher: ["/extra", "/dashboard"] };
