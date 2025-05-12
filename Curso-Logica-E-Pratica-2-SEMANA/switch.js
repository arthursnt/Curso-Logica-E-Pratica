let mes  = parseInt(prompt("Digite o número do mês:"))

switch (mes){
    case 12:
    case 1:
    case 2:
        console.log("É um mês de verão")
        break;
    case 3:
    case 4:
    case 5:
        console.log("É um mês de outono")
        break;
    case 6:
    case 7:
    case 8:
        console.log("É um mês de inverno")
        break;
    case 9:
    case 10:
    case 11:
        console.log("É um mês de primavera")
        break;
    default:
        console.log("Mês invalido")
}