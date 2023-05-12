import { Row,Col,Container,Button ,Form,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
import { useState } from 'react';
import '../style/style.css'
import { useLocation } from 'react-router-dom';
function Billingamount()
{
    const loc = useLocation();
    const [proje, setProje] = useState(loc.state.billingpage)

    console.log(proje);
    const[discou,setDiscou]=useState(); 
    const[finalamt,setFinalamt]=useState();  
   
    
const total=proje.Price
console.log(total);
var discountamount;
var final;
function handleClick()
{
    discountamount=total*10/100;
    setDiscou(discountamount);
    final=total-discountamount;
    setFinalamt(final);

}
    return (
        <>
         <div className="billing-cover-page">
            <div className="billing-cover-add">
                        <img src={proje.image} style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', opacity: '0.38' }} />
                       
                <div className="mode-of-payment"></div>
                <div className="mode-of-payment-pay"></div>
                       
            </div>
         </div>
        </>
      );
}
export default Billingamount;