import './Footer.css';

function Footer() {
    const anioActual = new Date().getFullYear(); // Para que el año se actualice solo

    return (
        <footer className="footer">
            <div className="footer-contenido">

                {/* Copyright dinámico */}
                <p>&copy; {anioActual} Nicolás Feldman. Todos los derechos reservados.</p>

                <div className="footer-links">
                    {/* Tu LinkedIn Real */}
                    <a
                        href="https://www.linkedin.com/in/nicol%C3%A1s-feldman/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    {/* GitHub (Lo dejamos genérico hasta que tengas el tuyo listo) */}
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;