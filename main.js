// function distancia(){
//     const velocidad = parseInt(prompt("Cual es la velocidad ?"));
//     const tiempo = parseInt(prompt("Cual es la tiempo ?"));
//     const result = velocidad * tiempo;
    
//     console.log(`el resultado es: ${result}`);
// }

// distancia()

// function tiempo(){
//     const distancia = parseInt(prompt("Cual es la distancia ?"));
//     const velocidad = parseInt(prompt("Cual es la velocidad ?"));
//     const result = distancia / velocidad;
    
//     console.log(`el resultado es: ${result}`);
// }

// tiempo()

// function velocidad(){
//     const distancia = parseInt(prompt("Cual es la distancia ?"));
//     const tiempo = parseInt(prompt("Cual es la tiempo ?"));
//     const result = distancia / tiempo;
    
//     console.log(`el resultado es: ${result}`);
// }

// distancia()


// Calculadora de la tabla

// function tabla(valor){
//     for(let i = 0; i <= 12; i++){
//         let result = `La tabla del ${valor} X ${i} : ${valor * i}`;
//         console.log(result)
//     } 
// }

// tabla(20)


// Algoritmo para transformar texto en Código Morse.
// const morseCode = {
//     a:'· —',
//     b:'— · · ·',
//     c:'— · — ·',
//     d:'— · ·',
//     e:'·',
//     f:'· · — ·',
//     g:'— — ·',
//     h:'· · · ·',
//     i:'· ·',
//     j:'· — — —',
//     k:'— · —',
//     l:'· — ·',
//     m:'— —',
//     n:'— ·',
//     ñ:'— — · — —',
//     o:'— — —',
//     p:'· — — ·',
//     q:'— — · —',
//     r:'· — ·',
//     s:'· · ·',
//     t:'—',
//     u:'· · —',
//     v:'· · · —',
//     w:'· — —',
//     x:'— · · —',
//     y:'— · — —',
//     z:'— — · ·',
// }



// function textMorse(text){
//     let txt = " ";
//     for(const x of text){
//         txt = txt+ "" + morseCode[x];
        
//     } alert(txt)
// }
// textMorse('hola');



// Algoritmo para transformar Código Morse en texto.

// const morseCode = {
//     · —: "a",
//     — · · ·: "b",
//     — · — ·: "c"
//     — · ·:"d",
//     ·:"e",
//     · · — ·:"f"
//     — — ·:"g"
//     · · · ·:"h"
//     · ·:"i"
//     · — — —:"j"
//     — · —:"k"
//     · — ·:"l"
//     — —:"m"
//     — ·:"n"
//     — — · — —:"ñ"
//     — — —:"o"
//     · — — ·:"p"
//     — — · —:"q"
//     · — ·:"r"
//     · · ·:"s"
//     —:"t"
//     · · —:"m"
//     · · · —:"v"
//     · — —:"w"
//     — · · —:"x"
//     — · — —:"y"
//     — — · ·:"z"
// }



// function morseText(text){
//     let txt = " ";
//     for(const x of text){
//         txt = txt+ "" + morseCode[x];
        
//     } alert(txt)
// }
// morseText('hola');

// Algoritmo para codificar mensajes utilizando Cifrado de César.


// const textCesar = {
//     a:"n",
//     b:"o",
//     c:"p",
//     d:"q",
//     e:"r",
//     f:"s",
//     g:"t",
//     h:"u",
//     i:"v",
//     j:"w",
//     k:"x",
//     l:"y",
//     m:"z",
//     n:"a",
//     o:"b",
//     p:"c",
//     q:"d",
//     r:"e",
//     s:"f",
//     t:"g",
//     u:"h",
//     v:"i",
//     w:"j",
//     x:"k",
//     y:"l",
//     z:"m",
// }



// function cesarCode(text){
//     let txt = " ";
//     for(const x of text){
//         txt = txt+ "" + textCesar[x];
        
//     } alert(txt)
// }
// cesarCode('hola');

// Algoritmo para decodificar mensajes utilizando Cifrado de César.

// const cesarText = {
//    n:"a",
//    o:"b",
//    p:"c",
//    q:"d",
//    r:"e",
//    s:"f",
//    t:"g",
//    u:"h",
//    v:"i",
//    w:"j",
//    x:"k",
//    y:"l",
//    z:"m",
//    a:"n",
//    b:"o",
//    c:"p",
//    d:"q",
//    e:"r",
//    f:"s",
//    g:"t",
//    h:"u",
//    i:"v",
//    j:"w",
//    k:"x",
//    l:"l",
//    m:"z",



// }



// function cesarCode1(text){
//     let txt = " ";
//     for(const x of text){
//         txt = txt+ "" + cesarText[x];
        
//     } alert(txt)
// }
// cesarCode1('ubyn');



// Algorimo que me permita escribir numero y me retorne una lista desde 1 hasta el numero indicado (int =5 out = 1,2,3,4,5)

// function btn1() {
//     let text = " ";
//     const num = prompt ("Escribe un numero y sera retonado una escala desde el 1 hasta el numero introducido");
//     for (let i = 1; i < num; i++ ) {
//         text = text + "," + i;
//     } alert(text);
// }

// btn1()


// Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 (int = 5; out = 5, 4, 3, 2, 1).

// function btn2() {
//     let text = " ";
//     const num = prompt ("Escribe un numero y sera retonado una escala desde el introducido al 1");
//     for (let i = num; i >= 1; i-- ) {
//         text = text + "," + i;
//     } alert(text);
// }

// btn2()

// Algoritmo que me permita escribir un número y me retorne una lista de números desde 1 hasta el número indicado separando pares e impares.
// (int = 5; outOdd = 1, 3, 5; outEven = 2, 4)

// function btn3() {
//     let text = " ";
//     let text1 =" ";
//     const num = prompt ("Escribe un numero y sera retonado una escala desde el 1 hasta el numero introducido");
//     for (let i = 1; i < num; i++ ) {
//         if(i % 2 == 0){
//             text = text + "," + i;
//         } else {
//             text1 = text1 + "," + i;
//         }
//     } alert(`Los numero pares son ${text} y los numeros impares son ${text1}`);
// }

// btn3()

// Algoritmo que me permita escribir un número y me retorne una lista de números desde el número indicado hasta 1 separando pares e impares.
// (int = 5; outOdd = 5, 3, 1; outEven = 4, 2)

// function btn4() {
//     let text = " ";
//     let text1 =" ";
//     const num = prompt ("Escribe un numero y sera retonado una escala desde el 1 hasta el numero introducido");
//     for (let i = num; i >= 1; i-- ) {
//         if(i % 2 == 0){
//             text = text + "," + i;
//         } else {
//             text1 = text1 + "," + i;
//         }
//     } alert(`Los numero pares son ${text} y los numeros impares son ${text1}`);
// }



// Algoritmo visualizar la cantidad de dígitos que se le indique de la sucessión de fibonacci.
// (int = 5; out = 0, 1, 1, 2, 3)

// function fibonacci(limit){
//     const arrib = [0,1];
//     for(let i = 2; i <+ limit; i++){
//         arrib.push(arrib[i - 1] +  arrib[i - 2]);
//     }
//     return arrib;
// }

// console.log(fibonacci(20));