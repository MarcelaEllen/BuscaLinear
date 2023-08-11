/*Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.
Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array.*/

//Melhor opção é a busca linear já que o array não está com os elementos em ordem, nem crescente ou decrescente
function buscaLinear (array, elementoBuscado){
    for(let i = 0; i< array.length; i++){
        if(array[i] === elementoBuscado){
            return i;
        }
    }
    return -1
}

const arrayNumeros = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
const elemento = 20

const indiceEncontrado = buscaLinear(arrayNumeros, elemento)

if (indiceEncontrado !== -1){
    console.log(`O elemento ${elemento} foi encontrado no índice ${indiceEncontrado}` )
} else{
    console.log(`O elemento ${elemento} não foi encontrado`)
}