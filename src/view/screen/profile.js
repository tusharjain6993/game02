import '../style/style.css'
import { Row,Col,Container,Button ,Form} from 'react-bootstrap';
import { useState } from 'react';
function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone,setPhone]=useState('');
    const [age,setAge]=useState('');
    const[username,setUsername] = useState(localStorage.getItem('user'))

    async function download(){
        let url = `http://localhost:8080/download?username=${username}`;
		window.location.href = url;
    }
    return (
        <>
       <div className="profile">
             <h1>PROFILE</h1>
        <Container>
            <Row>
                <Col>
                 <button onClick={download}>download</button>   
              
                </Col>
            </Row>
        </Container>

        </div>
        </>
       
    )
}
export default Profile;