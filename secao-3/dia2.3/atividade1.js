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

let numerosImpares = []
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !== 0) {
       numerosImpares.push(numbers[index])
    }
}
 console.log(numerosImpares.length)

// Desafio fatorial
// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// Exemplo de 4 fatorial:
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

numeroFatorial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
let fatoracao = numeroFatorial[0]
for (let index = 0; index < numeroFatorial.length; index+= 1) {
    fatoracao = fatoracao * numeroFatorial[index]
}
console.log(fatoracao)

// Desafio de inverter palavra
// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let palavra = "carro";
let letra = palavra.split("")
let inversao = letra.reverse()
let novaPalavra = inversao.join("")
console.log(novaPalavra)

// Desafio dos asteriscos
// Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:
// Copiar
// n = 5
// *****
// *****
// *****
// *****
// *****


