//Escribe un programa que pida un número y diga si es divisible por 2
function divisible2 ( a ) {
    if ( a % 2 == 0){
        console.log('es divisible por 2');
        return true;
    }
    if ( a % 2 != 0){
        console.log('es divisible por 2');
        return false
    }
}
console.log(divisible2 (50));
console.log(divisible2 (15));
console.log(divisible2 (9));