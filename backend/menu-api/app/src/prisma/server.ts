import { ProcessManager } from "common";
import prisma from ".";

class PrismaProcessManager implements ProcessManager {
  create() {
    return prisma.$connect().catch((err) => console.error(err));
  }

  destroy() {
    console.log("Disconnecting From Prisma");
    return prisma.$disconnect().catch((err) => console.error(err));
  }
};

export default new PrismaProcessManager();