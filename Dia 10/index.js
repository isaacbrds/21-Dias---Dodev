let inicio = Number(prompt('Digite o número que deseja inserir'))
let array = [];

array[0] = inicio - 1
array[1] = inicio

for(let contador = 2; contador < 10 ; contador++){
    array[contador] = array[contador - 1] + array[contador - 2];
}

console.log(array)