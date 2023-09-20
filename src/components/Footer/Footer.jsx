import React from 'react'
import logo from '../../assets/logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import './Footer.css'
import { fontSize } from '@mui/system';

const Footer = () => {
  return (
    <div className='containerFooter'>
        <div className="logoFooter">
        <img src={logo} alt="" />
        <h2>Generacion <br /><span style={{color:"#00fff5"}}>Tech</span></h2>
        </div>
      <div className="sectionContainerF">
        <div className="contacto">
        <h3>Contacto</h3>
        <div className="mail">
        <EmailIcon sx={{fontSize:40, margin:2, }}/>
        <p>GeneracionTech@gmail.com</p>
        </div>
        <div className="phoneContainer">
            <PhoneIphoneIcon sx={{fontSize:40, margin:2}}/>
            <p>+54 11 54664834</p>
        </div>
        <div className="location">
            <FmdGoodIcon sx={{fontSize:40, margin:2}}/>
            <p>Cordoba, Cordoba, Cordoba Berenjenuda 200</p>
        </div>
        </div>
        <div className="linksContainerFooter">
        <h3>Links</h3>
        <div className="linksFooter">
            <p style={{padding:4}}>Inicio</p>
            <p style={{padding:4}}>Nostros</p>
            <p style={{padding:4}}>Servicios</p>
            <p style={{padding:4}}>Nuestro equipo</p>
            <p style={{padding:4}}>Contacto</p>
        </div>
        </div>
        <div className="redesContainerFooter">
        <h3>Redes</h3>
            <div className="linkedinContainer">
            <LinkedInIcon  sx={{fontSize:30, margin:2}}/>
            <p>Linkedin</p>
            </div>
            <div className="linkedinContainer">
            <InstagramIcon  sx={{fontSize:30, margin:2}}/>
            <p>Instagram</p>
            </div>
            <div className="linkedinContainer">
            <TwitterIcon  sx={{fontSize:30, margin:2}}/>
            <p>Twitter</p>
            </div>
        </div>
      </div>
      <div className="terminosFooter">
        <p style={{fontSize:10}}>Terminos y condiciones</p>
        <hr  style={{width:120, marginLeft: 20  , marginRight: 20, fontSize:2}}/>
        <p style={{fontSize:10}}>Privacidad</p>
        <hr  style={{width:120, marginLeft: 20  , marginRight: 20}}/>
        <p style={{fontSize:10}}>Politica y Privacidad</p>
      </div>
    </div>
  )
}

export default Footer