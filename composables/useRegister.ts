import { UserData } from 'utils/types';

export const useRegister = async function (userInfo: UserData) {
    const { email, firstName, lastName, levelOfEducation, id } = userInfo;

    const userData = {
        id,
        email,
        firstName,
        lastName,
        levelOfEducation,
    };
    const { data, error } = await useFetch('/api/auth/signup', {
        method: 'POST',
        body: userData,
    });

    if (error.value)
        throw createError({
            ...error.value,
            statusMessage: `Error registering user`,
        });

    return unref(data);
};
