let desafio = parseInt(prompt("Quiero ver el desafío N°:"));

while( desafio < 1 || isNaN(desafio)){
    if(desafio === ESC){
        break
    } 
    alert("El desafío ingresado no existe");
    desafio = parseInt(prompt("Quiero ver el desafío N°:"));

}


switch(desafio){
    case 1:
        alert("funciona");
        break;
    case 2:
        alert("Aún no está disponible");
        break;
    case 3:
        alert("Aún no está disponible");
        break;
    case 4:
        alert("Aún no está disponible");
        break;
    case 5:
        alert("Aún no está disponible");
        break;
    case 6:
        alert("Aún no está disponible");
        break;
    default:
        alert("YA BASTA... FREEZER");
}



// do {
//     alert("El desafío ingresado no existe");
//     parseInt(prompt("Quiero ver el desafío N°:"));
// } while (desafio == 0 || isNaN(desafio));