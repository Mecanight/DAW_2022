import './style.css'

export function SectionConectados() {
    return (
        <section id="conectados">
        <h2>Dispositivos conectados em todo o mundo</h2>
        <div className="conectados-conteudo">
            <div className="conectado">
                <p className="valor">100.000</p>
                <p className="rotulo">Câmeras de monitoramento</p>
            </div>
            <div className="conectado">
                <p className="valor">200.000</p>
                <p className="rotulo">Sensores de presença</p>
            </div>
            <div className="conectado">
                <p className="valor">50.000</p>
                <p className="rotulo">Sensores de gas</p>
            </div>
            <div className="conectado">
                <p className="valor">300.000</p>
                <p className="rotulo">Atuadores de portão eletrônico</p>
            </div>
        </div>
    </section>
    )
}