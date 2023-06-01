import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
}

const signupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),

})

const webStyle = {
  boxStyle: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    padding: "131px 0px"
  },

  boxStylee: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "space-between",
    border: "1px solid #F3F7F5",
    borderRadius: "16px",
    marginTop: "97px",
    marginLeft: "105px"
  },
  boxStyling: {
    margin: "10px",
    width: '480px',
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",

  },
  textfieldstyle: {
    marginTop: "1px",
    height: "48",
  },
  largeBox: {
    width: '1066px',
    display: "flex",
    flexDirection: "column",
    marginTop: "97px"
  },

  largeTextfield: {
    marginTop: '1px',
    borderRadius: "8px",
  },
  buttonStyle: {
    width: "184.5px",
    height: "56px",
    backgroundColor: "#43d270",
    color: "black",
    marginTop: "68px"
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center"
  },
  typographyLocation: {
    color: "#43D270",
    fontSize: "20px",
    lineHeight: "29px",
    marginTop: "73px"
  },
  typographyOffices: {
    fontSize: "48px",
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "56px",
    marginTop: "30px"
  },
  typograghicStyle: {
    fontSize: "15px",
    marginTop: "45px",
    font: "Lato",
  },
  typographyHeadingStyle: {
    fontSize: "20px",
    marginTop: "75px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  typograghicStreet: {
    fontSize: "15px",
    marginTop: "30px"

  },
  typograghyLast: {
    fontSize: "15px",
  },
  contactInfo: {
    marginBottom: "74px",
    paddingRight: "40px"
  },
  googleMap: {
    border: "none",
    width: "100%",
    height: "100%",
    minHeight: "300px",
    marginBottom: "74px",
    filter: "grayscale(100%) invert(92%) contrast(83%)",
    borderRadius: "8px"
  }
}
const MuiTextField = ({ field, form, ...props }) => {
  return <TextField {...field} {...props} />;
};

const dummyAddresses = [
  {
    id: 1,
    title: "Singapore (HQ)",
    description: "#545, Boon Tat Street, Singapore 45689"
  },
  {
    id: 2,
    title: "Malaysia",
    description: "#394, Stamford Avenue, Kuala Lumpur, Malaysia 50586"
  },
]  

class App extends Component {
  render() {

    const contactInfoText = "We are built for recruiters and hiring managers who care about their applicants."

    return (
      <>
        <Container maxWidth="lg">
          <Box style={{ maxWidth: '1230px', margin: 'auto' }}>
            <Box mt={5} borderRadius="16px" justifyContent="center" border='1px solid #F3F7F5' >
              <Container maxWidth="lg">
                <Formik
                  initialValues={initialValues}
                  validationSchema={signupSchema}
                  onSubmit={values => {
                    console.log(values);
                  }}>
                  {({ errors, touched }) => (
                    <Form>
                      <Grid container spacing={6} >
                        <Grid item xs={12} sm={6} marginTop="23px">
                          <Typography htmlFor="" >First Name</Typography>
                          {errors.fname && touched.fname && <div>{errors.fname}</div>}
                          <Field component={MuiTextField} id="outlined-size-small" name='fname' size="small" fullWidth placeholder='Enter your company name here' style={webStyle.textfieldstyle} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography htmlFor="" marginTop="23px">Last Name</Typography>
                          {errors.lname && touched.lname && <div>{errors.lname}</div>}
                          <Field component={MuiTextField} id="outlined-size-small" name='lname' size="small" fullWidth placeholder='Enter your company name here' style={webStyle.textfieldstyle} />
                        </Grid>
                        <Grid item xs={12} sm={6} >
                          <Typography htmlFor="" >Phone Number</Typography>
                          {errors.phone && touched.phone && <div>{errors.phone}</div>}
                          <Field component={MuiTextField} id="outlined-size-small" name='name' size="small" fullWidth placeholder='Enter your company name here' style={webStyle.textfieldstyle} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography htmlFor="" >Email</Typography>
                          {errors.email && touched.email && <div>{errors.email}</div>}
                          <Field component={MuiTextField} id="outlined-size-small" name='fname' size="small" fullWidth placeholder='Enter your company name here' style={webStyle.textfieldstyle} />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            style={{ width: '100%' }}
                            placeholder='how can we help you?'
                            multiline
                            minRows={6}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <Box display="flex" justifyContent="center" marginBottom="74px" >
                            <Button type="submit" variant="contained" style={webStyle.buttonStyle}>SEND MESSAGE</Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Container>
            </Box>

           
          </Box>
        </Container>
      </>
    );
  }
}

export default App;