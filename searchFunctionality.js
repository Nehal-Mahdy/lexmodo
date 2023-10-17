
export  function searchFunctionality(filteredCustomers,customers) {
    if (filteredCustomers.length != 0) {
      customers.innerHTML = "";
      for (let i = 0; i < filteredCustomers.length; i++) {
        customers.innerHTML += `<div class="customer">
        <div class="customerImg">
           <img src="${filteredCustomers[i].image}" alt="${filteredCustomers[i].name} Image" class="customer-img">
   
           <h2 class="customer-name">${filteredCustomers[i].name}</h2>
           <h4 class="customer-userName">@${filteredCustomers[i].username}</h4>
           <h6 class="catchPhrase">"${filteredCustomers[i].company.catchPhrase}"</h6>
       </div>
        <div class= "customerInfo">
              <h4 class="email">
           <i class="fa-solid fa-envelope"></i>
           ${filteredCustomers[i].email}</h4>
           <h4 class="address">
           <i class="fa-solid fa-location-dot"></i>
            ${filteredCustomers[i].address.street},
            ${filteredCustomers[i].address.suite},
            ${filteredCustomers[i].address.city},
            ${filteredCustomers[i].address.zipcode},
            ${filteredCustomers[i].address.geo.lat},
            ${filteredCustomers[i].address.geo.lng}</h4>
           <h4 class="phone">
           <i class="fa-solid fa-phone"></i>
           ${filteredCustomers[i].phone}</h4>
           <h4 class="website">
           <i class="fa-solid fa-globe"></i>
           ${filteredCustomers[i].website}</h4>
           <h4 class="company-name">
           <i class="fa-solid fa-suitcase"></i>
           ${filteredCustomers[i].company.name}</h4>
           <h4 class="company-bs">
           <i class="fa-solid fa-building"></i>
           ${filteredCustomers[i].company.bs}</h4>
           </div>
       </div>`;
      }
    }
  }
