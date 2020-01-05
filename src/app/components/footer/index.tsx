import React from 'react';
import { Box, Button } from 'grommet';
import { Linkedin, Github } from 'grommet-icons';
import { profileLinks } from '../../app.constants';

const MyFooter: React.FC = (): JSX.Element => {
    return (
        <Box direction="column" align="center" justify="center" pad="small">
            <Box direction="row">
                <Button as="a" icon={<Linkedin />} href={profileLinks.linkedin} target="_blank" />
                <Button as="a" icon={<Github />} href={profileLinks.github} target="_blank" />
            </Box>
            Roger King @ 2020
        </Box>
    );
};

export default MyFooter;
