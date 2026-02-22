//Imports
import { allProductsContainer } from "./constants.js";

import { fetchAllProducts } from "./api.js";

import { addToCart } from "./utils.js";

//Main function to call the return of json.data from the API call
async function main() {
    const allProductsData = await fetchAllProducts();
    displayAllProducts(allProductsData);
}

//Display the products for the user by creating HTML via the DOM
function displayAllProducts(allProductsData) {
  allProductsData.forEach(product => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    allProductsContainer.appendChild(productContainer);

    const imageLink = document.createElement("a");
    imageLink.href = `details.html?id=${product.id}`;
    imageLink.classList.add("product-image-container");
    productContainer.appendChild(imageLink);

    const img = document.createElement("img");
    img.src = product.image.url;
    img.alt = product.image.alt;
    imageLink.appendChild(img);

    const descContainer = document.createElement("div");
    descContainer.classList.add("product-desc-container");
    productContainer.appendChild(descContainer);

    const title = document.createElement("h2");
    title.textContent = product.title;
    descContainer.appendChild(title);

    const detailsLink = document.createElement("a");
    detailsLink.href = `details.html?id=${product.id}`;
    descContainer.appendChild(detailsLink);

    const detailsSpan = document.createElement("span");
    detailsSpan.classList.add("more-details");
    detailsSpan.textContent = "Click for more details";
    detailsLink.appendChild(detailsSpan);

    const priceSpan = document.createElement("span");
    descContainer.appendChild(priceSpan);
    
    const priceStrong = document.createElement("strong");
    priceStrong.textContent = `${product.price}$`;
    priceSpan.textContent = "Price: ";
    priceSpan.appendChild(priceStrong);
    
    const addToCartBtn = document.createElement("button");
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.textContent = "ADD TO CART";
    descContainer.appendChild(addToCartBtn);

    addToCartBtn.addEventListener("click", () => {
      addToCart(product);
    });

  });

};

//Calling main function to start program
main();
