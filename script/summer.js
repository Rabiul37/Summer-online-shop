let Total = 0;
function card(target) {
  const productName = target.childNodes[3].childNodes[7].innerText;
  const productPrice = parseFloat(target.childNodes[3].childNodes[9].innerText);
  const productNameContainer = document.getElementById("product-Name");
  const p = document.createElement("p");
  productNameContainer.appendChild(p);
  let count = productNameContainer.childElementCount;
  p.innerHTML = `${count - 1} . ${productName}`;
   Total = Total + productPrice;
  document.getElementById("total").innerText = Total.toFixed(2);
  document.getElementById("total-bill").innerText = Total.toFixed(2);
  if (Total >= 200) {
    document.getElementById("apply").removeAttribute("disabled");
  } else if (Total > 0) {
    document.getElementById("btn-purchase").removeAttribute("disabled");
  }
}

document.getElementById("apply").addEventListener("click", function () {
  const coupon = document.getElementById("coupon").value;
  let discountFormula = Total - (20 / 100) * Total;
  let discount = Total - discountFormula;
  if (coupon === "SELL200") {
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("total-bill").innerText =
      discountFormula.toFixed(2);
  } else {
    document.getElementById("total").innerText = Total.toFixed(2);
    document.getElementById("total-bill").innerText = Total.toFixed(2);
    alert("Your coupon is incorrect");
  }
  coupon = "";
});

document.getElementById("home").addEventListener("click", function () {
  // window.open("http://127.0.0.1:5500/index.html");
  document.getElementById("total").innerText = "00";
  document.getElementById("total-bill").innerText = "00";
  const productNameContainer = (document.getElementById(
    "product-Name"
  ).innerHTML = `<h1 class="text-xl font-semibold" >Product List : </h1>`);
});
