import './style.css'

const especialistas = [
    {
        nome: 'Tutu Williams',
        cidade: 'London',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem commodi quidem consectetur aperiam et doloribus tenetur velit, cupiditate ad, doloremcorrupti esse accusantium incidunt sit eum omnis tempora ab.'
    },
    {
        nome: 'Mark Zion',
        cidade: 'New York City',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem commodi quidem consectetur aperiam et doloribus tenetur velit, cupiditate ad, doloremcorrupti esse accusantium incidunt sit eum omnis tempora ab.'
    },
    {
        nome: 'Essien Crest',
        cidade: 'Berlin',
        descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, autem commodi quidem consectetur aperiam et doloribus tenetur velit, cupiditate ad, doloremcorrupti esse accusantium incidunt sit eum omnis tempora ab.'
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">
            <h2>Converse com um especialista</h2>
            <div className="specialists-content">


                {especialistas.map((item, index) => (
                    <div key={index} className="specialist">
                        <h5>{item.nome}</h5>
                        <p>{item.cidade}</p>
                        <p className="specialist-detail">{item.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}