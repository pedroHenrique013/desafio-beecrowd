/* Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a 
soma de A e B atribuindo o seu resultado na variável X. Imprima X 
conforme exemplo apresentado abaixo. Não apresente mensagem alguma 
além daquilo que está sendo especificado e não esqueça de imprimir o 
fim de linha após o resultado, caso contrário, você receberá 
"Presentation Error". */

function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Os valores devem ser números");
  }
  let x = a + b;
  return x;
}

try {
  console.log(soma(1, 2));
} catch (error) {
    console.log(error.message);
}
