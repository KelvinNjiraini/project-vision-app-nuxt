import { createUser } from '@/server/database/userRepository';
import { Prisma } from '@prisma/client';
export default defineEventHandler(async (event) => {
    // sign up and register code
    const body = await readBody(event);
    const { firstName, lastName, email, levelOfEducation, id } = body;
    try {
        await createUser({
            id,
            firstName,
            lastName,
            email,
            levelOfEducation,
        });
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (error.code === 'P2002') {
                throw createError({
                    statusCode: 400,
                    statusMessage: 'User already exists',
                });
            }
        }
    }
});
