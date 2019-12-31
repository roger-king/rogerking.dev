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
            family: 'Lato, sans-serif',
        },
    },
    button: {
        border: {
            radius: '7px',
        },
    },
    heading: {
        font: {
            family: 'Viga, sans-serif',
            size: '4em',
        },
        level: {
            2: {
                font: {
                    family: 'Viga, sans-serif',
                },
            },
            3: {
                font: {
                    family: 'Viga, sans-serif',
                },
            },
            4: {
                font: {
                    family: 'Lato, sans-serif',
                },
            },
        },
    },
});

export const workHistory: Work[] = [
    {
        company: 'Compass',
        title: 'Senior Software Enginer - Tech Lead',
    },
    {
        company: 'Rocketrip',
        title: 'Software Enginer',
    },
    {
        company: 'Zillion Group',
        title: 'Software Engineer',
    },
    {
        company: 'Crown Awards',
        title: 'Junior Web Developer',
    },
    {
        company: 'Apple Inc',
        title: 'Genius',
    },
];

export const profileLinks = {
    github: 'https://github.com/roger-king',
    linkedin: 'https://www.linkedin.com/in/roger-king-dev',
};
