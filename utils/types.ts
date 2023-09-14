export type UserData = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    levelOfEducation: string;
};

export interface RegisterRule {
    firstName: string;
    lastName: string;
    // levelOfEducation: string;
    email: string;
    password: string;
}
