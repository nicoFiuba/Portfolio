import './GaleriaDeProyectos.css';

function GaleriaDeProyectos() {
    const proyectos = [
        {
            id: 1,
            titulo: 'Análisis de Datos',
            descripcion: 'Mapa de Tiros y Redes de Pases con datos reales de StatsBomb.',
            estado: 'Próximamente',
            // Tecnologías de Datos
            tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Mplsoccer']
        },
        {
            id: 2,
            titulo: 'Pizarra Táctica',
            descripcion: 'Diseñador de jugadas interactivas con guardado en la nube.',
            estado: 'Próximamente',
            // Tecnologías Full Stack
            tecnologias: ['React.js', 'HTML Canvas', 'Node.js', 'CSS']
        },
        {
            id: 3,
            titulo: 'Predicción de Goles (xG)',
            descripcion: 'Modelo de Machine Learning para predecir probabilidad de gol.',
            estado: 'Próximamente',
            // Tecnologías de Ingeniería/IA
            tecnologias: ['Python', 'Scikit-Learn', 'NumPy', 'Pandas']
        }
    ];

    return (
        <section className="seccion-proyectos" id="proyectos">
            <h2>Mis Proyectos</h2>
            <div className="galeria-contenedor">

                {proyectos.map(function (proyecto) {
                    return (
                        <div key={proyecto.id} className="tarjeta-proyecto">
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>

                            {/* --- AGREGADO: Lista de Tecnologías --- */}
                            <div className="tags-tecnologias">
                                {proyecto.tecnologias.map(function (tech) {
                                    return <span key={tech} className="tag-tech">{tech}</span>;
                                })}
                            </div>
                            {/* ------------------------------------- */}

                            <span className="etiqueta-estado">{proyecto.estado}</span>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default GaleriaDeProyectos;