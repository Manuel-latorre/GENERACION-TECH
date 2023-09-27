// import React from 'react'
// import './Servicios.css'
// import LottieCards from './LottieCards'
// import desarrollo2 from './desarrollo3.json'
// import socialMedia from './social-media3.json'
// import comercio from './comercio1.json'


// const Servicios = () => {
//   return (
//     <div style={{marginBottom:100}}>
//         <h2 style={{textAlign:'center', paddingTop: 200, marginBottom: 50 , fontSize: 30}}>Servicios</h2>
//         <div style={{display:'flex', justifyContent:'space-around'}}>

//             <div className="card-container">
//                 <div className="card">
//                     <div className="front-content">
//                         <LottieCards imgService={desarrollo2}/>
//                         <p>Desarrollo de Software</p>
//                     </div>
//                     <div className="content">
//                         <p className="heading">Desarrollamos tu sitio!</p>
//                         <p>
//                             Desarrollamos tu presencia digital.
//                             Incrementa la productividad de tu empresa con soluciones tecnológicas.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className="card-container">
//                 <div className="card">
//                     <div className="front-content">
//                         <LottieCards imgService={socialMedia}/>
//                         <p>Marketing Digital</p>
//                     </div>
//                     <div className="content">
//                         <p className="heading">Marketing de tu sitio</p>
//                         <p>
//                         En un mundo cada vez más conectado, el marketing digital no es solo una opción, es una necesidad. <br/>
//                         Convierte visitantes en clientes y desbloquea el verdadero potencial de tu negocio en el mundo digital!
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             <div className="card-container">
//                 <div className="card">
//                     <div className="front-content">
//                         <LottieCards imgService={comercio}/>
//                         <p>Comercio Electronico</p>
//                     </div>
//                     <div className="content">
//                         <p className="heading">Comercio Electronico</p>
//                         <p>
//                             Auditamos canales digitales.
//                             Y te elevamos informes detallados de situación.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Servicios

import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Servicios.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Servicios = () => {
  return (
     <div id='servicios' className='services'>
        
         <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 50}}>SERVICIOS</p>

         <div className='cardsServicios'>
             <div className="cardServicio" id='dw'>
                 <p className='tituloCard'>DESARROLLO WEB</p>
                 <hr />
                 <li className='li'>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Hosting gratuito</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Diseño responsive</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Dominio personalizado</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Panel administrador</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Base de datos/servidor</p>
                     </div>
              
                 </li>
             </div>
      
             <div className="cardServicio" id='uxui'>
                 <p className='tituloCard'>DISEÑO UX/UI</p>
                 <hr />
                 <li className='li'>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Hosting gratuito</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Diseño responsive</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Dominio personalizado</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Panel administrador</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Base de datos/servidor</p>
                     </div>
              
                 </li>
             </div>
             <div className="cardServicio" id='cm'>
                 <p className='tituloCard'>COMMUNITY <br/> MANAGER</p>
                 <hr />
                 <li className='li'>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon className='iconNegro' sx={{fontSize:40}}/>
                         <p style={{marginLeft: 5}}> Hosting gratuito</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                         <p style={{marginLeft: 5}}> Diseño responsive</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                         <p style={{marginLeft: 5}}> Dominio personalizado</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                         <p style={{marginLeft: 5}}> Panel administrador</p>
                     </div>
                     <div style={{display:'flex', alignItems:'center', width:'100%', marginTop:10}}>
                         <CheckCircleIcon className='iconNegro' sx={{fontSize:40, color: 'black'}} />
                         <p style={{marginLeft: 5}}> Base de datos/servidor</p>
                     </div>
              
                 </li>
             </div>
         </div>
     </div>
  )
}

export default Servicios
