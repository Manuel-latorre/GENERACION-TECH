
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import Servicios from './components/Servicios/Servicios'
import Equipo from './components/Equipo/Equipo'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Faqs from './components/Faqs/Faqs'
import ContactoFaqs from './components/Faqs/ContactoFaqs'

function App() {


  return (
    <div className="app">
      <Navbar />
      <AboutUs/>



      <Servicios/>
      <ContactoFaqs/>
      <Faqs/>
      <Equipo/>
      <Contacto/>
      <Footer/>
      </div>
      
    
  )
}

export default App
