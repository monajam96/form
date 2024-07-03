const btn = document.getElementById('register');
btn.addEventListener('click',function(){
    const name = document.getElementById('name').value;
    const family = document.getElementById('family').value;
    const gender = document.getElementById('gender').value;
    const tableElement = document.getElementById('table');
    const trElement = document.createElement('tr');
    const tbodyElement = document.createElement('tbody');
    const nameEle = document.createElement('td');
    const familyEle = document.createElement('td');
    const genderEle = document.createElement('td');
    nameEle.innerHTML = name;
    familyEle.innerHTML = family;
    genderEle.innerHTML = gender;

    trElement.appendChild(nameEle);
    trElement.appendChild(familyEle);
    trElement.appendChild(genderEle);

    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
});