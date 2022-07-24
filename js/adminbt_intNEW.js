let edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')//Módosító gomb valós
let line_Form //Save Gombhoz kell
for (const edit_btn of edit_btns) {
    edit_btn.addEventListener("click", function (ev) {
        ev.preventDefault();//Meg lehet így előzni az alapértelmezett lefutást
        let lFtd = this.parentElement.parentElement.parentElement.querySelectorAll("td")
        alert(lFtd[1])

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
        this.parentElement.replaceChild(saveButtonAdd, this)
        saveButtonAdd.appendChild(saveIconAdd)
        saveButtonAdd.setAttribute('onclick', 'btn_Save()')
        line_Form = document.querySelector('[class="btn btn-warning"]')
    })
}

/*for (const line_TR of line_Form) {
    console.log(line_Form)
    line_TR.addEventListener("click", function (ev) { // "submit" //SAVE gomb Megnyomásával kellene müködnie
        ev.preventDefault();//Meg lehet így előzni az alapértelmezett lefutást
        console.log(this);

        let inputs = this.querySelectorAll("input")
        let values = {}
        for (let i = 0; i < inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
        }
        console.log(values)
    });
}*/

function btn_Edit() { //Módosító gomb => Feldat: TD text gyereke helyére input mezőt tegyen a gyerek értékével (Űrlap lesz a vége), majd váltson át Mentés gombra
    alert('Edit! Az adott sorban 2. kattintás után nem müködik az AddEvenListener() valamiért!')
}

function btn_Save() {//Mentés sor: Adott sorban évő adatokat menti
    alert('Save!')
    let inputs = line_Form.parentElement.parentElement.parentElement.querySelectorAll("input")
    let input_TdText = line_Form.parentElement.parentElement.parentElement.querySelectorAll("td")
    let values = {}
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
        input_TdText[i].removeChild(inputs[i])
        input_TdText[i].textContent = inputs[i].value
    }
    //  console.log(values)
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
}

function btn_Del() { //Törlő gomb =>  Feldat: Törölje az adott sort
    alert('Delete! Átmenetileg nem lehetséges!')
}