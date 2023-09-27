import View from "../View/View";
import img from '../../assets/bg.gif'
const info={
    title: 'Desarrollo de Software',
    image: img,
    description: 'Contamos con un equipo de profesionales desarrolladores formados y comprometidos dispuestos a construir software a medida. Llevamos a cabo nuestros servicios mediante un proceso que comienza con la comprensión de las necesidades del cliente y la planificación detallada del proyecto. Luego diseñamos, desarrollamos y probamos el software, lo implementamos y proporcionamos soporte continuo. Mantenemos una comunicación constante con el cliente, documentamos el sistema y buscamos la retroalimentación para mejorar nuestros servicios y garantizar soluciones de alta calidad.',
    // imgServices:,
    services:'¿ Por qué diseñar el sitio web con nuestro equipo de programación?',
    title1:'PERSONALIZACIÓN TOTAL',
    p1:'La programación propia permite una personalización completa del sitio web. Puedes diseñar y desarrollar cada aspecto del sitio según tus necesidades y requisitos específicos, lo que resulta en un sitio web único y adaptado a tu visión.',
    title2:'ESCALABILIDAD',
    p2:'Desarrollar un sitio web con programación propia te brinda la flexibilidad necesaria para escalar tu sitio a medida que crece tu negocio o proyecto. Puedes agregar nuevas funciones y características de manera más eficiente sin depender de plataformas preconstruidas.',
    title3:'PROPIEDAD TOTAL',
    p3: 'Cuando creas tu sitio web con programación propia, tienes la propiedad total de todo el código y los activos relacionados. Esto significa que no estás limitado por restricciones de licencia y puedes hacer cambios o mejoras en cualquier momento.',
    title4:'MENOS DEPENDENCIA',
    p4:'No estás atado a las actualizaciones o cambios de políticas de terceros, como ocurre con las plataformas de gestión de contenido (CMS) preconstruidas. Esto te brinda un mayor control sobre la evolución de tu sitio.'
}
const Desarrollo = () => {
    return (
        <View info={info}/>
    )
};

export default Desarrollo;
