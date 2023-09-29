import View from "../View/View";
import img from '../../assets/bg.gif'
const info={
    title: 'Comercio Electrónico',
    image: img,
    description: 'Como analistas en comercio electrónico nuestras soluciones se centran en evaluar detenidamente datos de ventas y tráfico en línea, evaluar el rendimiento general de tiendas virtuales, detectar tendencias y oportunidades de mejora, optimizar la experiencia del usuario, llevar a cabo análisis competitivos, perfeccionar las tasas de conversión y retención de clientes, así como proponer mejoras para el sitio web y medir el retorno de la inversión en estrategias de marketing digital. Estas funciones son fundamentales para el éxito y el crecimiento sostenible de un negocio en línea, nosotros lo ofrecemos auditando y emitiendo informes profesionales.Contratar un servicio de comercio electrónico especializado puede ser una decisión estratégica para aquellas empresas que deseen expandir su presencia en línea o mejorar su estrategia de ventas en línea.',
    // imgServices:,
    services:'Aquí tienes algunos puntos positivos del por qué es necesario contratar un servicio de comercio electrónico:',
    title1:'DESARROLLO DE TIENDAS EN LÍNEA',
    p1:' En Generación Tech creamos y personalizamos tu tienda en línea para que se ajuste a tus necesidades y a la identidad de tu marca. Esto incluye la optimización de la interfaz de usuario y la experiencia de compra.',
    title2:'OPTIMIZACIÓN DE LA CONVERCIÓN',
    p2:'Nos enfocamos en mejorar la tasa de conversión, lo que significa que trabajar en la optimización de tu sitio web para convertir visitantes en clientes. Esto incluye mejoras en el proceso de compra, el diseño y la usabilidad.',
    title3:'EXPERIENCIA DE USUARIO OPTIMIZADA',
    p3: 'Nos enfocamos en crear una experiencia de usuario atractiva y fácil de usar en tu tienda en línea. Esto incluye la navegación, la búsqueda de productos y el proceso de pago.',
    title4:'INTEGRACIÓN CON SISTEMAS DE PAGO',
    p4:'Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para tu negocio. Esto implica identificar tus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.'
}
const Comercio=()=>{
    return (
        <View info={info}/>
    )
}

export default Comercio;