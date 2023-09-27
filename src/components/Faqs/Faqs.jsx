import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faqs.css'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
      
    <div className='container-accordion'>
    <div className='accordion'>
      <Accordion style={{backgroundColor:'#222222', borderTopLeftRadius:25, borderTopRightRadius:25}}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        style={{ borderRadius:35, height:100}}
        expandIcon={<ExpandMoreIcon sx={{fontSize:40}}/>}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        >
          <p style={{fontSize:20, marginLeft: 10}}>¿Cómo puedo ponerme en contacto con ustedes?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{marginLeft: 10}}>Podes contactarnos completando el formulario desde la sección de “contacto” o simplemente tocar en el botón de chat de nuestra página para hablar con un representante en tiempo real.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#222222'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
           style={{ height:100}}
           expandIcon={<ExpandMoreIcon sx={{fontSize:40}}/>}
           aria-controls="panel2bh-content"
           id="panel2bh-header"
           >
          <p style={{fontSize:20, marginLeft: 10}}>¿Cómo elijo mi servicio ideal?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{marginLeft: 10}}>Podes ver la descripción de cada servicio en la sección “servicios”, si no sabes cual es el mejor para tu empresa, envianos un email desde la sección de “contacto”o presiona el botón de chat para hablar con uno de nuestros representantes.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#222222'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
           style={{ height:100}}
           expandIcon={<ExpandMoreIcon sx={{fontSize:40}}/>}
           aria-controls="panel3bh-content"
           id="panel3bh-header"
           >
          <p style={{fontSize:20, marginLeft: 10}}>¿Puedo tener un pack personalizado?</p>
          
        </AccordionSummary>
        <AccordionDetails>
          <p style={{marginLeft: 10}}>Si, contactanos y te asesoramos para armar un pack personalizado según tus necesidades.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'#222222'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
           style={{ height:100}}
           expandIcon={<ExpandMoreIcon sx={{fontSize:40}}/>}
           aria-controls="panel4bh-content"
           id="panel4bh-header"
           >
          <p style={{fontSize:20, marginLeft: 10}}>¿En cuanto tiempo tendré listo mi proyecto?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{marginLeft: 10}}>Depende. Según el servicio elegido, la complejidad del proyecto, y las funcionalidades se va a estipular un tiempo de entrega.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{backgroundColor:'#222222', borderBottomLeftRadius: 25, borderBottomRightRadius:25}} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
           style={{ borderRadius:35, height:100}}
           expandIcon={<ExpandMoreIcon sx={{fontSize:40}}/>}
           aria-controls="panel5bh-content"
           id="panel5bh-header"
           >
          <p style={{fontSize:20, marginLeft: 10}}>¿Que métodos de pago aceptan?</p>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{marginLeft: 10}}>-----------------</p>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>
      
  );
}
