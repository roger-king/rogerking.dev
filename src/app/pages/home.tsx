import React from 'react';
import { Box, Button, Heading, Text, ResponsiveContext } from 'grommet';
import { useHistory } from 'react-router';
import Avatar from '../components/avatar';

const HomePage: React.FC = () => {
    const size = React.useContext(ResponsiveContext);
    const isMobile = size === 'small';
    const textSize = isMobile ? '22px' : '26px';
    const btnSize = isMobile ? '80%' : '30%';
    const history = useHistory();

    return (
        <Box direction="column" gap="medium">
            <Box align="center" justify="center" gap="medium" flex="grow">
                <Box margin="small">
                    <Avatar imgName="hey" />
                </Box>
                <Heading level="2" margin="small">
                    Roger King
                </Heading>
                <Heading level="3" margin="small">
                    Software Engineer.
                </Heading>
                <Button
                    style={{ width: btnSize, height: '80px' }}
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
                    <Text size={textSize}>
                        Passionate software engineer, incorporating the latest cloud native technologies to build
                        reactive user interfaces, scalable backend systems, and maintainable infrastructure.
                    </Text>
                    <Text size={textSize}>
                        I am an avid developer for developers. Aspiring to build tooling to help streamline the
                        development process of applications.
                    </Text>
                    <Text size={textSize}>
                        I am currently employeed at Compass as a Senior Software Engineer (Tech Lead) and actively
                        building and contributing to open source projects.
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
