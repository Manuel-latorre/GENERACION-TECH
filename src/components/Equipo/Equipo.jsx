import React from 'react';
import { FreeMode, Pagination, Autoplay, EffectFlip, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar3 from './assets/avatar3.png'
import avatar4 from './assets/avatar4.png'
import avatar5 from './assets/avatar5.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Equipo.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';


export default function Equipo() {
  return (
    <>
    <div id='container-swiper-equipo-web'>
    <p id='titleEquipoWeb' style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginTop: 100}}>CONOCE NUESTRO <br/> EQUIPO</p>
      <div className='container-swiper-equipo'>
        <Swiper
          autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiperEquipoWeb"
        >
          <SwiperSlide id='swiperEquipo'>
          <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar5} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Damián Gomez</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href=""
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide id='swiperEquipo'>
          <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar3} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Paola Vera</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href=""
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide id='swiperEquipo'>
          <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar4} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Matias Hernandez</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    href="https://www.linkedin.com/in/matiashernandez00/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide id='swiperEquipo'>
          <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar5} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Guillermina Diaz</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/guillerminaadiaz/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide id='swiperEquipo'>
          <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar3} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Lucas Rius</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/lucas-rius/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide id='swiperEquipo'>
            <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar4} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Julian Rodriguez</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/julianigrodriguez/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide id='swiperEquipo'>
            <div className="card-equipo-container">
                <div className="imagen-equipo-container">
                  <img src={avatar3} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Manuel Latorre</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/manuel-latorre-936b72223/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>

    <div id='container-swiper-equipo-mobile'>
    <>
        <p id='titleEquipoMobile' style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginTop: 100}}>CONOCE NUESTRO <br/> EQUIPO</p>
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
        className="mySwiperEquipoMobile"
      >
        <SwiperSlide>
              <div className="card-equipo-container"  id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar5} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Damián Gomez</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href=""
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card-equipo-container" id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar4} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Paola Vera</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href=""
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card-equipo-container" id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar3} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Matias Hernandez</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/matiashernandez00/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card-equipo-container" id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar4} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Guillermina Diaz</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/guillerminaadiaz/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card-equipo-container" id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar3} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Lucas Rius</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/lucas-rius/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card-equipo-container" id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar3} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Julian Rodriguez</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/julianigrodriguez/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card-equipo-container" id='mobileEquipo'>
                <div className="imagen-equipo-container">
                  <img src={avatar5} alt="" className="avatar-equipo" />
                </div>
                <div className="text-card-equipo">
                  <h2 className="nombre-card-equipo">Manuel Latorre</h2>
                  <p className="text-card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, veritatis ratione voluptatum cupiditate magni
                    sapiente vel suscipit, quod dolor dolorum placeat facilis
                    rerum iure minus facere aspernatur consequuntur at vitae!
                  </p>
                  <a
                    
                    href="https://www.linkedin.com/in/manuel-latorre-936b72223/"
                    target="_blank"
                    className="button-linkedin-equipo"
                  >
                    {' '}
                    <LinkedInIcon style={{ marginRight: 5 }} /> LinkedIn
                  </a>
                </div>
              </div>
        </SwiperSlide>
      </Swiper>
    </> 
    </div>
    </>
  );
}
