import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const usePrisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ["error"] });

export default usePrisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = usePrisma;
