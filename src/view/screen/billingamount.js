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
                                <div className="select-bank">
                                    <select className="select" value={value} onChange={handleChange}>
                                        <option value="">--Select Your Bank--</option>
                                        <option value="option1">SBI</option>
                                        <option value="option2">HDFC</option>
                                        <option value="option3">BANK OF BARODA</option>
                                    </select>
                                </div>
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
                                <div className="card-paytm-googlepay"></div>
                            </div>
                            <div className="payment"></div>

                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default Billingamount;