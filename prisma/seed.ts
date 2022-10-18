import {PrismaClient} from '@prisma/client';

// import data if needed

const prisma = new PrismaClient();

async function main() {
  await prisma.model.create({
    data: {
      // model schema
  }

  await prisma.model.createMany({
    data: {
      // import data
    }
  }
}

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
