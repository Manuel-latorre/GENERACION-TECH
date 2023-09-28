
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import QuienesSomos from './components/QuienesSomos/QuienesSomos'
import Desarrollo from './components/Desarrollo/Desarrollo'
import Marketing from './components/Marketing/Marketing'
import Comercio from './components/Comercio/Comercio'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import DesarrolloDetail from './components/Servicios/ServiciosDetail/DesarrolloDetail/DesarrolloDetail'
import ComercioDetail from './components/Servicios/ServiciosDetail/ComercioDetail/ComercioDetail'
import MarketingDetail from './components/Servicios/ServiciosDetail/MarketingDetail/MarketingDetail'

function App() {


  return (
    <div className="app">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nosotros' element={<QuienesSomos/>}/>
      <Route path='/desarrollo' element={<Desarrollo/>}/>
      <Route path='/servicios/desarrollo-detail' element={<DesarrolloDetail/>} />
      <Route path='/marketing' element={<Marketing/>}/>
      <Route path='/servicios/marketing-detail' element={<MarketingDetail />}/>
      <Route path='/comercio' element={<Comercio/>}/>
      <Route path='/servicios/comercio-detail' element={<ComercioDetail />}/>
      </Routes>
      <ScrollToTop/>
      <Footer/>
      </div>
      
    
  )
}

export default App
