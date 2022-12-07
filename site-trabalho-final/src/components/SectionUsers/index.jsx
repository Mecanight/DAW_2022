import './style.css'

const users = [
    {
        nome: 'Bruno Stell',
        cidade: 'Goiânia - GO',
        descricao: 'Tenho várias câmeras gerenciadas pela plataforma IoT e também alguns sensores de presença, o que auxilia muito no monitoramento do meu negócio'
    },
    {
        nome: 'Leandro Huskarn',
        cidade: 'Salvador - BA',
        descricao: 'A praticidade em conectar os dispositivos foi um grande ponto para a minha adesão, em alguns cliques você já está conectado a um dispositivo'
    },
    {
        nome: 'Cassia Macoloch',
        cidade: 'Salvador - BA',
        descricao: 'A versatilidade de conexão com dispositivos é interessante, você consegue conectar além de dispositivos simples como sensores até os mais complexos como câmeras térmicas'
    }
]

export function SectionUsers() {
    return (
        <section id="users">
            <h2>Veja a opinião de alguns usuários da nossa plataforma</h2>
            <div className="users-conteudo">
                {users.map((item, index) => (
                    <div key={index} className="user">
                        <h5>{item.nome}</h5>
                        <p>{item.cidade}</p>
                        <p className="user-comentario">{item.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}