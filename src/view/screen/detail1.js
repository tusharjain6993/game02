import { Button ,Carousel} from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Detail1() {
    const loc = useLocation();
    const [pro, setPro] = useState(loc.state.product)

    console.log(pro);
    let nav = useNavigate();
    return(
        <div className="detail-cover">
             <div className="detail-cover-sub">
                <div className="big-image1">
                    <img src={pro.image} style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', opacity: '0.38' }} />
                </div>
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
                <div className="detail1-name">
                            <h2>NAME: {pro.name}</h2>
                        </div>
                        <div className="detail1-OperatingSystem">
                            <h2>OperatingSystem: {pro.OperatingSystem}</h2>
                        </div>
                        <div className="detail1-CPU">
                            <h2>CPU: {pro.CPU}</h2>
                        </div>
                        <div className="detail1-RAM">
                            <h2>RAM: {pro.RAM}</h2>
                        </div>
                        <div className="detail1-HardDiskSpace">
                            <h2>HardDiskSpace: {pro.HardDiskSpace}</h2>
                        </div>
                        <div className="detail1-SetupSize">
                            <h2>Setup Size: {pro.SetupSize}</h2>
                        </div>
                        <div className="detail1-Install">
                            <h2>Install: {pro.Install}</h2>
                        </div>
                        <div className="detail1-DirectX">
                            <h2>DirectX: {pro.DirectX}</h2>
                        </div>
                        <div className="detail1-GraphicCard">
                            <h2>GraphicCard: {pro.GraphicCard}</h2>
                        </div>
                        <div className="detail1-Price">
                            <h2>Price:{pro.Price}</h2>
                        </div>
                        <Button variant="outline-primary" className="Pre-order"
                              onClick={() => nav('/addtocart', { state: { finalpage: pro } })}>
                                <h3 >PRE ORDER</h3> 
                                </Button>    
                </div>
                </div>
             </div>
        </div>
    )
}
export default Detail1;