/* Operador Ternário:
    Ex: Cliente com 100 pontos = premium, cc = comum
    let pontos = 50;
    let tipo = pontos > 100 ? 'premium' : 'comum';
    ... = expressao ? 'true' : 'false'

*/

/* Comparações com valores não booleanos:
    Falsy: undefined, null, 0, false, '', NaN
    Truthy: !falsy
    ** OR APENAS PROCURA O PRIMEIRO VALOR 'TRUTHY' (ou o último valor) E PARA DE COMPARAR **
    Ex: false || 'rafael' -> 'rafael'
        false || 1 -> 1
        false || 1 || 3 -> 1, uma vez que já encontrou o truthy, a partir do || 3 não há comparação

*/

/* FizzBuzz: algoritmo para aprender sobre divisibilidade
    Se divisível por 3 -> Fizz
    Se divisível por 5 -> Buzz
    Se divisível por 3 e 5 -> FizzBuzz
    CC -> retorna o próprio número
    NaN -> retorna mensagem


function fizzBuzz(valor) {
    if(valor % 3 === 0 && valor % 5 !== 0 ) {
        return 'Fizz';
    } else if(valor % 5 === 0 && valor % 3 !== 0) {
        return 'Buzz';
    } else if (valor % 3 === 0 && valor % 5 === 0) {
        return 'FizzBuzz';
    } else if (isNaN(valor)) {
        return 'Não é um número!';
    } else return valor;
}

const resultado = fizzBuzz();

*/

/* Medidor de Velocidade:
    Velocidade máxima até 70 km/h
    CC, a cada 5 km/h acima = +1 ponto perdido
    Se a quantidade de pontos for >= 12, -> Carteira Suspensa
    ** Utilizar Math.floor() **

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPonto = 5;
    if(velocidade <= velocidadeMaxima) {
        return "Dentro do limite.";
    } else {
        const qntPontos = Math.floor((velocidade - velocidadeMaxima) / kmPonto);
        if(qntPontos >= 12) {
            return "Carteira Suspensa!";
        } else return "Pontos: " + qntPontos;
    }
}

verificarVelocidade();

*/

/* Instanciar Objetos:

    Factory Functions: padronizar uma função que manipula N objetos iguais 

// Utiliza-se Camel Case -> umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return { 
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        }
    }
}

const celular = criarCelular('Xiaomi Redmi Note 7', 5.5, 5000);
console.log(celular);


    Constructor Functions: padronizar uma função que manipula N objetos iguais

// Utiliza-se Pascal Case -> UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }
}

const celular = new Celular('Xiaomi Redmi Note 9', 6, 8000);
console.log(celular);

*/

/* Clonando Objetos:

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }
}

// Método 1
const novoObjeto = Object.assign({
    corCelular = 'vermelho'
}, celular);
console.log(novoObjeto);

// Método 2
const novoObjeto2 = {...celular};
console.log(novoObjeto2);

*/

/* Trabalhando com Strings:

// Tipo Primitivo:
const mensagemP = "minha primeira mensagem";

// Tipo Objeto: possível acessar várias funções
const mensagemO = new String("minha primeira mensagem");
mensagem0.lenght
mensagem0.includes('primeira')
mensagem0.startWith('minha')
mensagem0.endsWith('mensagem')
mensagem0.replace('minha', 'sua')

*/

/* Template Literal: 

// Possível utilizar emojis
const msg = `Mensagem \u{1F3C1}`
console.log(msg)

const mensagem = 'Oi, essa é a minha\n' + 
'\'primeira\' mensagem';

const mensagem2 = `Oi, essa é a minha
'primeira' mensagem`;

const nome = 'Rafael';
const oiFulano = 'Olá' + nome + '\n';

const texto = 
`Olá, ${nome}.

Obrigada por se inscrever no meu canal!

Ative o "sininho" para receber notificações.

Abraços,
        Rayanne.` 

*/

