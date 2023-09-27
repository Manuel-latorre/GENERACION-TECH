import AboutUs from "../AboutUs/AboutUs";
import Servicios from "../Servicios/Servicios";
import Faqs from '../Faqs/Faqs';
import Equipo from "../Equipo/Equipo";
import Contacto from "../Contacto/Contacto";
import ContactoFaqs from '../Faqs/ContactoFaqs'

const Home= ()=>{
    return(
        <>
            <AboutUs/>
            <Servicios/>
            <ContactoFaqs/>
            <Faqs/>
            <Equipo/>
            <Contacto/>
        </>
    )
}

export default Home;