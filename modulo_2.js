/*
DOM (Document Object Model) Arvore de elementos do Navegador

Para trazer dados ou elementos do HTML para o JavaScript tenho que colocar
document -> HTML

getElementById -> Trás um elemento pelo ID
getElementByClassName -> Trás todos os elementos com essa classe
getElementByTagName -> Trás todos os elementos com essa Tag
getElementByName -> Trás todos os elementos com esse Name

querySelector -> Trás um elemento, o primeiro que encontrar
querySelectorAll -> Trás todos os elemento, o primeiro que encontrar
*/
// Formas de alterar informações no HTML, CSS ou em Tudo
//console.log(element.textContent) // Só Leva em conta HTML
//console.log(element.innerText) // Leva em conta o CSS
//console.log(element.innerHTML) // Trás tudo e permiti adicionar Html

// const elements = document.getElementsByTagName("title")

/*   const element = document.querySelector("#meu-input")
// element.value = 1007
//console.log(element.placeholder)

//posso alterar os Estilos de qualquer elemento do HTML com essa configuração
//button.style.backgroundColor = "blue"
// Eventos, todos começam com "on" 
const hnovo = document.querySelector(".alterador")
function cliqueiNoBotao(){
    hnovo.textContent = ("Será q foi?")
        //console.log(h1Novo.value)
}

function digitando(){
    console.log(element.value)
}
const buttonEnviar = document.querySelector (".button-enviar")
buttonEnviar.addEventListener("click", function (){
    console.log("input mudou em!")})
*/
const input = document.querySelector(".main_input")
const select = document.querySelector("select")
const button = document.querySelector(".meu-button")

function troqueiValor(event){
    console.log(event)
}

button.addEventListener("click", troqueiValor)
input.addEventListener("keypress", troqueiValor)
select.addEventListener("change", troqueiValor)



