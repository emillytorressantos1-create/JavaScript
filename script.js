//console.log() mostra uma informação na tela/console  
console.log("Olá, Mundo!");
console.log(2 + "2");


console.log(typeof "Olá, Mundo!");  // string
console.log(typeof 22); // number
console.log(typeof 10.5); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean

// variavel
// const não pode ter seu valor alerado durante o programa;
const nome = "Talita";
console.log(nome);

// let pode ter seu valor alerado durante o programa;
let idade = 17;
console.log(idade);
console.log("Olá " + nome + " ,que tem " + idade + " anos.")

idade = 18;
console.log(idade)


console.log(`Olá ${nome}, que tem ${idade} anos.`);

//.....

let apelido = "nanda";

let kg = 5;
console.log(kg);
console.log(`Olá ${apelido}, que tem ${kg} kg.`);

kg = 9;
console.log(kg);

apelido = "amanda";
console.log(apelido);

console.log(`Olá ${apelido}, que tem ${kg} kg.`);

// metodos de string
const texto = "pneumoultramicroscopicossilicovulcanoconiótico ";


// conta quantos caracteres tem a palavra e o espaço conta tbm
console.log(texto.length);

//altera todas as letras para maíusculo
console.log(texto.toUpperCase());

//altera todas as letras para mínusculo
console.log(texto.toLowerCase());

const nome_completo = "emilly torres santos";

console.log(nome_completo.includes("santos"));

console.log(10 < 5); //true
console.log(10 > 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log("10" == 10); // true
console.log("10" === 10); // false
console.log(10 !== 5); //true

const idade_pessoa = 17

console.log(idade_pessoa >= 18);
console.log(idade_pessoa >= 16);
///

const renome = "santos"

const rename = "santiago"

console.log(renome === rename)

// coletamos a idade da pessoa
let pessoa_idade = 10;
// verificar se a idade é maior de 18
if (pessoa_idade >= 18) {
    // se maior  ou igual a 18 então ela é maior de idade
    console.log("já pode ser preso HAHAHAHA");
} else {
    // se menor de 18 então ela é maior de idade
    console.log("não vai para a balada!🤣😂🤣😂");
}

// else if é caso tenha mais de uma validação
// else e else if so podem ser usadas caso tenha o if -------


// coletamos a idade da pessoa 
let idade_votação = 18
// verificamos se a pessoa é maior de que 70
if (idade_votação > 70) {
    console.log("você não é obrigado a votar")
} else if (idade_votação >= 18) {
    //senão se a idade da pesssoa for maior ou igual a 18
    console.log("você tem que votar obrigatoriamente")
} else if (idade_votação >= 16) {
    //senão se a idade da pesssoa for maior ou igual a 16
    console.log("Você não é obrigado a voatar, mas caso queira pode!")
} else {
    // senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}

// coletamos a  prova 
let prova = 0
// verificamos se a pessoa foi aprovada
if (prova >= 7) {
    console.log("Aprovadooo 😎😎")
} else if (prova < 7 ) {
    // caso nao foi aprovado
    console.log("Reprovado")
}

//  ----------

// informe os numeros 
let n1 = 10 

let n2= 13
 
if (n1 > n2) {
    // caso seja o primeiro seja maior
    console.log("O primeiro número é maior");
} else if (n2 > n1) {
    console.log("O segundo número é menor");
    // caso seja o segundo seja menor
} else {
    console.log("Empate");
    // caso seja o primeiro seja igual
}


// recebo a senha 
let senai = "senai123"
// verificamos se ela esta certa
if (senha = "senai123") {
    console.log("Acesso Autorizado")
} else  {
    // caso nao esteja certa
    console.log("Senha Errada")
} 

// verifico a temperatura

let temp = 30 

if (temp < 18) {
    console.log("Frio");
} else if (temp <= 27) {
    console.log("Agradável");
} else {
    console.log("Quente");
}

// Notas -------
let nota = 10

if (nota >= 9) {
      console.log("Exelente")
} else if (nota > 7) {
    console.log("Bom!")
} else if (nota <= 5) {
    console.log("regular")
} else {
    console.log("Insuficiente")
}



// Dias da semana
let dia = 7

if (dia == 1) {
      console.log("Domingo")
} else if (dia == 2) {
    console.log("Segunda")
} else if (dia == 3) {
    console.log("Terça")
} else if (dia == 4) {
    console.log("Quarta")
} else if (dia == 5) {
    console.log("Quinta")
} else if (dia == 6) {
    console.log("sexta")
} else {
    console.log("dia invalido")
}