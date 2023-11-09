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
    p4:'El marketing digital permite un seguimiento preciso de los resultados y el retorno de la inversión (ROI). Desde Generación Tech proporcionamos  informes detallados y métricas para evaluar el rendimiento de tus campañas.',
    solution1:'GESTIÓN DE REDES SOCIALES Y GENERACIÓN DE CONTENIDO',
    solText1:'Nuestro equipo de gestión de redes sociales y generación de contenido trabaja para construir y mantener una presencia efectiva en línea. Nuestro enfoque en la comunicación, el branding, el marketing y el análisis pretende contribuir al éxito y la visibilidad de su empresa en el mundo digital, donde la interacción con la audiencia es clave para el crecimiento.',
    //img1:,
    solution2:'PUBLICIDAD DE MOTORES DE BUSQUEDA (SEO)',
    solText2:'Integramos un equipo de SEO para maximizar la visibilidad en línea, atraer tráfico de calidad y mantener la competitividad en el mundo digital. Nuestro enfoque en la optimización de motores de búsqueda apunta al éxito a largo plazo de su empresa en línea y  para ello contribuimos directamente con la adquisición y retención de clientes mediante la aplicación de estrategias planificadas y a medida.',
    //img2:,
    solution3:'EMAIL MARKETING',
    solText3:'Contamos con un equipo de e-mail marketing que  juega un papel relevante en el mantenimiento de relaciones con los usuarios, la adquisición de nuevos clientes y la generación de ingresos. Nuestro equipo trabaja en el diseño, ejecución y optimización de campañas de email marketing efectivas, claves para el éxito en el marketing digital, ya que permite llegar a la audiencia de manera personalizada y medible.',
    //img3:,
    solution4:'MARKETING DE CONTENIDO',
    solText4:'Nuestro equipo de marketing digital desarrolla contenido relevante para atraer audiencia, planifica y ejecuta estrategias de distribución de contenido, monitoriza el rendimiento del contenido mediante herramientas analíticas, identifica áreas de mejora y ajusta las estrategias en función de los datos recopilados para lograr el mejor rendimiento y alcance. Nuestro equipo de profesionales se destaca por la capacitación constante, la innovación y la mejora continua, pilares fundamentales para el éxito en el entorno digital altamente competitivo de hoy.',
    //img4:,
    solution5:'OPTIMIZACIÓN DE MOTORES DE BUSQUEDA (SEM)',
    solText5:'Nuestro equipo de optimización de motores de búsqueda está preparado para maximizar la visibilidad en línea, atraer tráfico calificado y cumplir con los objetivos de marketing en un mundo digital altamente competitivo. Nuestra experiencia en la gestión de campañas publicitarias en línea marca la diferencia en el rendimiento y el éxito de su empresa en línea.',
    //img5:,
    preguntas: 'PREGUNTAS FRECUENTES',
    q1: '¿Qué beneficios tiene el marketing digital para mi empresa?',
    a1: 'El marketing digital te permite aumentar la visibilidad y el alcance de tu marca, generar interacción y atraer nuevos clientes, crear una ventaja competitiva frente a tu competencia, determinar e identificar tu público objetivo y medir el éxito y el retorno de tu inversión.',
    // ------
    q2: '¿Qué estrategia de marketing digital es la más adecuada para mi empresa?',
    a2: 'Depende de los objetivos, el presupuesto y el sector de tu empresa. En Generación Tech podemos ayudarte a diseñar un plan de medios y una propuesta personalizada que se adapte a tus necesidades y expectativas, utilizando las herramientas y los canales más convenientes.',
    // ------
    q3: '¿Qué beneficios obtengo al contratar Generación Tech?',
    a3: 'Al contratar Generación Tech, obtienes la garantía de un trabajo profesional, eficiente y de calidad. Además, cuentas con el apoyo y la experiencia de un equipo multidisciplinario que te asesora y te acompaña en todo el proceso.', 
    // ------
    q4: '¿Qué tipo de contenido debo generar para mi página web y mis redes sociales?',
    a4: ' El contenido que generes debe ser relevante, original, atractivo y de valor para tu audiencia. Debe responder a sus intereses, necesidades y problemas, y ofrecerles soluciones. También debe estar optimizado para los motores de búsqueda (SEO) y adaptado al formato y al tono de cada medio.',
}
const Marketing=()=>{
    return (
        <>
        <View info={info} />
        </>
    )
}

export default Marketing;