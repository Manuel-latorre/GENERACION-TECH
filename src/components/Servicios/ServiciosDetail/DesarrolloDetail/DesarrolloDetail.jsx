import React from 'react';
import './DesarrolloDetail.css'

const DesarrolloDetail = () => {
  return (
    <div className='max-container'>
      <img src="" alt="(DESARROLLO IMAGEN)" />
      <p className="intro-text">
        Contamos con un equipo de profesionales desarrolladores formados y
        comprometidos dispuestos a construir software a medida. Llevamos a cabo
        nuestros servicios mediante un proceso que comienza con la comprensión
        de las necesidades del cliente y la planificación detallada del
        proyecto. Luego diseñamos, desarrollamos y probamos el software, lo
        implementamos y proporcionamos soporte continuo. Mantenemos una
        comunicación constante con el cliente, documentamos el sistema y
        buscamos la retroalimentación para mejorar nuestros servicios y
        garantizar soluciones de alta calidad.
      </p>

      <h2 className="title">NUESTRAS SOLUCIONES</h2>

      <p>¿Por qué diseñar el sitio web con nuestro equipo de programación?</p>
      <div>
        <div className='ventajas-container'>
          <div className='ventaja'>
            <h3>PERSONALIZACION TOTAL</h3>
            <p>La programación propia permite una personalización completa del sitio web. Puedes diseñar y desarrollar cada aspecto del sitio según tus necesidades y requisitos específicos, lo que resulta en un sitio web único y adaptado a tu visión.</p>
          </div>
          <div className='ventaja'>
            <h3>ESCALABILIDAD</h3>
            <p>Desarrollar un sitio web con programación propia te brinda la flexibilidad necesaria para escalar tu sitio a medida que crece tu negocio o proyecto. Puedes agregar nuevas funciones y características de manera más eficiente sin depender de plataformas preconstruidas.</p>
          </div>
        </div>
        <div className='ventajas-container'>
          <div className='ventaja'>
            <h3>PROPIEDAD TOTAL</h3>
            <p>Cuando creas tu sitio web con programación propia, tienes la propiedad total de todo el código y los activos relacionados. Esto significa que no estás limitado por restricciones de licencia y puedes hacer cambios o mejoras en cualquier momento.</p>
          </div>
          <div className='ventaja'>
            <h3>MENOS DEPENDENCIA</h3>
            <p>No estás atado a las actualizaciones o cambios de políticas de terceros, como ocurre con las plataformas de gestión de contenido (CMS) preconstruidas. Esto te brinda un mayor control sobre la evolución de tu sitio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesarrolloDetail;
