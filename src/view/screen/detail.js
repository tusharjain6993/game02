import { useLocation, useNavigate } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { useState } from 'react'
import { Col,Container, Row ,Button} from 'react-bootstrap';
function Detail() {
    const loc = useLocation();
    const [pro, setPro] = useState(loc.state.product)
    console.log(pro);
    const nav=useNavigate();
    return(
        <div className="detail-cover">
            <div className="detail-cover-sub">
                <div className="big-image1">
                    <img src={pro.image} style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', opacity: '0.38' }} />
                    <div className="image-content-div">
                        <div className="image-div-games">
                        <Carousel>
                            {
                                pro.img.map(function(d){
                                    return(

                                        <Carousel.Item interval={700}>
                                        <img
                                          style={{width:'100%',height:'100%'}}
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
                        </div>
                        <div className="full-detail-info">
                        <div className="gamename-details">
                            <h2>{pro.name}</h2>
                        </div>
                        <div className="gamebasedon-details">
                            <h2 style={{ padding: '0', margin: '0',color:'white' }}>BASEDON: {pro.Basedon}</h2>
                        </div>
                        <div className="gameSetupSize-details">
                            <h2 style={{ padding: '0', margin: '0',color:'white' }}>SETUP SIZE: {pro.SetupSize}</h2>
                        </div>
                        <div className="gameOperatingSystem-details">
                            <h2 style={{ padding: '0', margin: '0',color:'white' }}>OperatingSystem: {pro.OperatingSystem}</h2>
                        </div>
                        <div className="gameCPU-details">
                            <h2 style={{ padding: '0', margin: '0' ,color:'white'}}>CPU: {pro.CPU}</h2>
                        </div>
                        <div className="gameLanguage-details">
                            <h2 style={{ padding: '0', margin: '0',color:'white' }}>Language: {pro.Language}</h2>
                        </div>

                        <div className="gameInstall-details">
                            <h2 style={{ padding: '0', margin: '0',color:'white' }}>Install: {pro.Install}</h2>
                        </div>

                        <div className="gameHardDiskSpace-details">
                            <h2 style={{ padding: '0', margin: '0',color:'white' }}>HardDiskSpace: {pro.HardDiskSpace}</h2>
                        </div>
                        
                        <div className="gamePrice-details">
                            <h2 style={{ padding: '0', margin: '0' ,color:'white'}}>PRICE: {pro.Price}</h2>
                        </div>
                        <Button variant="outline-primary" className="ADD-TO-CART"
                              onClick={() => nav('/addtocart', { state: { finalpage: pro } })}>
                                <h3 >ADD TO CART</h3> 
                                </Button>    

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Detail;