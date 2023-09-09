import { UserData } from 'utils/types';

export const useRegister = async function (userInfo: UserData) {
    const { email, firstName, lastName, levelOfEducation } = userInfo;

    const userData = {
        email,
        firstName,
        lastName,
        levelOfEducation,
    };
    const response = await useFetch('/api/auth/signup', {
        method: 'POST',
        body: userData,
    });

    return response;
};
