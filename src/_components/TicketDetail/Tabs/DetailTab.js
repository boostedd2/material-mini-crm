import {Field, Form, Formik} from "formik";
import Grid from "@mui/material/Grid";
import {Autocomplete, Button, TextField, Box} from "@mui/material";
import React from "react";
import * as Yup from "yup";
import {styled} from "@mui/material/styles";
import ReadOnlyFieldLabel from "@/_components/common/Text/ReadOnlyFieldLabel";
import DescriptionText from "@/_components/common/Text/DescriptionText";
import { theme } from "../../../_themes/ThemeProvider"

const validationSchema = Yup.object().shape({
  ticketTitle: Yup.string().required('Required'),
  mainCategory: Yup.string().required('Required'),
  secondCategory: Yup.string().required('Required'),
  customerSearch: Yup.string().required('Required'),
  initialNotes: Yup.string().required('Required'),
});

const initialValues = {
  ticketTitle: '',
  assignedTo: '',
  mainCategory: '',
  secondCategory: '',
  deadline: '',
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
  padding: 20,
  marginTop: 0
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',

  '& .MuiAutocomplete-inputRoot': {
    width: '100%',
    color: theme.palette.text.primary,
    paddingLeft: '16px',
  },
}));

const DetailTab = () => {
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={console.log}
      >
        {({errors, values, setFieldValue, touched, setFieldTouched}) => (
          <Form>
            <StyledGridContainer container spacing={2}>
              <Grid item xs={6} style={{paddingTop: 0, paddingBottom: 25, display: 'flex', alignItems: 'center'}}>
                <ReadOnlyFieldLabel noMargin>Time Spent:</ReadOnlyFieldLabel>
                <DescriptionText>00:00</DescriptionText>
              </Grid>
              <Grid item xs={6} style={{paddingTop: 0, paddingBottom: 25, display: 'flex'}}>
                <Button sx={{
                  marginLeft: 'auto', backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.main
                }}>OPEN</Button>
              </Grid>
              <Grid item xs={6} style={{paddingTop: 0, paddingBottom: 15}}>
                <ReadOnlyFieldLabel noMargin>Created by:</ReadOnlyFieldLabel>
                <DescriptionText>Admin</DescriptionText>
              </Grid>
              <Grid item xs={6} style={{paddingTop: 0, paddingBottom: 15}}>
                <ReadOnlyFieldLabel noMargin>Created on:</ReadOnlyFieldLabel>
                <DescriptionText>2023-07-15</DescriptionText>
              </Grid>
              <Grid item xs={6} style={{paddingTop: 0, paddingBottom: 15}}>
                <ReadOnlyFieldLabel noMargin>Deadline:</ReadOnlyFieldLabel>
                <DescriptionText>2023-08-15</DescriptionText>
              </Grid>
              <Grid item xs={6} style={{paddingTop: 0, paddingBottom: 15}}>
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="ticketTitle"
                  label="Title"
                  error={touched.ticketTitle && Boolean(errors.ticketTitle)}
                  helperText={touched.ticketTitle && errors.ticketTitle}
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  name="assignedTo"
                  label="Assigned To"
                  error={touched.ticketTitle && Boolean(errors.ticketTitle)}
                  helperText={touched.ticketTitle && errors.ticketTitle}
                  fullWidth
                  disabled
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
                      disabled
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
                      disabled
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
              <Grid item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
                <Button>Edit</Button>
              </Grid>
              <Grid item xs={6} style={{paddingTop: 50, paddingBottom: 15}}>
                <ReadOnlyFieldLabel noMargin>Recent Actions:</ReadOnlyFieldLabel>
                <DescriptionText>Ticket was assigned to Admin</DescriptionText>
                <DescriptionText>New ticket opened</DescriptionText>
                <DescriptionText>New Customer</DescriptionText>
              </Grid>
            </StyledGridContainer>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default DetailTab;
