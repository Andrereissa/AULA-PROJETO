let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(itemName, price, quantity) {
  quantity = parseInt(quantity);
  const cartItem = { item: itemName, quantity, price };
  cart.push(cartItem);
  updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  let totalPrice = 0;
  cart.forEach((cartItem, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${cartItem.quantity}x ${cartItem.item} - R$${(cartItem.price * cartItem.quantity).toFixed(2)}
      <span class="remove-icon" onclick="removeFromCart(${index})">−</span>
    `;
    cartItems.appendChild(listItem);
    totalPrice += cartItem.price * cartItem.quantity;
  });

  document.getElementById('totalPrice').textContent = `Total: R$${totalPrice.toFixed(2)}`;

  const cartSidebar = document.querySelector('.cart-sidebar');
  if (cart.length === 0) {
    cartSidebar.classList.add('empty-cart');
    cartItems.innerHTML = '<p>Carrinho Vazio</p>';
    document.getElementById('totalPrice').textContent = '';
  } else {
    cartSidebar.classList.remove('empty-cart');
  }

  // Salvar o carrinho no localStorage
  localStorage.setItem('cartItems', JSON.stringify(cart));
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