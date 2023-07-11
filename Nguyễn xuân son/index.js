//các selector
let tbody = document.querySelector('tbody');
let nameSelector = document.querySelector('#name');
let emailSelector = document.querySelector('#email');
let phoneSelector = document.querySelector('#phone');
let addressSelector = document.querySelector('#address');
let btnSelector = document.querySelector('.btn')
let sortnameSelector= document.querySelector('.sort_name')
let searSelector = document.querySelector('.btn_search')
console.log(searSelector);
let inputSeach= document.querySelector('.input');





let students = [
    {
        id: crypto.randomUUID(),
        name: 'rikkei',
        email: 'rikkeo@gmail.com',
        phone: '08328688',
        address: 'Hà Nội',
        gender: 'Nam'
    },
    {
        id: crypto.randomUUID(),
        name: 'acadamy',
        email: 'acadamy@gmail.com',
        phone: '08328688',
        address: 'Hà Nội',
        gender: 'Nu'
    }
]


function showListStudient() {
    let resuft = '';
    for (i = 0; i < students.length; i++) {
        let student = students[i]
        resuft = resuft + `<tr>
        <td>${i + 1}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.address}</td>
        <td>${student.gender}</td>
        <td>
                    <button type="button" data-id="${student.id}" class="btn btn-blue">Edit</button>
                    <button type="button" data-id="${student.id}" class="btn btn-red">Delete</button>
                </td>
       
        </tr>`
    }
    tbody.innerHTML = resuft
}
function hancleAddStudient(event) {
    let click = event.target

    let nameInput = nameSelector.value
    let emailInput = emailSelector.value;
    let addressInput = addressSelector.value;
    let phoneInput = phoneSelector.value;
    let genderInput = document.querySelector('.sex_choose:checked').value;
    console.log(genderInput);
    if (click.classList.contains('update')) {
        let idUpdate = click.getAttribute('data-id')
        let indexUpdate;
        console.log(idUpdate);
        for (i = 0; i < students.length; i++) {
            if (students[i].id === idUpdate) {
                indexUpdate = i
                break;
            }
            
        }
        students[indexUpdate].name = nameInput;
        students[indexUpdate].email = emailInput;
        students[indexUpdate].address = addressInput;
        students[indexUpdate].phone = phoneInput;
        students[indexUpdate].gender = genderInput;
        showListStudient()
        btnSelector.classList.remove('update')
        btnSelector.removeAttribute('data-id')
        btnSelector.innerHTML = 'luu lai'


    }else{
        
        let varidateInput=[
            nameInput,
            emailInput,
            phoneInput,
            addressInput,
            genderInput
        ]
        console.log(varidateInput);
        for(i=0;i<varidateInput.length;i++){}
            if (!varidateInput[i] === "" ) {
                let objStudientAdd = {
                    id: crypto.randomUUID(),
                    name: nameInput,
                    email: emailInput,
                    address: addressInput,
                    phone: phoneInput,
                    gender: genderInput
                }
                students.push(objStudientAdd)
                showListStudient()
                document.querySelector('form').reset()
                
            
            }else{
                alert("can cap nhap lai")
            }
        
     
        
        

    }

}





function handDeleteStudient(event) {
    let clicked = event.target;
    if (clicked.classList.contains('btn-red')) {
        let confirmDelete = confirm('chac chan ban muon xoa ?');

        if (confirmDelete) {

            let idDelete = clicked.getAttribute('data-id');
            console.log(idDelete);

            let indexDelete;
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === idDelete) {
                    indexDelete = i;
                    break;

                }
                console.log(i);
            }

            students.splice(indexDelete, 1);

            //trường hợp xoá hết 
            if(students.length === 0){
                document.querySelector('.style-table'.classList.add('hide'));
                document.querySelector('.list_header').innerText = 'anh em bi lua ga roi'
            }
            showListStudient()
            document.querySelector('form').reset;
            btnSelector.classList.remove('update');
            btnSelector.removeAttribute('data-id');
            btnSelector.innerText = 'luwu lai'


        }
    } else if (clicked.classList.contains('btn-blue')) {
        let idEdit = clicked.getAttribute('data-id')
        let indexEdit;
        for (i = 0; i < students.length; i++) {
            if ((students[i].id === idEdit)) {
                indexEdit = i
                break

            }
        }
        let objEdit = students[indexEdit]
        nameSelector.value = objEdit.name;
        emailSelector.value = objEdit.email;
        phoneSelector.value = objEdit.phone;
        addressSelector.value = objEdit.address;
        document.querySelector(`input[value=${objEdit.gender}]`).checked = true;



        btnSelector.classList.add('update');
        btnSelector.setAttribute('data-id', idEdit);
        btnSelector.innerText = 'Update';

    }
}

function handleSortStudent() {
    students.sort(
        function(x, y) {
            let nameX = x.name.toLowerCase();
            let nameY = y.name.toLowerCase();
            if(nameX < nameY) {
                return -1;
            }
            if(nameX > nameY) {
                return 1;
            }
            return 0;
        }
    )
    showListStudient()
}
function handleSearh() {
    let valueSearch = inputSeach.value.toLowerCase();
    
    let studentFilter =students.filter(
        function (item) {
            return item.name.toLocaleLowerCase().indexOf(valueSearch) !== -1;
            
        }

    );
    console.log(studentFilter);
    let resuft = '';
    for (i = 0; i < studentFilter.length; i++) {
        let student = studentFilter[i]
        resuft = resuft + `<tr>
        <td>${i + 1}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.address}</td>
        <td>${student.gender}</td>
        <td>
                    <button type="button" data-id="${student.id}" class="btn btn-blue">Edit</button>
                    <button type="button" data-id="${student.id}" class="btn btn-red">Delete</button>
                </td>
       
        </tr>`
        tbody.innerHTML= resuft;

    
}
}









showListStudient()
btnSelector.addEventListener('click', hancleAddStudient)
tbody.addEventListener('click', handDeleteStudient)
sortnameSelector.addEventListener("click",handleSortStudent)
searSelector.addEventListener('click',handleSearh)
inputSeach.addEventListener('keyup',handleSearh)
