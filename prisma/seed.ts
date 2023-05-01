import {
    randBetweenDate,
    randNumber,
    randProduct,
    randProductAdjective,
} from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    try {
        await prisma.category.deleteMany();
        await prisma.product.deleteMany();
        const mockProducts = randProduct({
            length: 1000,
        });
        for (let index = 0; index < mockProducts.length; index++) {
            const product = mockProducts[index];
            const productAdjective = randProductAdjective();
            await prisma.product.upsert({
                where: {
                    title: `${ productAdjective } ${ product.title }`,
                },
                create: {
                    title: `${ productAdjective } ${ product.title }`,
                    description: product.description,
                    price: product.price,
                    image: `${ product.image }/tech`,
                    quantity: randNumber({ min: 10, max: 100 }),
                    category: {
                        connectOrCreate: {
                            where: {
                                name: product.category,
                            },
                            create: {
                                name: product.category,
                                createdAt: randBetweenDate({
                                    from: new Date("4/29/2023"),
                                    to: new Date(),
                                }),
                            },
                        },
                    },
                    createdAt: randBetweenDate({
                        from: new Date("4/30/2023"),
                        to: new Date(),
                    }),
                },
                update: {},
            });
        }
    } catch (error) {
        throw error;
    }
};

main().catch((err) => {
    console.warn("Error while generating seed: \n", err);
})