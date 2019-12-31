import { deepMerge } from 'grommet/utils';
import { base, ThemeType } from 'grommet/themes';
import { Work } from '../types';

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
            radius: '7px',
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
                    family: 'Pacifico, cursive',
                },
            },
            4: {
                font: {
                    family: 'Pacifico, cursive',
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

export const profileLinks = {
    github: 'https://github.com/roger-king',
    linkedin: 'https://www.linkedin.com/in/roger-king-dev',
};
