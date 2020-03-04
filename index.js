const products = document.querySelectorAll(".mini-cart-product")
const numItems = products.length
const total = document.querySelector(".order-value").innerText

products.forEach(product => {
    let imgUrl = product.querySelector(".mini-cart-image").querySelector("a").querySelector("img").src
    let name = product.querySelector(".mini-cart-name").querySelector("a").title.split(": ")[1]
})