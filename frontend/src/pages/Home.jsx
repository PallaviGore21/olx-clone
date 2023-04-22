import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch()
    const [productData, setProductData] = useState({
        name:"hp",
        img:"https://rukminim1.flixcart.com/image/832/832/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70",
        stock:"5",
        price:"20,000",
        category:"laptop"
    })

    // const handleProducts=()=>{
    //     dispatch(addProductionAction(productData))
    //     console.log(productData);
    // }
  return<>
   <div className="container">
      <div class="row">
        <div className="col-sm-12">
        <div className='card'>
            <div className='card-header "btn waves-effect waves-light'>Products</div>
                <div className="card-body">
                <div class="input-field col s12">
          <i class="material-icons prefix"></i>
          <input 
          type="text" 
          value={productData.name}
          onChange={e=>setProductData({...productData, name:e.target.value})}
          id="autocomplete-input"  />
          <label for="autocomplete-input">Product name</label>
          </div>

        <div class="input-field col s12">
          <i class="material-icons prefix"></i>
          <input 
          type="text" 
          id="input"  
          value={productData.img}
          onChange={e=>setProductData({...productData, img:e.target.value})}
          />
          <label for="input">Enter Img</label>
        </div>
  
        <div class="input-field col s12">
          <i class="material-icons prefix"></i>
          <input 
          type="text"
          value={productData.stock}
          onChange={e=>setProductData({...productData, stock:e.target.value})}
           id="stock"  />
          <label for="stock">Enter stock</label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix"></i>
          <input 
          type="text" 
          value={productData.price}
          onChange={e=>setProductData({...productData, price:e.target.value})}
          id="prize"  />
          <label for="prize">Enter prize</label>
        </div>
 
        <div class="input-field col s12">
          <i class="material-icons prefix"></i>
          <input 
          type="text"
          value={productData.category}
          onChange={e=>setProductData({...productData, category:e.target.value})}
           id="category"  />
          <label for="category">Enter category</label>
        </div>
                </div>
                <button  class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right"><i class="bi bi-send-fill"></i></i>
  </button>
        </div>
        </div>
        
      </div>
      </div>
  
  </>
}

export default Home