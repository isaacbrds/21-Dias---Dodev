let primeiro = Number(prompt('Digite o primeiro número'))
let segundo = Number(prompt('Digite o segundo número'))
let operacao = prompt('Digite a operação desejada (+ - * /)')


switch(operacao){
    case '+':
        console.log('O resultado foi: ' + (primeiro + segundo))
        break;
    case '-':
        console.log('O resultado foi: ' + (primeiro - segundo))
        break;
    case '*':
        console.log('O resultado foi: ' + (primeiro * segundo))
        break;
    case '/':
        console.log('O resultado foi: ' + (primeiro / segundo))
        break;
    default:
        console.log('Não sei sua idade cara!')
        break;
}