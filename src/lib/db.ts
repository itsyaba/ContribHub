// db.ts

import { PrismaClient } from "@prisma/client";

// Declare the global cachedPrisma object in TypeScript
declare global {
  // Prevent TypeScript from re declaring the variable during hot-reloading
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// Check if we're in production mode or not
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient(); // Always create a new Prisma client in production
} else {
  // Reuse the client if it's already been created (in development mode)
  if (!global.cachedPrisma) {
    console.log("INITIALIZING PRISMA CLIENT");
    global.cachedPrisma = new PrismaClient();
  } else {
    console.log("REUSING EXISTING PRISMA");
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
