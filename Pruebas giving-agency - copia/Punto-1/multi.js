//Realizar una función que multiplique 2 números sin usar el signo de multiplicación (*).

//declaramos variables
var n1 = 5;
var n2 = 5;
var suma = 0;

//funcion y logica 
function multiplicarNumero(n1,n2){
        for(var i = 1; i <= n1; i++) {
        suma = suma + n2;
    }
};
//llamada a la funcion
multiplicarNumero(n1,n2);
alert(n1+" * "+n2+" = "+suma);

