import prisma from './client';
import { User } from 'prisma/prisma-client';

type UserData = {
    email: string;
    firstName: string;
    lastName: string;
    levelOfEducation: string;
};

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
