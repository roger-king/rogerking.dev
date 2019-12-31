import React from 'react';
import { Form, FormField, Button, TextArea } from 'grommet';

const ContactForm: React.FC = (): JSX.Element => {
    return (
        <Form>
            <FormField label="Name" />
            <FormField label="Email" />
            <FormField label="Your Message" component={TextArea} />
            <Button label="Submit" disabled />
        </Form>
    );
};

export default ContactForm;
