let quantidadeDeNumeros = Number(prompt('Digite a quantidade de números que deseja inserir'))
let array = [];
let arrayContrario = [];

for(let contador = 0; contador < quantidadeDeNumeros ; contador++){
    let numero = Number(prompt('Digite o valor do numero'));
    array[contador] = numero;
    arrayContrario[quantidadeDeNumeros - contador - 1] = numero;
}

console.log(array, arrayContrario)