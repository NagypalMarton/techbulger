function calcAmount() {
    let testPrice=1200
    let amountInput=document.querySelector("input[name='amount-input']"); /*Ezzel lehet kiválasztani, hogy melyik elemet */
    let amouant=parseInt(amountInput.value)*testPrice
    alert("Fizetendő: "+amouant+" Ft")
}

function ordersTextChance() {
    let testPrice=1200
    let amountInput=document.querySelector("input[name='amount-input']"); /*Ezzel lehet kiválasztani, hogy melyik elemet */
    let showAmount=document.querySelector("span.show-amount-kedvnel")
    let showDarab=document.querySelector("span.show-mennyiseg")
    let amouant1=parseInt(amountInput.value)*testPrice
    showAmount.innerHTML=amouant1+" Ft"
    showDarab.innerHTML= showDarab+" db"

    let kedvInput=document.querySelector("input[type=radio]")
    let showKedvNev=document.querySelector("span.show-amount-kedvneve")
    showKedvNev.innerHTML=kedvInput.value

    
}