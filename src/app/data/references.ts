import { Reference } from '../../types';

const references: Reference[] = [
    {
        name: 'Steven Kessler',
        relation: 'Software Engineer @ Rocketrip & Zillion Group',
        testimonial: `
            Roger is an extremely talented engineer and I do not use that term lightly his time as both a member of the dev ops team and as a developer has given him a very strong and unique insight into approaching problems in todays cloud based environments.
            This approach shines through in the solid and battle tested code he has written over the years, running the gamut from normal crud api's to fully automated deployment tools for multiple cloud providers.
            I have worked with roger for several years now at two different companies he has always been eager to learn and grow as an engineer no matter the discipline and is incredibly easy to work with. He is a solid addition to any team.
        `,
    },
];

export const getReferences = (): Reference[] => {
    return references;
};
