function addCart(id, ten, gia, hinh) {
    var cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null) {
      cart = [];
      cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    else {
      let item = cart.find(item => item.id === id);
      if (item) item.quantity++;
      else cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }