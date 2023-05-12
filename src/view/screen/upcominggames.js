import '../style/style.css'
import { Col, Container, Row, Carousel,Card,ListGroup } from "react-bootstrap";
import AwesomeSlider from 'react-awesome-slider';
import {gameinformation, upcominginfo,bannerpics } from "../data/data";
import { useNavigate } from 'react-router-dom';
function Upcominggames() {
    const nav=useNavigate();
    return (
       
        <Row>
        <Col>
            <Carousel fade>
                {
                    upcominginfo.map(function (d) {
                        return (
                            <Carousel.Item interval={800}>

                                <img
                                    style={{width:'100%',height:'100%'}}
                                    src={d.image}
                                    alt="First slide"
                                    onClick={() => nav('/detail1', { state: { product: d } })} 
                                    
                                />
                                <Carousel.Caption>
                                    <h3>GHOST</h3>
                                    <p>GAMING</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })

                }
            </Carousel>
        </Col>
    </Row>
    
      );
}
export default Upcominggames;