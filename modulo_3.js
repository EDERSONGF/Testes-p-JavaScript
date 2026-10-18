/*
Math -> Matemática
 - pow(2,2) / potência / 2² = 4
 - sqrt(25,2) / raiz / √25
 - PI / 3,14
 - ceil / teto -> arredondar pra cima
 - floor / chão -> arredondar pra baixo

 - random() / número aleatório entre 0 e 1
*/

//const result = Math.pow(2,4)
//const result = Math.sqrt(25,2)
//const result = Math.PI
//const result = Math.ceil(3.14)
//const result = Math.floor(3.14)
//const result = Math.random()
//console.log(result)

const buttonSorteador = document.querySelector("button") 

function cliqueiNoBotao() { 
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
if( max > min) {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert (result)
}
    else{
        alert("O valor mínimo tem que ser Menor que o valor máximo!")
    }
}

buttonSorteador.addEventListener("click", cliqueiNoBotao)

/*   Operadores Aritiméticos
     
    + -> Adição
    - -> Subtração
    / -> Divisão
    * -> Multiplicação
    % -> Resto
    ++ -> Incremento
    -- -> Decremento
    ** -> Exponencial

    const result = 6 / 3
    console.log(result)
*/

/*
Operadores de Atribuição
     
    = -> Atribuição 
    += -> Adição
    -= -> Subtração
    /= -> Divisão
    *= -> Multiplicação
    %= -> Resto
   
let result = 20

result %= 7  // result = result % 7

console.log(result)

*/

/* Operadores de Comparação

 >  -> Maior
 <  -> Menor


 >= -> Maior ou Igual
 <= -> Menor ou Igual

const firstNumber = 30
const seccondNumber = 50

console.log(firstNumber <= seccondNumber)
*/

/* Operadores Lógicos

&&  -> E -> Pessoa Exigente
    true && true = true
    true && false = false
    false && false = false

||  -> Ou -> Tanto faz
    true && true = true
    true && false = true
    false && false = false

!   -> Negação
    !true = false
    !false = true
*/

/*
const digitarASenha = true
const digitarOToken = true
const numeroDaConta = true

if( ! (digitarASenha && digitarOToken && numeroDaConta)) {
console.log( "Logado com sucesso")
 
} else {
    console.log ("Autenticação Falhou")
}
*/
 /* Operadpres Typeof e Delete
typeof  ->Tipo do dado
delete

const myObject = {
name: "Ederson"
age: 30
address: "Rua dos Bobos, n0"
}

const myNumber = "30"

console.log(typeof myNumber)
*/
/*
IF (Se)
Else (Se Não)
Else if () posso colocar mais condições/opções

const temperature = 40

if(temperature === 36) {
    console.log("Você está saudável")
} else if(temperature > 36 && temperature <= 40){
    console.log("Está com febre")
} else if(temperature > 40 ){
    console.log("Está com MUITA febre")
}
else {
    console.log("Está com hipotermia")
}
*/
/* Operadores Ternário pra economizar código ao if else em pequenas linhas de retorno de 1 linha.
? if (se)
: else (se não)
&& (if sem else)

const salary = 15000

// if(salary < 3000) {
//     console.log("O colaborador é Junior")
// } else if(salary >= 3000 && salary < 10000) {
//     console.log("Ele é Senior")
// } else {
//     console.log("Ele é diretor")
// }

//IF salary < 3000 && console.log("O colaborador é Junior")

// IF/ELSE -> salary < 3000 ? console.log("O colaborador é Junior") : console.log("Ele é Senior")

//ELSE IF
salary < 3000 ? console.log("O colaborador é Junior") : salary >= 3000 && salary < 10000 ? console.log("Ele é Senior") : console.log("Ele é diretor")

*/
/* Switch Case - Controlador de Fluxo
const temperature = 30

switch (temperature) {
    case 10:
        console.log("Ta meio frio")
        break

    case 20:
        console.log("Ta meio quente")
        break

    case 30:
        console.log("Ta quente")
        break

    default:
        console.log("Não sei te dizer")
}
*/

/*

    setTimeout -> Executa uma vez
    setInterval -> Executa infinitas vezes

    setTimeout(() => {
     // executa o que estiver aqui
}, timeout);

setTimeout(function() {
     //executa o que estiver aqui
}, timeout);

setTimeout(myFuncion, timeout);

*/


