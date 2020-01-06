import React from 'react';
import { Box, Button, Heading, Text, ResponsiveContext } from 'grommet';
import { useHistory } from 'react-router';
import { techStack, workHistory } from '../app.constants';
import Avatar from '../components/avatar';
import HeadLine from '../components/headline';
import { CircleMeter } from '../components/meter/circle';
import { Tech } from '../../types';
import Card from '../components/card';

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
                <HeadLine level="3">About</HeadLine>
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
                        I am currently employeed at {workHistory[0].company} as a {workHistory[0].title} and actively
                        building and contributing to open source projects.
                    </Text>
                </Box>
            </Box>
            <Box align="center" gap="medium">
                <HeadLine level="3">Language Confidence</HeadLine>
                <Box width={{ max: '1000px' }} justify="center" direction="row-responsive" flex="grow" wrap>
                    <CircleMeter label="Java/Typescript" value={99} />
                    <CircleMeter label="GoLang" value={88} />
                    <CircleMeter label="Python" value={75} />
                    <CircleMeter label="Java" value={60} />
                </Box>
            </Box>
            <Box align="center">
                <HeadLine level="3">Tech Stack</HeadLine>
                <Box direction="column" gap="medium">
                    {techStack.map(
                        (t: Tech): JSX.Element => {
                            return <Card key={t.img} image={t.img} category={t.category} />;
                        },
                    )}
                </Box>
            </Box>
            <Box align="center">
                <HeadLine level="3">References</HeadLine>
                <Box direction="column" gap="medium">
                    coming soon...
                </Box>
            </Box>
        </Box>
    );
};

export default HomePage;
