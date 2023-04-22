import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProductionAction } from '../redux/products/productsAction'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const { login } = useSelector(state => state.allusers)
  const { products } = useSelector(state => state.allproducts)
    const [allData, setAllData] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {

        const promise = dispatch(getProductionAction())
        return () => { promise.abort() }

    }, [])

    useEffect(() => {
      setAllData(products)

    }, [products])

    const handlenavigate=()=>{
      navigate("/addproduct")
    }
  
    const handleChooseitem=(arg)=>{
        switch (arg) {
          
          case  "phone": return setAllData(products.filter(item=>item.category==arg))
          case  "car": return setAllData(products.filter(item=>item.category==arg))
          case  "scooty": return setAllData(products.filter(item=>item.category==arg))
          case  "laptop": return setAllData(products.filter(item=>item.category==arg))
  
  
          case  "noida,Delhi'": return setAllData(products.filter(item=>item.address==arg))
          case  "pachim vihar,Delhi": return setAllData(products.filter(item=>item.address==arg))
          case  "'usmanpura Aurangabad'": return setAllData(products.filter(item=>item.address==arg))
          case  "vadnagar gujrat": return setAllData(products.filter(item=>item.address==arg))
          case  "haldvani uttrakhand": return setAllData(products.filter(item=>item.address==arg))
  
          default:return setAllData(products)
            
        }
      }
    
      const handleDataSearch=searchTerm=>{
        const result = products.filter(item=>item.category.includes(searchTerm))
        // setSearchData(result)
        console.log(result);
        setAllData(result)
      }


  return <>
  {/* {JSON.stringify(products)} */}
  
    <div className='row'>
        <div className="col-sm-3">
          <div className='mt-5'>Filters</div>
          <hr />
          <form class="nosubmit">
  <input 
  class="nosubmit"
   type="search"
    placeholder="Search..."
    onChange={e=>handleDataSearch(e.target.value)}
    />
    <hr />
</form>
    <Dropdown>
      <Dropdown.Toggle className="text-light" variant="info" id="dropdown-basic">
        
        Choose Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={e=>handleChooseitem('phone')}>phone</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('car')}>car</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('scooty')}>scooty</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('laptop')}>laptop</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
<hr />
    <Dropdown>
      <Dropdown.Toggle className="text-light" variant="info" id="dropdown-basic">
        
        Choose city
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  onClick={e=>handleChooseitem('noida,Delhi')}>noida,Delhi</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('pachim vihar,Delhi')}>pachim vihar,Delhi</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('usmanpura Aurangabad')}>usmanpura Aurangabad</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('dombivli mumbai')}>dombivli mumbai</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('vadnagar gujrat')}>vadnagar gujrat</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('cidco aurangabad')}>cidco aurangabad</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('panji Goa')}>panji Goa</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('haldvani uttrakhand')}>haldvani uttrakhand</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('dehradun uttrakhand')}>dehradun uttrakhand</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('lakhnow up')}>lakhnow up</Dropdown.Item>
        <Dropdown.Item  onClick={e=>handleChooseitem('ashapur nashik')}>ashapur nashiks</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  
  
  
  <div className='col-sm-9'>
  <Container className='py-5'>
            <Row className='gy-3'>
                {
                    allData.map((item,i) => <Col
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
                          <button onclick={handlenavigate} class="btn btn-light m-2">Start Selling</button>
                        </div> </>
                      }
                        
                        <Card className='p-3 h-100'  >
                            <Card.Body className='p-0'>
                              <div>
                                <img className='' src={item.avatar} alt="" height={200} width={300} />
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
                            
                        </Card>
                    </Col>)
                }
            </Row> 
        </Container>
        </div>
        </div>


  </>
}

export default Dashboard