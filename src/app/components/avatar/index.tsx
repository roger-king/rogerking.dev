import React from 'react';
import { Box, Image } from 'grommet';
import styled from 'styled-components';

interface AvatarProps {
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    const { className } = props;

    return (
        <Box className={className} style={{ borderRadius: '50px' }}>
            <Image src={`${process.env.PUBLIC_URL}/imgs/hey.png`} style={{ borderRadius: '50px' }} />
        </Box>
    );
};

export default styled(Avatar)`
    border-radius: '100px';
`;
