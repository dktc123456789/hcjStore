function luuChiTietDonHang(order_id) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.forEach(sp => {
    let odd = {
      "order_id": order_id,
      "product_id": sp.id,
      "quantity": sp.quantity,
      "unit_price": sp.price
    }
    const url = 'http://localhost:3000/order_details';
    options = {
    method: 'POST',
    body: JSON.stringify(odd),
    headers: {'Content-Type': 'application/json'}
    }
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
    });
  });
}