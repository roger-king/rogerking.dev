import React, { useContext } from 'react';
import { Box, Heading, Text, Select } from 'grommet';
import { workHistory } from '../app.constants';
import { GlobalContext } from '../contexts/global';

const HomePage: React.FC = () => {
    const { selectedWork, setSelectedWork } = useContext(GlobalContext);

    return (
        <Box align="center" justify="center" fill>
            <Heading>Roger King</Heading>
            <Text>
                <i>
                    {selectedWork.title} @{' '}
                    <Select
                        options={workHistory.map(w => w.company)}
                        value={selectedWork.company}
                        size="small"
                        onChange={e => {
                            const selectedCompany = workHistory.find(w => e.value === w.company);
                            if (selectedCompany) {
                                setSelectedWork(selectedCompany);
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
