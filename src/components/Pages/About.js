export const About = () => {
    
    return (
        <div className="container shadow mt-3">
            <img src="/header-sobre-mi.jpg" alt="imagen-sobre-nosotros" className="img-responsive shadow-lg mb-5 bg-body rounded" width="100%" />
            <div className="text-center m-auto">
                <h1 className="display-4 mt-3 mb-3">Natalia Gema Godoy</h1>
            </div>
            <p className="fs-5 text-center ps-4 pe-4">
                Mi nombre es Natalia Gema Godoy, tengo 41 años. Vivo en la Ciudad de San Juan. 
                Mi vida siempre estuvo ligada a ayudar a los demás. 
                Desde pequeña tuve facilidad para ponerme en los zapatos ajenos.
            </p>
            <section className="row row-cols-2 text-center p-5">
                <div className="col p-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <img src="/nataliagodoy.jpg" alt="natalia-godoy" className="img-responsive mt-5" width="80%"/>
                    <figure className="figure-end">
                        <blockquote className="blockquote">
                            <p>El Alma Descansa En Paz Con Nuestras Urnas.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Natalia Gema Godoy
                            <cite></cite>
                        </figcaption>
                    </figure>
                </div>
                <div className="col">
                    <div className="row mt-3 mb-4 ps-4">
                        <p className="text fs-4 fw-light">
                            He trabajado para muchas empresas y en todas sentía lo mismo. 
                            No podía dar todo de mí y me dolía no poder atender a mís clientes como yo deseaba.
                            Un buen día me cansé y lo dejé todo. Ese día volví a nacer.
                        </p>
                    </div>
                    <div className="row ps-4">
                        <h2 className="display-6" style={styles}>Mi Esencia</h2>
                        <p className="text fs-4 fw-light">
                            Mi mayor hobbie es mi trabajo, pero más que todo disfruto de nuestros clientes. 
                            Acompañarlos e intentar comprender sus necesidades e inquietudes, sabiendo que a veces, sentirse escuchados 
                            les ayuda más que cualquier otra cosa.
                        </p>
                    </div>
                    <div className="row ps-4">
                        <h2 className="display-6" style={styles}>Nuestra Vision</h2>
                        <p className="text fs-4 fw-light">
                            Nuestra Vision está dedicada a la confección de que cada pieza sea única como cada alma que descansará en ella. 
                        </p>
                    </div>
                </div>
            </section>
            <div className="p-5">
                <h2 className="display-6" style={styles}>Reflexión</h2>
                <p className="text fs-4 fw-light pb-4">
                    “Todos tenemos un propósito, cada semilla, cada ave, animal, célula, y estrella tiene un propósito por el cual existen”.
                    La misión no sólo está relacionada con nuestras habilidades, y con lo que nos gusta, pues no vamos a ser “como flor” y caernos 
                    a mentiras, en la vida en ciertas ocasiones experimentamos circunstancias difíciles, tristezas, decepciones, accidentes, fracasos etc. 
                    Cosas que nos desagradan pero que debemos aceptar y superar para evolucionar, crecer, pasar la prueba que la vida nos está colocando 
                    porque no es otra cosa que una preparación que contribuye a tu razón de estar aquí.  
                </p>
            </div>
        </div>
    )
}

const styles = {
    color: '#de509f'
}