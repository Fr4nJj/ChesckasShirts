const products = [
    { id: 1, name: "Classic White T-Shirt", price: 15, image: "https://i.ibb.co/mFFpzW60/38cd479d-d451-4c47-9fdc-aecf35f9ffeb.jpg" },
    { id: 2, name: "Black Simple Tee", price: 20, image: "https://i.ibb.co/7tKfrnFk/8e609b41-c3ce-4f83-9362-c814f5bc1d94.jpg" },
    { id: 3, name: "Blue Cotton Shirt", price: 18, image: "https://i.ibb.co/LDDDKM9b/003753a6-7e37-4e6e-8761-890fd24ea23d.jpg" },
    { id: 4, name: "Red Cotton T-Shirt", price: 22, image: "https://i.ibb.co/QvtBmkFf/966c4c69-3762-4099-a78c-2f3acc99e4b6.jpg" },
    { id: 5, name: "Green Casual Tee", price: 17, image: "https://i.ibb.co/6Rd9NYfb/cab22186-26b5-43bf-8b0a-777b5eadd5d1.jpg" },
    { id: 6, name: "Yellow Summer Tee", price: 19, image: "https://i.ibb.co/99wm0hLB/862ec10b-0470-42d7-a7b0-d164f309c169.jpg" },
    { id: 7, name: "Gray Urban T-Shirt", price: 16, image: "https://i.ibb.co/yFKJBnpF/3d8d3ea3-bccc-4d57-add7-268a6925d2c7.jpg" },
    { id: 8, name: "Pink Polo Shirt", price: 21, image: "https://i.ibb.co/s9VkZ90q/b18b230d-cc93-4a49-887e-57fed967c023.jpg" },
    { id: 9, name: "Striped Cotton T-Shirt", price: 23, image: "https://i.ibb.co/1tJ10KLS/134a4a9b-8b36-4925-b8c6-43db310ebe0d.jpg" },
    { id: 10, name: "Dark Blue Polo Tee", price: 25, image: "https://i.ibb.co/zW51tYLC/781ba093-c82c-478e-9a54-6193af21be26.jpg" },
    { id: 11, name: "Red Classic T-Shirt", price: 25, image: "https://i.ibb.co/NdDF3frf/9bf60b3b-907e-4f06-bfca-904517ea14b2.jpg" },
    { id: 12, name: "Awesome Purple Tee", price: 25, image: "https://i.ibb.co/7dTD6JFx/2431d3f8-5e1b-461e-a5ea-bc38b801a288.jpg" },
    { id: 13, name: "Baby Pinkish Shirt", price: 25, image: "https://i.ibb.co/FbLNyTcZ/68f7a65c-89f9-4a34-8dc2-1bcaa5bb4020.jpg" },
    { id: 14, name: "Polo White Shirt", price: 25, image: "https://i.ibb.co/vxTVycQh/a1a8c1ee-83e5-4b2e-badb-b31044c799af.jpg" },
    { id: 15, name: "Ocean Green T-Shirt", price: 25, image: "https://i.ibb.co/VcpZcq71/93670d85-c14e-4dee-8945-861f9a32dd69.jpg" },
    { id: 16, name: "Colorful Striped Tee", price: 25, image: "https://i.ibb.co/RkYpc95s/be931611-d81c-4c36-a6d9-c01fbbc0b0b4.jpg" },
    { id: 17, name: "Brown Polo T-Shirt", price: 25, image: "https://i.ibb.co/F4H9y4Rk/2ece3f7b-c227-4145-a3b3-8d80dffdffba.jpg" },
    { id: 18, name: "Fruity Orange Shirt", price: 25, image: "https://i.ibb.co/3m33BKr6/5cac83a8-7c05-4b9e-914c-b5edadb2e768.jpg" },
    { id: 19, name: "Indigo Sky Tee", price: 25, image: "https://i.ibb.co/zW51tYLC/781ba093-c82c-478e-9a54-6193af21be26.jpg" },
    { id: 20, name: "Yellow Polo Shirt", price: 25, image:"https://i.ibb.co/Jw7X7R6g/a8225da8-2f02-45e7-be9c-6b6593f7cd52.jpg" }
];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const cartModal = document.getElementById("cart-modal");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const closeModal = document.querySelector(".close");
const checkoutButton = document.getElementById("checkout");
let cart = [];

function renderProducts(filter = "") {
    productContainer.innerHTML = "";
    products
        .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    cartCount.innerText = cart.length;
}

function openCart() {
    cartItemsList.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(li);
    });
    cartModal.style.display = "block";
}

function closeCart() {
    cartModal.style.display = "none";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Thank you for your purchase! Your total is $${total}.`);
    
    cart = []; // Clear cart
    updateCartCount();
    closeCart();
}

searchInput.addEventListener("input", (e) => renderProducts(e.target.value));
closeModal.addEventListener("click", closeCart);
checkoutButton.addEventListener("click", checkout);

renderProducts();
