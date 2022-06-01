/* Fv -> azokat a kódrészleteket, amelyeket gyakran használunk*/
let amouantNumber = 0
let testPrice = 1200
let deliveryAmount =500

function calcAmount() {
    let testPrice = 1200
    let amountInput = document.querySelector("input[name='amount-input']"); /*Ezzel lehet kiválasztani, hogy melyik elemet */
    let amouant = parseInt(amountInput.value) * testPrice
    alert("Fizetendő: " + amouant + " $")
}

function ordersTextChance() {/*Eljárás => Nem ad vissza semmilyen adatot */
    let amountInput = document.querySelector("input[name='amount-input']"); /*Ezzel lehet kiválasztani, hogy melyik elemet */
    let showAmount = document.querySelector("span.show-amount-kedvnel")
    let showDarab = document.querySelector("span.show-mennyiseg")

    CheckValues(amountInput) /*Invokáció => fv hívása*/

    let amouant1 = amouantNumber * testPrice
    showAmount.innerHTML = amouant1 + " $"
    showDarab.innerHTML = amouantNumber + " db"

    let kedvInput = document.querySelector("input[type=radio]")
    let showKedvNev = document.querySelector("span.show-amount-kedvneve")
    showKedvNev.innerHTML = kedvInput.value

    let kedvSzaz = 0.15

    let showKedv = document.querySelector('span.show-amount-kedverteke')
    showKedv.innerHTML = (kedvSzaz * 100).toPrecision(2) + "%, melynek értéke: " + (amouant1 * kedvSzaz).toFixed(0) + " $"
    showAmountEnds(amouant1,kedvSzaz)
}

function CheckValues(amountInput) { /*ellenőrzi, a bevitt értéket*/
    amouantNumber = parseInt(amountInput.value)
    /*isNaN(parseInt(amountInput.value)) ? 1 : alert('Nem megfelelő érték!') /*Három operandusú feltétel*/
    if ((isNaN(amouantNumber) || typeof amouantNumber != Number) && CheckInput() == true) {/*Ellenőrzi, hogy üres-e */
        amouantNumber = 1
    }

    if (amouantNumber > 10) {
        alert("Max 10 terméket vásárolhatsz meg!")
        return
    } else if (amouantNumber < 1) {
        alert("Min 1 terméket vásárolhatsz meg!")
        return
    }
    return amouantNumber
}

function CheckInput() {/*Mezők kitöltésének ellenőrzése */
    var showInput=document.querySelector('input[class^="form-control"]')
    var BoolValues=true
    if (isNaN(showInput)) {
        alert("Nincs kitöltve az összes mező!")
        BoolValues=false
    }
    return BoolValues
}

function showAmountEnds(amouant1,kedvSzaz) {
    let amountEnd = amouant1 - (amouant1 * kedvSzaz).toFixed(0)
    let showAmountEnd=document.querySelector('span.show-amount-kedv')
    showAmountEnd.innerHTML=amountEnd+" $"
    amountEndder=showDelivery(amountEnd)
    let showAmountEndder = document.querySelector('span.show-amount-kedv-der')
    showAmountEndder.innerHTML = amountEndder+ " $"
}

function showDelivery(amountEnd) {
    let showDevAmount=document.querySelector("span.show-delivery-amount")
    if (amountEnd>=5000) {
        amountEnd=amountEnd+deliveryAmount
        showDevAmount.innerHTML=deliveryAmount+" $"
    }
    return amountEnd
}

function RendelesKuldese() {
    alert('Ez egy demo űrlap, amely sehova se küldi el és menti el a bevitt adatokat! Ellenőrzés egyenlőre csak a Mennyiség megadásánál van!')
}