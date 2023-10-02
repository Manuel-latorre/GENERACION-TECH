import View from "../View/View";
import img from '../../assets/bg.gif'

const info={
    title: 'Marketing Digital',
    image: img,
    description: ' Nuestras soluciones en marketing digital involucran estrategias y tácticas en línea para promocionar productos o servicios. Esto incluye la planificación de campañas, la creación de contenido, la gestión de redes sociales, la publicidad en línea, el análisis de datos y la optimización. Nuestro objetivo es aumentar la visibilidad, atraer clientes potenciales y convertirlos en ventas, todo mientras se mide y se ajusta continuamente la estrategia para obtener resultados efectivos.',
    // imgServices:,
    services:'Contratar un servicio de marketing digital especializado puede ser beneficioso para una empresa en muchas formas. Aquí tienes algunos puntos positivos que pueden ayudarte a tomar la decisión de contratar dicho servicio:',
    title1:'ENFOQUE ESTRATÉGICO',
    p1:'Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para tu negocio. Esto implica identificar tus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.',
    title2:'MAXIMIZACIÓN DE RECURSOS',
    p2:'En Generación Tech contamos con acceso a herramientas y software de marketing de última generación que pueden ser costosos si se adquieren de manera individual. Esto facilita la implementación de estrategias avanzadas.',
    title3:'MEDICIÓN Y ANÁLISIS',
    p3: 'En Generación Tech utilizamos herramientas avanzadas de seguimiento y análisis para evaluar el rendimiento de las campañas. Esto permite ajustar y optimizar estrategias en tiempo real para obtener mejores resultados',
    title4:'RESULTADOS MEDÍBLES',
    p4:'El marketing digital permite un seguimiento preciso de los resultados y el retorno de la inversión (ROI). Desde Generación Tech proporcionamos  informes detallados y métricas para evaluar el rendimiento de tus campañas.'
}
const Marketing=()=>{
    return (
        <>
        <View info={info} />
        </>
    )
}

export default Marketing;