console.log('Seja Bem vindo!');

// todas as variaveis do script
let nome = prompt('Qual seu nome?');
let ling = prompt('Qual linguagem de programação você mais gosta?');
let valor1 = Number(prompt('digite um numero:'));
let valor2 = Number(prompt('digite um numero:'));
let resultado = valor1 + valor2;
let resultado2 = valor1 - valor2;
let idade = prompt('Qual a sua idade?');
let numero = Number(prompt('Digite um numero:'))
let cont = 1;
let nota = Number(prompt('Digite sua nota de 0 a 10:'));
let nr = Number(parseInt(Math.random() * 1000 + 1));

// informações inicias que aparecem no console 
console.log(`Olá ${nome}`);
alert(`Olá ${nome}`);
console.log(`muito bem então você gosta de ${ling}`);

// mostrando no console o valor das respectivas variaves valor1 e valor2 e amostrando sua soma e sua diferença nas variaveis resultado e resultado2 respectivamente
console.log(`a soma entre ${valor1} e ${valor2} é igual a ${resultado}`);
console.log(`a diferença entre ${valor1} e ${valor2} é igual a ${resultado2}`);

// comparando a variavel idade para saber se é maior de idade
if (idade >= 18) {
    console.log(`você tem ${idade} anos de idade, é maior de idade.`);
} else {
    console.log (`você tem ${idade} anos de idade, é menor de idade.`);
}

// comparando a variavel numero para saber se é neutro, negativo ou positivo
if (numero == 0){
    console.log(`o numero ${numero} é um numero neutro`);
    
} else if (numero < 0) {
    console.log(`o numero ${numero} é um numero negativo`);
} else {
    console.log(`o numero ${numero} é um numero positivo`);
}

// loop da variavel cont que conta de 1 a 10
while (cont != 11) {
console.log(cont)
cont++
}

// comparando a variavel nota para saber se foi aprovado
if (nota >= 7){
    console.log(`sua nota é ${nota} você foi aprovado`)
} else {
    console.log (`sua nota é ${nota} voce foi reprovado`)
}

// enviando a msg no console da variavel nr que geral um numero aleatorio entre 1 e 1000.
console.log(nr);


/*DESAFIOS EXECUTADOS NESSE SCRIPT

Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

Use um loop while para imprimir os números de 1 a 10 no console.

Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/