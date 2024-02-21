alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

// ENQUANTO chute for diferente de numeroSecreto
while (chute != numeroSecreto){

chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    if (chute > numeroSecreto) {
        alert(`você errou o numero secreto é menor que ${chute}`);
    } else {
        alert(`você errou o numero secreto é maior que ${chute}`);
    }
    tentativas++; // tentativas++ acrecenta 1 de valor na variavel 'tentativas' cada vez que o codigo for executado
    
}
}

