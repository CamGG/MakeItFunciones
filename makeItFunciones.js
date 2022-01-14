//Ejercicio 1
//Escribe una función llamada `numDuplicados` que reciba un string y 
//retorne el número de caracteres que aparecen más de una vez.

function numDuplicados(a){
        duplicada=[]
        contador=duplicada.length
    for(var i = 0; i < a.length; i++) {
        if(a[i+1] == a[i]){
            duplicada.push(a[i])
        }else if(a[i] == a[i+2]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+3]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+4]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+5]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+6]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+7]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+8]){
            duplicada.push(a[i])

        }else if(a[i] == a[i+9]){
            duplicada.push(a[i])

        }
       
    
    }
    const datos = new Set(duplicada)
    let resultado = [...datos]
    
    return resultado.length
    
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abcc")); // 0 


//Ejercicio 2
//Escribe una función llamada frecuencias que reciba una cadena de texto 
// y retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)

function frecuencias(frase){

    let array = frase.split("");
    let palabra = {};
    
    for (let i in array){
        if (array[i] == " "){
            continue;
        }else{
            if (palabra[array[i]]){
                palabra[array[i]]++; 
            }else{
                palabra[array[i]] = 1; 
            }
            
        }
        
    }
    return palabra;
}


console.log(frecuencias("hola mundo"));
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"));
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }

//Ejercicio3
//Crea una función llamada caracteresEnComun que recibe dos 
//argumentos: str1 y str2. La función debe retornar un arreglo 
//con todos los caracteres que las dos cadenas tienen en común.

function caracteresEnComun(str1,str2){
    resultado=[]
    cadena = str1.split("")
    cadenaDos = str2.split("")
    for(let i in cadena){
        for(let j in cadenaDos){
            if(cadena[i]==cadenaDos[j]){
               resultado.push(cadenaDos[j])
               break
            }
        }
    }return resultado



}
console.log(caracteresEnComun("hola", "mundo"))
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye"))
//Ejercicio4
//Escribir una función llamada `ajustarTexto` que reciba dos argumentos:  un string y un número (que representa una longitud).  
//La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al número, debes recortar la cadena. 
//De lo contrario agrega espacios en blanco hasta completar la longitud.

function ajustarTexto(str , max){
    let texto=[]
    textoLetras=str.split("");
    if (textoLetras.length>max){
        for (let i = 0; i < max ; i++) {
            texto.push(textoLetras[i]);
        }
    }else{
        texto=textoLetras
        for (let i = textoLetras.length ; i < max ; i++) {
            texto.push(" ");
        }
    }
    let mostrar="";
    for (let i = 0; i < texto.length; i++) {
        mostrar=mostrar+texto[i];
    }
    return mostrar;
}

console.log(ajustarTexto("" , 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "
//Ejercicio5
//Comprobar si el texto a es anagrama de b


function Anagrama (s,t){
    palabraUno = s.split("").sort();
    palabraDos = t.split("").sort();
    areAnagrams = true;
    for (i=0; i<palabraUno.length && areAnagrams; i++) {
      if(palabraUno.length===palabraDos.length) {
        if (palabraUno[i]===palabraDos[i]){
        } else {
          
          areAnagrams = false;
        }
      }
      else {
        areAnagrams = false;
      }
  
    }
    if (areAnagrams) {
    } else {
    }
      return areAnagrams;
  }
  





console.log(Anagrama("anagram" , "nagaram"))
console.log(Anagrama("rat" , "car"))
//Ejercicio6
//Mover Ceros 

function ceros(matriz) {
    let listaOrdenada = [];
    let contador = 0;
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i] == 0) {
            contador++;
        } else {
            listaOrdenada.push(matriz[i]);
        }
    }

    for (let i = 0; i < contador; i++) {
        listaOrdenada.push(0);
    }

    return listaOrdenada;
}

console.log(ceros([0,1,0,3,12]))

//Ejercicio7
//indices

function matriz(n, objetivo) {    

    for(let i = 0; i<n.length; i++){
        for(let j = i; j<n.length; j ++){

            if(i!=j){
                if((n[i]+ n[j])=== objetivo){
                    return [i,j]
                }
            }
        }
    }
};

console.log(matriz([2,7,11,15],9));