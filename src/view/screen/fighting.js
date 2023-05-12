import '../style/style.css'
import { fightinginfo } from '../data/data'
import { useNavigate } from 'react-router-dom'
import { Button ,Row,Col} from 'react-bootstrap'
function Fighting(){
    const nav=useNavigate();
    return(
        <>        
        <div className="sports-backcover">
            {
                fightinginfo.map(function(d){
                    return(
                        <div className="sports-name-div">
                        <Row className='m-3'>

                            <Col lg={6}><img src={d.image} style={{ width: '100%', height: '100%' }} />
                                </Col>
                            <Col lg={6}>
                            <div className="sports-name">
                                        <h3 style={{ margin: '0', padding: '0' }}>{d.name}</h3>
                                    </div>
                                    <div className="sports-os">
                                        <h3>{d.OperatingSystem}</h3>
                                    </div>
                                    <div className="sports-cpu">
                                        <h3>{d.CPU}</h3>
                                    </div>
                                    <div className="sports-ram">
                                        <h3>{d.RAM}</h3>
                                    </div>
                                    <div className="sports-setupsize">
                                        <h3>{d.SetupSize}</h3>
                                    </div>
                                    <div className="sports-hardisk">
                                        <h3>{d.HardDiskSpace}</h3>
                                    </div>
                                    <Button className="sports-button" onClick={() => nav('/detail', { state: { product: d } })}>
                                        PURCHASE
                                    </Button>
                            </Col>
                        </Row></div>
                        
                       /*  <div className="action-name-div">
                            <div className="action-name-info ">
                                <div className="action-image">
                                <img src={d.image} style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className="action-content">
                                    <div className="action-name">
                                        <h3 style={{ margin: '0', padding: '0' }}>{d.name}</h3>
                                    </div>
                                    <div className="action-os">
                                        <h3>{d.OperatingSystem}</h3>
                                    </div>
                                    <div className="action-cpu">
                                        <h3>{d.CPU}</h3>
                                    </div>
                                    <div className="action-ram">
                                        <h3>{d.RAM}</h3>
                                    </div>
                                    <div className="action-setupsize">
                                        <h3>{d.SetupSize}</h3>
                                    </div>
                                    <div className="action-hardisk">
                                        <h3>{d.HardDiskSpace}</h3>
                                    </div>
                                    <Button className="action-button" onClick={() => nav('/detail', { state: { product: d } })}>
                                        PURCHASE
                                    </Button>
                                </div>
                            </div>
                        </div> */
                    )
                })
            }
            </div></>

    )
}
export default Fighting