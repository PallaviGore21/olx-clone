import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';

import Stack from '@mui/material/Stack';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import "./Topbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProductionAction } from '../redux/products/productsAction';
import { logout } from '../redux/signup/registerSlice';
import { deepPurple } from '@mui/material/colors';
// import { loginWithGoogle } from '../redux/auth/authAction';

export default function Topbar() {
  const dispatch =useDispatch()
  const { login } = useSelector(state => state.allusers)

  const { products } = useSelector(state => state.allproducts)
  // const [allData, setAllData] = useState([])

const navigate = useNavigate()
 const handlesellButton=()=>{
   if(login){
    navigate("/addproduct")
   }else{
    navigate("/register")
   }
 }
useEffect(() => {
//  products && setSearchData(products)
}, [])

useEffect(() => {
  const promise = dispatch(getProductionAction())
  return () => { promise.abort() }
 }, [])
 

// const handleLoginWithGoogle=()=>{
//    dispatch(loginWithGoogle())
// }

// useEffect(() => {
//   if (login) {
//       navigate("/dashboard")

//   }
// }, [login])

//  const handleDataSearch=searchTerm=>{
//     const result = products.filter(item=>item.category.includes(searchTerm))
//     // setAllData(result)
//     // console.log(result);
//   }

  const handlelogin=()=>{
    navigate("/login")
  }

  const handleProfile=()=>{
    navigate("/profile")
  }
  return <>
  
{/* {JSON.stringify(searchData)} */}
<nav class="navbar navbar-expand-lg bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo-2006-700x394.png" alt="" height={50} width={65} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      
        <Link to="/" class="nav-link active">Dashboard</Link>
  {/* <input  type="search"  
  className='p-2' /> */}

{/* <div class="input-group mb-3">
  <input 
  type="text"
  placeholder=""
   aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    />
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><i class="bi bi-search"></i></span>
  </div>
</div> */}





<form class="nosubmit">
  <input 
  class="nosubmit"
   type="search"
    placeholder="Search..."
    onChange={e=>handleDataSearch(e.target.value)}
    />
</form>
       
      </div>
    </div>
  </div>
  <Stack direction="row" spacing={2}>
  {
  login ?
   <>
  <div class="dropdown">
   
    <Button  variant="contained" className="dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown">
        {login.name}
      </Button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" onClick={handleProfile}>
        <div className='row'>
          <div className="col-sm-4">
          <Avatar
        sx={{ bgcolor: deepPurple[400],  }}
        src="/broken-image.jpg"  />
          </div>
          <div className='col-sm-4'>
        <span>hello,</span>
        <div>{login.name}</div>
        <div>{login.admin}</div>
          </div>
           <a href='/profile'>view and edit profile</a>
        </div>
     
        
        </a></li>
      <li><a class="dropdown-item">Account</a></li>
      <li><a class="dropdown-item" onClick={e=>dispatch(logout())}>Logout</a></li>
    </ul>
  </div>
  </>
  : <>
  <Button onClick={handlelogin} variant="contained">
        login
      </Button>
  
  </>
}
      <Button onClick={handlesellButton} variant="contained" color="info" endIcon={<AddCircleOutlinedIcon />}>
        Sell
      </Button>
     
    </Stack>
</nav>

 
<div className='mt-5'>

<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://s0.2mdn.net/simgad/17574930126855833685" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images.olx.com.lb/thumbnails/7087814-800x600.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://tpc.googlesyndication.com/simgad/16430995334569635145" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>







{/* <nav  className='#42a5f5 blue lighten-1'>
    <div className='#1e88e5 blue darken-1'>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo text-light"><img className='border-radius' src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo-2006-700x394.png" alt="" height={50} width={65}/></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/">dashboard</Link></li>
        <li><Link to="/products">products</Link></li>
      </ul>
    </div>
    </div>
  </nav> */}

  </>
}
