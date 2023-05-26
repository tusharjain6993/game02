import Home from './view/screen/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {menubar} from './view/data/data'
import Detail from './view/screen/detail'
import Register from './view/screen/register'
import detail1 from './view/screen/detail1';
import ActionAdventure from './view/screen/ActionAdventure';
import Categories from './view/screen/categories';
import { logo } from './view/data/data';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Col, Container, Row,Button,Navbar,Nav,Form,NavDropdown } from 'react-bootstrap';
import Upcominggames from './view/screen/upcominggames';
import Detail1 from './view/screen/detail1';
import Login from './view/screen/login';
import Addtocart from './view/screen/addtocart';
import Profile from './view/screen/profile'
import { useState } from 'react';
import Shooting from './view/screen/shooting';
import Racing from './view/screen/racing';
import Sports from './view/screen/sports';
import Fighting from './view/screen/fighting';
import Billingamount from './view/screen/billingamount';
function App() {
  const [user,setUser]=useState(localStorage.getItem('user'));
  console.log(localStorage.getItem('user'));

  function logout()
  {
    alert('logout')
    localStorage.setItem('user',false)
    setUser(false)
  }
  return (
    
    <BrowserRouter>
    
        <Row>
          <Col>
          <Navbar className="nav" expand="lg">
          <div className='ghost-name-pic'>
                                {
                                    logo.map(function(d){
                                        return(<img src={logo} className="logocss"/>
                                        
                                        )
                                    })
                                    
                                }
                                    <Navbar.Brand className="ghost-name" href="#">HOST</Navbar.Brand>           
                            </div>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link className="menu" href="/">HOME</Nav.Link>    {/*   Static way of calling Home in bootstrap */}
            
            {
              menubar.map(function(d){
                return(
                  <Nav.Link className="menu" href={`/${d}`}>{d}</Nav.Link>     /* Dynamic way of calling all the values */
                  )
              })
            }
            {user? null:<>
              <Nav.Link style={{color:'white'}} href="/register">REGISTER</Nav.Link>
              <Nav.Link style={{color:'white'}} href="/login">LOGIN</Nav.Link>
            </>
            }
            
             <NavDropdown  className="menu1"  style={{color:'white',backgroundColor:'white'}} title="MY ACCOUNT" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="Profile">PROFILE</NavDropdown.Item>
              <NavDropdown.Item href="">PURCHASE HISTORY</NavDropdown.Item>
              
            </NavDropdown>
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {
            user? <Button onClick={logout}>Logout</Button>:null
          }
          
        </Navbar.Collapse>
    
    </Navbar>
          </Col>
        </Row>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path = '/detail' element={<Detail/>}/>
        <Route path = '/upcominggames' element={<Upcominggames/>}/>
        <Route path = '/detail1' element={<Detail1/>}/>
        <Route path = '/addtocart' element={<Addtocart/>}/>
        <Route path = '/profile' element={<Profile/>}/>
        <Route path = '/billingamount' element={<Billingamount/>}/>
        <Route path = '/categories' element={<Categories/>}/>
        <Route path = '/addtocart' element={<Addtocart/>}/>
        <Route path = '/shooting' element={<Shooting/>}/>
        <Route path='/racing' element={<Racing/>} />
        <Route path='/ActionAdventure' element={<ActionAdventure/>} />
        <Route path = '/sports' element={<Sports/>}/>  
        <Route path = '/fighting' element={<Fighting/>}/>
        
       
        
          {
            user ? null:<>
              <Route path = '/register' element={<Register/>}/>
              <Route path = '/login' element={<Login/>}/>
              </>
              
          }
             
        </Routes>
      
     <div className="footer">
        <div className="footer-inner">
        <p>ALL RIGHTS ARE RESERVED BY GHOST@.com</p>
        </div>
      </div> 
      
    </BrowserRouter>
  );
}

export default App;
