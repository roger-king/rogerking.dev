import React, { useState } from 'react';
import { Box, Heading, Text, Select } from 'grommet';
import { workHistory } from '../app.constants';
import { Work } from '../../types';

const HomePage: React.FC = () => {
    const [currentWork, setCurrentWork] = useState<Work>(workHistory[0]);

    return (
        <Box align="center" justify="center" fill>
            <Heading>Roger King</Heading>
            <Text>
                <i>
                    {currentWork.title} @{' '}
                    <Select
                        options={workHistory.map(w => w.company)}
                        value={currentWork.company}
                        size="small"
                        onChange={e => {
                            const selectedCompany = workHistory.find(w => e.value === w.company);
                            if (selectedCompany) {
                                setCurrentWork(selectedCompany);
                            } else {
                                console.error('oops cannot find company');
                            }
                        }}
                    />
                </i>
            </Text>
        </Box>
    );
};

export default HomePage;
