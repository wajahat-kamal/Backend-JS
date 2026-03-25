import { prisma } from "./lib/prisma"

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