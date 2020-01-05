import React from 'react';
import { WorldMap } from 'grommet';

interface WorkMap {
    locations?: { name: string; location: number[] }[];
}

const WorkMap = () => {
    return (
        <WorldMap
            fill="horizontal"
            color="light-1"
            continents={[
                {
                    name: 'North America',
                    color: 'light-5',
                },
            ]}
            places={[
                {
                    name: 'Connecticut',
                    location: [41.6032, -73.0877],
                    color: '#0283df',
                },
                {
                    name: 'New York',
                    location: [40.7128, -74.006],
                    color: '#0283df',
                },
            ]}
        />
    );
};

export default WorkMap;
