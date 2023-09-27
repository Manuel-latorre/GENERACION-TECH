import View from "../View/View";
import img from '../../assets/bg.gif'
const info={
    title: '¿Quienes Somos?',
    image: img,
    description: 'Somos un apasionado grupo de jóvenes amantes de la tecnología que ha unido fuerzas para impulsar a las empresas hacia el futuro digital. Nuestro equipo vibra con la emoción de la innovación y está aquí para transformar su visión en realidad a través del desarrollo de software y la gestión de canales digitales. En Generación Tech, no solo hablamos el lenguaje de la tecnología, ¡lo vivimos y lo respiramos! Estamos encantados de trabajar con empresas que buscan adaptarse y prosperar en el mundo digital en constante cambio. Nuestra misión es llevar la creatividad y la eficiencia a cada proyecto que emprendemos.',
    title1:'TECNOLOGÍA',
    p1:'Nuestra área de Tecnología representa la esencia fundacional de Generación Tech, aquí diseñamos, creamos, testeamos y mantenemos software para sitios web y aplicaciones móviles con perspectivas de mercados. Implementamos metodologías ágiles para garantizar la productividad eficiente, realizando revisiones constantes con nuestros clientes mediante la presentación de productos mínimos viables, asegurando así, entregas a termino, la calidad de nuestros proyectos y la conformidad de quienes confían en nuestros desarrollos a medida.',
    title2:'INVESTIGACIÓN',
    p2:'Nuestra área de Investigación es la piedra fundamental de cada proyecto, desde aquí evaluamos oportunidades de negocios, tratando de descubrir las necesidades del mercado, para luego ejecutar propuestas con bases sólidas a partir de datos relevados por nuestros profesionales especialistas en análisis de mercados y auditorias digitales.',
    title3:'PLANIFICACIÓN',
    p3: 'La planificación es vital para el desarrollo de proyectos específicos, medibles, alcanzables, relevantes y temporales. Siendo esta área la que traza objetivos, gestiona recursos, controla tiempos y costos, mitiga riesgos y mejora la calidad de nuestros productos y servicios. Nuestro equipo facilita la comunicación, permite el seguimiento y aumenta la satisfacción de nuestros clientes. Para Generación Tech una buena planificación es la clave del éxito.',
    title4:'DESARROLLO',
    p4:'La importancia de nuestros desarrollos radica en la capacidad para mantenernos competitivos y relevantes en un entorno en constante evolución. Nuestros desarrollos permiten a las empresas adaptarse a las necesidades cambiantes de sus clientes, optimizar sus operaciones internas, introducir nuevos productos y servicios, y explorar oportunidades de crecimiento. Para nosotros, los desarrollos empresariales son fundamentales para la supervivencia y el éxito a largo plazo de una empresa en un mercado en constante cambio.'
}
const QuienesSomos = () => {
    return (
        

            <View info={info}/>
        
    )
};

export default QuienesSomos;
