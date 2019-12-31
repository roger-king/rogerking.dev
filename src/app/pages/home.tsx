import React from 'react';
import { Box, Button, Text } from 'grommet';
import Avatar from '../components/avatar';
import SkillsList from '../components/card/skills';

const HomePage: React.FC = () => {
    return (
        <Box fill>
            <Box align="center" justify="center" fill>
                <Avatar imgName="hey" />
                <Text margin="small" size="large">
                    I&apos;m a software engineer.
                </Text>
                <Button label="Learn more" primary />
            </Box>
            <SkillsList />
        </Box>
    );
};

export default HomePage;
