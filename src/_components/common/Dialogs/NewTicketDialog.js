import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Autocomplete,
  IconButton
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';

const validationSchema = Yup.object().shape({
  ticketTitle: Yup.string().required('Required'),
  mainCategory: Yup.string().required('Required'),
  secondCategory: Yup.string().required('Required'),
  customerSearch: Yup.string().required('Required'),
  initialNotes: Yup.string().required('Required'),
});

const initialValues = {
  ticketTitle: '',
  mainCategory: '',
  secondCategory: '',
  customerSearch: '',
  initialNotes: ''
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

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  marginTop: '0px'
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  marginTop: '10px',

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
      <DialogTitle>
        New Ticket
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({errors, values, setFieldValue, touched, setFieldTouched}) => (
            <Form>
              <StyledGridContainer container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="ticketTitle"
                    label="Title"
                    error={touched.ticketTitle && Boolean(errors.ticketTitle)}
                    helperText={touched.ticketTitle && errors.ticketTitle}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="mainCategory"
                    validate={value => !value && 'Required'}
                  >
                    {({ field, form }) => (
                      <StyledAutocomplete
                        {...field}
                        disablePortal
                        id="mainCategory-autocomplete"
                        options={mainCategoryOptions}
                        onChange={(e, value) => form.setFieldValue('mainCategory', value.label)}
                        onBlur={() => form.setFieldTouched('mainCategory', true)}
                        error={form.touched.mainCategory && Boolean(form.errors.mainCategory)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Main Category"
                            helperText={form.touched.mainCategory && form.errors.mainCategory}
                            error={form.touched.mainCategory && Boolean(form.errors.mainCategory)}
                            fullWidth
                          />
                        )}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="secondCategory"
                    validate={value => !value && 'Required'}
                  >
                    {({ field, form }) => (
                      <StyledAutocomplete
                        {...field}
                        disablePortal
                        id="secondCategory-autocomplete"
                        options={secondaryCategoryOptions.filter(sc => sc.mainCategory === form.values.mainCategory)}
                        onChange={(e, value) => form.setFieldValue('secondCategory', value.label)}
                        onBlur={() => form.setFieldTouched('secondCategory', true)}
                        error={form.touched.secondCategory && Boolean(form.errors.secondCategory)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Secondary Category"
                            helperText={form.touched.secondCategory && form.errors.secondCategory}
                            error={form.touched.secondCategory && Boolean(form.errors.secondCategory)}
                            fullWidth
                          />
                        )}
                      />
                    )}
                  </Field>
                </Grid>

                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="customerSearch"
                    label="Customer Search"
                    error={touched.customerSearch && Boolean(errors.customerSearch)}
                    helperText={touched.customerSearch && errors.customerSearch}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    multiline
                    rows={4}
                    name="initialNotes"
                    label="Initial Notes"
                    error={touched.initialNotes && Boolean(errors.initialNotes)}
                    helperText={touched.initialNotes && errors.initialNotes}
                    fullWidth
                  />
                </Grid>
              </StyledGridContainer>
              <DialogActions>
                <Button type="submit">Create</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>

  );
};

export default NewTicketDialog;
