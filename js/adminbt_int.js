//select elem kitöltése
//a HTML résznél kell egy select tag
let toppings = [
    "Nagy Péter",
    "Kis Nyúl",
    "Hagymás Péter"
];

let toppingSelect = document.querySelector('#topping')
let index = 0
while (index < toppings.length) {
    let option = document.createElement("option")
    option.value = toppings[index]
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option)
    index++
}

//A felhasználók adatainak megadása Ennek általában külsős szerverről jön
let users = [
    //ha nincs JSON szerver, akkor az alábbi kell
    /*{ name: "Berger Béla", telNumb: "+36/01-123-4567", email: "bergerbela@email.com", address: "1234 Mucsaröcsöge Bobó körút 124" },
    { name: "Nagy Árpi", telNumb: "+36/02-145-4567", email: "nagyarpi@email.com", address: "1234 Mucsaröcsöge Bobó körút 125" },
    { name: "Kiss Bence", telNumb: "+36/03-166-4567", email: "kissbence@email.com", address: "1234 Mucsaröcsöge Bobó körút 126" }*/
]

getData()

function getData() { //READ
    let fetchInit = {
        method: "GET", //CRUD => Create(POST) Read(GET) Update(PUT) Delete(DELETE)
        headers: new Headers(),
        mode: "cors",
        cache: "default"
    };
    //előtte el kell indítani a szervert
    fetch("http://localhost:3000/users", fetchInit).then(
        data => data.json(),
        err => alert(err)//console.error(err)
    ).then(
        users => createTable(users)//alert(userss)// console.log(userss)
    );
}

function createTable(users) {
    //DOM manipuláció for ciklussal
    let tableBody = document.querySelector("#userTable tbody")

    //Korábbi táblázat soraink a törlése, eltávolítása
    let trs = tableBody.querySelectorAll("tr")
    if (tableBody.childElementCount > 0) {
        for (let i = 0; i < trs.length; i++) {
            tableBody.removeChild(trs[i])
        }
    }

    let createTD = (html, parent) => {
        let td = document.createElement("td")
        td.innerHTML = html
        parent.appendChild(td)
    }

    //Gombok elkészítésének refaktorálása
    let createButtonGroup = parent => {
        let group = document.createElement("div")
        group.className = "btn-group"
        group.ariaLabel = "Basic example"

        let btnInfo = document.createElement("button")
        btnInfo.className = "btn btn-primary"
        btnInfo.innerHTML = "<i class='fa-solid fa-pen-nib'></i>EDIT"

        let btnDanger = document.createElement("button")
        btnDanger.className = "btn btn-danger"
        btnDanger.innerHTML = "<i class='fa-solid fa-eraser'></i>DEL"

        group.appendChild(btnInfo)
        group.appendChild(btnDanger)

        let td = document.createElement("td")
        td.appendChild(group)
        parent.appendChild(td)
        group.setAttribute("role", "group")
        btnInfo.setAttribute("onclick", "btn_Edit(this)")
        btnDanger.setAttribute("onclick", "btn_Del(this)")
    }
    //vége
    for (let k in users) {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.innerHTML = parseInt(k) + 1
        tr.appendChild(th)
        tr.id = `tr${(parseInt(k) + 1)}`
        for (let value of Object.values(users[k])) {
            if (typeof (1) != typeof (value)) {
                createTD(value, tr)
            }
        }
        createButtonGroup(tr)
        tableBody.appendChild(tr)
    }
}

//createTable() // HA NINCS JSON szerver

let edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')//Módosító gomb valós

