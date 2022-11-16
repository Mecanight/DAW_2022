import './style.css'

export function Footer() {
    return (
        <footer>
            <div class="container">
                <div class="rodape-conteudo">
                    <div class="rodape-empresa">
                        <p class="rodape-logo">Empresa IoT</p>
                        <p>Estamos a mais de 15 anos Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div class="rodape-menu">
                        <p class="rodape-menu-titulo">A empresa</p>
                        <ul>
                            <li><a href="#">História da IoT</a></li>
                            <li><a href="#">Usuários conectados</a></li>
                            <li><a href="#">Missão, visão e valores</a></li>
                            <li><a href="#">Certificações ISO</a></li>
                        </ul>
                    </div>
                    <div class="rodape-menu">
                        <p class="rodape-menu-titulo">Contate-nos</p>
                        <ul>
                            <li>+55 46 987654321</li>
                            <li>Rua Abelardo Luz, 1518</li>
                            <li>Chopinzinho - PR</li>
                        </ul>
                    </div>
                </div>
                <div class="rodape-sociais">
                    <span class="facebucson"></span>
                    <span class="tuiterano"></span>
                    <span class="instagrama"></span>
                    <span class="linkedinho"></span>
                </div>
                <p class="rodape-direitos">
                    &#169; 2023 - Direitos reservados a empresa IoT &#153;
                </p>
            </div>
        </footer>
    )
}