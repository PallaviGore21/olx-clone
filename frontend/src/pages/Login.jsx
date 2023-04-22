import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRegisterAction, userLoginAction } from '../redux/signup/registerAction'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LockResetIcon from '@mui/icons-material/LockReset';
import { useFormik } from 'formik';
import * as yup from "yup"
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate=useNavigate()
const dispatch =useDispatch()
const { login } = useSelector(state => state.allusers)

useEffect(() => {
 dispatch(getRegisterAction())
}, [])

const formik = useFormik({
  initialValues: {
      email:"",
      password:"",
     
  },
  validationSchema: yup.object({
      email: yup.string().required("Enter email"),
      password: yup.string().required("Enter password"),
  }) ,  
  onSubmit: ( values,{ resetForm }) => {
      console.log(values);
      dispatch(userLoginAction(values))
      resetForm()
      
  }
})

useEffect(() => {
 if(login){
  if(login.admin){
    navigate("/account")
  }else{
    navigate("/")
  }
 }
}, [login])


 
  return <>
  {JSON.stringify(login)}<br/>
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
            <h4 className='text-center'>Login</h4>
      
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
    <Button color='success' type='submit' variant="contained">
        Login
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

export default Login