import './Hero.css';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import fotoPerfil from '../assets/perfil.jpg';

function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">

                {/* Columna Texto */}
                <div className="hero-text">
                    <h1>Nicolás <span className="highlight">Feldman</span></h1>
                    <h2>Director Técnico de Fútbol y futuro Ingeniero Informático</h2>

                    {/* --- BIO LIMPIA (Sin negritas) --- */}
                    <p className="bio">
                        DT con Licencia A y futuro Ingeniero Informático (UBA).
                        <br />
                        Mi objetivo es profesionalizar el fútbol a través de la tecnología,
                        uniendo la visión táctica del campo con la precisión del código.
                    </p>
                    {/* -------------------------------- */}

                    <div className="social-links">
                        <a
                            href="/CV_Feldman.pdf"
                            download="CV_Nicolas Feldman.pdf"
                            className="btn btn-primary"
                        >
                            <FaFileDownload size={20} />
                            Descargar CV
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nicol%C3%A1s-feldman/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary"
                        >
                            <FaLinkedin size={20} />
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Columna Foto */}
                <div className="hero-image-container">
                    <img src={fotoPerfil} alt="Nicolás Feldman" className="hero-img" />
                </div>

            </div>
        </section>
    );
}

export default Hero;