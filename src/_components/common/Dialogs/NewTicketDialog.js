import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  field1: Yup.string().required('Field 1 is required'),
  field2: Yup.string().required('Field 2 is required'),
});

const initialValues = {
  field1: '',
  field2: '',
};

const NewTicketDialog = ({ open, onClose }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New Ticket</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="field1"
                label="Field 1"
                error={touched.field1 && Boolean(errors.field1)}
                helperText={touched.field1 && errors.field1}
              />
              <br />
              <Field
                as={TextField}
                name="field2"
                label="Field 2"
                error={touched.field2 && Boolean(errors.field2)}
                helperText={touched.field2 && errors.field2}
              />
              <br />
              <DialogActions>
                <Button type="submit">Submit</Button>
                <Button onClick={onClose}>Cancel</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default NewTicketDialog;
