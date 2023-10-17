import images from "./img.json" assert { "type": "json" };
import { searchFunctionality } from "./searchFunctionality.js";
let search = document.querySelector(".search");
let customers = document.querySelector(".customers");
let customersArray = [{}];
let filteredCustomers = [{}];
let sorted = [{}];

document.addEventListener("DOMContentLoaded", function () {

  //#region fetching data
  async function fetchCustomers(url) {
    let data = await fetch(url);
    customersArray = await data.json();
    customersArray.forEach((e,i) => {
      e.image=images[i].img;
    });

       showSortedResult(customers,customersArray);
  }
  fetchCustomers("https://jsonplaceholder.typicode.com/users");
  //#endregion

  // sorting customers from A-Z or from Z-A depending on the select input's value
  document.getElementById("sorting").onchange = changeListener;

  //#region search Functionality
  search.addEventListener("input", (e) => {
    let searchValue = e.target.value;

    filteredCustomers = customersArray.filter((customer) => {
      let customerName = customer.name.toLowerCase();
      return customerName.includes(searchValue);
    });
    searchFunctionality(filteredCustomers,customers);
  });

  //#endregion

  //#region sorting Functionality
  function changeListener() {
    var value = this.value;

    sorted = customersArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    if (value == "a-z") {
      ascendingSorting(customers,sorted);
    } else if (value == "z-a") {
      descendingSorting(customers,sorted);
    }
  }

  function ascendingSorting(customers,sorted) {
    customers.innerHTML = "";
    showSortedResult(customers,sorted);
  }

  function descendingSorting() {
    customers.innerHTML = "";
    sorted.reverse();
    showSortedResult(customers,sorted);
  }

  function showSortedResult(customers,sorted) {
    for (let i = 0; i < sorted.length; i++) {
      customers.innerHTML += `<div class="customer">
        <div class="customerImg">
           <img src="${sorted[i].image}" alt="${sorted[i].name} Image" class="customer-img">
   
           <h2 class="customer-name">${sorted[i].name}</h2>
           <h4 class="customer-userName">@${sorted[i].username}</h4>
           <h6 class="catchPhrase">"${sorted[i].company.catchPhrase}"</h6>
       </div>
        <div class= "customerInfo">
              <h4 class="email">
           <i class="fa-solid fa-envelope"></i>
           ${sorted[i].email}</h4>
           <h4 class="address">
           <i class="fa-solid fa-location-dot"></i>
            ${sorted[i].address.street},
            ${sorted[i].address.suite},
            ${sorted[i].address.city},
            ${sorted[i].address.zipcode},
            ${sorted[i].address.geo.lat},
            ${sorted[i].address.geo.lng}</h4>
           <h4 class="phone">
           <i class="fa-solid fa-phone"></i>
           ${sorted[i].phone}</h4>
           <h4 class="website">
           <i class="fa-solid fa-globe"></i>
           ${sorted[i].website}</h4>
           <h4 class="company-name">
           <i class="fa-solid fa-suitcase"></i>
           ${sorted[i].company.name}</h4>
           <h4 class="company-bs">
           <i class="fa-solid fa-building"></i>
           ${sorted[i].company.bs}</h4>
           </div>
       </div>`;
    }
  }
  //#endregion
});
