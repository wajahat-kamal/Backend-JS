import { prisma } from "./lib/prisma";



async function main() {
    try {
        const res = await prisma.user.create({ data: { name: "Wajahat Kamal", email: "wk@ex.com" } })
    } catch (error) {
        console.log(error);
    }
}
main()