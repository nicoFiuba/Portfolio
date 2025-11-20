import './Habilidades.css';

function Habilidades() {
    const categorias = [
        {
            titulo: 'Desarrollo Full Stack',
            items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Flask']
        },
        {
            titulo: 'Ingeniería & Datos', // con tilde
            items: ['Python', 'Java', 'SQL', 'Git & GitHub', 'C/C++', 'Algoritmos']
        },
        {
            titulo: 'Soft Skills & Fútbol', // con tildes
            items: ['DT (Licencia ATFA)', 'Inglés Avanzado', 'Liderazgo', 'Trabajo en Equipo', 'Comunicación', 'Pensamiento Lógico'] // Todo corregido
        }
    ];

    return (
        <section className="seccion-habilidades">
            <div className="contenedor-habilidades">
                <h2>Habilidades y Herramientas</h2>
                <div className="grid-habilidades">
                    {categorias.map(function (categoria) {
                        return (
                            <div key={categoria.titulo} className="grupo-habilidad">
                                <h3>{categoria.titulo}</h3>
                                <div className="lista-badges">
                                    {categoria.items.map(function (item) {
                                        return <span key={item} className="badge">{item}</span>;
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Habilidades;