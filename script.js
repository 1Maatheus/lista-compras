// Função para adicionar um produto
function adicionarProduto() {
  var inputProduto = document.getElementById("inputProduto");
  var nomeProduto = inputProduto.value;

  if (nomeProduto.length === 0) {
    alert("Nenhum produto adicionado à lista.");
  } else {
    // Verifica se já existe algum produto no localStorage
    var produtos = obterProdutosDoLocalStorage();

    // Adiciona o novo produto ao array de produtos
    produtos.push(nomeProduto);

    // Salva o array de produtos atualizado no localStorage
    salvarProdutosNoLocalStorage(produtos);

    // Limpa o campo de input
    inputProduto.value = "";

    // Atualiza a lista de produtos
    atualizarListaProdutos(produtos);
  }
}

// Função para remover um produto
function removerProduto(index) {
  // Verifica se já existe algum produto no localStorage
  var produtos = obterProdutosDoLocalStorage();

  // Remove o produto do array
  produtos.splice(index, 1);

  // Salva o array de produtos atualizado no localStorage
  salvarProdutosNoLocalStorage(produtos);

  // Atualiza a lista de produtos
  atualizarListaProdutos(produtos);
}

// Função para atualizar a lista de produtos na página
function atualizarListaProdutos(produtos) {
  var listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = "";

  // Itera sobre os produtos e cria um link de remoção para cada um
  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];

    var li = document.createElement("li");
    li.innerHTML =
      produto + " <a href='#' onclick='removerProduto(" + i + ")'>Remover</a>";

    listaProdutos.appendChild(li);
  }
}

// Função para obter os produtos do localStorage
function obterProdutosDoLocalStorage() {
  var produtos = localStorage.getItem("produtos");

  // Se não houver produtos no localStorage, retorna um array vazio
  if (produtos) {
    return JSON.parse(produtos);
  } else {
    return [];
  }
}

// Função para salvar os produtos no localStorage
function salvarProdutosNoLocalStorage(produtos) {
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

// Ao carregar a página, obtém os produtos do localStorage e atualiza a lista de produtos
window.onload = function () {
  var produtos = obterProdutosDoLocalStorage();
  atualizarListaProdutos(produtos);
};
