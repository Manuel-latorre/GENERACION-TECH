import Navbar from './components/Navbar/Navbar'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Servicios from './components/Servicios/Servicios'
import Equipo from './components/Equipo/Equipo'

function App() {


  return (
    <div className="app">
      <Navbar />
      <AboutUs/>
      <Servicios/>
      <Equipo/>
      
    </div>
  )
}

export default App
