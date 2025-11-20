import './Trayectoria.css';

function Trayectoria() {
    const eventos = [
        {
            id: 1,
            fecha: '2023 - Presente',
            titulo: 'Ingeniería Informática',
            institucion: 'Universidad de Buenos Aires (UBA)',
            // --- OPCIÓN B APLICADA ---
            descripcion: 'Carrera de grado orientada al diseño y gestión de sistemas complejos. Sólida base en Ciencias de la Computación, Algoritmos y Arquitectura de Software a gran escala.'
        },
        {
            id: 2,
            fecha: '2023 - 2024',
            titulo: 'Director Técnico de Fútbol',
            institucion: 'ATFA',
            descripcion: 'Licencias C, B y A. Formación en liderazgo, táctica y gestión de grupos.'
        },
        {
            id: 3,
            fecha: '2024',
            titulo: 'Curso Desarrollo Web (Node.js)',
            institucion: 'Codo a Codo 4.0',
            descripcion: 'Especialización en Backend con Javascript y Node.js.'
        },
        {
            id: 4,
            fecha: '2023',
            titulo: 'Desarrollo Web con React.js',
            institucion: 'Argentina Programa',
            descripcion: 'Curso intensivo de Frontend moderno.'
        },
        {
            id: 5,
            fecha: '2017 - 2022',
            titulo: 'Bachiller en Informática',
            institucion: 'Escuela Técnica ORT',
            descripcion: 'Base técnica sólida en programación y sistemas desde el secundario.'
        }
    ];

    return (
        <section className="seccion-trayectoria">
            <div className="contenedor-trayectoria">
                <h2>Mi Trayectoria</h2>

                <div className="timeline">
                    {eventos.map(function (evento) {
                        return (
                            <div key={evento.id} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">{evento.fecha}</div>
                                <div className="timeline-content">
                                    <h3>{evento.titulo}</h3>
                                    <h4>{evento.institucion}</h4>
                                    <p>{evento.descripcion}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default Trayectoria;