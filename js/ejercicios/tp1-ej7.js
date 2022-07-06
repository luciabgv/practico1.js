//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));
console.log(numero1);
console.log(numero2);
console.log(numero3);

if (numero1 > numero2) {
  console.log("n1 es mayor que n2");
  document.write("el primer numero es el mayor, numero ingresado " + numero1);
} else if (numero2 > numero3) {
    console.log('El n2 es mayor al n3')
  document.write(
    "el segundo numero es mayor que el primer numero, numero ingresado" + numero2);
} else if (numero3 > numero1){
    console.log('el n3 es mayor a n1 y n2')
    document.write('el numero 3 es mayor al numero 1 y 2, numero ingresado '+ numero3);
}


/*
if(b>a){
    console.log('b es mayor que a');
} else if (b>c){
    console.log('si b es mayor que c y a');
}
if(c>a){
    console.log('c es mayor que a');
} else if (c>b){
    console.log('si c es mayor que b y a ');
}*/
