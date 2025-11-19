import './GaleriaDeProyectos.css';

function GaleriaDeProyectos() {
    // Base de datos de proyectos
    const proyectos = [
        {
            id: 1,
            titulo: 'Análisis de Datos',
            descripcion: 'Mapa de Tiros y Redes de Pases con Python y Mplsoccer.',
            estado: 'Próximamente'
        },
        {
            id: 2,
            titulo: 'Pizarra Táctica',
            descripcion: 'Diseñador de jugadas interactivas con React y Canvas.',
            estado: 'Próximamente'
        },
        {
            id: 3,
            titulo: 'Predicción de Goles (xG)',
            descripcion: 'Modelo de Machine Learning entrenado con datos reales.',
            estado: 'Próximamente'
        }
    ];

    return (
        <section className="seccion-proyectos" id="proyectos">
            <h2>Mis Proyectos</h2>
            <div className="galeria-contenedor">

                {/* Bucle para crear las tarjetas */}
                {proyectos.map(function (proyecto) {
                    return (
                        <div key={proyecto.id} className="tarjeta-proyecto">
                            <h3>{proyecto.titulo}</h3>
                            <p>{proyecto.descripcion}</p>
                            <span className="etiqueta-estado">{proyecto.estado}</span>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default GaleriaDeProyectos;