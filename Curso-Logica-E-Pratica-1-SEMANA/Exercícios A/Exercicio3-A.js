let temp = parseInt(prompt('Digite a temperatura atual:'))
if(temp < 15){
    console.log('Frio')
}else if((temp >= 15 && temp <= 25)){
    console.log('Ameno')
}else if((temp >= 26 && temp <= 28)){
    console.log('Normal')
}else if((temp >= 29 && temp <= 36)){
    console.log('Quente')
}else {
    console.log('Torrando')
}