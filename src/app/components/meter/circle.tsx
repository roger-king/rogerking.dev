import React from 'react';
import { Box, Text, Stack, Meter, Heading } from 'grommet';

interface MeterProps {
    value: number;
    label: string;
}

export const CircleMeter: React.FC<MeterProps> = (props: MeterProps) => {
    const { value, label } = props;
    return (
        <Box align="center" background="light-5" pad="large" elevation="medium" width="medium" margin="small">
            <Stack anchor="center">
                <Meter type="circle" background="light-3" values={[{ value }]} size="xsmall" thickness="small" />
                <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                    <Text size="xlarge" weight="bold">
                        {value}
                    </Text>
                    <Text size="small">%</Text>
                </Box>
            </Stack>
            <Heading level="4">{label}</Heading>
        </Box>
    );
};
