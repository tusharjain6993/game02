import { Container, Row, Col, Form, Button, Nav, Navbar, Carousel } from 'react-bootstrap'
import { categorymenubar1, logo1, bannerpics1 } from '../data/data'
import '../style/style.css'
import { useNavigate } from 'react-router-dom';
function Categories() {
    /* const nav=useNavigate(); */
    return (
        <div className="category-div">

            <Container>
                <Row>
                    <Col>
                        <Navbar className="nav1" expand="lg">
                            <div className='ghost-name-pic'>
                                {
                                    logo1.map(function (d) {
                                        return (<img src={logo1} className="logocss1" />
                                        )
                                    })
                                }

                            </div>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    {/* <Nav.Link href="/">HOME</Nav.Link> */}    {/*   Static way of calling Home in bootstrap */}

                                    {
                                        categorymenubar1.map(function (d) {
                                            return (
                                                <Nav.Link className="cartegory-menu" href={`/${d}`}>{d}</Nav.Link> 
                                                    /* Dynamic way of calling all the values */
                                            )
                                        })
                                    }

                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        style={{ position: 'relative', right: '15px', top: '7px' }}
                                    />
                                    <Button variant="outline-success" style={{ right: '5px', position: 'relative', top: '7px' }}>
                                        Search
                                    </Button>
                                </Form>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <Col>
            <Carousel>
                {
                    bannerpics1.map(function (d) {
                        return (
                            <Carousel.Item interval={800}>

                                <img
                                    style={{ width: '100%', height: '600px' }}
                                    src={d}
                                    alt="First slide"
                                /* onClick={() => nav('/detail', { state: { product: d } })} */
                                />
                                <Carousel.Caption>
                                    <h3>GHOST</h3>
                                    <p>GAMING</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })

                }
            </Carousel></Col>

        </div>
    );
}
export default Categories;