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
import {stateOptions} from "@/utils/constants";
import CloseIcon from "@mui/icons-material/Close";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  profileNotes: Yup.string().required('Required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  profileNotes: '',
};

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  marginTop: '0px'
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',

  '& .MuiAutocomplete-inputRoot': {
    width: '100%',
    color: theme.palette.text.primary,
  },
}));

const NewCustomerDialog = ({ open, onClose }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        New Customer
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
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="firstName"
                    label="First Name"
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="lastName"
                    label="Last Name"
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    as={TextField}
                    name="phone"
                    label="Phone"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="address"
                    label="Address"
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    as={TextField}
                    name="city"
                    label="City"
                    error={touched.city && Boolean(errors.city)}
                    helperText={touched.city && errors.city}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <StyledAutocomplete
                    disablePortal
                    name="state"
                    options={stateOptions}
                    onChange={(e, value) => setFieldValue("state", value.label)}
                    onBlur={() => setFieldTouched("state", true)}
                    error={touched.state && Boolean(errors.state)}
                    sx={{ width: '100%' }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="State"
                        helperText={touched.state && errors.state}
                        error={touched.state && Boolean(errors.state)}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Field
                    as={TextField}
                    name="zip"
                    label="Zip"
                    error={touched.zip && Boolean(errors.zip)}
                    helperText={touched.zip && errors.zip}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    multiline
                    rows={4}
                    name="profileNotes"
                    label="Profile Notes"
                    error={touched.profileNotes && Boolean(errors.profileNotes)}
                    helperText={touched.profileNotes && errors.profileNotes}
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

export default NewCustomerDialog;
