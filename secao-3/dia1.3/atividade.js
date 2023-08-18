// Exercício 2
// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

let num1 = 10
let num2 = 8

if (num1 > num2){
    console.log('Numero maior' , num1) 
}else{
    console.log('numero maior' ,num2)
}

// Exercício 3
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let nume1 = 60;
let nume2 = 6;
let nume3 = 1;

if (nume1 > nume2) {
    console.log('Numero maior' , nume1);
} else if (nume2 > nume3) {
    console.log('Numero maior' , nume2);
} else {
    console.log('Numero maior' , nume3);
}

// 🚀 Exercício 4
// Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let ang1 = 100
let ang2 = 40
let ang3 = 40
let resultado;

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  resultado = 'Numero invalido'
} else if (ang1 + ang2 + ang3 === 180) {
  resultado = true
}else{
  resultado = false
}
console.log(resultado)

// Exercício 5
// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// ⭐️ Desafio extra, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais. Uma dica é pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).


let peca = 'rainha'

switch (peca.toLowerCase()) {
  case 'rei':
  console.log('O rei pode se mover para qualquer casa porem uma por vez')
    break;
  case 'rainha':
    console.log('a rainha pode fazer todos os movimentos de todas a peças menos a do cavalo')
    break;
  case 'torre':
    console.log('a torre pode se movimentar na vertical e na horizontal')
    break;
  case 'pião':
    console.log('O pião pode se movimentar apenas uma casa e sempre para frente')
    break;
  case 'bispo':
    console.log('O bispo pode se movimentar nas diagonais')
    break;
  case 'cavalo':
    console.log('O cavalo anda em forma de L, 2 casa para frente e uma para a lateral')
    break;
  default:
    console.log('Peça invalida!')
}

// 🚀 Exercício 6: Há um par entre nós
// 6 - Utilize if...else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Faça esse exercício utilizando somente um if.

let number1 = 9
let number2 = 7
let number3 = 1

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log(true)
}else{
  console.log(false)
}

// Exercício 7
// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).
// ⭐️ A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10.
// Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%;
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.

// IR
// Até R$ 1.903,98: isento de imposto de renda;
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// O cálculo deve ser o demonstrado a seguir
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
// R$ 2.670,00 - salário com INSS já deduzido;
// 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
// R$ 142,80 - parcela a ser deduzida do imposto de renda.
// Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
// Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

let salarioBruto = 3000
let inss;

if (salarioBruto < 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}
let salarioBase = salarioBruto - inss
let ir ;

if (salarioBase <= 1903.98) {
  ir = 0
} else if (salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80;
}else if (salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13;
}else{
  ir = (salarioBase * 0.275) - 869.36;
}
 let salarioLiquido = salarioBase - ir;

 console.log(salarioLiquido)













