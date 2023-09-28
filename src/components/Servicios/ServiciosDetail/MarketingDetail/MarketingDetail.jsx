import React from 'react';
import './MarketingDetail.css'

const MarketingDetail = () => {
  return (
    <div className='max-container'>
      <img src="" alt="(MARKETING IMAGEN)" />
      <p className="intro-text">
      Nuestras soluciones en marketing digital involucran estrategias y tácticas en línea para promocionar productos o servicios. Esto incluye la planificación de campañas, la creación de contenido, la gestión de redes sociales, la publicidad en línea, el análisis de datos y la optimización.
Nuestro objetivo es aumentar la visibilidad, atraer clientes potenciales y convertirlos en ventas, todo mientras se mide y se ajusta continuamente la estrategia para obtener resultados efectivos.
      </p>

      <h2 className="title">NUESTRAS SOLUCIONES</h2>

      <p className='intro-text'>Contratar un servicio de marketing digital especializado puede ser beneficioso para una empresa en muchas formas. Aquí tienes algunos puntos positivos que pueden ayudarte a tomar la decisión de contratar dicho servicio:</p>
      <div>
        <div className='ventajas-container'>
          <div className='ventaja'>
            <h3>ENFOQUE ESTRATÉGICO</h3>
            <p>Un servicio de marketing digital se centrará en desarrollar una estrategia sólida y personalizada para tu negocio. Esto implica identificar tus objetivos, público objetivo y competidores para crear una estrategia que maximice los resultados.</p>
          </div>
          <div className='ventaja'>
            <h3>MAXIMIZACIÓN DE RECURSOS</h3>
            <p>En Generación Tech contamos con acceso a herramientas y software de marketing de última generación que pueden ser costosos si se adquieren de manera individual. Esto facilita la implementación de estrategias avanzadas.</p>
          </div>
        </div>
        <div className='ventajas-container'>
          <div className='ventaja'>
            <h3>MEDICIÓN Y ANÁLISIS</h3>
            <p>En Generación Tech utilizamos herramientas avanzadas de seguimiento y análisis para evaluar el rendimiento de las campañas. Esto permite ajustar y optimizar estrategias en tiempo real para obtener mejores resultados.</p>
          </div>
          <div className='ventaja'>
            <h3>RESULTADOS MEDIBLES</h3>
            <p>El marketing digital permite un seguimiento preciso de los resultados y el retorno de la inversión (ROI). Desde Generación Tech proporcionamos  informes detallados y métricas para evaluar el rendimiento de tus campañas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingDetail;
