import { deepMerge } from 'grommet/utils';
import { base, ThemeType } from 'grommet/themes';
import { Work } from '../types';

export const theme: ThemeType = deepMerge(base, {
    global: {
        colors: {
            background: '#1a1d21',
            brand: '#282c34',
            'accent-1': '#139DDB',
            'accent-2': '#EF424C',
            'accent-3': '#F8F0EE',
            focus: 'accent-1',
            warning: '#B33A3A',
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