function btn_Edit(el) { //Módosító gomb => Feldat: TD text gyereke helyére input mezőt tegyen a gyerek értékével (Űrlap lesz a vége), majd váltson át Mentés gombra
    let aktBtn = document.querySelector("[onclick*=btn_Edit]:hover")
    let lFtd = aktBtn.parentElement.parentElement.parentElement.querySelectorAll("td")

    for (let i = 0; i < lFtd.length - 1; i++) {//Adatbázis frissítő függvény elkészítése vége: 3:50
        let inputAdd = document.createElement("input")
        inputAdd.className = "form-control"
        inputAdd.ariaLabel = "default input example"
        inputAdd.value = lFtd[i].firstChild.data
        inputAdd.defaultValue = inputAdd.value
        switch (i) {
            case 0:
                inputAdd.name = "name"
                break;
            case 1:
                inputAdd.name = "telNumb"
                break;
            case 3:
                inputAdd.name = "email"
                break;
            case 4:
                inputAdd.name = "address"
                break;
            default:
                break;
        }
        lFtd[i].appendChild(inputAdd)
        lFtd[i].removeChild(lFtd[i].firstChild)
    }
    //EDIT gomb csere SAVE gombra
    let saveIconAdd = document.createElement("i")
    saveIconAdd.className = "fa-solid fa-floppy-disk"
    let saveButtonAdd = document.createElement("button")
    saveButtonAdd.className = "btn btn-warning"
    saveButtonAdd.type = "button"
    saveButtonAdd.textContent = 'Save'
    aktBtn.parentElement.replaceChild(saveButtonAdd, aktBtn)
    saveButtonAdd.appendChild(saveIconAdd)
    saveButtonAdd.setAttribute('onclick', 'btn_Save()')
    edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')
    line_Form = document.querySelector('[class="btn btn-warning"]')
}

function btn_Save(el) {//Mentés sor: Adott sorban évő adatokat menti
    let tr = line_Form.parentElement.parentElement.parentElement//.querySelectorAll("input")
    let data = getRowData(tr)
    console.log(data)
    /*let input_TdText = line_Form.parentElement.parentElement.parentElement.querySelectorAll("td")
    let values = {}
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        input_TdText[i].removeChild(inputs[i])
        input_TdText[i].textContent = inputs[i].value
    }*/
    //SAVE gomb csere EDIT gombra
    let EditIconAdd = document.createElement("i")
    EditIconAdd.className = "fa-solid fa-pen-nib"
    let saveButtonAdd = document.createElement('button')
    saveButtonAdd.className = "btn btn-primary"
    saveButtonAdd.type = "button"
    saveButtonAdd.textContent = "Edit"
    line_Form.parentElement.replaceChild(saveButtonAdd, line_Form)
    saveButtonAdd.appendChild(EditIconAdd)
    saveButtonAdd.setAttribute('onclick', 'btn_Edit(this)')
    edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')
}

function btn_Del(btn) { //Törlő gomb =>  Feldat: Törölje az adott sort
    // alert('Delete! Átmenetileg nem lehetséges!')
    //lehegyen biztonsági kérdés is, hogy akarja-e töröni, vagy sem
    let tr = btn.parentElement.parentElement.parentElement
    let id = tr.querySelector("th:first-child").innerHTML;
    let fetchOptions = {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache"
    };
    fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            createTable()
        }
    );
}

function sendButton(row) {
    //console.log('A funkció addEventListener-rel van megoldva!')

    let tr = row.parentElement.parentElement
    let data = getRowData(tr)
    delete data.id;
    let fetchOptions = {
        method: "POST",
        mode: 'cors',
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(`http://localhost:3000/users`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => getData()
    )
}

function getRowData(tr) {
    let inputs = tr.querySelectorAll("input.form-control")
    let data = {}
    for (let i = 0; i < inputs.length; i++) {
        data[inputs[i].name] = inputs[i].value
    }
    return data
}

//űrlapesemény
/*let userForm = document.querySelector('#userForm')
userForm.addEventListener("submit", function (ev) {
    ev.preventDefault()

    let inputs = this.querySelectorAll("input")
    let values = {}
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value
        inputs[i].value = ""
    }

    users.push({
        name: `${values.nev}`,
        telNumb: `${values.telSzam}`,
        address: `${values.email}`,
        email: `${values.address}`
    })

    createTable()
    console.log('addEventListener lefutott és hozzáadta a táblázathoz!')
})*/