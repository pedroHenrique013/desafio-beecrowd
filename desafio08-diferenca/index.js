/* Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença 
do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D). */

function diferenca(a, b, c, d) {
  let DIFERENCA = a * b - c * d;
  return DIFERENCA;
}

console.log(diferenca(0, 0, 7, 8));
