let mytd = document.querySelectorAll("td")
let j=4
for (let i = 0; i < mytd.length; i++) {
    mytd[i].setAttribute("class", "td_sor");
    if (i == j) {
        mytd[i].setAttribute("class", "mod_gomb");
        j+=5
    }
}

let TableForm = document.querySelector(".table-group-divider")
let btn_modi = document.querySelector("button[type='submit_mod']") /*Módosítás GOMB */
let btn_dele = document.querySelector("button[type='submit_del'")
btn_modi.onclick = function () {
    alert('Teszt Szöveg')
    let addInput = document.createElement("input");
    addInput.className = "form-control"
    let parents = document.querySelector("td")
    parents.appendChild(addInput)
    console.log(document.querySelector(".table_row").attributes)
}
btn_dele.onclick = function () {
    alert('TÖRLÉS')
    var td = document.querySelector("td")/*Miből*/
    var remInput = document.querySelector(".form-control")/*Mit*/
    td.removeChild(td)
}