import { createContext, useState } from "react";

const data = [
{
    foto:'./assets/img/thumb1.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 901000.00,
    operacao: 'venda',
    tipo: 'casa',
    cidade: 'pato',
    bairro: 'centro'
},

{
    foto:'./assets/img/thumb2.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 902000.00,
    operacao: 'locacao',
    tipo: 'apto',
    cidade: 'beltrao',
    bairro: 'centro'
},

{
    foto:'./assets/img/thumb3.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 903000.00,
    operacao: 'venda',
    tipo: 'casa',
    cidade: 'beltrao',
    bairro: 'centro'
},

{
    foto:'./assets/img/thumb4.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 904000.00,
    operacao: 'venda',
    tipo: 'sobrado',
    cidade: 'coronel',
    bairro: 'centro'
},

{
    foto:'./assets/img/thumb5.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 905000.00,
    operacao: 'venda',
    tipo: 'sobrado',
    cidade: 'pato',
    bairro: 'lasalle'
},

{
    foto:'./assets/img/thumb6.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 906000.00,
    operacao: 'locacao',
    tipo: 'casa',
    cidade: 'coronel',
    bairro: 'lasalle'
},

{
    foto:'./assets/img/thumb3.png',
    titulo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    descricao: 'Blanditiis nesciunt, dolorum natus provident maxime aspernatur nulla voluptate veniamquibusdam non facilis quae necessitatibus qui dignissimos aperiam ratione magnam unde dolorem.',
    preco: 990000.00,
    operacao: 'locacao',
    tipo: 'casa',
    cidade: 'coronel',
    bairro: 'centro'
}

]

const ImovelContext = createContext();

export function ImovelContextProvider(){

    const [total, setTotal] = useState(20);

    const[imoveis, setImoveis] = useState([]);

    return(
        <ImovelContext.Provider value = {{total, setTotal}}>
            {props.children}
        </ImovelContext.Provider>
    )
}