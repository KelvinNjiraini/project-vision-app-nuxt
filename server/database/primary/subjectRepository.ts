import prisma from '../client';

export async function getAllSubjects() {
    const results = await prisma.subjectPrimary.findMany({
        select: { id: true, name: true },
    });
    return results;
}
