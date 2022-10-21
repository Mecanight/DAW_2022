import './style.css'

import imgLogo from '../../assets/img/place-company.png'

export function SectionValues() {
    return (
        <section id="values">
            <h2>Quem é a imobiliária Unimater</h2>
            <div className="values-container">

                <img src={imgLogo} alt="Foto da firma" />
                <div className="values-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, minus eius veniam amet
                        illo quis optio ex voluptatem sunt fugit beatae praesentium est laudantium, a, corporis hic
                        placeat eum facilis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab aliquam numquam modi
                        molestias ducimus, amet corporis autem asperiores a! Recusandae fuga eveniet obcaecati ipsum
                        perspiciatis velit harum rem a!</p>
                    <div className="value-detail">
                        <div className="value">
                            <span>Alto Padrão</span>
                            <span>Agilidade</span>
                        </div>
                        <div className="value">
                            <span>Facilidade</span>
                            <span>Confiabilidade</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}