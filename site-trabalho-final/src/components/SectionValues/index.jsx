import './style.css'

import imgLogo from '../../assets/img/aerea_empresa.jpg'

export function SectionValues() {
    return (
        <section id="valores">
        <h2>Um pouco sobre a empresa</h2>
        <div className="valores-container">
            <img src={imgLogo} alt="Foto aérea da empresa"/>
            <div className="valores-conteudo">
                <p>Officiis architecto dolorem mollitia? Nisi odit itaque debitis, est obcaecati a ducimus
                    fugiat. Doloremque itaque enim provident repudiandae.</p>
                <p>Molestiae odio minus ipsa dolore expedita, perspiciatis voluptas dolores, cupiditate commodi
                    amet maxime inventore cumque eaque totam rem sapiente quae dolor voluptate?</p>
                <div className="valor-pontos">
                    <div className="valor">
                        <span>Monitoramento</span>
                    </div>
                    <div className="valor">
                        <span>Agilidade</span>
                    </div>
                    <div className="valor">
                        <span>Segurança</span>
                    </div>
                    <div className="valor">
                        <span>Versatilidade</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}