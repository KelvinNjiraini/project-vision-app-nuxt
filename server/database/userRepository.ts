import prisma from './client';
import { User } from 'prisma/prisma-client';

export async function createUser(userObj: User) {
    const user = await prisma.user.create({
        data: {
            email: userObj.email,
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            levelOfEducation: userObj.levelOfEducation,
        },
    });
    return user;
}
