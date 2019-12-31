import React from 'react';
import { Box, Text } from 'grommet';
import { Code, Domain, ShieldSecurity } from 'grommet-icons';
import Card from './index';

const SkillsList: React.FC = () => {
    return (
        <Box fill align="center" justify="center" direction="row-responsive" gap="large">
            <Card
                icon={<Domain size="large" />}
                title="Frontend"
                body={<Text>Experience in many different frontend technologies</Text>}
            />
            <Card
                icon={<Code size="large" />}
                title="Backend"
                body={<Text>Building scalable APIs and cloud native backend services</Text>}
            />
            <Card
                icon={<ShieldSecurity size="large" />}
                title="DevOps"
                body={<Text>Automation through application development</Text>}
            />
        </Box>
    );
};

export default SkillsList;
