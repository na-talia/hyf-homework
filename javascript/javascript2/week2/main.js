console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

/* I wrote this code below in template string. It works,
 but I had some problems using it in today`s homework, 
 so I decided to use my old code from my previous homework.


const prodUl = document.body.appendChild(document.createElement("ul"));

function renderProducts() {
  products.forEach((product) => {
    const markup = document.createElement("li");
    markup.innerHTML = `
     <h2> ${product.name} </h2>
  <li> Price: ${product.price} </li>
   <li> Rating: ${product.rating} </li>`;
    prodUl.appendChild(markup);
  });
}
renderProducts();
*/

const prodUl = document.querySelector(".product-list");

const renderProducts = (products) => {
  prodUl.innerHTML = "";

  products.forEach((product) => {
    const prodName = document.createElement("h2");
    const prodPrice = document.createElement("li");
    const prodRating = document.createElement("li");

    prodName.innerText = product.name;
    prodPrice.innerText = `Price: ${product.price}`;
    prodRating.innerText = `Rating: ${product.rating}`;

    prodUl.appendChild(prodName);
    prodUl.appendChild(prodPrice);
    prodUl.appendChild(prodRating);
  });
};

renderProducts(products);

// Searching for products

const findProduct = document.querySelector("#input-products");

findProduct.addEventListener("input", () => {
  const searchProduct = findProduct.value;
  const result = [];

  products.forEach((item) => {
    const name = item.name;
    if (name.toLowerCase().includes(searchProduct.toLowerCase())) {
      result.push(item);
    }
  });

  renderProducts(result);

  // Extra feature - if the product is not found

  if (result.length === 0) {
    const productMissing = document.createElement("p");
    productMissing.innerText = `${findProduct.value} is not found`;
    productMissing.style.color = "red";
    productMissing.style.fontSize = "2rem";
    prodUl.appendChild(productMissing);
  }
});

// Filter products based on max price

const inputMaxPrice = document.querySelector("#max-price");

inputMaxPrice.addEventListener("input", () => {
  const maxValue = inputMaxPrice.value;
  const maxPrice = [];

  products.forEach((item) => {
    const price = item.price;
    if (price < maxValue) {
      maxPrice.push(item);
    }
  });
  renderProducts(maxPrice);
});

// Extra feature 2 - Button
const btn = document.querySelector("button");
btn.addEventListener("click", getAvailableProducts);
