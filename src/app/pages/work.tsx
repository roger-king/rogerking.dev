import React, { useContext } from 'react';
import { Anchor, Box, Text } from 'grommet';
import Avatar from '../components/avatar';
import { GlobalContext } from '../contexts/global';

const AboutPage: React.FC = (): JSX.Element => {
    const { selectedWork } = useContext(GlobalContext);
    return (
        <Box direction="column">
            <Box direction="row-responsive" align="center" justify="center" gap="medium" fill>
                <Avatar imgName="working" />
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
