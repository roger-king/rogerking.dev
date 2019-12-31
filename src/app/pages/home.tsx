import React from 'react';
import { Box, Text } from 'grommet';
import Avatar from '../components/avatar';

const HomePage: React.FC = () => {
    return (
        <Box align="center" justify="center" fill>
            <Avatar />
            <Text margin="small" size="large">
                I&apos;m a software engineer.
            </Text>
        </Box>
    );
};

export default HomePage;
