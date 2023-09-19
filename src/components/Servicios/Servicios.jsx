import React from 'react'
import './Servicios.css'
import LottieCards from './LottieCards'
import desarrollo2 from './desarrollo3.json'
import socialMedia from './social-media3.json'
import comercio from './comercio1.json'


const Servicios = () => {
  return (
    <div style={{marginBottom:100}}>
        <h2 style={{textAlign:'center', marginBottom: 100, fontSize: 30}}>Servicios</h2>
        <div style={{display:'flex', justifyContent:'space-around'}}>

            <div className="card-container">
                <div className="card">
                    <div className="front-content">
                        <LottieCards imgService={desarrollo2}/>
                        <p>Desarrollo de Software</p>
                    </div>
                    <div className="content">
                        <p className="heading">Desarrollamos tu sitio!</p>
                        <p>
                            Desarrollamos tu presencia digital.
                            Incrementa la productividad de tu empresa con soluciones tecnológicas.
                        </p>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <div className="front-content">
                        <LottieCards imgService={socialMedia}/>
                        <p>Marketing Digital</p>
                    </div>
                    <div className="content">
                        <p className="heading">Marketing de tu sitio</p>
                        <p>
                        En un mundo cada vez más conectado, el marketing digital no es solo una opción, es una necesidad. <br/>
                        Convierte visitantes en clientes y desbloquea el verdadero potencial de tu negocio en el mundo digital!
                        </p>
                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <div className="front-content">
                        <LottieCards imgService={comercio}/>
                        <p>Comercio Electronico</p>
                    </div>
                    <div className="content">
                        <p className="heading">Comercio Electronico</p>
                        <p>
                            Auditamos canales digitales.
                            Y te elevamos informes detallados de situación.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios
