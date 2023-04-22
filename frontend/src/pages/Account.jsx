import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRegisterAction } from '../redux/signup/registerAction'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';


const Account = () => {
    const dispatch = useDispatch()
    const { users,login } = useSelector(state => state.allusers)

useEffect(() => {
  dispatch(getRegisterAction())
}, [])



  return <>
  <div className='container'>
    <div className='row'>
        <div className="col-sm-3">

<Stack direction="row" spacing={2}>
   <div className='container m-5 p-3'>

    <Avatar
      sx={{ bgcolor: deepPurple[400], width: 150, height: 150 }}
      src="/broken-image.jpg"  />
      </div>
  </Stack>
</div>
<div className="col-sm-9">
        <h1>{login && login.name}</h1>
         <span>{login && login.email}</span>
         <hr />

  {
    users.map(item=>
   
    <div class="card m-2">
      <div class="card-header bg-warning">{item.name}</div>
      <div class="card-body">{item.email}</div>
    </div>
  
    
  )
  }
  </div>
  </div>
  </div>
  
  </>
}

export default Account