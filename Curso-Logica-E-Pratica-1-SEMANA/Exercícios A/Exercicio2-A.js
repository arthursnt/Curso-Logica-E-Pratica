let preco = parseInt(prompt("Digite o Preço:"))
if(preco < 10){
    console.log('Barato');
}else if((preco >= 10 && preco <= 50)){
    console.log('Médio');
}else {
    console.log('Caro');
}
