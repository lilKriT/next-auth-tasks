import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import usePrisma from "@/lib/hooks/usePrisma";

const prisma = usePrisma;

const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // This is causing issues when using prisma adapter!
      // profile(profile: GoogleProfile) {
      //   console.log("profile: ", profile);
      //   return {
      //     ...profile,
      //     //   role: profile.role ?? "user",
      //     id: profile.sub,
      //     image: profile.picture, // without this line, you can't use image
      //   };
      // },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // if (user) token.role = user.role;

      if (user) {
        token.role = "added role";
      }

      console.log("Token: ", token);
      console.log("User: ", user);
      console.log("Lol");
      return token;
    },
    // This you only need in client components
    async session({ session, user }) {
      // session.user.role = token.role;
      session.user.id = user.id;

      // console.log("Session: ", session);
      // console.log("Token: ", token);
      // console.log("User: ", user);
      return session;
    },
  },
};

export default options;
