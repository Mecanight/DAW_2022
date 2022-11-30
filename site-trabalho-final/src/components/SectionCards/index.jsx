import './style.css'

export function SectionCards() {
    return (
        <section id="cards">
            <h2>Dispositivos conectados</h2>
            <div className="cards-content">
                <div className="card">
                    <img src="./assets/img/camera3.png" alt="Imagem do dispositivo 1"/>
                        <div className="card-content">
                            <h4>Camera 1</h4>
                            <p>
                                Esta câmera mostra Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div className="botao_conectar">
                                <p>Conectar</p>
                            </div>
                        </div>
                </div>
                <div className="card">
                    <img src="./assets/img/camera2.png" alt="Imagem do dispositivo 2"/>
                        <div className="card-content">
                            <h4>Camera 2</h4>
                            <p>
                                Esta câmera mostra officiis quia ullam necessitatibus illo error repellendus voluptas
                                cum, laudantium nostrum illum!
                            </p>
                            <div className="botao_conectar">
                                <p>Conectar</p>
                            </div>
                        </div>
                </div>
                <div className="card">
                    <img src="./assets/img/sensor_pres.png" alt="Imagem do dispositivo 3"/>
                        <div className="card-content">
                            <h4>Sensor de presença 1</h4>
                            <p>
                                Este sensor apresenta a movimentação Lorem elit. Ea omnis deleniti explicabo eligendi
                                modi consectetur odio. dolor sit amet, consectetur adipisicing
                            </p>
                            <div className="botao_conectar">
                                <p>Conectar</p>
                            </div>
                        </div>
                </div>
                <div className="card">
                    <img src="./assets/img/sensor_pres.png" alt="Imagem do dispositivo 4"/>
                        <div className="card-content">
                            <h4>Sensor de presença 2</h4>
                            <p>
                                Este sensor apresenta a movimentação quis consequatur hic nesciunt inventore?
                                Laudantium, perspiciatis doloremque! Laboriosam molestias
                            </p>
                            <div className="botao_conectar">
                                <p>Conectar</p>
                            </div>
                        </div>
                </div>
                <div className="card">
                    <img src="./assets/img/sensor_porta.png" alt="Imagem do dispositivo 5"/>
                        <div className="card-content">
                            <h4>Sensor de porta aberta 1</h4>
                            <p>
                                Este sensor apresenta valores referente consectetur adipisicing elit. Tenetur qu natus
                                minus! Nisi natus dolore harum eius non modi tempora
                            </p>
                            <div className="botao_conectar">
                                <p>Conectar</p>
                            </div>
                        </div>
                </div>
                <div className="card">
                    <img src="./assets/img/sensor_porta.png" alt="Imagem do dispositivo 6"/>
                        <div className="card-content">
                            <h4>Sensor de janela aberta 1</h4>
                            <p>
                                Este sensor apresenta valores referente dolor sit amet consectetur maxime sapiente non
                                accusantium libero quis qui sunt architecto aliquam quidem
                            </p>
                            <div className="botao_conectar">
                                <p>Conectar</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}