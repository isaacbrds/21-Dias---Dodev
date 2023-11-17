let opcao = prompt('Digite a opção desejada (Abastecer com gasolina,Abastecer com alcool ou calibrar penus)')
let valor = 0

switch(opcao){
    case 'gasolina':
        valor = Number(prompt('Digite o valor que deseja abastecer'))
        console.log('Você abasteceu : ' + Math.round(valor/5) + ' litros de gasolina')
        break;
    case 'alcool':
        valor = Number(prompt('Digite o valor que deseja abastecer'))
        console.log('Você abasteceu : ' + Math.round(valor/3) + ' litros de alcool')
        break;
    case 'calibrar':
        console.log('Pneus calibrados com sucesso!')
        break;
    default:
        console.log('Não sei sua idade cara!')
        break;
}