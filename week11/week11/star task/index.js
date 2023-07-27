let feijoa = 2000;
let pitahaya = 3000;
let karambola = 5000;
let avocado = 1000;

let totalPrice;

feijoa = document.querySelector("#feijoa_price");
console.log(feijoa_price.textContent);
pitahaya = document.querySelector("#pitahaya_price");
console.log(pitahaya_price.textContent);
karambola = document.querySelector("#carambola_price");
console.log(carambola_price.textContent);
avocado = document.querySelector("#avocado_price");
console.log(avocado_price.textContent);

feijoa = +"2000";
pitahaya = +"3000";
karambola = +"5000";
avocado = +"1000";
totalPrice = 2000 + 3000 + 5000 + 1000;
document.getElementById("total__result").textContent = totalPrice;
function TotalPriceDiscount() {
  let discount = 20;
  let result = totalPrice - (totalPrice / 100) * discount;
  console.log(result.toFixed(2));
  document.getElementById("total__result").textContent = result.toFixed(2);
}
let button = document.getElementById("button-btn");
button.addEventListener("click", TotalPriceDiscount);
