let nome = prompt('Digite seu nome')
let cpf = prompt('Digite seu cpf')
let opcao = 's' 
let saldo = 100;
let valor = 0;
let escolha = '';
let maior = 0;
let media = 0;
let contador = 0;
while(opcao !== 'n'){
    contador++;
    escolha = prompt('Digite se deseja depositar ou sacar');
    valor = Number(prompt('Digite o valor que deseja realizar a ação'))
    
    

    if(escolha === 's'){
        saldo -= valor
    }else{
        saldo += valor
    }

    if (maior < valor){
        maior = valor;
        console.log(`Esse é o maior valor até agora: ${maior}`)
    }

    media = valor / contador

    console.log(`o seu saldo total é de: ${saldo}`)
    console.log(`Essa é a média dos depósitos: ${media}`)

    opcao = prompt('Deseja continuar? ');
    
}