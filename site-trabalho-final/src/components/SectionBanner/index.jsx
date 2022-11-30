import './style.css'

export function SectionBanner() {
    return (
        <section id="banner">
            <div className="banner-content">
                <h1>Dispositivos conectando pessoas</h1>
                <h3>Conexões com dispositivos locais, remotos e em nuvem</h3>
            </div>
            <div className="banner-filter">
                <div className="filter-fields">
                    <form>
                        <select>
                            <option>Tipo Equipamento</option>
                            <option value="camera">Câmera</option>
                            <option value="sensor">Sensor</option>
                        </select>
                        <select>
                            <option>Cômodo</option>
                            <option value="sala">Sala</option>
                            <option value="cozinha">Cozinha</option>
                            <option value="quarto">Quarto</option>
                            <option value="garagem">Garagem</option>
                        </select>
                        <select>
                            <option>Lugar</option>
                            <option value="casa">Casa</option>
                            <option value="trabalho">Trabalho</option>
                            <option value="praia">Praia</option>
                            <option value="escola">Escola</option>
                        </select>
                        <select>
                            <option>Bairro</option>
                            <option value="brasilia">Brasilia</option>
                            <option value="centro">Centro</option>
                            <option value="lasalle">La Salle</option>
                            <option value="pinheiro">Pinheiros</option>
                        </select>
                    </form>
                </div>
                <div className="filter-result">
                    <p className="result-value">26</p>
                    <p className="result-label">Imóveis</p>
                    <button>Filtrar</button>
                </div>
            </div>
        </section>
    )
}