import prisma from './client';
import { UserData } from '@/utils/types';

export async function createUser(userObj: UserData) {
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
