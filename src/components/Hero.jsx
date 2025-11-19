import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1> Nicolas <span className="highlight"> Feldman</span></h1>
                <h2>Director Tecnico de Futbol y estudiante de Ingenieria Informatica</h2>
                <p className="bio">Uniendo la pasión por la táctica con la potencia de los datos. Estudiante de Ingeniería en Informática (UBA) y DT</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/nicol%C3%A1s-feldman/" target="_blank" rel="noreferrer" className="btn btn-secondary">Linkedin</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
