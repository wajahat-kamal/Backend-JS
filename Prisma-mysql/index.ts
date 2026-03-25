import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./generated/prisma/client.ts"

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({ adapter })

async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Wajahat Kamal",
            email: "wk@ex.com"
        }
    })
    console.log(user)
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())