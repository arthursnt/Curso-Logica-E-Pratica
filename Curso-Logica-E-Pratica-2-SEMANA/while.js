let notas = [8, 7.5, 6, 9, 10];
let i = 0;
let soma = 0;

while (i < notas.length){
    soma+= notas[i];
    i++;
}

let media = soma / notas.length
if (media >=7){
    console.log("Turma acima da média!");
}else{
    console.log("Turma abaixo da média!");
}