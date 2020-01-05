import React from 'react';
import { Box, Button, Heading, Text } from 'grommet';
import { useHistory } from 'react-router';
import Avatar from '../components/avatar';

const HomePage: React.FC = () => {
    const history = useHistory();

    return (
        <Box direction="column" gap="medium">
            <Box align="center" justify="center" gap="medium">
                <Box>
                    <Avatar imgName="hey" />
                </Box>
                <Heading level="2" margin="small">
                    Roger King
                </Heading>
                <Heading level="3" margin="small">
                    Software Engineer.
                </Heading>
                <Button
                    style={{ width: '30%', height: '80px' }}
                    label="Get in Touch"
                    primary
                    onClick={(): void => {
                        history.push('/contact');
                    }}
                />
            </Box>
            <Box align="center">
                <Heading level="1">About</Heading>
                <Box width="large" gap="large">
                    <Text size="26px">
                        Passionate software engineer, incorporating the latest cloud native technologies to build
                        reactive user interfaces, scalable backend systems, and maintainable infrastructure.
                    </Text>
                    <Text size="26px">
                        I am an avid developer for developers. Aspiring to build tooling to help streamline the
                        development process of applications.
                    </Text>
                    <Text size="26px">
                        I am currently employeed at Compass as a Senior Software Engineer (Tech Lead) and actively
                        building and contributing to open source projects.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
