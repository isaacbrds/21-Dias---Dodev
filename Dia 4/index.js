let fome = prompt('Você está com fome? ')
let dinheiro = prompt('Você está com Dinheiro? ')
let aberto = prompt('O restaurante está com aberto? ')


if (fome !== 'sim' || dinheiro !== 'sim'){
    console.log('Jantar em casa!')
}else if(fome === 'sim' && dinheiro === 'sim' && aberto === 'não'){
    console.log('Peça um delivery')
}else if(fome === 'sim' && dinheiro === 'sim' && aberto === 'sim'){
    console.log('Hoje seu jantar será no seu restaurante preferido!')
}

