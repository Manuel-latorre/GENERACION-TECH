import React, {useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import Loader from '../Loader/Loader'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    const handleNosotrosClick = () => {
        setShowLoader(true);

        setTimeout(() => {
            setShowLoader(false);
        }, 2000);

    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el escuchador de eventos al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


  return (
    
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div style={{display:'flex', alignItems:'center'}}>
                <img src={logo} alt="" />
                
                <h1 className='generacion'>Generacion <strong className='tech'>Tech</strong></h1>
            </div>

            <div className='nav_items'>
                <a onClick={handleNosotrosClick} className='btnNav' href="nosotros">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Nosotros</a>
                <a onClick={handleNosotrosClick} className='btnNav' href="#servicios">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Servicios</a>
                <a onClick={handleNosotrosClick} className='btnNav' href="#nuestroEquipo">
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Nuestro Equipo
                </a>
                <a onClick={handleNosotrosClick} className='btnNav' href="#contacto">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Contacto
                </a>
            </div>
            {showLoader && <Loader />}
        </nav>
    
  )
}

export default Navbar