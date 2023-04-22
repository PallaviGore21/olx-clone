import { Button } from '@mui/material'
import React from 'react'
import {useFormik} from 'formik'
import * as yup from "yup"
import { useDispatch, useSelector } from 'react-redux'

import { AddProductionAction } from '../redux/products/productsAction'


const Addproduct = () => {
  const { login } = useSelector(state => state.allusers)
const dispatch =useDispatch()
    const formik =useFormik({
        initialValues:{
            avatar:"",
            name:"",
            category:"",
            price:"",
            address:"",
            description:""
        },
        validationSchema: yup.object({
            avatar: yup.string().required("Enter product image"),
            name: yup.string().required("Enter product name"),
            category: yup.string().required("Enter product Category"),
            price: yup.string().required("Enter product price"),
            address: yup.string().required("Enter your address"),
            description: yup.string().required("Enter product description"),
        }),

        onSubmit: ( values,{ resetForm }) => {
            console.log(values);
            console.log("xxxx");
            dispatch(AddProductionAction({...values,userId:login.id}))
            resetForm()
        }
    })
    
  return <>
                <h3>{JSON.stringify(formik.errors)}</h3>
               
  <div className='container mt-5'>
  <h4 className='text-center'>Post Your Add</h4>
   <div className='card border-2'>
    <div className='card-body'>

   
  <form onSubmit={formik.handleSubmit}>
  <div class="row">
    <div class="form-group col-md-6 ">
      <label for="inputEmail4">Aavtar</label>
      <input 
      type="text" 
      onBlur={formik.handleBlur}
      isValid={formik.touched.avatar && !formik.errors.avatar}
      isInvalid={formik.touched.avatar && formik.errors.avatar}
      value={formik.values.avatar}
      onChange={formik.handleChange}
      name="avatar"
      class="form-control" 
      id="inputEmail4"
       placeholder="Enter image"/>
        <span className='invalid-feedback'>
                {formik.errors.avatar}
            </span>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Brand name</label>
      <input 
      type="text" 
      onBlur={formik.handleBlur}
      isValid={formik.touched.name && !formik.errors.name}
      isInvalid={formik.touched.name && formik.errors.name}
      value={formik.values.name}
      onChange={formik.handleChange}
      name="name"
      class="form-control" 
      id="inputPassword4" 
      placeholder=""/>
       <span className='invalid-feedback'>
                {formik.errors.name}
            </span>
    </div>
  </div>
  <div class="form-group m-3">
    <label for="inputAddress">Address</label>
    <input
     type="text"
      class="form-control"
       id="inputAddress"
       onBlur={formik.handleBlur}
       isValid={formik.touched.address && !formik.errors.address}
       isInvalid={formik.touched.address && formik.errors.address}
       value={formik.values.address}
       onChange={formik.handleChange}
       name="address"
        placeholder="1234 Main St"/>
          <span className='invalid-feedback'>
                {formik.errors.address}
            </span>
  </div>
  
  <div class="row ">
    <div class="form-group col-md-6 m-3">
      <label for="inputCity">Set A Price</label>
      <input 
      type="text" 
      onBlur={formik.handleBlur}
      isValid={formik.touched.price && !formik.errors.price}
      isInvalid={formik.touched.price && formik.errors.price}
      value={formik.values.price}
      onChange={formik.handleChange}
      name="price"
      class="form-control"
       id="inputCity"/>
          <span className='invalid-feedback'>
                {formik.errors.price}
            </span>
    </div>
    <div class="form-group col-md-4 m-3">
      <label for="inputState"></label>
      <select 
      id="inputState"
      onBlur={formik.handleBlur}
      isValid={formik.touched.category && !formik.errors.category}
      isInvalid={formik.touched.category && formik.errors.category}
      value={formik.values.category}
      onChange={formik.handleChange}
      name="category"
       class="form-control">
        <option selected>Choose category</option>
        <option>phone</option>
        <option>car</option>
        <option>scooty</option>
        <option>laptop</option>
      </select>
    </div>
    <div class="form-group">
      <label for="inputdesc">description</label>
      <input rows={7}
       type="text" 
       class="form-control"
       onBlur={formik.handleBlur}
       isValid={formik.touched.description && !formik.errors.description}
       isInvalid={formik.touched.description && formik.errors.description}
       value={formik.values.description}
       onChange={formik.handleChange}
       name="description"
        id="inputdesc"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input
       class="form-check-input"
        type="checkbox" 
        id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <hr />
  <Button type="submit" variant="contained">
        Post Now
      </Button>
</form>
  
  </div>
  </div>
   </div>
  </>
}

export default Addproduct