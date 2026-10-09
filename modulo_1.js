/*
variaveis
var
let
const 
String > Textos
Boolean > Boleano (Verdadeiro ou False "false ou true")
Object > Objetos const objeto = {}
Null > eu posso colocar como nulo
Undefined > falta de informação no código
Array > Uma Estrutura de dados, uma caixa contendo dados e ou informações dentro de um Arquivo JavaScript
If & Else (Condições SE"sim" tiver ou Se não) {IF(Se) ou Else(Se não)}
Functions / Funções Trechos de código que é executado
Somente quando for solicitado ()

*/

`textos com crase são` // templates literals ou templates string 
const myAge = 32
const myString = `Minha idade é ${myAge}, e posso falar mais depois da variável` // templates literals ou templates string 
const number1 = 60 * 2

const name = "Ederson"
const age = 32
const address = "Rua Frei Caneca"
const user = {
    name: "Ederson", 
    age: 32,
    nomeDoConjuge: null,
    address: {
        street:"Rua Frei Caneca",
        number: 350,
        city: "Rj",
        state: "RJ",
        country: "Brasil" }
        }
        user.address.number= 301
        const myArray = [20,30,"ola JS", {name:'Ederson'}]
myArray[1] = 40
myArray[3].name = 'Rodolfo' 
myArray[2] = "Só JS"
//console.log(myArray[2])

const notaDoAluno = 7 
const notaDeCorte = 5
if(notaDoAluno >  notaDeCorte) {
//console.log("Parabéns você passou de ano")
}
else{
    //console.log("Voce foi reprovado")
}
// Sinal de == é para comparação dos valores das propriedades
const senha = 453
const digitada = 454

if(senha == digitada) {
    //console.log("Você está logado")
}

else{
    //console.log("Senha Incorreta")
}

function nomeNaTela() {
console.log("Ederson")
}
nomeNaTela()







