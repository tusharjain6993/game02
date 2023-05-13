import { Row, Col, Container, Button, Form, ToggleButtonGroup, ToggleButton, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import '../style/style.css'
import { useLocation } from 'react-router-dom';
function Billingamount() {
    const loc = useLocation();
    const [proje, setProje] = useState(loc.state.billingpage)

    console.log(proje);
    const [discou, setDiscou] = useState();
    const [finalamt, setFinalamt] = useState();
    const [value, setValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const total = proje.Price
    console.log(total);
    var discountamount;
    var final;
    function handleClick() {
        discountamount = total * 10 / 100;
        setDiscou(discountamount);
        final = total - discountamount;
        setFinalamt(final);

    }

    const handleChange = (event) => {
        setValue(event.target.value); // Update the state with the selected value
    }


    return (
        <>
            <Row>
                <Col>
                    <div className="billing-cover-page">
                        <div className="billing-cover-add">
                            <img src={proje.image} style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', opacity: '0.38' }} />

                            <div className="mode-of-payment">
                                <div className="mode-of-payment-pay">
                                    <label className='label-card'>
                                        <input type="radio" value="option1" checked={selectedOption === "option1"} onChange={(d) => setSelectedOption(d.target.value)} />
                                        CARD
                                    </label>
                                    <label className='label-paytm'>
                                        <input type="radio" value="option2" checked={selectedOption === "option2"} onChange={(d) => setSelectedOption(d.target.value)} />
                                        PAYTM WALLET
                                    </label>
                                    <label className='label-googlepay'>
                                        <input type="radio" value="option3" checked={selectedOption === "option3"} onChange={(d) => setSelectedOption(d.target.value)} />
                                        GOOGLE PAY
                                    </label>
                                </div>
                                <div className="card-paytm-googlepay">
                                    {selectedOption === 'option1' ? (
                                        <div className="card-div">
                                            <div className="cardwala">
                                                <div className="select-bank">
                                                    <select className="select" value={value} onChange={handleChange}>
                                                        <option value="">--Select Your Bank--</option>
                                                        <option value="option4">SBI</option>
                                                        <option value="option5">HDFC</option>
                                                        <option value="option6">BANK OF BARODA</option>
                                                    </select>
                                                    <Form>
                                                        <div className="label-cardnumber-div">
                                                            <Form.Group className="mb-2" >
                                                                <Form.Label className="label-cardnumber">Card Number</Form.Label>
                                                                <Form.Control className="card-number" type="text" placeholder="Enter Card Number" />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="label-expirydate-div">
                                                            <Form.Group className="mb-2" >
                                                                <Form.Label className="label-expiry">Expiry Date</Form.Label>
                                                                <Form.Control className="card-expirydate" type="text" placeholder="Expiry Date" />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="label-cvv-div">
                                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                                <Form.Label className="label-cvv">CVV</Form.Label>
                                                                <Form.Control className="card-cvv" type="text" placeholder="CVV" />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="label-holder-div">
                                                            <Form.Group className="mb-2" >
                                                                <Form.Label className="label-holder">Holder Name</Form.Label>
                                                                <Form.Control className="card-holder" type="text" placeholder="CARD Holder Name" />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="button-for-pay-div">
                                                            <Button className="button-pay" variant="primary">PLACE ORDER</Button>
                                                        </div>
                                                    </Form>
                                                </div>

                                            </div>
                                        </div>
                                    ) : selectedOption === 'option2' ? (
                                        <div className="paytm-div">
                                            <div className="paytm-phonenumber-name-div">
                                                <Form>
                                                    <div className="paytm-name">
                                                        <Form.Group className="mb-2" >
                                                            <Form.Label className="label-paytm-name">Holder Name</Form.Label>
                                                            <Form.Control className="paytm-holdername" type="text" placeholder="HOLDER NAME" />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="paytm-phonenumber">
                                                        <Form.Group className="mb-2" >
                                                            <Form.Label className="label-paytm-phonenumber">Phone Number</Form.Label>
                                                            <Form.Control className="paytm-holder-number" type="text" placeholder="PHONE NUMBER" />
                                                        </Form.Group>
                                                    </div>
                                                </Form>
                                                <Button className="button-paytm-pay" variant="primary">PLACE ORDER</Button>
                                            </div>
                                        </div>
                                    ) : selectedOption === 'option3' ? (
                                        <div className="googlepay-div">
                                            <div className="googlepay-upi-name-div">
                                                <Form>
                                                    <div className="googlepay-name">
                                                        <Form.Group className="mb-2" >
                                                            <Form.Label className="label-googlepay-name">Holder Name</Form.Label>
                                                            <Form.Control className="googlepay-holdername" type="text" placeholder="HOLDER NAME" />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="googlepay-upiphonenumber">
                                                        <Form.Group className="mb-2" >
                                                            <Form.Label className="label-googlepay-phone">Phone Number</Form.Label>
                                                            <Form.Control className="googlepay-holder-number" type="text" placeholder="UPI ID" />
                                                        </Form.Group>
                                                    </div>
                                                </Form>
                                                <Button className="button-paytm-pay" variant="primary">PLACE ORDER</Button>
                                            </div>
                                        </div>
                                    ) : <p style={{ fontSize: '30px', margin: '80px' }}>PLEASE CHOOSE PAYMENT MODE</p>}
                                </div>
                            </div>
                            <div className="payment">
                                <Form>
                                    <div className="payment-price-div">
                                        <Form.Group className="mb-2" >
                                            <Form.Label className="label-payment-price">TOTAL</Form.Label>
                                            <Form.Control className="payment-price" type="text" value={proje.Price} />
                                        </Form.Group>
                                    </div>
                                    <div className="payment-discount-div">
                                        <Form.Group className="mb-2" >
                                            <Form.Label className="label-payment-discount">DISCOUNT</Form.Label>
                                            <Form.Control className="payment-discount" type="text"  />
                                        </Form.Group>
                                    </div>
                                    <div className="payment-gst-div">
                                        <Form.Group className="mb-2" >
                                            <Form.Label className="label-payment-gst">GST</Form.Label>
                                            <Form.Control className="payment-gst" type="text"/>
                                        </Form.Group>
                                    </div>
                                    <div className="payment-finalamt-div">
                                        <Form.Group className="mb-2" >
                                            <Form.Label className="label-payment-finalamt">FINAL AMOUNT</Form.Label>
                                            <Form.Control className="payment-finalamt" type="text"/>
                                        </Form.Group>
                                    </div>
                                    <div className="thankyou">
                                        <h3>THANKYOU FOR PURCHASING GAME</h3>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default Billingamount;