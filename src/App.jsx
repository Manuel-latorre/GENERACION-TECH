import Navbar from './components/Navbar/Navbar'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Servicios from './components/Servicios/Servicios'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'

function App() {


  return (
    <div className="app">
      <Navbar />
      <AboutUs/>

      <div className='subContainer'>

      <Servicios/>
      <Equipo/>
      <Contacto/>
      <Footer/>
      </div>
      
    </div>
  )
}

export default App
