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
    { name: "Berger Béla", telNumb: "+36/01-123-4567", email: "bergerbela@email.com", address: "1234 Mucsaröcsöge Bobó körút 124" },
    { name: "Nagy Árpi", telNumb: "+36/02-145-4567", email: "nagyarpi@email.com", address: "1234 Mucsaröcsöge Bobó körút 125" },
    { name: "Kiss Bence", telNumb: "+36/03-166-4567", email: "kissbence@email.com", address: "1234 Mucsaröcsöge Bobó körút 126" }
]

function createTable() {
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
        btnInfo.setAttribute("onclick", "btn_Edit()")
        btnDanger.setAttribute("onclick", "btn_Del()")
    }
    //vége

    for (let k in users) {
        let tr = document.createElement("tr")
        let th = document.createElement("th")
        th.innerHTML = parseInt(k) + 1
        tr.appendChild(th)
        tr.id = `tr${(parseInt(k) + 1)}`
        for (let value of Object.values(users[k])) {
            createTD(value, tr)
        }
        createButtonGroup(tr)
        tableBody.appendChild(tr)
    }
}

createTable()

let edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')//Módosító gomb valós

function btn_Edit() { //Módosító gomb => Feldat: TD text gyereke helyére input mezőt tegyen a gyerek értékével (Űrlap lesz a vége), majd váltson át Mentés gombra
    let aktBtn = document.querySelector("[onclick*=btn_Edit]:hover")
    let lFtd = aktBtn.parentElement.parentElement.parentElement.querySelectorAll("td")

    for (let i = 0; i < lFtd.length - 1; i++) {
        let inputAdd = document.createElement("input")
        inputAdd.className = "form-control"
        inputAdd.ariaLabel = "default input example"
        inputAdd.value = lFtd[i].firstChild.data
        inputAdd.defaultValue = inputAdd.value
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

function btn_Save() {//Mentés sor: Adott sorban évő adatokat menti
    let inputs = line_Form.parentElement.parentElement.parentElement.querySelectorAll("input")
    let input_TdText = line_Form.parentElement.parentElement.parentElement.querySelectorAll("td")
    let values = {}
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        input_TdText[i].removeChild(inputs[i])
        input_TdText[i].textContent = inputs[i].value
    }
    //SAVE gomb csere EDIT gombra
    let EditIconAdd = document.createElement("i")
    EditIconAdd.className = "fa-solid fa-pen-nib"
    let saveButtonAdd = document.createElement('button')
    saveButtonAdd.className = "btn btn-primary"
    saveButtonAdd.type = "button"
    saveButtonAdd.textContent = "Edit"
    line_Form.parentElement.replaceChild(saveButtonAdd, line_Form)
    saveButtonAdd.appendChild(EditIconAdd)
    saveButtonAdd.setAttribute('onclick', 'btn_Edit()')
    edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')
    console.log(edit_btns)
}

function btn_Del() { //Törlő gomb =>  Feldat: Törölje az adott sort
    alert('Delete! Átmenetileg nem lehetséges!')
    //lehegyen biztonsági kérdés is, hogy akarja-e töröni, vagy sem
}

function sendButton() {
    alert('A funkció addEventListenet-rel van megoldva!')
}

//űrlapesemény
let userForm = document.querySelector('#userForm')
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
})