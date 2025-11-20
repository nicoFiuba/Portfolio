import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
    const anioActual = new Date().getFullYear(); // Para que el año se actualice solo

    return (
        <footer className="footer" id="contacto">
            <div className="footer-contenido">
                {/* Copyright dinámico */}
                <p>&copy; {anioActual} Nicolás Feldman. Todos los derechos reservados.</p>

                <div className="footer-links">
                    {/* Tu LinkedIn Real */}
                    <a href="https://www.linkedin.com/in/nicol%C3%A1s-feldman/" target="_blank" rel="noreferrer" aria-label="Linkedin"> <FaLinkedin size={24}/> LinkedIn</a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="Github"> <FaGithub size={24}/> GitHub </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;