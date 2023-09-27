
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import Servicios from './components/Servicios/Servicios'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Faqs from './components/Faqs/Faqs'

function App() {


  return (
    <div className="app">
      <Navbar />
      <AboutUs/>



      <Servicios/>
      <Faqs/>
      <Equipo/>
      <Contacto/>
      <Footer/>
      </div>
      
    
  )
}

export default App
