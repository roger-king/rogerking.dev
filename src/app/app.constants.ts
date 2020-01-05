import { deepMerge } from 'grommet/utils';
import { base, ThemeType } from 'grommet/themes';
import { Tech, Work } from '../types';

export const theme: ThemeType = deepMerge(base, {
    global: {
        colors: {
            background: '#090909',
            brand: '#282c34',
            'accent-1': '#B8860B',
            'accent-2': '#CC9900',
            'accent-3': '#D9B01C',
            focus: '#333333',
            critical: '#B33A3A',
            warning: '#D9B01C',
        },
        font: {
            family: 'Dosis, sans-serif',
        },
    },
    button: {
        border: {
            radius: '3px',
        },
    },
    worldMap: {
        place: {
            base: '10px',
        },
    },
    heading: {
        font: {
            family: 'Pacifico, cursive',
            size: '4em',
        },
        level: {
            2: {
                font: {
                    family: 'Pacifico, cursive',
                },
            },
            3: {
                font: {
                    family: 'Dosis, sans-serif',
                },
            },
            4: {
                font: {
                    family: 'Dosis, sans-serif',
                },
            },
        },
    },
});

export const workHistory: Work[] = [
    {
        company: 'Compass',
        title: 'Senior Software Enginer - Tech Lead',
        website: 'https://www.compass.com',
        location: 'New York City',
    },
    {
        company: 'Rocketrip',
        title: 'Software Enginer',
        website: 'https://www.rocketrip.com',
        location: 'New York City',
    },
    {
        company: 'Zillion Group',
        title: 'Software Engineer',
        website: 'https://www.zillion.com',
        location: 'Norwalk, CT',
    },
    {
        company: 'Crown Awards',
        title: 'Junior Web Developer',
        website: 'https://www.crownawards.com',
        location: 'Elmsford, NY',
    },
    {
        company: 'Apple Inc',
        title: 'Genius',
        website: 'https://www.apple.com',
        location: 'Greenwich, CT',
    },
];

export const techStack: Tech[] = [
    {
        img: 'react',
        category: 'Front End',
        description: 'A multi-facet client side framework enabling for web and mobile development',
    },
    {
        img: 'angular',
        category: 'Front End',
        description: 'An MVC Framework that is written in Python.',
    },
    {
        img: 'graphql',
        category: 'Back End',
        description: 'Middleware data-fetching mechanism',
    },
    {
        img: 'django',
        category: 'Back End',
        description: 'An MVC Framework that is written in Python.',
    },
    {
        img: 'fastapi',
        category: 'Back End',
        description: 'A minimal async python framework.',
    },
    {
        img: 'golang',
        category: 'Back End',
        description: '',
    },
    {
        img: 'nodejs',
        category: 'Back End',
        description: '',
    },
    {
        img: 'aws',
        category: 'DevOps',
        description: 'Leading cloud provider with many services to help build your application features. ',
    },
    {
        img: 'gcp',
        category: 'DevOps',
        description: 'An MVC Framework that is written in Python.',
    },
    {
        img: 'terraform',
        category: 'DevOps',
        description:
            'An infrastructure as code language that creates reproducable and mantainable infrastructure in all ',
    },
    {
        img: 'k8s',
        category: 'DevOps',
        description: '',
    },
];

export const profileLinks = {
    github: 'https://github.com/roger-king',
    linkedin: 'https://www.linkedin.com/in/roger-king-dev',
};
