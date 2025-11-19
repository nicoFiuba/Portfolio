import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo"> Nico</div>

            <ul className="navbar-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

        </nav>
    );
}

export default Navbar;