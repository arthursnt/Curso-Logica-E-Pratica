let produtos = [
    { nome: "Camiseta", preco: 45 },
    { nome: "Tênis", preco: 150 },
    { nome: "Calça", preco: 80 },
    { nome: "Boné", preco: 20 },
]
for(let i = 0; i < produtos.length; i++){
    if(produtos[i].preco > 50){
        console.log(produtos[i].nome);
    }
}