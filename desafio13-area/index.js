/*Escreva um programa que leia três valores com ponto flutuante de dupla precisão: 
A, B e C. Em seguida, calcule e mostre:

a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B. */

function area(a, b, c) {
  const pi = 3.14159;
  let areaTrianguloRetangulo = (a * c) / 2;
  let areaDoCirculo = pi * c ** 2;
  let areaTrapezio = ((a + b) / 2) * c;
  let areaQuadrado = b ** 2;
  let areaRetangulo = a * b;

  return `Triangulo: ${areaTrianguloRetangulo.toFixed([3])} 
Circulo: ${areaDoCirculo.toFixed([3])} 
Trapézio: ${areaTrapezio.toFixed([3])}
Quadrado: ${areaQuadrado.toFixed([3])}
Retangulo: ${areaRetangulo.toFixed([3])}`;
}

console.log(area(3.0, 4.0, 5.2));
