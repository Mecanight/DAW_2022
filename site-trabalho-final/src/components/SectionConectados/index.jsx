import './style.css'

const conectados = [
    { valor: '100.000', rotulo: 'Câmeras de monitoramento' },
    { valor: '200.000', rotulo: 'Sensores de presença' },
    { valor: '50.000', rotulo: 'Sensores de gas' },
    { valor: '300.000', rotulo: 'Atuadores de portão eletrônico' }
]

export function SectionConectados() {
    return (
        <section id="conectados">
            <h2>Dispositivos conectados em todo o mundo</h2>
            <div className="conectados-content">
                {conectados.map((item, index) => (
                    <div key={index} className="conectado">
                        <p className="valor">{item.valor}</p>
                        <p className="rotulo">{item.rotulo}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}