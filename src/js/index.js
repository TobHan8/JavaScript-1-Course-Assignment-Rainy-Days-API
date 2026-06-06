//Imports
import { allProductsContainer, allProducts } from "./constants.js";

import { fetchAllProducts } from "./api.js";

import { addToCart, displayToast } from "./utils.js";

//Main function to call the return of json.data from the API call
async function main() {
    const allProductsData = await fetchAllProducts();

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    allProductsContainer.appendChild(btnContainer);

    const allBtn = document.createElement('button');
    allBtn.classList.add('filter-btns');
    allBtn.textContent = 'ALL';
    btnContainer.appendChild(allBtn);

    const femaleBtn = document.createElement('button');
    femaleBtn.classList.add('filter-btns');
    femaleBtn.textContent = 'FEMALE';
    btnContainer.appendChild(femaleBtn);

    const maleBtn = document.createElement('button');
    maleBtn.classList.add('filter-btns');
    maleBtn.textContent = 'MALE';
    btnContainer.appendChild(maleBtn);

    const products = document.getElementById('all-products');

    femaleBtn.addEventListener('click', () => {
      allProducts.innerHTML = '';
      displayAllProducts(genderFilter(allProductsData, 'Female'));
    });

    maleBtn.addEventListener('click', () => {
      allProducts.innerHTML = '';
      displayAllProducts(genderFilter(allProductsData, 'Male'));
    });

    allBtn.addEventListener('click', () => {
      allProducts.innerHTML = '';
      displayAllProducts(allProductsData);
    });

    displayAllProducts(allProductsData);


}

function genderFilter(allProductsData, genderType) {

      if (genderType === 'Male' || 'Female') {
        return allProductsData.filter(product => genderType === product.gender);
      } else {
        displayToast('Error!', 'Unable to apply filter for products. Please refresh the page', 'error');
        return;
      }
  }

//Display the products for the user by creating HTML via the DOM
function displayAllProducts(allProductsData) {
  
  allProducts.classList.add('all-products');

  allProductsData.forEach(product => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");
    allProducts.appendChild(productContainer);

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
}

//Calling main function to start program
main();
