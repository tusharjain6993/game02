import { useState } from 'react';
import '../style/style.css' 
import { useLocation } from 'react-router-dom'
function Accountinfo()
{
const loc = useLocation();
const [Proj,setProj] = useState(loc.state.product)
console.log(Proj);
    return(
        
        <div className="detail-cover">
            <h1>accountinfo</h1>
        
       
        </div>
    )
}
export default Accountinfo;