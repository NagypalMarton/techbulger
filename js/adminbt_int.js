let tableForm = document.querySelector("#tableForm")
tableForm.addEventListener("submit_mod", function (ev) {
    ev.preventDefault();
    console.log(this);
    let tds = this.querySelectorAll("td");
    let values = {};
    for (let i = 0; i < tds.length; i++) {
        values[tds[i].name] = tds[i].value;
    }
});