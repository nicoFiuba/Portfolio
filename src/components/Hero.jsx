import './Hero.css';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa'; // <--- Agregamos ícono de descarga
import fotoPerfil from '../assets/perfil.jpg';

function Hero() {
    return (
        <section className="hero" id="inicio">
            <div className="hero-content">

                <div className="hero-text">
                    <h1>Nicolás <span className="highlight">Feldman</span></h1>
                    <h2>Director Técnico de Fútbol y estudiante de Ingeniería Informática</h2>
                    <p className="bio">
                        Uniendo la pasión por la táctica con la potencia de los datos.
                        Estudiante de Ingeniería en Informática (UBA) y DT con Licencia A.
                    </p>

                    <div className="social-links">
                        {/* Botón CV (Rojo - Principal) */}
                        <a
                            href="/CV_Feldman.pdf"
                            download="CV_Nicolas Feldman.pdf"
                            className="btn btn-primary"
                        >
                            <FaFileDownload size={20} />
                            Descargar CV
                        </a>

                        {/* Botón LinkedIn (Borde Verde - Secundario) */}
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

                <div className="hero-image-container">
                    <img src={fotoPerfil} alt="Nicolás Feldman" className="hero-img" />
                </div>

            </div>
        </section>
    );
}

export default Hero;