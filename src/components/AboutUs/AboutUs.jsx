import React from 'react'
import About from '../Lottie/Lottie'
import './AboutUs.css'
const AboutUs = () => {
  return (
    <div className='divAboutUs' id='nosotros'>

    <main className='main'>
      <div className='aboutText'>
        
          <h1>! Bienvenidos  a Generacion <strong style={{color:'#00fff5'}}>Tech</strong> !</h1>
          
        
        
        <hr style={{width: '80%', margin:'auto', marginTop:'3%', marginBottom:'3%'}}/>
        <div style={{width:'70%', textAlign:'center', margin:'auto', marginTop: 20}}>
          <p> Somos una empresa innovadora especializada en desarrollos y servicios tecnológicos.<br></br>
Nuestro equipo integrado por jóvenes profesionales está dispuesto a llevar tu negocio al siguiente nivel <br></br>
“El Mercado Digital”</p>
        </div>



        <div className='btnAbout'>
        <a className='btnContactame' href="#contacto">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contacto
        </a><a className='btnContactame' href="nosotros">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sobre Nosotros
        </a>
                              
        </div>
        <p>¡Bienvenido a una nueva era de posibilidades para su negocio!</p>
      </div>

      <div>
        <About/>
      </div>
    </main>
    </div>
  )
}

export default AboutUs