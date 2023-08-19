// 🚀 Array e loop for
// Considere esse array para realizar os próximos exercícios.
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
for (index = 0; index < numbers.length; index += 1){
console.log(numbers[index])
}

// Some todos os valores contidos no array e imprima o resultado.
let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma = soma + numbers[index];  
}
console.log(soma)

// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

let mediaAritimetica;
mediaAritimetica = soma / numbers.length
console.log(mediaAritimetica)

// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

if (mediaAritimetica > 20) {
    console.log('O valor da média aritmética é maior que 20')
}else{
    console.log('O valor da média aritmética é menor ou igual a 20')
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.
let valorMaior = 0
for(let index = 0; index < numbers.length; index += 1){
    if (numbers[index] > valorMaior)
    valorMaior = numbers[index]
}
console.log(valorMaior)


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.









