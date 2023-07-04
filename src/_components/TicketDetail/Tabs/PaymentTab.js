import React from 'react';
import {Grid, TextField, Button, Box, Typography} from '@mui/material';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {styled} from "@mui/material/styles";

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  cardName: Yup.string().required('Cardholder name is required'),
  expirationDate: Yup.string()
    .required('Expiration date is required')
    .matches(/^\d{2}\/\d{2}$/, 'Invalid expiration date'),
  cvv: Yup.string()
    .required('CVV is required')
    .matches(/^\d{3}$/, 'CVV must be 3 digits'),
});

const initialValues = {
  cardNumber: '',
  cardName: '',
  expirationDate: '',
  cvv: '',
};



const PaymentBox = styled(Box)(({ theme }) => ({
  padding: 20,
}));

const PaymentInfo = styled(Box)(({ theme }) => ({
  padding: '20px 0px',

  [theme.breakpoints.up('sm')]: {
    padding: '0px 20px',
  },
}));


const PaymentTab = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <PaymentBox>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({errors, touched}) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="cardNumber"
                      label="Card Number"
                      variant="outlined"
                      fullWidth
                      error={errors.cardNumber && touched.cardNumber}
                      helperText={touched.cardNumber && errors.cardNumber}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="cardName"
                      label="Cardholder Name"
                      variant="outlined"
                      fullWidth
                      error={errors.cardName && touched.cardName}
                      helperText={touched.cardName && errors.cardName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="expirationDate"
                      label="Expiration Date"
                      variant="outlined"
                      fullWidth
                      error={errors.expirationDate && touched.expirationDate}
                      helperText={touched.expirationDate && errors.expirationDate}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="cvv"
                      label="CVV"
                      variant="outlined"
                      fullWidth
                      error={errors.cvv && touched.cvv}
                      helperText={touched.cvv && errors.cvv}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PaymentInfo>
            <Typography variant={'h5'}>Payment Details</Typography>

            <Box sx={{display: 'flex'}}>
              <Box>
                <Typography variant={'h5'}>Sub-total:</Typography>
                <Typography variant={'h5'}>Total:</Typography>
              </Box>

              <Box sx={{marginLeft: 'auto'}}>
                <Typography variant={'h5'}>$367.00</Typography>
                <Typography variant={'h5'}>$383.00</Typography>
              </Box>
            </Box>
          </PaymentInfo>
        </Grid>
      </Grid>
    </PaymentBox>
  );
};

export default PaymentTab;
