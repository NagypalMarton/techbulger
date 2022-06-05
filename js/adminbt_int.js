let mytd = document.querySelectorAll("td")
let mytr = document.querySelectorAll("tr")
let mod_osz = 4, line = 1
for (let i = 0; i < mytd.length; i++) {
    mytd[i].setAttribute("class", `td_sor${line}`);
    if (i == mod_osz) {
        mytd[i].setAttribute("class", `mod_gomb${line}`);

        let submit_mod_att=document.querySelector('i').getAttribute('class')
        if(submit_mod_att=='.fa-solid fa-pen-nib'){
            mytd[i].setAttribute("type","submit_mod")/*Módosító gomb */
        }else{
            mytd[i].setAttribute("type","submit_del")/*Törlő gomb */
        }
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

let btn_modi = document.querySelector("button[type='submit_mod']") /*Módosítás GOMB */
let btn_dele = document.querySelector("button[type='submit_del'")

btn_modi.onclick = function () {
    let addInput = document.createElement('input');
    addInput.className = "form-control td_sor"
    addInput.ariaRoleDescription = "inputGroup-sizing-lg"
    let myNodeList = document.querySelectorAll(`.td_sor${line}`)
    for (let i = 0; i < myNodeList.length; i++) {
        addInput.defaultValue = myNodeList[i].firstChild.nodeValue
        myNodeList[i].appendChild(addInput.cloneNode(true))
    }
}
btn_dele.onclick = function () {
    const element = document.querySelector(`#C${line}`)
    if (confirm("Biztos törölni akarod a rekordod?")) {
        element.remove()
        alert('Törlésre került!')
    }else{
        console.log('Siker!')
    }
}