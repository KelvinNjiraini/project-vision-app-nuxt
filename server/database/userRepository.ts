import prisma from './client';
import { UserData } from '@/utils/types';

export async function createUser(userObj: UserData) {
    try {
        const user = await prisma.user.create({
            data: {
                id: userObj.id,
                email: userObj.email,
                firstName: userObj.firstName,
                lastName: userObj.lastName,
                levelOfEducation: userObj.levelOfEducation,
            },
        });

        return { user };
    } catch (error) {
        throw error;
    }
}
