// objeto é para agrupar tudo, tipo uma variavelzona
const motorista = {
    idade: 18,
    tem_cnh: true,
    tem_carro: false
}

console.log(motorista)

motorista.idade += 1;
motorista.tem_cnh = false;
motorista.tem_carro = true;

console.log(motorista)

// atividade 
const produlto = {
    nome: "meia",
    marca: "puma",
    preco: 20,
    disponivel: true
}


console.log(produlto)

produlto.nome = "calça"

console.log(produlto.nome)

produlto.preco += 17

console.log(produlto.preco)

//  laço de repetição
for (let contador = 0; contador <= 6; contador++) {
    console.log(contador)
}


let numero = 8;

for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log(`${tabuada} x ${numero} = ${tabuada * numero}`)
}

// let contador = 1;
// let number = 12;

// while(contador <= 10){
//     console.log(contador * number);
//     contador ++;
// }



let number1 = 0

while (number1 > 0) {
    console.log(`while: ${number1}`);
    number1 -= 2
}

let number2 = 0
do {
    console.log(`do while: ${number2}`)
    number2 -= 2
} while (number2 > 0);

//  ------Atividade----


let number10 = 10
do {
    console.log(number10)
    number10--
} while (number10 >= 1)
console.log("fim da contagem");

// listas

const frutas = ["Maça", "Banana", "Uva"]

console.log(frutas)

frutas[0] = "pera";

console.log(frutas[0])
console.log(frutas[2])

// faz a contagem dos itens
console.log(frutas.length)

// adiciona mais um no final
frutas.push("Manga", "Abacaxi");

console.log(frutas)

// exclui o ultimo colocado
frutas.pop()
console.log(frutas)

// ordem alfabetica
frutas.sort()
console.log(frutas)


// Funçoes

// function somar(numero1, numero2){
    // console.log(`a soma dos numeros é ${numero1 + numero2}`)
    // }
    
    
    function somar(numero1, numero2){
        return numero1 + numero2;
    }
    
    const soma = somar (1,1);
    console.log(soma);
    
    
    console.log(somar(6,7));
    
    function dividir(numero1, numero2){
        console.log(`${numero1} / ${numero2} = ${numero1/numero2}`)
    }
    
    dividir(100, 2);

    const Jogos = ["Silence", "Tooru", "CrossFire"]
    console.log(Jogos)
    
    Jogos.push("gta", "LoL")
    console.log(Jogos)
    
    const Materiais = ["Estojo", "Caneta", "Lapis", "borracha", "canetinhas"]
    console.log(Materiais)
    
    Materiais.pop()
    console.log(Materiais)

    console.log(Materiais.length)
    
   function dobro(numero1, numero2){
        return numero1 + numero2;
    }
    
    const dobro = dobro (1,1);
    console.log(dobro);

    