import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {styled} from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const SearchDialog = ({ open, onClose }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };


  const StyledModal = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.lightBackground.main,
      width: '100%',
      maxWidth: '85%',
      margin: 0,
      top: '-30%',
    },

    '& .MuiDialogContent-root': {
      padding: 10,
      backgroundColor: theme.palette.lightBackground.main,
    },

  }));


  return (
    <StyledModal open={open} onClose={onClose}>
      <DialogContent>
        <Formik
          initialValues={{ search: '' }}
          validationSchema={Yup.object({
            search: Yup.string().required('Required'),
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name="search">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Search by ticket or customer info"
                  error={meta.touched && meta.error}
                />
              )}
            </Field>
          </Form>
        </Formik>
      </DialogContent>
    </StyledModal>
  );
};

export default SearchDialog;
