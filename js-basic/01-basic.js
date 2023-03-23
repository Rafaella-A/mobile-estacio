//aula 09.03

var nome1 = 'joao'; // pode sofrer modificação
nome1 = 'mateus'; // string
nome1 = 88888888; // number
nome1 = true; // boolean
nome1 = ['Pedro', 123, 'Felipe', {nome: 'Matheus'}, 1.765]; // object -> array

let nome2 = 'jose'; // pode sofrer modificação
nome2 = 'felipe'; // string

// const = 31; não pode sofrer modificação
const salario = 1300; // number

var nome = 'Rafaella';

let idade = 41;

const sexo = 'feminino';

console.log(nome, sexo, idade);

const usuario = ['Rafaella', 41, 'feminino'];

console.log(usuario);


const pincel = {
    cor: 'azul',
    fabricante: 'pilot',
    tipo: 1,
    espessuraDaPonta: 1.45
}


const caixa = {
    formato: 'quadrada',
    itens: [pincel]
}

caixa.itens[0].cor;


console.log(caixa.itens[0].cor);











