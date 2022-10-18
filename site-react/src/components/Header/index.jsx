import './style.css';

import imgLogo from '../../assets/img/logo_imobiliaria.svg';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img src={imgLogo} alt="Uma mulher de máscara com uma seringa na mão"/>
                        <h6>Imobiliária Unimater</h6>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#" className="active">Home</a>
                        </li>
                        <li>
                            <a href="#">Venda</a>
                        </li>
                        <li>
                            <a href="#">Locação</a>
                        </li>
                        <li>
                            <a href="#">A empresa</a>
                        </li>
                        <li>
                            <a href="contato.html">Fale conosco</a>
                        </li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}