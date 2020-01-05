import React from 'react';
import { Box, Image, Heading } from 'grommet';

interface CardProps {
    image: string;
    category?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { image, category } = props;

    return (
        <Box
            border="all"
            align="center"
            width={{ min: 'auto' }}
            height={{ min: 'auto' }}
            direction="row"
            pad="medium"
            gap="large"
            style={{ borderRadius: '8px' }}
        >
            <Image width="200px" src={`${process.env.PUBLIC_URL}/imgs/${image}.png`} />
            <Heading level="3">{category}</Heading>
        </Box>
    );
};

export default Card;
