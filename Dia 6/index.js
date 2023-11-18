let tabuada = Number(prompt('Digite o número desejado'))

console.log('Tabuda do '+tabuada)
for(let contador = 0; contador <= 10; contador++){
    console.log( tabuada + ' x ' + contador + ' = ' + tabuada * contador)
}

console.log('Tabuda do '+(tabuada + 1))
for(let contador = 0; contador <= 10; contador++){
    console.log( (tabuada + 1) + ' x ' + contador + ' = ' + (tabuada + 1) * contador)
}

console.log('Tabuda do '+(tabuada + 2))
for(let contador = 0; contador <= 10; contador++){
    console.log( (tabuada + 2) + ' x ' + contador + ' = ' + (tabuada + 2) * contador)
}