import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Servicios.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar5.png'




const Servicios = () => {
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();
    const loader = (event) => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
            navigate(`/${event.target.name}`)
            window.scrollTo(0, 0)
        }, 1000);
    };
    return (
        <div id='servicios' className='services'>

            <div className='container-servicios-mobile'>
                <>
                    <p style={{ fontSize: 30, fontWeight: '400', textAlign: 'center', marginBottom: 80, marginTop: 50 }}>SERVICIOS</p>
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        // pagination={true}
                        // navigation={true}
                        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="cardServicio" id='mobile'>
                                <p className='tituloCard' id='titleMobile'>DESARROLLO DE SOFTWARE</p>
                                <hr />
                                <li className='li'>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Desarrollo y diseños de sitios web a Medida / Landing Pages</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Mantenimiento y Soporte de Software</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Alojamiento Web hosting</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Website Testing</p>
                                    </div>
                                </li>

                                <button name='desarrollo' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Conocé más
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardServicio" id='mobile'>
                                <p className='tituloCard' id='titleMobile'>MARKETING <br /> DIGITAL</p>
                                <hr />
                                <li className='li'>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Gestión de Redes Sociales y generación de contenido</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Publicidad de motores de búsqueda (SEO)</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Email Marketing</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Marketing de contenido</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Optimización de motores de búsqueda (SEM)</p>
                                    </div>
                                </li>
                                <button name='marketing' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Conocé más
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="cardServicio" id='mobile'>
                                <p className='tituloCard' id='titleMobile'>COMERCIO <br /> ELECTRONICO</p>
                                <hr />
                                <li className='li'>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Web</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Social Media</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Métricas y KPI´s</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de ventas y conversiones</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                        <CheckCircleIcon sx={{ fontSize: 30 }} />
                                        <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de comportamiento de cliente</p>
                                    </div>
                                </li>
                                <button onClick={loader} className='btnConoceMas' id='btnConoceMasMobile' name='comercio'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Conocé más
                                </button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
            <div className='container-servicios-web'>
                <>
                    <p style={{ fontSize: 30, fontWeight: '400', textAlign: 'center', marginBottom: 80, marginTop: 50 }}>SERVICIOS</p>

                    <div className='cardsServicios'>

                        <div className="cardServicio">
                            <p className='tituloCard'>DESARROLLO DE SOFTWARE</p>
                            <hr />
                            <li className='li'>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Desarrollo y diseños de sitios web a Medida / Landing Pages</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Diseño de Experiencia e Interfaz de Usuario (UX/UI)</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Mantenimiento y Soporte de Software</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Alojamiento Web hosting</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 7, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Website Testing</p>
                                </div>
                            </li>

                            <button name='desarrollo' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </button>
                        </div>

                        <div className="cardServicio">
                            <p className='tituloCard'>MARKETING <br /> DIGITAL</p>
                            <hr />
                            <li className='li'>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Gestión de Redes Sociales y generación de contenido</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlignLast: 'start', textAlign: 'start', fontSize: 14 }}>Publicidad de motores de búsqueda (SEO)</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Email Marketing</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}> Marketing de contenido</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Optimización de motores de búsqueda (SEM)</p>
                                </div>
                            </li>
                            <button name='marketing' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </button>
                        </div>

                        <div className="cardServicio">
                            <p className='tituloCard'>COMERCIO <br /> ELECTRONICO</p>
                            <hr />
                            <li className='li'>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Web</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Auditoría Social Media</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Métricas y KPI´s</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de ventas y conversiones</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                    <CheckCircleIcon sx={{ fontSize: 40 }} />
                                    <p style={{ marginLeft: 5, textAlign: 'start', fontSize: 14 }}>Análisis de comportamiento de cliente</p>
                                </div>
                            </li>
                            <button name='comercio' className='btnConoceMas' href='' id='btnConoceMasMobile' onClick={loader}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Conocé más
                            </button>

                        </div>
                    </div>

                </>
            </div>
            {showLoader && <Loader />}
        </div>
    )
}

export default Servicios
