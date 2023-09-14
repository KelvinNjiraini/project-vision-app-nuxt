import { Prisma } from '@prisma/client';
import { getAllSubjects } from '@/server/database/primary/subjectRepository';

export default defineEventHandler(async (event) => {
    try {
        const subjects = await getAllSubjects();
        return subjects;
    } catch (error) {
        throw error;
    }
});
