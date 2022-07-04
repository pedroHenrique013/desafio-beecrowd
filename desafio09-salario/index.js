/* Escreva um programa que leia o número de um funcionário, seu número de horas 
trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. 
A seguir, mostre o número e o salário do funcionário, com duas casas decimais. */

function salario(qtdFuncionario, hrsTrabalhadas, valorPorHora) {
  return `NUMBER ${qtdFuncionario}
SALARY ${hrsTrabalhadas * valorPorHora}`;
}

console.log(salario(25, 100, 5.5));
