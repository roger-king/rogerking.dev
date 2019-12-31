import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';
import styled from 'styled-components';

interface AvatarProps {
    className?: string;
    imgName: string;
    size?: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
    const { className, imgName } = props;
    const size = React.useContext(ResponsiveContext);
    let width = '300px';

    if (size === 'small') {
        width = '150px';
    }

    return (
        <Box className={className} style={{ borderRadius: '50px' }}>
            <Image
                width={width}
                src={`${process.env.PUBLIC_URL}/imgs/${imgName}.png`}
                style={{ borderRadius: '50px' }}
            />
        </Box>
    );
};

export default styled(Avatar)`
    border-radius: '100px';
`;
