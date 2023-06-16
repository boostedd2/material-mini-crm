import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Autocomplete} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";

const validationSchema = Yup.object().shape({
  field1: Yup.string().required('Field 1 is required'),
  field2: Yup.string().required('Field 2 is required'),
});

const initialValues = {
  ticketTitle: '',
  mainCategory: {},
};


const mainCategoryOptions = [
  {label: 'Software Development'},
  {label: 'Server Management'},
  {label: 'Hosting'},
  {label: 'General'},
]

const secondaryCategoryOptions = [
  {label: 'Frontend Development', mainCategory: 'Software Development'},
  {label: 'Backend Development', mainCategory: 'Software Development'},
  {label: 'Application Deployment', mainCategory: 'Server Management'},
  {label: 'OS Updates', mainCategory: 'Server Management'},
  {label: 'Software Package Updates', mainCategory: 'Server Management'},
  {label: 'Security', mainCategory: 'Server Management'},
  {label: 'DNS Records', mainCategory: 'Hosting'},
  {label: 'Domain Name Acquisition', mainCategory: 'Hosting'},
]

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  marginTop: '20px',

  '& .MuiAutocomplete-inputRoot': {
    width: '100%',
    color: theme.palette.text.primary,
    paddingLeft: '16px',
  },
}));


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
          {({ errors, values, setFieldValue, touched }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="ticketTitle"
                    label="Title"
                    error={touched.field1 && Boolean(errors.field1)}
                    helperText={touched.field1 && errors.field1}
                    fullWidth
                  />
                </Grid>
                <StyledAutocomplete
                  disablePortal
                  id="combo-box-demo"
                  name="mainCategory"
                  options={mainCategoryOptions}
                  onChange={(e, value) => setFieldValue("mainCategory", value)}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Main Category" />}
                />
                <StyledAutocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={secondaryCategoryOptions.filter(sc => sc.mainCategory === values.mainCategory?.label)}
                  sx={{ width: '100%' }}
                  renderInput={(params) => <TextField {...params} label="Main Category" />}
                />
              </Grid>
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
