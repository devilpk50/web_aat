function changeQty(btn, change) {
  const qtySpan = btn.parentElement.querySelector("span");
  let qty = parseInt(qtySpan.innerText);

  qty = qty + change;
  if (qty < 1) qty = 1;

  qtySpan.innerText = qty;
  updateTotal();
}

function removeItem(btn) {
  btn.parentElement.remove();
  updateTotal();
}

function updateTotal() {
  let subtotal = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const priceText = item.querySelector(".price").innerText.replace("₹", "");
    const price = parseInt(priceText);
    const qty = parseInt(item.querySelector(".quantity span").innerText);
    subtotal += price * qty;
  });

  document.getElementById("subtotal").innerText = "₹ " + subtotal;
  document.getElementById("total").innerText = "₹ " + (subtotal + 50);
}
