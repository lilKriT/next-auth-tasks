import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
};

export default options;
