/*estructura if
if (condicion logica){
    todo el codigo a ejecutar si se cumple la condicion o si la condicion es true
}else{    todo el codigo a ejecutar si no cumple la condicion o si la condicion es false
 }

*/



//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt('Ingrese un primer numero'));
let numero2 = parseInt(prompt('Ingrese un segundo numero'));

console.log(numero1);
console.log(numero2);

if ( numero1 > numero2 ){
    console.log('n1 es mayor que n2');
    document.write('el primer numero es el mayor, numero ingresado ' + numero1)

}else{
    if(numero2 > numero1){
        document.write('el segundo numero es mayor que el primer numero, numero ingresado' + numero2 )
    } else{
        document.write('los numeros ingresados son iguales, numero ingresado' + numero2)
    }

}