/* Date:

const date1 = new Date();
const date2 = new Date('March 30 2020 01:17');
const date3 = new Date(2020,04,30,1,17);

date3.setFullYear(2030);
date2.toDateString();
date2.toTimeString();
date2.toISOString();
console.log(date3);

*/

/* Objeto - Endereço:

let enderecoObj = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereco(enderecoObj) {
    for(let chave in enderecoObj) {
        console.log(chave, enderecoObj[chave]);
    }
}

exibirEndereco(enderecoObj);

*/

/* Diferença entre for..in e for..of:

//For..in interage com as propriedades do objeto/elemento:
const numeros = [1,2,3,4,5];
for(let numero in numeros) {
    console.log(numero);
}

//For..of interage com os valores das propriedades do objeto/elemento:
for(let numero of numeros) {
    console.log(numero);
}

const casa = {
    area = 1000,
    altura: 7,
    andares: 2
};

for(let chave in casa) {
    console.log(chave, casa[chave]);
}

//For..of dá erro pois 'casa' não é um objeto iterável
for(let chave of casa) {
    console.log(chave);
}

*/

/* Comparação entre dois Objetos:

function enderecoObj(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new enderecoObj('a','b','c');
const endereco2 = new enderecoObj('a','b','c');

function fazComparacaoPropried(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua && 
            endereco1.cidade === endereco2.cidade &&
            endereco1.cep === endereco2.cep;
}

console.log(fazComparacaoPropried(endereco1, endereco2));

function fazComparacaoValorNaMemoria(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(fazComparacaoValorNaMemoria(endereco1, endereco2));

*/

/* Busca em Array:

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];

marcas.find(function(marca) {
    return marca.nome === 'a';
})

*/

/* Arrow Functions: 

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
];

//Nenhum parâmetro:
marcas.find((() => marca.nome === 'a'));
//Apenas 1 parâmetro:
marcas.find((marca => marca.nome === 'a'));

*/

/* Elementos do Array:

const numeros = [1,2,3,4,5,6];

// Inserir no final do array:
const ver = numeros.push();

// Inserir no início do array:
const ver2 = numeros.unshift();

// Remover do Final:
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// Remover do Início:
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

// Remove um elemento de qualquer posição do array
const meio = numeros.splice(2,1);
console.log(meio);
console.log(numeros);

*/

/* Esvaziando um Array:

let numeros = [1,2,3,4,5,6];

// Método 1: se tiver outras referências, só irá apagar a inicial
let outros = numeros; // ainda mostra o array inicial
numeros = [];

// Método 2: apaga todas as referências (MELHOR JEITO)
numeros.length = 0;

// Método 3: pega o index inicial e apaga os demais de acordo com o tamanho do vetor
numeros.splice(0,numeros.length);

// Método 4: retira sempre o último elemento (MUITO GASTO)
while(numeros.length > 0) {
    numeros.pop();
}

*/

/* Combinando, Cortando Arrays e Separando: se trabalhar com objetos, passa referência e valor

const primeiro = [{id:1},2,3];
const segundo = [4,5,6];
const frase = "bem vindo ao curso";

const juntarArrays = primeiro.concat(segundo);
const juntarArraysComPonto = segundo.join('.');
const dividirArrays = juntarArrays.slice(1); // divide do índice 1 até o final
const dividirArrays2 = juntarArrays.slice(1,3); // divide do índice 1 ao 3-1
const dividindoString = frase.split(' ');

*/

/* Clonar ou Copiar Arrays: (NOVA FORMA: ES6)

const primeiro = [1,2,3];
const segundo = [4,5,6];

const juntarArrays = [...primeiro,...segundo];
const clonarArrays = [...juntarArrays];

*/

/* Iterando Array com Foreach:

const primeiro = [1,2,3,4,5];

for(numero of numeros) {
    console.log(numero);
}

numeros.forEach((numero) => console.log(numero));
numeros.forEach((numero, indice) => console.log(numero, indice));

*/