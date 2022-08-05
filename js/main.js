// alert("Hello");
const url ='http://localhost:3000/users';
const addModalForm =  document.querySelector('.form-user');
const editModalForm =  document.querySelector('#myEditModal .form-user');
let id = '';
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            renderUsers(user);
        });
    });

const tableUsers = document.querySelector('#table-user'); 
const renderUsers = (user) => {
    const output = `
    <tr data-id='${user.id}'>
    <td>${user.fullname}</td>
    <td>${user.phone}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td> <span>${user.gender}</span> </td>
    <td><a class="btn-edit btn btn-primary btn-sm">Edit</a> |
        <a class="btn-del btn btn-danger btn-sm">Del</a>
    </td>
    </tr>
    `;
   
    // delete
    tableUsers.insertAdjacentHTML('beforeend', output);
    const btndel = document.querySelector(`[data-id = '${user.id}'] .btn-del`);
    btndel.addEventListener('click', (e) => {
        //console.log('deleted!!!');
        fetch(`${url}/${user.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => location.reload());
    });

    // edit
    const btnedit = document.querySelector(`[data-id = '${user.id}'] .btn-edit`);
    btnedit.addEventListener('click', (e) => {
        e.preventDefault();
        id = user.id;
        $("#myEditModal").modal('show');

        editModalForm.fullname.value = user.fullname;
        editModalForm.phone.value = user.phone;
        editModalForm.email.value = user.email;
        editModalForm.age.value = user.age;
        editModalForm.gender.value = user.gender;
        // console.log('edit');
    })
    
}
addModalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('addModalForm' + addModalForm.fullname.value);
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: addModalForm.fullname.value,
            phone: addModalForm.phone.value,
            email: addModalForm.email.value,
            age: addModalForm.age.value,
            gender: addModalForm.gender.value
        })
    })
    .then(res => res.json())
    .then(() => location.reload()) // tu dong reload lai trang web - khoi can nhan phim f5
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
        renderUsers(dataArr);
    })
    
    addModalForm.fullname.value = '';
    addModalForm.phone.value = '';
    addModalForm.email.value = '';
    addModalForm.age.value = '';
})

editModalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('editModalForm');
    fetch(`${url}/${id}` ,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify({
            fullname: editModalForm.fullname.value,
            phone: editModalForm.phone.value,
            email: editModalForm.email.value,
            age: editModalForm.age.value,
            gender: editModalForm.gender.value
        })
       
    })
    .then(res => res.json())
    .then(() => location.reload())
    editModalForm.fullname.value = '';
    editModalForm.phone.value = '';
    editModalForm.email.value = '';
    editModalForm.age.value = '';
    editModalForm.gender.value = '';
})