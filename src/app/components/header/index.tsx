import React from 'react';
import { Box, Button, Heading, Header, ResponsiveContext } from 'grommet';
import { Menu } from 'grommet-icons';
import { useHistory } from 'react-router';
import { NavButton, NavButtonProps } from './navbutton';

const MyHeader: React.FC = (): JSX.Element => {
    const size = React.useContext(ResponsiveContext);
    const isMobile = size === 'small';
    const [showNav, setShowNav] = React.useState<boolean>(false);
    const history = useHistory();

    const navigation: Partial<NavButtonProps>[] = [
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

    const changeRoute = (route: string): void => {
        setShowNav(false);
        history.push(route);
    };

    const renderNavBtns = () => {
        return navigation.map((n: Partial<NavButtonProps>) => {
            return <NavButton key={n.route} route={n.route!} label={n.label!} changeRoute={changeRoute} />;
        });
    };

    if (isMobile) {
        return (
            <Header direction="column" fill="horizontal">
                <Box direction="row" gap="medium">
                    <Heading onClick={() => changeRoute('/')} style={{ cursor: 'pointer' }}>
                        Roger King
                    </Heading>
                    <Button icon={<Menu />} onClick={() => setShowNav(!showNav)} />
                </Box>
                {showNav && (
                    <Box
                        animation="fadeIn"
                        direction="row"
                        gap="medium"
                        background="light-3"
                        fill="horizontal"
                        height="70px"
                        align="center"
                        justify="center"
                    >
                        {renderNavBtns()}
                    </Box>
                )}
            </Header>
        );
    }

    return (
        <Header margin={{ left: '50px', right: '50px', top: '30px' }}>
            <Box direction="row" gap="medium">
                {renderNavBtns()}
            </Box>
        </Header>
    );
};

export default MyHeader;
