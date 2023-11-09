import View from "../View/View";
import img from '../../assets/bg.gif'
const info={
    title: 'Desarrollo de Software',
    image: img,
    description: 'Generación Tech es mucho mas que una Empresa de desarrollos y servicios al cliente. Desde nuestros inicios postulamos que "Nuestro foco es la solución",  para ello, convocamos a un equipo de profesionales expertos en disciplinas especificas para cada necesidad del nuevo ecosistema digital, contamos con jóvenes talentos certificados y titulados en tecnologías disruptivas y de alto impacto, profesionales que saben lo que hacen y entienden el mundo del los negocios en linea, dispuestos a construir soluciones tecnológicas a medida. Llevamos a cabo nuestros servicios mediante un proceso que comienza con la comprensión de las necesidades del cliente y la planificación detallada del proyecto. Luego diseñamos, desarrollamos y probamos el software, lo implementamos y proporcionamos soporte continuo. Mantenemos una comunicación constante con el cliente, documentamos el sistema y buscamos la retroalimentación para mejorar nuestros servicios y garantizar soluciones de alta calidad.',
    // imgServices:,
    services:'¿ Por qué diseñar su sitio web con nosotros?',
    title1:'PERSONALIZACIÓN TOTAL',
    p1:'La programación propia permite una personalización completa del sitio web. Le permite  diseñar y desarrollar cada aspecto del sitio según sus necesidades y requisitos específicos, lo que resulta en un sitio web único y adaptado a su visión.',
    title2:'ESCALABILIDAD',
    p2:'Desarrollar un sitio web con programación propia le brinda la flexibilidad necesaria para escalar su sitio a medida que crece su negocio o proyecto. Puede agregar nuevas funciones y características de manera más eficiente sin depender de plataformas pre-construidas.',
    title3:'PROPIEDAD TOTAL',
    p3: 'Cuando creas su sitio web con programación propia, tiene la propiedad total de todo el código y los activos relacionados. Esto significa que no está  limitado por restricciones de licencia y puede  hacer cambios o mejoras en cualquier momento.',
    title4:'MENOS DEPENDENCIA',
    p4:'No está atado a las actualizaciones o cambios de políticas de terceros, como ocurre con las plataformas de gestión de contenido (CMS) pre-construidas. Esto le brinda un mayor control sobre la evolución de su sitio.',
    solution1:'Desarrollo y diseños de sitios web a Medida / Landing Pages',
    solText1:'En el panorama actual de los negocios en linea contar con un sitio web es esencial para mostrar su negocio o proyecto, este canal permite contar con presencia permanente en línea, ampliar  su alcance a nivel global y proporcionar una plataforma para mostrar sus productos o  servicios las 24 horas del día, los 7 días de la semana, mejorando la productividad de su empresa y facilitando la comunicación con clientes potenciales.',
    //img1:,
    solution2:'Diseño de Experiencia e Interfaz de Usuario (UX/UI)',
    solText2:'El diseño de experiencia de usuario (UX) y el diseño de interfaz de usuario (UI) son esenciales para crear productos digitales exitosos y atractivos. Estos diseños influyen en la satisfacción del usuario, la retención, la conversión y la percepción de la marca. Invertir en UX/UI no solo mejora la experiencia del usuario, sino que también puede tener un impacto significativo en el rendimiento y el éxito de un producto digital.',
    //img2:,
    solution3:'MANTENIMIENTO Y SOPORTE DE SOFWARE',
    solText3:'El mantenimiento y soporte de software es fundamental para asegurar que las aplicaciones y sistemas digitales sigan siendo efectivos, seguros y relevantes con el tiempo. Estas prácticas son esenciales para mantener la protección de su información, evitando el acceso a sus datos por parte de usuarios no autorizados. Ignorar el mantenimiento y el soporte de su software puede resultar altamente costoso, exponiéndose ademas a la perdida de datos propios o de sus clientes y a la vulnerabilidad de su información.',
    //img3:,
    solution4:'ALOJAMIENTO DE WEB HOSTING',
    solText4:'Un equipo de alojamiento web hosting eficiente es esencial para proporcionar un ambiente en línea seguro, de alto rendimiento y disponible en todo momento. Su experiencia y dedicación contribuyen directamente al éxito y la satisfacción de los usuarios de los sitios web y aplicaciones en línea, lo que es fundamental en un mundo digital altamente competitivo.',
    //img4:,
    solution5:'WEBSITE TESTING',
    solText5:' “El proceso que consiste en todas las actividades del ciclo de vida, tanto estáticas como dinámicas relacionadas con la planificación, preparación y evaluación de productos de software y productos relacionados con el trabajo para determinar que cumplen los requisitos especificados, para demostrar que son aptos para el propósito y para detectar defectos”.  (International Software Testing Qualifications Board). Nuestro equipo de testeo aborda estas prácticas a partir del reconocimiento de que las pruebas buscan encontrar fallas de diseños o construcción, evaluarlas e informarlas con el objeto de que el producto final brinde a los usuarios interacciones amigables, accesibles,  dinámicas  y  seguras priorizando la experiencia de usuario.',
    //img5:,
    preguntas: "Preguntas Frecuentes",
    q1:"¿Qué tipo de página web necesito? ",
    a1:"Depende del propósito, el público y el presupuesto de tu proyecto web. Puedes optar por un diseño web a medida, que implica una programación desde cero, o por un CMS, que es un sistema de gestión de contenidos ya existente, como WordPress.",
    q2:"¿Cómo se determina el costo del proyecto web? ",
    a2:"El costo se basa en la complejidad, el tiempo y los recursos necesarios para desarrollar la página web. También se consideran los servicios adicionales que se requieren, como el alojamiento, el dominio, el SEO, el SEM, etc.",
    q3:"¿Qué beneficios obtengo al contratar Generación Tech?",
    a3:" Al contratar Generación Tech, obtienes la garantía de un trabajo profesional, eficiente y de calidad. Además, cuentas con el apoyo y la experiencia de un equipo multidisciplinario que te asesora y te acompaña en todo el proceso.",
    q4:"¿Cómo puedo medir el éxito de mi comercio electrónico y mis estrategias de marketing digital?",
    a4:" Puedes medir el éxito de tu comercio electrónico y tus estrategias de marketing digital mediante indicadores o métricas que te permitan evaluar el rendimiento y el retorno de la inversión (ROI) de tus acciones. En Generación Tech trabajamos con herramientas avanzadas que nos permiten medir todo tipo de métrica para evaluar el comportamiento de los usuarios en el sitio.",
}
const Desarrollo = () => {
    return (
        <View info={info}/>
    )
};

export default Desarrollo;
