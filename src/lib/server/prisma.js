import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient()

if (process.env.Node_ENV === "development") {
    global.prisma = prisma
}

export { prisma }