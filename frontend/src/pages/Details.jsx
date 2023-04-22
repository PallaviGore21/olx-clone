import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getSingleProductAction } from '../redux/products/productsAction'

const Details = () => {
// const [descri, setDescri] = useState([])
    const { productId } = useParams()
    const dispatch = useDispatch()
    const { SingleProduct } = useSelector(state => state.allproducts)
    const { products } = useSelector(state => state.allproducts)

    useEffect(() => {
        dispatch(getSingleProductAction(productId))
    }, [])

    // useEffect(() => {
    //   setDescri(products)
    // }, [products])
    
  return <>


<div className='container'>

  <div className='row mt-3'>
    <div className='col-sm-8'>

   
<div className='container'>

  {
    SingleProduct && <div class="card">
      <div className="row">

      <div className="col-sm-12 p-2">
      <div class="card-body img-fluid"><img src={SingleProduct.avatar} alt="" height={450} width={400} /></div>
      </div>
      </div>
      </div>
}

{
  SingleProduct && <div class="card mt-3">
  <div className="row">

  <div className="col-sm-12">
  <div class="card-body">
    Discription 
    <hr />
    <div>{SingleProduct.description}</div>
    </div>
  </div>
  </div>
  </div>

}
</div>
</div>
{
  SingleProduct &&
  <div className="col-sm-4">
   <div class="card">
     <div class="card-body">
      <h3>{SingleProduct.price}</h3>
      <p>{SingleProduct.name}</p>
      <br />

            <p>{SingleProduct.address}</p>

      </div>
   </div>


    <div class="card mt-3">
      <div class="card-body">
        <h6>Seller name</h6>
<hr />

        <Button color='secondary' type='submit' variant="contained">
        Chat With Seller
      </Button>      </div>
    </div>
  </div>
}
  
  </div>
  </div>

</>
}
export default Details