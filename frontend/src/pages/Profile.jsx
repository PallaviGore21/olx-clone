import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { updateUserProfile } from '../redux/userProfile/profileAction';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Profile = () => {
  const [Modal, setModal] = useState([])
    const [showprofile, setShowprofile] = useState([])
    const { login } = useSelector(state => state.allusers)
    const { products } = useSelector(state => state.allproducts)
    useEffect(() => {
        const x=  products.filter(item=>item.userId===login.id)
          setShowprofile(x)
    
        }, [products])

        const [open, setOpen] = React.useState(false);

  const handleClickOpen = (item) => {
    setOpen(true);
    setModal(item)
    (dispatch(updateUserProfile(Modal)))
  };
  const handleClose = () => {
    setOpen(false);
  };
const dispatch =useDispatch()
 const handleSubmitModal=()=>{
 }
  return <>
  {/* {JSON.stringify(showprofile)} */}
  
<div className='row mt-3'>
  <div className="col-sm-3">

  <Stack direction="row" spacing={2}>
     <div className='container m-5 p-3'>

      <Avatar
        sx={{ bgcolor: deepPurple[400], width: 150, height: 150 }}
        src="/broken-image.jpg"  />
        </div>
    </Stack>
  </div>
<div className='col-sm-9'>
         <h1>{login && login.name}</h1>
         <span>{login && login.email}</span>
         <hr />

{
    <Container className='py-5'>
    <Row className='gy-3'>
        {
            showprofile.map((item,i) => <Col
                key={i}
                className='col-sm-6 col-md-4'
            >
              {
                i===6 && <> <div class="card bg-primary gy-3">
                  <div class="card-body text-light">
                     <strong>What to see your stuff here?</strong>
                     <br /><br /><br />

                        <p>make some extra cash by selling things <br />
                           in your community. Go on, its quick and easy</p>
                  </div>
                  <button onclick={handleClick} class="btn btn-outline-light m-2">Start Selling</button>
                </div> </>
              }
                
                <Card className='p-3 h-100'  >
                    <Card.Body className='p-0'>
                      <div>
                        <img className='' src={item.avatar} alt="" height={200} width={250} />
                      </div>
                   
                        <h6>{item.name}</h6>
                        <p>{item.price}</p>
                        <p>{item.address}</p>
                        {/* <p>{item.description}</p> */}
                        <Link
                            to={`details/${item.id}`}
                            >
                            Details
                        </Link>
                          </Card.Body>
                          <div className='d-flex'>
                    <EditIcon onClick={e=>handleClickOpen(item)} className='m-2' color="primary"   sx={{ bgcolor: 'HighlightText'[400], width: 30, height: 30 }}/>
                    <DeleteIcon className='m-2' color="danger"  sx={{ bgcolor: 'orange'[400], width: 30, height: 30 }}/>
                    </div>
                </Card>
            </Col>)
        }
    </Row> 
</Container>
}
</div>
 
</div>
  


  {/* modal */}
  <div>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        Update Products
        </BootstrapDialogTitle>
           
             <div className='container p-3'>

           <form onSubmit={handleSubmitModal}>
                
                 <div class="card-body p-2">
                   <div>
                     <label for="avatar" class="form-label">First avatar</label>
                     <input
                       type="text"
                       class="form-control"
                       value={Modal.avatar}
                       onChange={e=>setModal({...Modal, avatar:e.target.value})}
                       id="avatar"
                       placeholder="Enter Your avatar"
                     />
                     <div class="valid-feedback">Looks good!</div>
                     <div class="invalid-feedback">Please choose a username.</div>
                   </div>
                   <div class="mt-2">
                     <label for="price" class="form-label">Price</label>
                     <input
                       type="price"
                       class="form-control"
                       value={Modal.price}
                       onChange={e=>setModal({...Modal, price:e.target.value})}
                       id="price"
                       placeholder="Enter Your price"
                     />
                     <div class="valid-feedback">Looks good!</div>
                     <div class="invalid-feedback">Please choose a username.</div>
                   </div>

                   <div class="mt-2">
                     <label for="name" class="form-label">name</label>
                     <input
                       type="name"
                       class="form-control"
                       value={Modal.name}
                       onChange={e=>setModal({...Modal, name:e.target.value})}
                       id="name"
                       placeholder="Enter Your name"
                     />
                     <div class="valid-feedback">Looks good!</div>
                     <div class="invalid-feedback">Please choose a username.</div>
                   </div>

                   <div class="mt-2">
                     <label for="address" class="form-label">address</label>
                     <input
                       type="address"
                       class="form-control"
                       value={Modal.address}
                       onChange={e=>setModal({...Modal, address:e.target.value})}
                       id="address"
                       placeholder="Enter Your address"
                     />
                      <button type="submit" class="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                     <div class="valid-feedback">Looks good!</div>
                     <div class="invalid-feedback">Please choose a username.</div>
                   </div>
                 </div>
              
               </form>
             
               </div>
        
        <DialogActions>
          <Button autoFocus  >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  
  
  </>
}

export default Profile