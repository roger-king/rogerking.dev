import React from 'react';
import { Box, Button, Header, Heading } from 'grommet';
import { useRouteMatch, useHistory } from 'react-router-dom';

const MyHeader: React.FC = (): JSX.Element => {
    const history = useHistory();
    const isAbout = useRouteMatch({
        path: '/about',
        strict: true,
        sensitive: true,
    });

    const isContact = useRouteMatch({
        path: '/contact',
        strict: true,
        sensitive: true,
    });

    return (
        <Header margin={{ left: '50px', right: '50px' }}>
            <Heading
                onClick={() => {
                    history.push('/');
                }}
                level="2"
                style={{ cursor: 'pointer' }}
            >
                Roger King
            </Heading>
            <Box direction="row-responsive" gap="small">
                <Button
                    label="About"
                    primary={!!isAbout}
                    onClick={() => {
                        history.push('/about');
                    }}
                />
                <Button
                    label="Contact"
                    primary={!!isContact}
                    onClick={() => {
                        history.push('/contact');
                    }}
                />
            </Box>
        </Header>
    );
};

export default MyHeader;
