let btn_Edit = document.querySelector(".btn-primary")
btn_Edit.onclick = function () {
    alert('Szerkeztés!')
    
    let inputAdd=document.createElement("input")
    
    inputAdd.className="form-control"
    inputAdd.type="text"
    inputAdd.ariaLabel="default input example"

    let line_parent=document.querySelector("#tr1:not(empty)")

    let line_td=document.querySelectorAll("td")
    for(let i=0;i<line_td.length;i++){
        alert(i)
        inputAdd.value=line_td[i].firstChild.nodeValue
        line_parent.removeChild(line_td[i])
        line_parent.appendChild(line_parent.appendChild(inputAdd))
        //alert(line_td[i].firstChild.nodeValue)
    }
}