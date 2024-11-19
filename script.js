
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    // Add more products as needed
    ];
    // Cart to store added items
    var cart = [];
    // Function to display products in the catalog
    function displayCatalog() {
    const catalogSection = document.querySelector('.catalog');
    products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    catalogSection.appendChild(productCard);
    });
    }
    // Function to add items to the cart
    function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    cart.push(selectedProduct); 
    // Add the selected product to the cart
    updateCartDisplay();
    }
    // Function to update the cart display
    function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; 
    // Clear the previous items in the cart
    let totalAmount = 0;
    cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
    cartItemsContainer.appendChild(cartItem);
    totalAmount += item.price;
    });
    const totalAmountDisplay = document.getElementById('totalAmount');
    totalAmountDisplay.textContent = totalAmount.toFixed(2); // Update the total amount in the cart
    }
    // Function to handle the checkout process
    function checkout() {
    cart = []; 
    // Clear the cart
    updateCartDisplay();
    alert('Thank you for your purchase!');
    }
    // Display the catalog when the page loads
    window.onload = displayCatalog;
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
    //Submit the form
    form.submit();
    }
    });
    function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (username.length< 4) {
    alert('Username must be at least 4 characters');
    return false;
    }
    if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
    }
    if (!passwordRegex.test(password)) {
    alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number');
    return false;
    }
    if (fullName.split(' ').length< 2) {
    alert('Please enter your full name');
    return false;
    }
    return true;
    }
    // Function to validate login form
    function validateLogin() {
    const email= document.getElementById('email').value;
    const password = document.getElementById('loginPassword').value;
    if (email.trim() === '' || password.trim() === '') {
    alert('Please enter both username and password.');
    return false;
    }
    else
    return true;
    }