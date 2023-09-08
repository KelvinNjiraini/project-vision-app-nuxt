import { createUser } from '@/server/database/userRepository';
export default defineEventHandler(async (event) => {
    // sign up and register code
    const body = await readBody(event);
    const { firstName, lastName, email, levelOfEducation } = body;
    const res = await createUser({
        firstName,
        lastName,
        email,
        levelOfEducation,
    });
    return res;
});
