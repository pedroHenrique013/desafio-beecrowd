/*Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de 
vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% 
de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, 
com duas casas decimais. */

function salarioComBonus(nomeDoVendedor, salario, totalDeVendas) {
  let salarioComBonus = salario + totalDeVendas * 0.15;
  return `TOTAL ${salarioComBonus.toFixed([2])}`;
}

console.log(salarioComBonus("João", 1700.0, 1230.5));
