const btn = document.getElementById('register');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
var emailError = document.getElementById('emailError');
var nameError =document.getElementById('nameError');
var familyError =document.getElementById('familyError');
var passError =document.getElementById('passError');
var userError= document.getElementById('userError');



btn.addEventListener('click',function(){

    const name = document.getElementById('name').value;
    const family = document.getElementById('family').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var userRegex = /^[0-9A-Za-z]{6,}$/;

    var table =document.getElementById('table');
    if((name.length != 0) && (family.length != 0) && (password1.length != 0) 
        && (password2.length != 0) && (password1.value == password2.value) 
    && (username.length != 0) && (emailRegex.test(email)) && (userRegex.test(username))){
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = family;
    cell3.innerHTML = gender;
    cell4.innerHTML = email;
};

    if (username.length == 0){
        userError.textContent = 'وارد کردن نام کاربری الزامی است';
    }
    else{
        if(!userRegex.test(username) ){
            userError.textContent = 'نام کاربری را به درستی وارد کنید.';
        }
        else{
            userError.textContent = '';
        }

    }
    emailError.textContent = (!emailRegex.test(email) ) ? 'ایمیل را به درستی وارد کنید.' : '';
    passError.textContent = (password1.value != password2.value) ? 'رمز را به درستی وارد کنید.' :'';
    nameError.textContent = name.length === 0 ? 'وارد کردن نام الزامی است' : '' ;
    familyError.textContent = family.length === 0 ? 'وارد کردن نام خانوادگی الزامی است' : '';
    cell3.style.backgroundColor = gender ==='زن' ? 'pink' : 'lightblue';
    
    
});


