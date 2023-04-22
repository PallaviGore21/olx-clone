import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useDispatch, useSelector } from 'react-redux';
import { addRegisterAction, getRegisterAction } from '../redux/signup/registerAction';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from "yup"


const Register = () => {
    const dispatch=useDispatch()
    const { Useradded } = useSelector(state => state.allusers)
    const navigate=useNavigate()
const formik = useFormik({
    initialValues: {
        name:"",
        email:"",
        password:"",
        admin:false
    },
    validationSchema: yup.object({
        name: yup.string().required("Enter name"),
        email: yup.string().required("Enter email"),
        password: yup.string().required("Enter password"),
    }) ,  
    onSubmit: ( values,{ resetForm }) => {
        console.log(values);
        dispatch(addRegisterAction(values))
        resetForm()
    }

})
   
useEffect(() => {
 if(Useradded){
    navigate("/login")
 }
}, [])

   
  return<>
   {/* {JSON.stringify(formik.values)} */}
            {JSON.stringify(formik.errors)}
            {/* {JSON.stringify(formik.touched)} */}
  <form onSubmit={formik.handleSubmit}>
 <div className='container'>
    <div className='row'>
        <div className="col-sm-3"></div>
        <div className="col-sm-8">

  <Box
      sx={{
          width: 500,
          maxWidth: '100%',
        }}
        >
        <div className='card p-4 mt-5 '>
            <h4 className='text-center'>Signup</h4>
        <TextField  
        label={<PersonIcon/> } 
        onBlur={formik.handleBlur}
        className={formik.errors.name && "form-control is-invalid"}
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
         placeholder="name"/>
           <span className='invalid-feedback'>
                {formik.errors.name}
            </span>
      <br />
     <TextField  
     label={ <MarkunreadIcon/>}
        onBlur={formik.handleBlur}
        className={formik.errors.email && "form-control is-invalid"}

        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      placeholder="email"/>
        <span className='invalid-feedback'>
                {formik.errors.email}
            </span>
      <br />
      <TextField 
       label={<LockResetIcon/>}  
        onBlur={formik.handleBlur}
        className={formik.errors.password && "form-control is-invalid"}

        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
       placeholder="password"/>
         <span className='invalid-feedback'>
                {formik.errors.password}
            </span>
      <br />
    <Button type='submit' variant="contained">
        Register
      </Button>
        </div>
    </Box>
        </div>
            </div>
            </div>
  <br /><br />
  </form>
  </>

    }
export default Register

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }