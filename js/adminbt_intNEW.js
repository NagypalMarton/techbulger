/*let line_Form = document.querySelectorAll('tbody tr')
for (const line_TR of line_Form) {
    line_TR.addEventListener("submit", function (ev) { //Edit gomb MEGnyomásával kellene müködnie
        ev.preventDefault();//Meg lehet így előzni az alapértelmezett lefutást
        console.log(this);

        let lFtd = line_TR.querySelectorAll("td")
        console.log(lFtd)

        for (let i = 0; i < lFtd.length - 1; i++) {
            let inputAdd = document.createElement("input")
            inputAdd.className = "form-control"
            inputAdd.ariaLabel = "default input example"

            inputAdd.value = lFtd[i].firstChild.data
            inputAdd.defaultValue=inputAdd.value
            console.log(lFtd[i].firstChild.data)
            lFtd[i].appendChild(inputAdd)
            lFtd[i].removeChild(lFtd[i].firstChild)
            console.log(lFtd[i])
        }

        let inputs = this.querySelectorAll("input")
        let values = {}
        for (let i = 0; i < inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
        }
        console.log(values)
    });
}*/
let dedi_line
//A függvényt hívó gomb meghatározásához kell => LEHET, HOGY A CELLÁKNÁL IS MEGHÍVÓDIK!!
let active_btns=document.querySelectorAll('button')
for(const active_btn of active_btns){
    active_btn.addEventListener("click",function(ev) {
        ev.preventDefault();//Meg lehet így előzni az alapértelmezett lefutást
        console.log(this);
        dedi_line=this.parentElement.parentElement.parentElement
        console.log(dedi_line)
    })
}

function btn_Edit() { //Módosító gomb => Feldat: TD text gyereke helyére input mezőt tegyen a gyerek értékével (Űrlap lesz a vége), majd váltson át Mentés gombra
    alert('Szerkeztés!')
    console.log('btn_edit: '+dedi_line)
}

function btn_Del() { //Törlő gomb =>  Feldat: Törölje a sort
    alert('Törlés!')
}