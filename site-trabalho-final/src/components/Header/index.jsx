import './style.css';

import imgLogo from '../../assets/img/logo.png';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <img src={imgLogo} alt="Logo da emprese de IoT"/>
                        <h6>Empresa IoT</h6>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#" className="active">
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Dispositivos conectados
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Adicionar dispositivos
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Contatar suporte
                            </a>
                        </li>
                        <li>
                            <button>Sair</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}