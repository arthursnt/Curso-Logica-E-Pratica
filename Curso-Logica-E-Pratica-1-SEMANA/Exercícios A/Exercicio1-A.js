let saldo = parseInt(prompt("Digite seu Saldo:"))
if(saldo > 5000){
    console.log('Saldo Excelente');
}else if((saldo >= 1000 && saldo <= 5000)){
    console.log('Saldo Bom');
}else {
    console.log('Saldo Baixo');
}