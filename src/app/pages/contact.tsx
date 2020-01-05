import React from 'react';
import { Box, Heading } from 'grommet';
import ContactForm from '../components/forms/contact';

const ContactPage: React.FC = (): JSX.Element => {
    return (
        <Box>
            <Heading level="3">Get in Touch</Heading>
            <ContactForm />
        </Box>
    );
};

export default ContactPage;
