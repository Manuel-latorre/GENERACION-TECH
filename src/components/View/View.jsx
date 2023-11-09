import './View.css';

const View = ({ info }) => {

    return (
        <div className="container">
            <div className='divej'>
                <h1>Nuestros Servicios</h1>
            </div>

            {info.title !== '¿Quienes Somos?' &&
                <>
                    <h2 style={{ 'marginTop': '3rem', 'color': '#00fff78b' }}>{info.title}</h2>
                    <div className='containerSolution'>
                        <div className="flip-card">
                            <div className='flip-card-inner'>
                                <div className='flip-card-front' id='df'>

                                </div>
                                <div className='flip-card-back'>
                                    <p>{info.solText1}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className='flip-card-inner'>
                                <div className='flip-card-front' id='uxui'>

                                </div>
                                <div className='flip-card-back'>
                                    <p>{info.solText2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className='flip-card-inner'>
                                <div className='flip-card-front' id='support'>

                                </div>
                                <div className='flip-card-back'>
                                    <p>{info.solText3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className='flip-card-inner'>
                                <div className='flip-card-front' id='host'>

                                </div>
                                <div className='flip-card-back'>
                                    <p>{info.solText4}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className='flip-card-inner'>
                                <div className='flip-card-front' id='test'>

                                </div>
                                <div className='flip-card-back'>
                                    <p>{info.solText5}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </>
            }

            {/* <img src={info.image} alt="" style={{width:'98vw', height:'75vh'}}/> */}
            <div className='description1'>
                <p style={{ color: 'white' }}>{info.description}</p>
            </div>
            {
                info.title === '¿Quienes Somos?'
                    ?
                    <div className='areaContain'>
                        <h3 className='areas'>Áreas</h3>
                    </div>

                    : <div className="description2">
                        {/* imagen con los servicios como en el ejemplo */}
                        <p className='description2P'>{info.services}</p>
                    </div>
            }

            <div className='div4p'>
                <div className='divp'>
                    <h3>{info.title1}</h3>
                    <p>{info.p1}</p>
                </div>
                <div className='divp'>
                    <h3>{info.title2}</h3>
                    <p>{info.p2}</p>
                </div>
                <div className='divp'>
                    <h3>{info.title3}</h3>
                    <p>{info.p3}</p>
                </div>
                <div className='divp'>
                    <h3>{info.title4}</h3>
                    <p>{info.p4}</p>
                </div>
            </div>

            <div className='preguntasContainer'>

                <p style={{color: '#00fff7', margin: 25, textDecoration: 'none', fontSize: 50}}>{info.preguntas}</p>

                <div className='preguntas'>
                    <div className='pregunta'>
                        <h3 style={{border: 'none', color: '#00fff7'}}>{info.q1}</h3>
                        <p>{info.a1}</p>
                    </div>
                    <div className='pregunta'>
                        <h3 style={{border: 'none', color: '#00fff7'}}>{info.q2}</h3>
                        <p>{info.a2}</p>
                    </div>
                    <div className='pregunta'>
                        <h3 style={{border: 'none', color: '#00fff7'}}>{info.q3}</h3>
                        <p>{info.a3}</p>
                    </div>
                    <div className='pregunta'>
                        <h3 style={{border: 'none', color: '#00fff7'}}>{info.q4}</h3>
                        <p>{info.a4}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;