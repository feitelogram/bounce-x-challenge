const products = document.querySelectorAll(".mini-cart-product")
let total;
const messageDiv = document.createElement("div")
let numItems;

total = document.querySelector(".order-value") ? document.querySelector(".order-value").innerText : null
numItems = document.querySelector(".total-items") ? parseInt(document.querySelector(".total-items").innerText.split(" ")[0]) : null

messageDiv.className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front modal-body"
messageDiv.id = "modal"
messageDiv.style.display = "none"

const renderProducts = () => {

products.forEach(product => {
    let imgUrl = product.querySelector(".mini-cart-image").querySelector("a").querySelector("img").src
    let name = product.querySelector(".mini-cart-name").querySelector("a").title.split(": ")[1]
    let productDiv = document.createElement("div")
    productDiv.className="mini-cart-product"
    let productImg = document.createElement("img")
    productImg.className= "mini-cart-image"
    productImg.src = imgUrl
    productImg.alt= name
    let productName = document.createElement("a")
    productName.href = product.querySelector(".mini-cart-name").querySelector("a").href
    productName.innerText= name
    productName.style.textDecoration = "none"
    productDiv.append(productImg, productName)
    messageDiv.append(productDiv)
})
}

const renderDiv = () => {

let messageH2 = document.createElement("h2")
messageH2.innerText = `Don't leave your ${numItems} ${numItems > 1 ? "items" : "item"} out in the Cold.` 
messageH2.style.fontSize = "35px"
messageH2.style.fontWeight = "bolder"
messageH2.style.textAlign = "center"
messageDiv.append(messageH2)
renderProducts()
let totalH4 = document.createElement("h4")
totalH4.innerText= `Your items currently total ${total}`
totalH4.style.fontSize = "20px"
totalH4.style.textAlign = "center"
totalH4.style.padding = ".5rem"
messageDiv.append(totalH4)
const cartButton = document.createElement("button")
cartButton.innerText = "Back to Cart"
cartButton.className = "checkout-button"
cartButton.addEventListener("click", () => window.location.replace("http://marmot.com/cart"))
messageDiv.append(cartButton)
}

const checkOutSale = () => {
let saleH2 = document.createElement("h2")
saleH2.innerText = "Why not stay awhile?"
saleH2.style.fontSize = "35px"
saleH2.style.fontWeight = "bolder"
saleH2.style.textAlign = "center"
saleH2.style.padding = ".5rem"
let saleH3 = document.createElement("h3")
saleH3.innerText = "It's chilly out there."
saleH3.style.fontSize = "25px"
saleH3.style.fontWeight = "bolder"
saleH3.style.textAlign = "center"
saleH3.style.padding = ".5rem"
let saleButton = document.createElement("a")
saleButton.style.display= "inline-block"
saleButton.className= "checkout-button"
saleButton.innerText="SHOP SALE"
saleButton.addEventListener("click", () => window.location.replace("http://marmot.com/specials-men"))
messageDiv.append(saleH2, saleH3, saleButton)
}

const renderEverything = () => {
    document.body.append(messageDiv)
    if(numItems > 0){
        return renderDiv()
    }
    return checkOutSale()
}

renderEverything()



  $(window).scroll(() => {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {  
        $( () => {
            messageDiv.style.display = "grid"
            $( "#modal" ).dialog({
              modal: true,
              closeText: "X",
            });

            
          } );
    }
 });
