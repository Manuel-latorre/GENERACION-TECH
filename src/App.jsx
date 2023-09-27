
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Faqs from './components/Faqs/Faqs'
import ContactoFaqs from './components/Faqs/ContactoFaqs'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Desarrollo from './components/Desarrollo/Desarrollo'
import Marketing from './components/Marketing/Marketing'
import Comercio from './components/Comercio/Comercio'
import AboutUs from './components/AboutUs/AboutUs'
import Servicios from './components/Servicios/Servicios'
import Equipo from './components/Equipo/Equipo'

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
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nosotros' element={<QuienesSomos/>}/>
      <Route path='/desarrollo' element={<Desarrollo/>}/>
      <Route path='/marketing' element={<Marketing/>}/>
      <Route path='/comercio' element={<Comercio/>}/>
      </Routes>
      <Footer/>
      </div>
      
    
  )
}

export default App
