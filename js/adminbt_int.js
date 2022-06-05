let mytd = document.querySelectorAll("td")
let mytr = document.querySelectorAll("tr")
let mod_osz = 4, line = 1
for (let i = 0; i < mytd.length; i++) {
    mytd[i].setAttribute("class", `td_sor${line}`);
    if (i == mod_osz) {
        mytd[i].setAttribute("class", `mod_gomb${line}`);
        mod_osz += 5
        line += 1
    }
    if (i + 1 == mytd.length) {
        line = 1
    }
}
for (let i = 0; i < mytr.length; i++) {
    mytr[i].setAttribute("id", `C${i}`);
}

function choiceLine(line) {/*Aktuális sor sorszámát választja ki */
    let sorScope = document.querySelector('th[scope="row"]').firstChild.nodeValue
    alert(sorScope+'Nincs visszatérési érték!')
    return sorScope
}

function btn_modi() {
    let addInput = document.createElement('input');
    line = choiceLine(line)
    addInput.className = "form-control td_sor"
    addInput.ariaRoleDescription = "inputGroup-sizing-lg"
    let myNodeList = document.querySelectorAll(`.td_sor${line}`)
    for (let i = 0; i < myNodeList.length; i++) {
        addInput.defaultValue = myNodeList[i].firstChild.nodeValue
        myNodeList[i].appendChild(addInput.cloneNode(true))
    }
    btn_modi = document.querySelector('button[type="submit_mod"]').setAttribute('class', 'btn btn-success btn-group-s')/*Vajon lehet olyat, ami csak részlegesen cseréli? */
    btn_modi = document.querySelector('button[type="submit_mod"]').setAttribute('type', 'submit_ment')
}
function btn_dele() {
    line = choiceLine(line)
    const element = document.querySelector(`#C${line}`)
    if (confirm("Biztos törölni akarod a rekordod?")) {
        element.remove()
        alert('Törlésre került!')
    } else {
        console.log('Siker!')
    }
}

var btn_mentes=document.querySelector('button[type="submit_ment"]');
btn_mentes.onclick=function(params) {
    alert('Mentés')
}

let table_row = document.querySelector(".table_row")
table_row.addEventListener("submit_ment", function (ev) {/*íGY MÁR el is küldhetnénk az adatokat */
    ev.preventDefault();
    /*console.log(this);*/

    let inputs = this.querySelectorAll("input");
    let values = {}
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs.value
    }
    console.log(values);
});