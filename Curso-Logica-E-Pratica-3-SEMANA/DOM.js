function atualizarPreco(){
    let valor = document.getElementById('produtos').value
    let preco = document.getElementById('resultadoPreco')
    preco.textContent = valor;
}