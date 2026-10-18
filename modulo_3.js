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
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert (result)
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



