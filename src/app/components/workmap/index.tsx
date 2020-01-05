import React from 'react';
import { WorldMap } from 'grommet';

interface WorkMap {
    locations?: { name: string; location: number[] }[];
}

const WorkMap = () => {
    return (
        <WorldMap
            fill="horizontal"
            color="light-3"
            continents={[
                {
                    name: 'North America',
                    color: '#0283df',
                },
            ]}
            places={[
                {
                    name: 'Connecticut',
                    location: [41.6032, -73.0877],
                    color: 'accent-1',
                },
                {
                    name: 'New York',
                    location: [40.7128, -74.006],
                    color: 'neutral-1',
                },
            ]}
        />
    );
};

export default WorkMap;
