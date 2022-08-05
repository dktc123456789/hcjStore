// hiển thị danh mục sản phẩm trên navbar phần sản phẩm (menu dropdown)
var url = 'http://localhost:3000/categories';
fetch(url)
  .then(res => res.json())
  .then(categories => {
    cate_arr = categories.map(categories => {
      return `
  <a class="dropdown-item" href="#">${categories.name}</a>
  `
    })
    cate_arr.push(`<a class="dropdown-item" href="../giohang.html">Giỏ hàng</a>`)
    document.querySelector('#mainmenu').innerHTML += cate_arr;
  })