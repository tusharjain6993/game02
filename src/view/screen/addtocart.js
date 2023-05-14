import { useState } from 'react';
import '../style/style.css'
import { Row, Col, Button, Dropdown, Form } from 'react-bootstrap';
import { modeofpay, modeofpay1, modeofpay2, modeofpay3 } from '../data/data'
import { useLocation, useNavigate } from 'react-router-dom'
function Addtocart() {
    const nav = useNavigate();
    const [offer, setOffer] = useState(false);
    const loc = useLocation();
    const [Proj, setProj] = useState(loc.state.finalpage)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(Proj);
   
    return (

        <div className="detail-cover-add">
            <div className="detail-cover1-add">
                <Row>
                    <Col>
                        <img src={Proj.image} style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', opacity: '0.38' }} />
                        <h1 style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>ADD TO CART</h1>
                        <div className="add-to-cart-form-info">
                            <div className="add-to-cart-form-flex">
                                <div className="addtocart-name-price-div">
                                    <div className="addtocart-name">
                                        <h3>{Proj.name}</h3>
                                    </div>
                                    <div className="addtocart-price">
                                        <h3>Rs {Proj.Price}</h3>
                                    </div>
                                    <div className="offer-heading">
                                    <p>TO CHECK OFFERS ON GAME PLEASE CLICK ON OFFER BUTTON</p>
                                    </div>
                                    <div className="button">
                                        
                                        <Button variant="primary" onClick={() => setOffer(!offer)}>OFFERS</Button>
                                    </div>
                                </div>
                                <div className="customer-form-offer">{offer ?
                                    <div className="discount-show-div">

                                        <div className="disc-offer">
                                            <p>10% Instant Discount on google pay on Min purchase value INR 1500</p>
                                            <p>15% Instant Discount on paytm on Min purchase value INR 3000</p>
                                            <Button variant="outline-primary" className="BILLING"
                                                onClick={() => nav('/billingamount', { state: { billingpage: Proj } })}>
                                                <h3>FOR PAYMENT</h3>
                                            </Button>
                                        </div>
                                    </div>: 
                                    <div className="customer-form">
                                        <Form>
                                            <Form.Group className="mb-2" >
                                                <Form.Label className="label-name">Name</Form.Label>
                                                <Form.Control className="customer-name" type="text" placeholder="Enter Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" >
                                                <Form.Label className="label-email">Email</Form.Label>
                                                <Form.Control className="customer-email" type="text" placeholder="Email" />

                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label className="label-pass">Password</Form.Label>
                                                <Form.Control className="customer-pass" type="text" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label className="label-address">Address</Form.Label>
                                                <Form.Control className="customer-address" type="text" placeholder="Address" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label className="label-country">Country Name</Form.Label>
                                                <Form.Control className="customer-country" type="text" placeholder="Country Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label className="label-state">State Name</Form.Label>
                                                <Form.Control className="customer-state" type="text" placeholder="State Name" />
                                            </Form.Group>
                                            <Form.Group className="mb-2">
                                                <Form.Label className="label-pincode">Pin Code</Form.Label>
                                                <Form.Control className="customer-pincode" type="text" placeholder="Pin Code" />
                                            </Form.Group>
                                            <Button variant="outline-primary" className="addtocart-paymentbutton"
                                                onClick={() => nav('/billingamount', { state: { billingpage: Proj } })}>
                                                <p>FOR PAYMENT</p>
                                            </Button>
                                        </Form>
                                    </div>
                                }
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Addtocart;