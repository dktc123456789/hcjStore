var url = 'http://localhost:3000/products';
    fetch(url)
      .then(res => res.json())
      .then(products => {
        var listProduct = document.querySelector('#listProduct');
        listProduct.innerHTML += products.map(sp => {
          return `
          <div class="card">
        <img class="card-img-top" src="${sp.image}" alt="${sp.name}" style="height: 300px">
        <div class="card-body text-center">
          <h5 class="card-title">${sp.name}</h5>
          <div class="card-block"> 
              <p class="card-text">Giá cũ: <del>${sp.price}</del></p>
              <p class="card-text" id="pPrice">Giá mới: ${sp.price} vnđ</p>
              <a href="chitietSamsungTablet.html" class="btn btn-primary" id="detailBtn" style=""> <i class="fas fa-info-circle"></i> Xem chi tiết</a>
              <a href="giohang.html" class="btn btn-primary" id="buyBtn" onclick="addCart(${sp.id}, '${sp.name}', ${sp.price}, '${sp.image}')"> <i class="fas fa-shopping-cart"></i> Mua</a>
            </div>
        </div>
      </div>
      `
      })
    })