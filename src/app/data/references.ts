import { Reference } from '../../types';

const references: Reference[] = [
    {
        name: 'Steven Kessler',
        relation: 'Senior Engineer @ Rocketrip & Zillion Group',
        testimonial:
            "Roger is an extremely talented engineer and I do not use that term lightly his time as both a member of the dev ops team and as a developer has given him a very strong and unique insight into approaching problems in todays cloud based environments. This approach shines through in the solid and battle tested code he has written over the years, running the gamut from normal crud api's to fully automated deployment tools for multiple cloud providers.\n I have worked with roger for several years now at two different companies he has always been eager to learn and grow as an engineer no matter the discipline and is incredibly easy to work with. He is a solid addition to any team.",
    },
    {
        name: 'Michael Supon',
        relation: 'Manager @ Zillion Group',
        testimonial:
            'I have worked with Roger for a few years, and in few companies/roles. He never fails to deliver.  His diverse skill set from technology to creative/design makes him a strong contributor to the team. \nI would also like to acknowledge Rogers creative solutions and commitment to task completion that I have had the pleasure of witnessing. His growth and determination have made working with him both rewarding and pleasurable.',
    },
    {
        name: 'Larry Presswood',
        relation: 'Lead Architect @ Zillion Group',
        testimonial:
            'I have worked with Roger on a very time critical project which literally if not done could put the company out of business and Roger hit a home run!!\nHe worked very closely with his team members to produce mission critical dashboard/scheduler. Roger also has very good cloud/Devops skills.\nI would be happy to work with Roger in the future.',
    },
];

export const getReferences = (): Reference[] => {
    return references;
};
