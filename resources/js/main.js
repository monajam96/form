function publishToTable() {
    const name = document.getElementById('name').value;
    const family = document.getElementById('family').value;
    const sel1 = document.getElementById('sel1').value;
    const tableElement = document.getElementById('table');
    const trElement = document.createElement('tr');
    const tbodyElement = document.createElement('tbody');
    const nameEle = document.createElement('td');
    const familyEle = document.createElement('td');
    const sel1Ele = document.createElement('td');

    nameEle.innerHTML = name;
    familyEle.innerHTML = family;
    sel1Ele.innerHTML = sel1;

    trElement.appendChild(nameEle);
    trElement.appendChild(familyEle);
    trElement.appendChild(sel1Ele);

    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
    };
