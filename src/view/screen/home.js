import { Col, Container, Row, Carousel, Card, ListGroup } from "react-bootstrap";
import { games, bannerpics2, bannerpics, games1 } from "../data/data";
import { useNavigate } from "react-router-dom";

function Home() {

    console.log(games);
    const nav = useNavigate();
    return (
        <div className="home">
            <Container>
                <Row>
                    <Col>
                        <Carousel fade>
                            {
                                bannerpics.map(function (d) {
                                    return (
                                        <Carousel.Item interval={800}>

                                            <img
                                                style={{ width: '100%', height: '100%' }}
                                                src={d}
                                                alt="First slide"
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
                <div className="cards">
                    <Row>
                        {
                            games.map(function (d) {
                                return (
                                    <Col>
                                        {d.image &&
                                            /* d.image= ye apan use karte ha jab apan ko vo data dikhana ho jisme image ha nahi to jisme nahi ha usko print nahi kare */
                                            <Card style={{ width: '20rem' }} className="tap-to-photo" onClick={() => nav('/detail', { state: { product: d } })}>
                                                <Card.Img variant="top" src={d.image} />
                                                <Card.Body>

                                                    <Card.Text>
                                                        {d.name}
                                                    </Card.Text>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroup.Item>{d.Price}/-</ListGroup.Item>

                                                </ListGroup>

                                            </Card>}

                                    </Col>

                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
            <div className="slider2">
                <Row>
                    <Col>
                        <Carousel fade>
                            {
                                bannerpics2.map(function (d) {
                                    return (
                                        <Carousel.Item interval={800}>
                                            <img
                                                style={{ width: '100%', height: '500px' }}
                                                src={d}
                                                alt="First slide"
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
                        <Container>
                            <div className="cards">
                                <Row>
                                    {
                                        games1.map(function (d) {
                                            return (
                                                <Col>
                                                    {d.image &&
                                                        /* d.image= ye apan use karte ha jab apan ko vo data dikhana ho jisme image ha nahi to jisme nahi ha usko print nahi kare */
                                                        <Card style={{ width: '20rem' }} className="tap-to-photo" onClick={() => nav('/detail', { state: { product: d } })}>
                                                            <Card.Img variant="top" src={d.image} />
                                                            <Card.Body>

                                                                <Card.Text>
                                                                    {d.name}
                                                                </Card.Text>
                                                            </Card.Body>
                                                            <ListGroup className="list-group-flush">
                                                                <ListGroup.Item>{d.Price}/-</ListGroup.Item>

                                                            </ListGroup>

                                                        </Card>}

                                                </Col>

                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>

    );
}
export default Home;