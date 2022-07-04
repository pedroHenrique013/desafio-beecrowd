function calculoDeProdutos(
  codigoProduto1,
  qtsProdutos1,
  precoProduto1,
  codigoProduto2,
  qtsProdutos2,
  precoProduto2
) {
  let valorTotalProduto1 = qtsProdutos1 * precoProduto1;
  let valorTotalProduto2 = qtsProdutos2 * precoProduto2;
  let valorTotal = valorTotalProduto1 + valorTotalProduto2;

  return valorTotal.toFixed([2]);
}

console.log(calculoDeProdutos(12, 1, 5.3, 16, 2, 5.1));
