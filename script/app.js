// select elements
const productsElement = document.querySelector(".men-content");
const cartItemsElement = document.querySelector(".cart-items");
const subtotalElement = document.querySelector(".subtotal");

// RENDER PRODUCTS
function renderProducts() {
  products.forEach((product) => {
    productsElement.innerHTML += `
                <div class="product">
                    <img src="${product.imgSrc}" alt="Jacket 2" class="center"/>
                    <h1>${product.name}</h1>
                    <p>${product.color}</p>
                    <h4>${product.price},-  </h4>
                    <cart class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="images/bag-plus.png" alt="add to cart" id="bag-icon"/>
                    </cart>
                </div>
        `;
  })
}
renderProducts();

//cart array
let cart = JSON.parse(localStorage.getItem("cart"));
updateCart();

function addToCart(id) {

  alert("item added to cart!");

  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
    
  }
  else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: 1,
    });

  }

  updateCart();
}

 //update cart
  function updateCart(){
    renderCartItems();
    renderSubtotal();

    // save cart to localstorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // calculate subtotal
  function renderSubtotal(){
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    })

    subtotalElement.innerHTML = `Subtotal (${totalItems} items): ${totalPrice},-`
  }

  //render cart items
  function renderCartItems(){
    cartItemsElement.innerHTML = "";
    cart.forEach((item) => {
      cartItemsElement.innerHTML += `
                <div class="cart-item">
                    <div class="item-info" onclick="removeItemFromCart(${item.id})">
                        <img src="${item.imgSrc}" alt="${item.name}">
                        <h4>${item.name}</h4>
                    </div>
                    <div class="unit-price">
                        <small>$</small>${item.price}
                    </div>
                    <div class="units">
                        <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                        <div class="number">${item.numberOfUnits}</div>
                        <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
                    </div>
                </div>
      `
    });
  }

  // remove item from cart
  function removeItemFromCart(id){
    cart = cart.filter((item) => item.id !== id);

    updateCart();
  }

  //change number of units for an item
  function changeNumberOfUnits(action, id){
    cart = cart.map((item) => {

      let numberOfUnits = item.numberOfUnits;

      if(item.id === id){
        if(action === "minus"){
          numberOfUnits--;
        } else if(action === "plus"){
          numberOfUnits++;
        }
      }

      return {
        ...item,
        numberOfUnits,
      };
    });

    updateCart();
  }