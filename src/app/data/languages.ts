import { LanguageConfidence } from '../../types';

const languages: LanguageConfidence[] = [
    {
        language: 'Java/TypeScript',
        value: 99,
    },
    {
        language: 'GoLang',
        value: 85,
    },
    {
        language: 'Python',
        value: 70,
    },
    {
        language: 'Java',
        value: 65,
    },
];

export const getLanguages = (): LanguageConfidence[] => {
    return languages;
};
