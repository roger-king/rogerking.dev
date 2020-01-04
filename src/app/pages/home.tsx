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
                    style={{ width: '400px', height: '80px' }}
                    label="Get in Touch"
                    primary
                    onClick={() => {
                        history.push('/contact');
                    }}
                />
            </Box>
            <Box align="center">
                <Heading level="1">About</Heading>
                <Text>Passionate software engineer, incorporating the latest cloud native technologies to build</Text>
            </Box>
        </Box>
    );
};

export default HomePage;
