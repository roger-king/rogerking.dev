import React from 'react';
import { Box, Button, Heading, Header, ResponsiveContext } from 'grommet';
import { Menu } from 'grommet-icons';
import { NavButton, NavButtonProps } from './navbutton';

const MyHeader: React.FC = (): JSX.Element => {
    const size = React.useContext(ResponsiveContext);
    const isMobile = size === 'small';
    const [showNav, setShowNav] = React.useState<boolean>(false);

    const navigation: NavButtonProps[] = [
        {
            route: '/',
            label: 'Home',
        },
        {
            route: '/work',
            label: 'Work',
        },
        {
            route: '/contact',
            label: 'Contact',
        },
    ];

    if (isMobile) {
        return (
            <Header direction="column" fill="horizontal">
                <Box direction="row" gap="medium">
                    <Heading>Roger King</Heading>
                    <Button icon={<Menu />} onClick={() => setShowNav(!showNav)} />
                </Box>
                {showNav && (
                    <Box
                        direction="row"
                        gap="medium"
                        background="light-3"
                        fill="horizontal"
                        height="70px"
                        align="center"
                        justify="center"
                    >
                        {navigation.map((n: NavButtonProps) => {
                            return <NavButton route={n.route} label={n.label} />;
                        })}
                    </Box>
                )}
            </Header>
        );
    }

    return (
        <Header margin={{ left: '50px', right: '50px', top: '30px' }}>
            <Box direction="row" gap="medium">
                {navigation.map((n: NavButtonProps) => {
                    return <NavButton route={n.route} label={n.label} />;
                })}
            </Box>
        </Header>
    );
};

export default MyHeader;
