let cart = [];
let total = 0;

// function addToCart(product, price) {
//     cart.push({ product, price });
//     total += price;

//     // Update the cart items and total in the HTML
//     updateCartView();
// }


function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    // Update the cart items and total in the HTML
    updateCartView();
}

function updateCartView() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // cartItems.innerHTML = '';
    // cart.forEach(item => {
    //     const li = document.createElement('li');
    //     li.textContent = `${item.product}: $${item.price}`;
    //     cartItems.appendChild(li);
    // });

    // cartTotal.textContent = total;
    cartItems.innerHTML = '';
cart.forEach(item => {
    const li = document.createElement('li');
    const productImage = document.createElement('img');
    
    // Set the image source, alt text, and style
    productImage.src = item.image; // Replace 'image' with the actual property name for the image URL
    productImage.alt = item.product;
    productImage.style.maxWidth = '50px'; // Set the desired image width
    
    // Create a text element for the product name and price
    const productInfo = document.createElement('span');
    productInfo.textContent = `${item.product}: $${item.price}`;
    
    // Append the image and product info to the list item
    li.appendChild(productImage);
    li.appendChild(productInfo);
    
    // Append the list item to the cart items list
    cartItems.appendChild(li);
});

cartTotal.textContent = total;

}

function checkout() {
    // Implement checkout logic (e.g., payment processing) here
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCartView();
}
function order() {
    // Implement checkout logic (e.g., payment processing) here
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCartView();
}

function updateCartView() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // cartItems.innerHTML = '';
    // cart.forEach(item => {
    //     const li = document.createElement('li');
    //     li.textContent = `${item.product}: $${item.price}`;
    //     cartItems.appendChild(li);
    // });

    // cartTotal.textContent = total;
    cartItems.innerHTML = '';
cart.forEach(item => {
    const li = document.createElement('li');
    const productImage = document.createElement('img');
    
    // Set the image source, alt text, and style
    productImage.src = item.image; // Replace 'image' with the actual property name for the image URL
    productImage.alt = item.product;
    productImage.style.maxWidth = '50px'; // Set the desired image width
    
    // Create a text element for the product name and price
    const productInfo = document.createElement('span');
    productInfo.textContent = `${item.product}: $${item.price}`;
    
    // Append the image and product info to the list item
    li.appendChild(productImage);
    li.appendChild(productInfo);
    
    // Append the list item to the cart items list
    cartItems.appendChild(li);
});

cartTotal.textContent = total;

}

function checkout() {
    // Implement checkout logic (e.g., payment processing) here
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCartView();
}
let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }