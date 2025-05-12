let lado1 = parseInt(prompt("Digite o tamanho do lado 1 do Triângulo"))
let lado2 = parseInt(prompt("Digite o tamanho do lado 2 do Triângulo"))
let lado3 = parseInt(prompt("Digite o tamanho do lado 3 do Triângulo"))

let triangle = lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1;

switch (true){
    case (lado1 === lado2 && lado2 === lado3):
        console.log("Triângulo Equilátero: todos os lados são iguais");
        break;
    
    case (lado1 === lado2 || lado1 === lado3 || lado2 === lado3):
        console.log("Triângulo Isósceles: dois lados são iguais");
        break;

    case (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3):
        console.log("Triângulo Escaleno: todos os lados são diferentes");
        break;

    default:
        console.log("ERRO");
}