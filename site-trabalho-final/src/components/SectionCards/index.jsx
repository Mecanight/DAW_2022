import './style.css'

const cards = [
    {
        imagem: './assets/img/camera3.png',
        titulo: 'Camera 1',
        texto: 'Esta câmera mostra Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        botao: 'Conectar'
    },
    {
        imagem: './assets/img/camera2.png',
        titulo: 'Camera 2',
        texto: 'Esta câmera mostra officiis quia ullam necessitatibus illo error repellendus voluptas cum, laudantium nostrum illum!',
        botao: 'Conectar'
    },
    {
        imagem: './assets/img/sensor_pres.png',
        titulo: 'Sensor de presença 1',
        texto: 'Este sensor apresenta a movimentação Lorem elit. Ea omnis deleniti explicabo eligendi modi consectetur odio. dolor sit amet, consectetur adipisicing.',
        botao: 'Conectar'
    },
    {
        imagem: './assets/img/sensor_pres.png',
        titulo: 'Sensor de presença 2',
        texto: 'Este sensor apresenta a movimentação quis consequatur hic nesciunt inventore? Laudantium, perspiciatis doloremque! Laboriosam molestias.',
        botao: 'Conectar'
    },
    {
        imagem: './assets/img/sensor_porta.png',
        titulo: 'Sensor de porta aberta 1',
        texto: 'Este sensor apresenta valores referente consectetur adipisicing elit. Tenetur qu natus minus! Nisi natus dolore harum eius non modi tempora.',
        botao: 'Conectar'
    },
    {
        imagem: './assets/img/sensor_porta.png',
        titulo: 'Sensor de janela aberta 1',
        texto: 'Este sensor apresenta valores referente dolor sit amet consectetur maxime sapiente non accusantium libero quis qui sunt architecto aliquam quidem.',
        botao: 'Conectar'
    }
]

export function SectionCards() {
    return (
        <section id="cards">
            <h2>Dispositivos conectados</h2>
            <div className="cards-content">
                {cards.map((item, index) => (
                    <div key={index} className="card">
                        <img src={item.imagem} alt="Imagem do dispositivo 2" />
                        <div className="card-content">
                            <h4>{item.titulo}</h4>
                            <p>{item.texto}</p>
                            <div className="botao_conectar">
                                <p>{item.botao}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}