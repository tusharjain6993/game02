import '../style/style.css'
import { Row,Col,Container,Button ,Form} from 'react-bootstrap';
import { useState } from 'react';
function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone,setPhone]=useState('');
    const [age,setAge]=useState('');
    return (
        <>
       <div className="profile">
             <h2>ENTER YOUR INFO.</h2>
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(d) => setName(d.target.value)} />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="phone" placeholder="Enter phone no." value={phone} onChange={(d) => setPhone(d.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>AGE</Form.Label>
                            <Form.Control type="Age" placeholder="Enter Age." value={age} onChange={(d) => setAge(d.target.value)} />
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d) => setEmail(d.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(d) => setPassword(d.target.value)} />
                        </Form.Group>

                        <Button variant="primary" >
                            SUBMIT
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

        </div>
        </>
       
    )
}
export default Profile;