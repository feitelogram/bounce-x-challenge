//declaring variables storing data from the site for the rest of the snippet
const products = document.querySelectorAll(".mini-cart-product")
let total;
let numItems;

//creating the div that will house all the info for our modal
const messageDiv = document.createElement("div")

//handling for whether there are items in the cart and updating if there are
total = document.querySelector(".order-value") ? document.querySelector(".order-value").innerText : null
numItems = document.querySelector(".total-items") ? parseInt(document.querySelector(".total-items").innerText.split(" ")[0]) : null

//stealing the styles from the pop-up modal that the site uses for when you click a product
messageDiv.className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front modal-body"

//giving an ID for later jQuery work and making sure it is not displayed when not in use
messageDiv.id = "modal"
messageDiv.style.display = "none"

//rendering products if there are any to separate divs and then appending them to our modal
const renderProducts = () => {

  products.forEach(product => {
      
      //grabbing the names and images for each product
      let imgUrl = product.querySelector(".mini-cart-image").querySelector("a").querySelector("img").src
      let name = product.querySelector(".mini-cart-name").querySelector("a").title.split(": ")[1]
      
      //creating each product div, using exisitng styles
      let productDiv = document.createElement("div")
      productDiv.className="mini-cart-product"
      
      //creating each image with exisiting styles, handling for accessibility
      let productImg = document.createElement("img")
      productImg.className= "mini-cart-image"
      productImg.src = imgUrl
      productImg.alt= name
      
      //creating the title with a link to the original product as well
      let productName = document.createElement("a")
      productName.href = product.querySelector(".mini-cart-name").querySelector("a").href
      productName.innerText= name
      productName.style.textDecoration = "none"

      //adding each to its own div and then adding it to the modal
      productDiv.append(productImg, productName)
      messageDiv.append(productDiv)
  })

}

//creating a wrapper for our products and info about the number of items and total
const renderDiv = () => {

  //copy
  let messageH2 = document.createElement("h2")
  messageH2.innerText = `Don't leave your ${numItems} ${numItems > 1 ? "items" : "item"} out in the Cold.` 
  messageH2.style.fontSize = "35px"
  messageH2.style.fontWeight = "bolder"
  messageH2.style.textAlign = "center"
  messageDiv.append(messageH2)

  //rendering products if there are any items
  renderProducts()

  //total
  let totalH4 = document.createElement("h4")
  totalH4.innerText= `Your items currently total ${total}`
  totalH4.style.fontSize = "20px"
  totalH4.style.textAlign = "center"
  totalH4.style.padding = ".5rem"
  messageDiv.append(totalH4)

  //back to cart
  const cartButton = document.createElement("button")
  cartButton.innerText = "Back to Cart"
  cartButton.className = "checkout-button"
  cartButton.addEventListener("click", () => window.location.replace("http://marmot.com/cart"))
  messageDiv.append(cartButton)
}

//creating an alternative message if there are no items in the car
const checkOutSale = () => {
  
  //copy headline
  let saleH2 = document.createElement("h2")
  saleH2.innerText = "Why not stay awhile?"
  saleH2.style.fontSize = "35px"
  saleH2.style.fontWeight = "bolder"
  saleH2.style.textAlign = "center"
  saleH2.style.padding = ".5rem"

  //copy subtitle
  let saleH3 = document.createElement("h3")
  saleH3.innerText = "It's chilly out there."
  saleH3.style.fontSize = "25px"
  saleH3.style.fontWeight = "bolder"
  saleH3.style.textAlign = "center"
  saleH3.style.padding = ".5rem"

  //creating button for sale
  let saleButton = document.createElement("a")
  saleButton.style.display= "inline-block"
  saleButton.className= "checkout-button"
  saleButton.innerText="SHOP SALE"
  saleButton.addEventListener("click", () => window.location.replace("http://marmot.com/specials-men"))

  //appending to the message div
  messageDiv.append(saleH2, saleH3, saleButton)
}


//if there are items, add the cart products to the modal, otherwise add the sale
const renderEverything = () => {
    document.body.append(messageDiv)
    if(numItems > 0){
        return renderDiv()
    }
    return checkOutSale()
}


//invoking our function to create everything
renderEverything()


//jQuery to handle the scroll event to the bottom of the page
  $(window).scroll(() => {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {  
        $( () => {

          //on the scroll event, change our div to make things look ordered and add a close button
            messageDiv.style.display = "grid"
            $( "#modal" ).dialog({
              //handles the CSS/background effect for the modal
              modal: true,
              closeText: "X",
            });

            
          } );
    }
 });
