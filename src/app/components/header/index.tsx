import React from 'react';
import { Box, Button, Header, Heading, ResponsiveContext } from 'grommet';
import { Menu } from 'grommet-icons';
import { useRouteMatch, useHistory } from 'react-router-dom';

const MyHeader: React.FC = (): JSX.Element => {
    const size = React.useContext(ResponsiveContext);
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
                onClick={(): void => {
                    history.push('/');
                }}
                level="2"
                style={{ cursor: 'pointer' }}
            >
                Roger King
            </Heading>
            {size !== 'small' ? (
                <Box direction="row" gap="small">
                    <Button
                        label="Work"
                        primary={!!isAbout}
                        onClick={(): void => {
                            history.push('/work');
                        }}
                    />
                    <Button
                        label="Contact"
                        primary={!!isContact}
                        onClick={(): void => {
                            history.push('/contact');
                        }}
                    />
                </Box>
            ) : (
                <Box direction="row" gap="small">
                    <Button icon={<Menu />} />
                </Box>
            )}
        </Header>
    );
};

export default MyHeader;
