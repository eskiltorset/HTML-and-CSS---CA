// select elements
const productsElement = document.querySelector(".all-content-product");

// RENDER PRODUCTS
function renderProducts() {
  products.map((product) => {
    productsElement.innerHTML = `

                <div class="left-content-product">
                <img src="${product.imgSrc}" alt="${product.name}" class="center">
                </div>
                <div class="right-content-product">
                    <h1>${product.name}</h1>
                    <p>${product.color}</p>
                    <h4 class="price">${product.price},-</h4>
                    <p class="product-description">${product.description}</p>
        
                    <!--<select name="choice">
                        <option value="header">Choose Size</option>
                        <option value="first">Small</option>
                        <option value="second">Medium</option>
                        <option value="third">Large</option>
                        <option value="fourth">X-Large</option>
                    </select>
        
                    <input type="button" class="add-to-cart-btn" onclick="addToCart(${product.id}>ADD TO CART/>-->
                </div>
        `;
  })
}
renderProducts();