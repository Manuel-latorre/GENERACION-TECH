import React from 'react'
import logo from '../../assets/logo.png'
import phone from './cell-phone.png'
import email from './email.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import pin from './pin.png'
import './Footer.css'


const Footer = () => {
  return (
    <div className='containerFooter'>
        <div className="logoFooter">
        <img src={logo} alt="" className=''/>
        <h2>Generacion <br /><span style={{color:"#00fff5"}}>Tech</span></h2>
        </div>
      <div className="sectionContainerF">
        <div className="linksContainerFooter">
        <h3>Links</h3>
        <div className="linksFooter">
            <a style={{padding:4}} href='/'>Inicio</a>
            <a style={{padding:4}} href='nosotros'>Nostros</a>
            <a style={{padding:4}} href='/#servicios'>Servicios</a>
            <a style={{padding:4}} href='/#faqs'>FAQs</a>
            <a style={{padding:4}} href='/#nuestroEquipo'>Nuestro equipo</a>
            <a style={{padding:4}} href='/#contacto'>Contacto</a>
        </div>
        </div>
        <div className="contacto">
          <h3>Contacto</h3>
          <div className="contact">
              <img src={email} alt="" />
              <p style={{marginLeft:10}}>GeneracionTech@gmail.com</p>
          </div>

          <div className="contact">
              <img src={phone} alt="" />
              <p style={{marginLeft:10}}>+54 ----------</p>
          </div>

          <div className="contact">
              <img src={pin} alt="" />
              <p style={{marginLeft:10}}>Cordoba, Cordoba, Cordoba</p>
          </div>
        </div>
        <div className="redesContainerFooter">
        <h3 >Redes</h3>

            <div className="linkedinContainer">
              <img  src={linkedin} alt="logo linkedin"/>
              <p style={{marginLeft:10}}>Linkedin</p>
            </div>

            <div className="linkedinContainer">
              <img style={{width:'25px'}} src={instagram} alt="Instagram logo" />
              <p style={{marginLeft:10}}>Instagram</p>
            </div>

            <div className="linkedinContainer">
              <img src={twitter} alt="logo twitter" />
              <p style={{marginLeft:10}}>Twitter</p>
            </div>
        </div>
      </div>
      <div className="terminosFooter">
        <p style={{fontSize:10}}>Terminos y condiciones</p>
        <hr  style={{ marginLeft: 20  , marginRight: 20, fontSize:2}}/>
        <p style={{fontSize:10}}>Privacidad</p>
        <hr  style={{ marginLeft: 20  , marginRight: 20}}/>
        <p style={{fontSize:10}}>Politica y Privacidad</p>
      </div>
    </div>
  )
}

export default Footer