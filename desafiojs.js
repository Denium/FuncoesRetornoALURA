//Criar uma função que exibe "Olá, mundo!" no console.
function OlaMundo(){
  return 'Olá Mundo';
}
console.log(OlaMundo());

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(nome){
  return "Olá " + nome;
}
console.log(nome('valdenio'));

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numero(numero1){
  return numero1*2;
}
console.log(numero(2));

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1,num2,num3){
  return (num1+num2+num3)/3;
}
console.log(media(10,6,6));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numMaior(num1,num2){
  if(num1>num2){
    return num1;
  }
    return num2;
}
console.log(numMaior(1,6));

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroRetorna(numero1){
  return numero1*numero1;
}
console.log(numeroRetorna(11));
