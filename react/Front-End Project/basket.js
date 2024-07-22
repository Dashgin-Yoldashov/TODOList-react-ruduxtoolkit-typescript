"use strict";
let tbody = document.querySelector("table tbody");
if(localStorage.getItem("productbasket") === null || JSON.parse(localStorage.getItem("productbasket")).length === 0) 
    {
        let tr = "<tr><td colspan='5'>Your cart is currently empty.</td></tr>";
        tbody.innerHTML += tr;
    } 
else{
  let productbasket = JSON.parse(localStorage.getItem("productbasket"));
  for (const product of productbasket) {
    let tr = `
              <tr>
                  <td><img src='${product.img}'></td>
                  <td><p>${product.name}</p></td>
                  <td><i class='decrease'>-</i> ${product.count}<i class='increase'>+</i></td>
                  <td>${product.price}</td>
                  <td><i class="bi bi-trash remove"></i></td>
              </tr>
              `;
    tbody.innerHTML += tr;
}
}
// Retrieve the product basket from localStorage
let productbasket = JSON.parse(localStorage.getItem("productbasket")) || [];

// Select all the icons
let icons = document.querySelectorAll(".remove");

// Attach click event listener to each icon
for (const item of icons) {
    item.addEventListener("click", function () {
        // Get the product id from the parent element (assuming there's a way to get this information)
        let productId = item.parentNode.getAttribute("data-id");

        // Find the index of the product in the basket
        let productIndex = productbasket.find(prod => prod.id === productId);

        // If product is found, remove it from the basket
        if (productIndex !== -1) {
            productbasket.splice(productIndex, 1);

            // Update the basket in localStorage
            localStorage.setItem("productbasket", JSON.stringify(productbasket));

            // Reload the window to reflect changes
            window.location.reload();
        }
    });
}
