/*let line_Form = document.querySelectorAll('tbody tr')
for (const line_TR of line_Form) {
    line_TR.addEventListener("submit", function (ev) { //Edit gomb MEGnyomásával kellene müködnie
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

let edit_btns = document.querySelectorAll('[onclick*=btn_Edit]')//Módosító gomb valós
for (const edit_btn of edit_btns) {
    edit_btn.addEventListener("click", function (ev) {
        ev.preventDefault();//Meg lehet így előzni az alapértelmezett lefutást
        let dedi_line = this.parentElement.parentElement.parentElement

        let lFtd = dedi_line.querySelectorAll("td")

        for (let i = 0; i < lFtd.length - 1; i++) {
            let inputAdd = document.createElement("input")
            inputAdd.className = "form-control"
            inputAdd.ariaLabel = "default input example"

            inputAdd.value = lFtd[i].firstChild.data
            inputAdd.defaultValue = inputAdd.value
            lFtd[i].appendChild(inputAdd)
            lFtd[i].removeChild(lFtd[i].firstChild)
        }
        //gomb csere Mentés gombra
        let saveIconAdd = document.createElement("i")
        saveIconAdd.className = "fa-solid fa-floppy-disk"
        let saveButtonAdd = document.createElement("button")
        saveButtonAdd.className = "btn btn-warning"
        saveButtonAdd.type = "button"
        saveButtonAdd.textContent = 'Save'
        //saveButtonAdd.onclick =btn_Save() //function () { alert('teszt') }
        this.parentElement.replaceChild(saveButtonAdd, this)
        saveButtonAdd.appendChild(saveIconAdd)
        saveButtonAdd.setAttribute('onclick','btn_Save()')
    })
}

function btn_Edit() { //Módosító gomb => Feldat: TD text gyereke helyére input mezőt tegyen a gyerek értékével (Űrlap lesz a vége), majd váltson át Mentés gombra
    alert('Szerkeztés!')
}

function btn_Save(params) {
    alert('Save!')
}

function btn_Del() { //Törlő gomb =>  Feldat: Törölje a sort
    alert('Törlés!')
}