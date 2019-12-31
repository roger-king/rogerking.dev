import React from 'react';
import { Box, Heading } from 'grommet';
import ContactForm from '../components/forms/contact';

const ContactPage: React.FC = (): JSX.Element => {
    return (
        <Box fill>
            <Heading>Contact</Heading>
            <ContactForm />
        </Box>
    );
};

export default ContactPage;
