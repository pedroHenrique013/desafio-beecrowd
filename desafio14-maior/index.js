/* Faça um programa que leia três valores e apresente o maior dos três valores 
lidos seguido da mensagem “eh o maior”. */

function ohMaior(a, b, c) {
  if (a > b && a > c) {
    return a + " eh o maior";
  } else if (b > a && b > c) {
    return b + " eh o maior";
  } else {
    return c + " eh o maior";
  }
}

console.log(ohMaior(700, 140, 106));
