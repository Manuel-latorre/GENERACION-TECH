import './View.css';
import { Fade } from "react-awesome-reveal";
const View=({info})=>{
    
    return(
        <Fade>

        <div className="container">
            <div className='divej'>
                 <h1>{info.title}</h1>
            </div>
           
            {/* <img src={info.image} alt="" style={{width:'98vw', height:'75vh'}}/> */}
            <div className='description1'>
            <p style={{color: 'white'}}>{info.description}</p>
            </div>
            {
                info.title === '¿Quienes Somos?' 
                ?
                <div className='areaContain'>
                <h3 className='areas'>Áreas</h3>
                </div> 

: <div className="description2">
                    {/* imagen con los servicios como en el ejemplo */}
                    <p className='description2P'>{info.services}</p>
                </div>
            }
            
            <div className='div4p'>
                <div className='divp'>
                    <h3>{info.title1}</h3>
                    <p>{info.p1}</p>
                </div>
                <div className='divp'>
                    <h3>{info.title2}</h3>
                    <p>{info.p2}</p>
                </div>
                <div className='divp'>
                    <h3>{info.title3}</h3>
                    <p>{info.p3}</p>
                </div>
                <div className='divp'>
                    <h3>{info.title4}</h3>
                    <p>{info.p4}</p>
                </div>
            </div> 
        </div>
            </Fade>
    )
}

export default View;