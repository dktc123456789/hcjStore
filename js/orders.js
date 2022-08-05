var btnSave = document.querySelector('#btnSave');
btnSave.onclick = function () {
   const fname = document.querySelector('#fname').value.trim();
   const lname = document.querySelector('#lname').value.trim();
   const email = document.querySelector('#email').value.trim();
   const adr = document.querySelector('#adr').value.trim();
   const tel = document.querySelector('#tel').value.trim();

   if(fname && lname == "" || fname && lname == null) {
     alert('Vui lòng điền đầy đủ thông tin trước khi thanh toán');
     return;
   } 
   else if (email == "" || email == null) {
     alert('Vui lòng điền đầy đủ thông tin trước khi thanh toán');
   }
   else if (adr == "" || adr == null) {
     alert('Vui lòng điền đầy đủ thông tin trước khi thanh toán');
   }
   else if (tel == "" || tel == null) {
     alert('Vui lòng điền đầy đủ thông tin trước khi thanh toán');
   }
   else {
     alert('OK');
   }

   var donhang = {
     "customer_name": fname + ' ' + lname,
     "customer_address": adr,
     "customer_email": email,
     "customer_phone_number": tel,
     "created_date": new Date().toISOString().slice(0, 10),
     "status": "Đang chờ xác nhận"
   }
   var url = 'http://localhost:3000/orders';
   options = {
     method: 'POST',
     body: JSON.stringify(donhang),
     headers: {'Content-Type': 'application/json'}
   }
   fetch(url, options)
   .then(res => res.json())
   .then(data => {
     order_id = data.id;
     luuChiTietDonHang(order_id);
     console.log(data);
   })
 }