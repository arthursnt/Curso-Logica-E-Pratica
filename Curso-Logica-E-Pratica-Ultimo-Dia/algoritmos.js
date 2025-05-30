function mostrarExercicios(id){
    const ex1 = document.getElementById("ex1");
    const ex2 = document.getElementById("ex2");
    const ex3 = document.getElementById("ex3");
    const ex4 = document.getElementById("ex4");
    const ex5 = document.getElementById("ex5");

    ex1.style.display = "none";
    ex2.style.display = "none";
    ex3.style.display = "none";
    ex4.style.display = "none";
    ex5.style.display = "none";

    document.getElementById(id).style.display = "block"
}

document.getElementById(btn1).addEventListener('click', () => mostrarExercicios('ex1'));
document.getElementById(btn2).addEventListener('click', () => mostrarExercicios('ex2'));
document.getElementById(btn3).addEventListener('click', () => mostrarExercicios('ex3'));
document.getElementById(btn4).addEventListener('click', () => mostrarExercicios('ex4'));
document.getElementById(btn5).addEventListener('click', () => mostrarExercicios('ex5'));
