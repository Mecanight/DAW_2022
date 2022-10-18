import './style.css';

export function Footer() {
    return (
        <footer>
            <div className="conteiner">
                <div className="footer-content">
                    <div className="footer-company">
                        <p className="footer-logo">Imobiliária Unimater</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, neque aspernatur.
                            Suscipit, natus qui? In, impedit voluptas sed aspernatur officiis sapiente, maxime sequi soluta,
                            quia aliquid iusto quaerat distinctio! Iure?</p>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Especialistas</a></li>
                            <li><a href="#">Missão e Visão</a></li>
                            <li><a href="#">Nossos Valores</a></li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">Contato</p>
                        <ul>
                            <li>+55 (46) 9 9999 9999</li>
                            <li>Rua Mato Grosso, 200</li>
                            <li>Pato Branco - PR</li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <p className="footer-menu-title">Nossa Empresa</p>
                        <ul>
                            <li><a href="#">Empresa XPTO</a></li>
                            <li><a href="#">Empresa do Zeca</a></li>
                            <li><a href="#">Empresa do Chico</a></li>
                            <li><a href="#">Empresa do Tonho</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-social">
                    <span className="facebook"></span>
                    <span className="twitter"></span>
                    <span className="instagram"></span>
                    <span className="linkedin"></span>
                </div>
                <p className="footer-copright">
                    &#169; 2022 - Todos os direitos reservados
                </p>
            </div>
        </footer>
    )
}