const View=({info})=>{
    console.log(info.title);
    return(
        <div>
            <h1>{info.title}</h1>
            <img src={info.image} alt="" />
            <p>{info.description}</p>
            {
                info.title === '¿Quines Somos?' 
                ? <h3>Áreas</h3>
                : <div>
                    {/* imagen con los servicios como en el ejemplo */}
                    <p>{info.services}</p>
                </div>
            }
            
            <div>
                <div>
                    <h3>{info.title1}</h3>
                    <p>{info.p1}</p>
                </div>
                <div>
                    <h3>{info.title2}</h3>
                    <p>{info.p2}</p>
                </div>
                <div>
                    <h3>{info.title3}</h3>
                    <p>{info.p3}</p>
                </div>
                <div>
                    <h3>{info.title4}</h3>
                    <p>{info.p4}</p>
                </div>
            </div> 
        </div>
    )
}

export default View;