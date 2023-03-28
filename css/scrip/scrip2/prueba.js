const toggleBtn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});

nav.show-nav {
  display: block;
}

const addToCartBtns = document.querySelectorAll(".add-to-cart");
const cartItemsCount = document.querySelector(".cart-items-count");

let itemCount = 0;

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    itemCount++;
    cartItemsCount.innerText = itemCount;
  });
});
