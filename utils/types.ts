export type UserData = {
    email: string;
    firstName: string;
    lastName: string;
    levelOfEducation: string;
};

export interface RegisterRule {
    firstName: string;
    lastName: string;
    levelOfEducation: string;
    email: string;
    password: string;
}
