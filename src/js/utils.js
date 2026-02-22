import { addToCartBtn } from "./constants.js";

//Add to cart function
export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find(item => item.id === product.id);

  //If the item already is in cart, increase quantity by +1
  if (existingItem) {
    existingItem.quantity += 1;
    displayToast("1x " + product.title + " has been added to cart!", "success");
  } else {
    //If not, push key values with quantity set to 1
    cart.push({ ...product, quantity: 1 });
    displayToast("1x " + product.title + " has been added to cart!", "success");
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

//Remove from cart function
export function removeFromCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartUpdated = cart.filter(item => item.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(cartUpdated));
  displayToast(product.quantity + "x " + product.title + " has been removed from cart.", "error");
}

//parseFloat with .toFixed to only display 2 decimal points in price float value
export function calculateSingleProductTotalPrice(item) {
  return parseFloat((item.price * item.quantity).toFixed(2));
}

//Calculate total quantity all of products in cart
export function calculateTotalQuantity(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

//Calculate total price of all products in cart
export function calculateTotalPrice(cart) {
  const total = cart.reduce((sum, item) => (sum + item.price * item.quantity), 0);
  return parseFloat(total.toFixed(2));
}

//Toast message function to display notifications and errors
export function displayToast(message, type) {
  console.log("showToast called", message, type);
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");
  document.body.appendChild(toastContainer);

  const toastElement = document.createElement("div");
  toastElement.classList.add("toast", type);
  toastElement.textContent = message;
  toastContainer.appendChild(toastElement);

  setTimeout(() => {
    toastContainer.remove();
    toastElement.remove();
  }, 3000);
}