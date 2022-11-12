import express from "./express/server";
import prisma from "./prisma/server";

Promise.resolve()
  .then(() => prisma.create())
  .then(() => express.create())
  .then(() => console.log(`Server Started On Port ${process.env.SERVER_PORT} :)`));

const handleExit = (sig: string) => 
  Promise.resolve()
    .then(() => console.log(`\nReceived Signal: ${sig}`))
    .then(() => express.destroy())
    .then(() => prisma.destroy())
    .finally(() => process.exit(0));

process.on("SIGTERM", handleExit);
process.on("SIGQUIT", handleExit);
process.on("SIGINT", handleExit);
process.on("uncaughtException", handleExit);