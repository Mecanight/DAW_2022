import './style.css'

export function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-empresa">
                    <p className="footer-logo">Empresa IoT</p>
                    <p>Estamos a mais de 15 anos Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="footer-menu">
                    <p className="footer-menu-titulo">A empresa</p>
                    <ul>
                        <li><a href="#">História da IoT</a></li>
                        <li><a href="#">Usuários conectados</a></li>
                        <li><a href="#">Missão, visão e valores</a></li>
                        <li><a href="#">Certificações ISO</a></li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <p className="footer-menu-titulo">Contate-nos</p>
                    <ul>
                        <li>+55 46 987654321</li>
                        <li>Rua Abelardo Luz, 1518</li>
                        <li>Chopinzinho - PR</li>
                    </ul>
                </div>
            </div>
            <div className="footer-sociais">
                <span className="face"></span>
                <span className="twit"></span>
                <span className="insta"></span>
                <span className="linkd"></span>
            </div>
            <p className="footer-direitos">
                &#169; 2023 - Direitos reservados a empresa IoT &#153;
            </p>
        </div>
    </footer>
    )
}