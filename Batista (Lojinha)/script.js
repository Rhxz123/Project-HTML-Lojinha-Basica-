let carrinho = [];

function adicionarAoCarrinho() {
    const produto = {
        nome: 'Conta Free Fire',
        imagem: 'https://freefirebr.com.br/wp-content/uploads/2020/11/2-Conta-com-mais-Curtidas.jpg',
        preco: 'R$ 99,99'
    };
    
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLink = document.getElementById('carrinho-link');
    const carrinhoCount = document.getElementById('carrinho-count');
    const carrinhoItems = document.getElementById('carrinho-items');

    carrinhoCount.textContent = carrinho.length;

    carrinhoItems.innerHTML = '';
    carrinho.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'carrinho-item';
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div>
                <p>${item.nome}</p>
                <p>${item.preco}</p>
            </div>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        carrinhoItems.appendChild(itemElement);
    });
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}
