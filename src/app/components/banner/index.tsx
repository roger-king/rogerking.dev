import React from 'react';
import { Box } from 'grommet';

interface BannerProps {
    message: string;
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
    const { message } = props;

    return (
        <Box width="fill" height="80px" background="warning" align="center" justify="center">
            {message}
        </Box>
    );
};

export default Banner;
