import './style.css'

export function SectionUsers() {
    return (
        <section id="usuarios">
        <h2>Veja a opinião de alguns usuários da nossa plataforma</h2>
        <div className="usuarios-conteudo">
            <div className="usuario">
                <h5>Bruno Stell</h5>
                <p>Goiânia - GO</p>
                <p className="usuario-comentario">Tenho várias câmeras gerenciadas pela plataforma IoT e também
                    alguns sensores de presença, o
                    que auxilia muito no monitoramento do meu negócio</p>
            </div>
            <div className="usuario">
                <h5>Leandro Huskarn</h5>
                <p>Salvador - BA</p>
                <p className="usuario-comentario">A praticidade em conectar os dispositivos foi um grande ponto para
                    a minha adesão, em alguns
                    cliques você já está conectado a um dispositivo</p>
            </div>
            <div className="usuario">
                <h5>Cassia Macoloch</h5>
                <p>Salvador - BA</p>
                <p className="usuario-comentario">A versatilidade de conexão com dispositivos é interessante, você
                    consegue conectar além de
                    dispositivos simples como sensores até os mais complexos como câmeras térmicas</p>
            </div>
        </div>
    </section>
    )
}