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
    alert(sorScope)
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
    btn_modi = document.querySelector('button[type="submit_mod"]').setAttribute('onclick', 'btn_mentes()')
    btn_modi = document.querySelector('button[type="submit_mod"]').setAttribute('type', 'submit_ment')
}
function btn_dele() {
    line = choiceLine(line)
    const element = document.querySelector(`#C${line}`)
    alert(line)
    if (confirm("Biztos törölni akarod a rekordod?")) {
        element.remove()
        alert('A kért elem törlésre került!')
    }
}

function btn_mentes() {
    alert('Mentés')
    line = choiceLine(line)
    let myNodeList = document.querySelectorAll(`.td_sor${line}`)
    for (let i = 0; i < myNodeList.length; i++) {
        myNodeList[i].removeChild(myNodeList[i].firstElementChild);
    }

    btn_modi = document.querySelector('button[type="submit_ment"]').setAttribute('onclick', 'btn_modi()')
    btn_modi = document.querySelector('button[type="submit_ment"]').setAttribute('class', 'btn btn-outline-warning btn-group-s')
    btn_modi = document.querySelector('button[type="submit_ment"]').setAttribute('type', 'submit_mod')
}

let table_row = document.querySelector(`.td_sor${line}`)
table_row.addEventListener("click", function (ev) {/*íGY MÁR el is küldhetnénk az adatokat */
    ev.preventDefault();
    alert('addEventListener')

    let inputs = this.querySelectorAll("input");
    let values = {}
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs.value
        console.log(inputs.value)
    }
    console.log(values);
});

/*Az adott fölé helyezett kurzor esetén változzon a line értéke */
/*let buttonGrMoOv = document.querySelector("div[class*='btn-group']").onmouseover = function () { mouseOver() }
let buttonGrMoOu = document.querySelector("div[class*='btn-group']").onmouseout = function () { mouseOut() }*/
/*onmouseover: az elem fölé viszik az egérmutatót (mobilon értelmetlen) */

/*function mouseOver() {
    document.querySelector("div[class*='btn-group']").style.boxShadow = " 0 0 12px black"
}
function mouseOut() {
    document.querySelector("div[class*='btn-group']").style.boxShadow = " 0 0 0px black"
}*/

let buttonGrMoOv = document.querySelectorAll("div[class*='btn-group']")
let buttonGrMoOvs = document.querySelectorAll("div[class*='btn-group']")

buttonGrMoOvs.forEach(function (buttonGrMoOv) {
    buttonGrMoOv.addEventListener('mouseover', function hover() {
        document.querySelector("div[class*='btn-group']").style.boxShadow = " 0 0 12px black"
    });

    buttonGrMoOv.addEventListener('mouseleave', function leave() {
        document.querySelector("div[class*='btn-group']").style.boxShadow = " 0 0 0px black"
    });
});

let users = [
    {
        name: "Kiss Tibbi",
        phone: "+36/90-965-9878",
        email: "kiss.tibi@gags.ju",
        address: '9876 Mucsaröcsöge Trabéz Nadrág utca 13'
    },
    {
        name: "Nagy Józska",
        phone: "+36/90-965-9878",
        email: "Nagy.Jozska@gags.ju",
        address: '9876 Mucsaröcsöge Trabéz Nadrág utca 19'
    },
    {
        name: "Nől Zsófia",
        phone: "+36/90-965-7899",
        email: "Nol.Zsofia@gags.jh",
        address: '9876 Mucsaröcsöge Trabéz Nadrág utca 9'
    },
]

{/* <tr class="table_row">
<th scope="row">1</th>
<td>Mark Otto</td>
<td>+36/20-123-4567</td>
<td>mark.otto@thisemail.jk</td>
<td>9876 Mucsaröcsöge Trabéz Nadrág utca 12.</td>
<td>
    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group me-2" role="group" aria-label="First group">
            <button onclick='btn_modi()' type="submit_mod"
                class="btn btn-outline-warning btn-group-s" role="group"><i
                    class="fa-solid fa-pen-nib"></i> Edit</button>
            <button onclick='btn_dele()' type="submit_del"
                class="btn btn-outline-danger btn-group-sm" role="group"><i
                    class="fa-solid fa-dumpster-fire"></i> Del</button>
        </div>
    </div>
</td>
</tr> */}

let tableBody = document.querySelector("#tableForm tbody");
let createID = (html, parent) => {
    let td = document.createElement("td")
    td.innerHTML = html
    parent.appendChild(td)
}

let createButtonGroup = parent => {
    let group = document.createElement("div")
    group.className = "btn-group";
    let btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-outline-warning btn-group-s"
    btnEdit.innerHTML = "<i class='fa-solid fa-pen-nib'></i> Edit"

    let btnDel = document.createElement("btn")
    btnDel.className = "btn btn-outline-danger btn-group-sm"
    btnDel.innerHTML = '<i class="fa-solid fa-dumpster-fire"></i> Del'

    group.appendChild(btnEdit)
    group.appendChild(btnDel)

    let td = document.createElement("td")
    td.appendChild = (group)
    parent.appendChild(td)
}

for (const k in users) {
    let tr = document.createElement("tr")
    createID(parseInt(k) + 1, tr)
    for (const value of Object.values(users[k])) {
        createID(value, tr)
    }
    createButtonGroup(tr)
    tableBody.appendChild(tr)
}