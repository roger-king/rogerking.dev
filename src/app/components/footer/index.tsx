import React from 'react';
import { Button, Footer } from 'grommet';
import { Linkedin, Github } from 'grommet-icons';
import { profileLinks } from '../../app.constants';

const MyFooter: React.FC = (): JSX.Element => {
    return (
        <Footer align="center" justify="center" pad="small">
            <Button as="a" icon={<Linkedin />} href={profileLinks.linkedin} target="_blank" />
            Copyright @ 2020
            <Button as="a" icon={<Github />} href={profileLinks.github} target="_blank" />
        </Footer>
    );
};

export default MyFooter;
