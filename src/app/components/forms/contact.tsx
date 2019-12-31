import React from 'react';
import { Form, FormField, Button, TextArea, Select } from 'grommet';

const ContactForm: React.FC = (): JSX.Element => {
    return (
        <Form>
            <FormField label="Name" />
            <FormField label="Email" />
            <FormField label="Reason for contact" component={Select} />
            <FormField label="Comments" component={TextArea} />
            <Button label="Submit" />
        </Form>
    );
};

export default ContactForm;
