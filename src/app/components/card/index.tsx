import React from 'react';
import { Box, Heading } from 'grommet';

interface CardProps {
    title: string;
    icon: React.ReactNode;
    body: JSX.Element;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
    const { title, icon, body } = props;

    return (
        <Box
            border="all"
            align="center"
            width={{ min: 'auto' }}
            height={{ min: 'auto' }}
            direction="column"
            pad="medium"
            style={{ borderRadius: '8px' }}
        >
            {icon}
            <Heading level="4">{title}</Heading>
            {body}
        </Box>
    );
};

export default Card;
