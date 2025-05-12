let soma = 0;
let num = parseInt(prompt("Digite um número"));

while(num != 0){
    soma += num;
    num = parseInt(prompt("Digite novamente!"));
}
alert("A soma total foi:" + soma)