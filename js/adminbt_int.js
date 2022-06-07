let users = [
    {
        name: "Mark Otto",
        phone: "+36/20-123-4567",
        email: "mark.otto@thisemail.jk",
        address: '9876 Mucsaröcsöge Trabéz Nadrág utca 12.'
    }, {
        name: "Mark Toto",
        phone: "+36/20-123-4589",
        email: "mark.toto@thisemail.jk",
        address: '9876 Mucsaröcsöge Trabéz Nadrág utca 14.'
    },
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

let tableBody = document.querySelector("#tableForm tbody");

let createTD = (html, parent) => {
    let td = document.createElement("td")
    td.innerHTML = html
    parent.appendChild(td)
};

let createButtonGroup = parent => {
    let toolbar = document.createElement("div")
    toolbar.className = 'btn-toolbar'
    toolbar.setAttribute('role', 'toolbar')
    toolbar.setAttribute('aria-label', 'Toolbar with button groups')

    var group = document.createElement("div")
    group.className = "btn-group me-2";
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'First group')

    var btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-outline-warning btn-group-s";
    btnEdit.innerHTML = "<i class='fa-solid fa-pen-nib'></i> Edit";
    btnEdit.setAttribute("onclick", "btn_modi()")
    btnEdit.setAttribute("type", "submit_mod")
    btnEdit.setAttribute('role', 'group')

    let btnDel = document.createElement("button");
    btnDel.className = "btn btn-outline-danger btn-group-sm";
    btnDel.innerHTML = '<i class="fa-solid fa-dumpster-fire"></i> Del';
    btnEdit.setAttribute("onclick", "btn_dele()")
    btnEdit.setAttribute("type", "submit_del")
    btnEdit.setAttribute('role', 'group')

    group.appendChild(btnEdit)
    group.appendChild(btnDel)
    toolbar.appendChild(group)

    let td = document.createElement("td")
    td.appendChild(toolbar)
    parent.appendChild(td)
};

for (const k in users) {
    let tr = document.createElement("tr")
    tr.setAttribute("class","table_row")

    /*ID hozzáadása*/
    let th=document.createElement("th")
    th.setAttribute("scope","row")
    th.innerHTML=parseInt(k)+1
    tr.appendChild(th)

    for (const value of Object.values(users[k])) {
        createTD(value, tr)
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr)
}

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

function sendButton() {
    alert('Jelenleg még nem lehet adatot felvinni a táblázatba!')
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

<<<<<<< HEAD
/*Az adott fölé helyezett kurzor esetén változzon a line értéke */
const rowModButton = document.querySelectorAll("")
rowModButton.addEventListener("", function (ev) {
    ev.preventDefault()
});
/*function LineValueChange(content) {
    function fillPre(content) {
        document.querySelector('pre').innerHTML = content;
    }
    let button = document.querySelector('.click-button');
    button.addEventListener('click', function (event) {
        var className = this.className;
        fillPre('clicked: ' + className);
    });*//*onmouseover: az elem fölé viszik az egérmutatót (mobilon értelmetlen) */
}
=======
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
>>>>>>> 5bdefac5d1b4b57defb3159f9b9e7cb83529b163
