
import { fetchSingleProduct } from "./api.js";

import { singleProductContainer } from "./constants.js";

import { addToCart } from "./utils.js";

//Main program function
async function main() {
    const singleProductData = await fetchSingleProduct();
    displaySingleProduct(singleProductData);
}

//Function to display single product via HTML elements
function displaySingleProduct(product) {

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("single-product-img-container");
        singleProductContainer.appendChild(imgContainer);

        const img = document.createElement("img");
        img.src = product.image.url;
        imgContainer.appendChild(img);

        const singleProductDescContainer = document.createElement("div");
        singleProductDescContainer.classList.add("single-product-desc-container");
        singleProductContainer.appendChild(singleProductDescContainer);

        const title = document.createElement("h1");
        title.textContent = `${product.title}`;
        singleProductDescContainer.appendChild(title);

        const desc = document.createElement("p");
        desc.textContent = `${product.description}`;
        singleProductDescContainer.appendChild(desc);

        const gender = document.createElement("span");
        gender.classList.add("gender");
        gender.textContent = `Gender: ${product.gender}`;
        singleProductDescContainer.appendChild(gender);
        
        
        const sizesContainer = document.createElement("div");
        sizesContainer.classList.add("sizes-container");
        singleProductDescContainer.appendChild(sizesContainer);

        const sizesLabel = document.createElement("span");
        sizesLabel.textContent = "Sizes: ";
        sizesLabel.classList.add("sizes-label");
        sizesContainer.appendChild(sizesLabel);
        
        product.sizes.forEach(size => {
            const sizesSpan = document.createElement("span");
            sizesSpan.textContent = size;
            sizesContainer.appendChild(sizesSpan);
            
        });

        const colors = document.createElement("span");
        colors.classList.add("colors");
        colors.textContent = `Colors: ${product.baseColor}`;
        singleProductDescContainer.appendChild(colors);

        const priceSpan = document.createElement("span");
        singleProductDescContainer.appendChild(priceSpan);

        const priceStrong = document.createElement("strong");
        priceStrong.textContent = `${product.price}$`;
        priceSpan.textContent = "Price: ";
        priceSpan.appendChild(priceStrong);
        
        const addToCartBtn = document.createElement("button");
        addToCartBtn.classList.add("add-to-cart-btn");
        addToCartBtn.textContent = "ADD TO CART";
        singleProductDescContainer.appendChild(addToCartBtn);

        addToCartBtn.addEventListener("click", () => {
        addToCart(product);
        });

};

main();