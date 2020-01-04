export const yearsOfExperience = (): number => {
    const startOfCareer = 2014;
    return new Date().getFullYear() - startOfCareer;
};
