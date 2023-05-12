import { useState } from 'react';
import '../style/style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { modeofpay, modeofpay1 } from '../data/data'
function Preorder() {
    const loc = useLocation();
    const [Proj, setProj] = useState(loc.state.finalpage)
    console.log(Proj);

    return (
        <div className="detail-cover">
            <div className="detail1-cover1">
                <h1 style={{ margin: '0px', padding: '0px', textAlign: 'center' }}>PRE ORDER</h1>
                {/*    <h3>{Proj.name}</h3>
            <h3 style={{ padding: '0', margin: '0' }}>{Proj.Price}</h3> */}
                <div className="pre-name">
                    <h3>{Proj.name}</h3>
                </div>
                <div className="pre-price">
                    <h3>{Proj.Price}</h3>
                </div>
                <div className="mode">
                    <h2>MODE OF PAYMENT</h2>
                    <div className="mode1-flex">
                        {
                            modeofpay.map(function (d) {
                                return (
                                    <div className='mode-img1'>
                                        <img src={d} className="pre-pay-img" />
                                    </div>
                                )
                            })
                        }
                        {
                            modeofpay1.map(function (d) {
                                return (
                                    <div className='mode-img2'>
                                        <img src={d} className="pre-pay-img1" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>



    )
}
export default Preorder;