let line_Form = document.querySelectorAll('tbody tr')
for (const line_TR of line_Form) {
    line_TR.addEventListener("submit", function (ev) {
        ev.preventDefault();//Meg lehet így előzni az alapértelmezett lefutást
        console.log(this);

        let inputAdd = document.createElement("input")
        inputAdd.className = "form-control"
        inputAdd.type = "text"
        inputAdd.ariaLabel = "default input example"
    
        let lFtd = line_TR.querySelectorAll("td")
    
        for (let i = 0; i < lFtd.length - 1; i++) {
            console.log(lFtd[i].firstChild.data)
            inputAdd.value = lFtd[i].firstChild.data
            line_TR.appendChild(inputAdd)
        }
    
        let inputs = this.querySelectorAll("input")
        let values = {}
        for (let i = 0; i < inputs.length; i++) {
            values[inputs[i].name] = inputs[i].value;
        }
        console.log(values)
    });
}