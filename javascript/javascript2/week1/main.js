console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts() {
  const prodUl = document.body.appendChild(document.createElement("ul"));
  products.forEach((product) => {
    const prodName = document.createElement("h2");
    const prodPrice = document.createElement("li");
    const prodRate = document.createElement("li");

    prodName.innerText = product.name;
    prodPrice.innerText = `price: ${product.price}`;
    prodRate.innerText = `rate: ${product.rating}`;

    prodUl.appendChild(prodName);
    prodUl.appendChild(prodPrice);
    prodUl.appendChild(prodRate);
  });
}
// Writing in template string

/*
function renderProducts() {
  products.forEach((product) => {
    const markup = `
     <h2> ${product.name} </h2>
  <li> Price: ${product.price} </li>
   <li> Rating: ${product.rating} </li>`;
    return (document.body.innerHTML = markup);
  });
}
*/

renderProducts();
