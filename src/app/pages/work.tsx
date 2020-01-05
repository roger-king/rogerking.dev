import React, { useContext } from 'react';
import { Anchor, Box, Heading, Text } from 'grommet';
import WorkMap from '../components/workmap';
import { GlobalContext } from '../contexts/global';

const AboutPage: React.FC = (): JSX.Element => {
    const { selectedWork } = useContext(GlobalContext);
    return (
        <Box direction="column" fill>
            <Box direction="column" align="center" justify="center" gap="medium" fill>
                <WorkMap />
                <Heading level="3" style={{ borderBottom: '3px solid' }}>
                    Work History
                </Heading>
                <Text>
                    I am currently a {selectedWork.title} @
                    <Anchor target="_blank" href={selectedWork.website}>
                        {selectedWork.company}
                    </Anchor>{' '}
                    in {selectedWork.location}.
                </Text>
            </Box>
        </Box>
    );
};

export default AboutPage;
