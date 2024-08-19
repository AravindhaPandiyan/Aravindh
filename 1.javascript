document.addEventListener('DOMContentLoaded', function() {
    const cartCount = document.getElementById('cart-count');
    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productElement = this.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            const product = cart.find(item => item.id === productId);
            if (product) {
                product.quantity += 1;
            } else {
                cart.push({ id: productId, price: productPrice, quantity: 1 });
            }

            updateCartCount();
        });
    });

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
});
