import React, {useContext} from 'react';
import Grid from '@mui/material/Grid';
import {Box, Paper, Typography, TextField, Button, IconButton, CircularProgress} from "@mui/material";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {theme} from "@/_themes/ThemeProvider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import {AuthContext} from "@/_context/AuthContext";
import withAuth from "@/_context/withAuth";

const styles = {
  pageWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: 1000,
    height: '100vh',
    margin: 'auto',
    zIndex: 9
  },
  gridWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: 1000,
    width: '100%',
    height: 600,
    margin: 'auto',
    overflow: 'hidden',
    backgroundColor: theme.palette.lightBackground.main
  },
  loginLeftContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.2)'
  },
  materialMinLogo: {
    color: '#ffffff',
    fontSize: 34,
    marginTop: 1,
  },
  loginHeadingText: {
    color: '#222222',
    fontSize: 32,
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    height: '100%',

    '& > form': {
      display: 'flex',
      flexDirection: 'column',
      width: '50%'
    }
  },
  formField: {
    marginBottom: '20px',
  },
  submitButton: {
    marginTop: '16px',
    color: '#ffffff'
  },
  loadingButton: {
    color: theme.palette.primary.main
  },
  bytewiseLink: {
    position: 'absolute',
    bottom: 5,
    left: 15,
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 13,
    fontWeight: 300,
    letterSpacing: 1,
    color: '#ffffff',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  arrowIcon: {
    position: 'relative',
    top: 2,
    right: 5,
    fontSize: 13,
    fontWeight: 300,
    color: '#ffffff',
  },
  backgroundOverlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#000000',
    opacity: 0.6
  }
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage = () => {
  const {login} = useContext(AuthContext);

  const handleSubmit = (values, {setSubmitting}) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      login()
    }, 600);
  };

  return (
      <main>
        <Box sx={styles.backgroundOverlay}></Box>
        <Box sx={styles.pageWrapper}>
          <Paper elevation={8} sx={styles.gridWrapper}>
            <Grid container>
              <Grid item xs={4} sx={styles.loginLeftContent}>
                <Image src={'/mui.svg'} alt={'material-mini-crm'} width={125} height={125} />
                <Typography variant='h3' sx={styles.materialMinLogo}>
                  MiniCRM
                </Typography>
                <Typography variant="p" component="a" href="https://bytewise-it.com/" sx={styles.bytewiseLink}>
                  <ArrowBackIcon sx={styles.arrowIcon} />
                  Bytewise Software
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Formik
                  initialValues={{email: '', password: ''}}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({errors, touched, isSubmitting}) => (
                    <Box sx={styles.formWrapper}>
                      <Form>
                        <Field
                          as={TextField}
                          type="email"
                          name="email"
                          label="Email"
                          variant="standard"
                          error={touched.email && errors.email ? true : false}
                          helperText={touched.email && errors.email ? errors.email : ''}
                          sx={styles.formField}
                        />
                        <Field
                          as={TextField}
                          type="password"
                          name="password"
                          label="Password"
                          variant="standard"
                          error={touched.password && errors.password ? true : false}
                          helperText={touched.password && errors.password ? errors.password : ''}
                          sx={styles.formField}
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          sx={styles.submitButton}
                        >
                          {isSubmitting ? <CircularProgress size={24} color="inherit" sx={styles.loadingButton} /> : 'Login'}
                        </Button>
                      </Form>
                    </Box>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </main>
  );
};

export default withAuth(LoginPage);
