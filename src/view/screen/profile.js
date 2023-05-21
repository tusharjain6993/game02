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
             <h1>PROFILE</h1>
        <Container>
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Container>

        </div>
        </>
       
    )
}
export default Profile;