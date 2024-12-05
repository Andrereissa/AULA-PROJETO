let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(itemName, price, quantity) { 
  quantity = parseInt(quantity); // converto texto para número inteiro
  const cartItem = { item: itemName, quantity, price }; // declaro a váriavel (objeto),e popula com as chaves.
  cart.push(cartItem); // coloco objeto cartItem dentro da lista CartItem
  updateCart(); // chama a função
  
}

// Função para atualizar o carrinho
function updateCart() {
  const cartItems = document.getElementById('cartItems'); // está referenciando o item html na váriavel.
  cartItems.innerHTML = '';

  let totalPrice = 0; // varivavel inicializada com valor 0
  cart.forEach((cartItem, index) => {  // itera sobre a lista
    const listItem = document.createElement('li'); // cria um elemento html em formato de lista.
    listItem.innerHTML = `     
      ${cartItem.quantity}x ${cartItem.item} - R$${(cartItem.price * cartItem.quantity).toFixed(2)}
      <span class="remove-icon" onclick="removeFromCart(${index})">−</span>
    `; // preenche o elemento html que foi criado de acordo com cada interação
    cartItems.appendChild(listItem);
    totalPrice += cartItem.price * cartItem.quantity;
  });

  document.getElementById('totalPrice').textContent = `Total: R$${totalPrice.toFixed(2)}`; // escreve o total após a interação, após juntar toda a lista.

  const cartSidebar = document.querySelector('.cart-sidebar');
  if (cart.length === 0) { // se for igual a 0 ele retorna o carrinho está vázio.
    cartSidebar.classList.add('empty-cart');
    cartItems.innerHTML = '<p>Carrinho Vazio</p>';
    document.getElementById('totalPrice').textContent = ''; 
  } else {
    cartSidebar.classList.remove('empty-cart');
  }

  // Salvar o carrinho no localStorage
  Storage.setItem('cartItems', JSON.stringify(cartlocal)); // Salva transformar o cartItem como JSON no localStorage
}


// Função para remover itens do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Função para finalizar o pedido
function submitOrder() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio. Adicione itens antes de finalizar o pedido!");
    return;
  }

  // Redirecionar para a página de pagamento
  window.location.href = "checkout/index.html";
}



// Função de pesquisa para filtrar os itens do menu
function pesquisarProduto() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    let itemName = card.querySelector('h3').textContent.toLowerCase();
    if (itemName.includes(input)) {
      card.style.display = 'block'; // Mostra o card que corresponde à pesquisa
    } else {
      card.style.display = 'none'; // Oculta o card que não corresponde
    }
  });
}