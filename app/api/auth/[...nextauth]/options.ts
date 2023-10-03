import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import usePrisma from "@/lib/hooks/usePrisma";
// import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = usePrisma;

const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma), // the as adapter part is important
  providers: [
    GoogleProvider({
      // This is causing issues when using prisma adapter!
      // This TOTALLY was the problem.
      // profile(profile: GoogleProfile) {
      //   console.log("profile: ", profile);
      //   return {
      //     ...profile,
      //     // role: profile.role ?? "user",
      //     id: profile.sub,
      //     // image: profile.picture, // without this line, you can't use image
      //   };
      // },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      // console.log("Token: ", token);
      // console.log("User: ", user);
      return token;
    },
    // This you only need in client components
    async session({ session, token }) {
      // session.user.id = user.id;
      // session.user.role = user.role;

      if (token.sub) session.user.id = token.sub;
      session.user.role = token.role;

      // console.log("Session: ", session);
      // console.log("Token: ", token);
      // console.log("User: ", user);
      return session;
    },
  },
};

export default options;
