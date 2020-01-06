import React from 'react';
import { Box, Image, Heading, ResponsiveContext } from 'grommet';

interface CardProps {
    image: string;
    category?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { image, category } = props;
    const size = React.useContext(ResponsiveContext);
    const isMobile = size === 'small';
    const containerHeight = isMobile ? '150px' : '200px';
    const imgSize = isMobile ? '70px' : '200px';

    return (
        <Box
            border="all"
            align="center"
            width={{ min: 'auto' }}
            height={containerHeight}
            direction="row"
            pad="medium"
            gap="large"
            style={{ opacity: '1' }}
            background="rgba(23, 57, 67, 0.69)"
            justify="evenly"
        >
            <Image width={imgSize} src={`${process.env.PUBLIC_URL}/imgs/${image}.png`} />
            <Heading level="3">{category}</Heading>
        </Box>
    );
};

export default Card;
