import React from 'react';
import { Button } from 'grommet';
import { useHistory, useRouteMatch } from 'react-router';
import styled from 'styled-components';

export interface NavButtonProps {
    className?: string;
    label: string;
    route: string;
}

export const UnstyledNavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
    const { className, label, route } = props;
    const history = useHistory();

    const isActive = useRouteMatch({
        path: route,
        strict: true,
        sensitive: true,
    });

    return (
        <Button
            className={className}
            label={label}
            style={{ borderBottom: isActive ? '3px solid' : '0px solid' }}
            plain
            onClick={() => {
                history.push(route);
            }}
        />
    );
};

export const NavButton = styled(UnstyledNavButton)`
    :hover {
        border-bottom: 3px solid;
    }
`;
