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
    const response = await $fetch('/api/auth/signup', {
        method: 'POST',
        body: userData,
    });

    return response;
};
