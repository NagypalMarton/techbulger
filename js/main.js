/* Fv -> azokat a kódrészleteket, amelyeket gyakran használunk*/
let amouantNumber = 0
// let testPrice = 1200
let sumProductPrice=0
var sumProduct=1//Kiválasztott termék
let deliveryAmount = 500
let btnCh = document.querySelector(".submit-btn")

btnCh.addEventListener('click', (event) => {
    event.preventDefault();
    let selectedPordNod = document.querySelectorAll("input[type='checkbox']:checked")/*Összes bepipált termék*/
    sumProduct=selectedPordNod.length
    var selectedPord = []
    for (let i = 0; i < selectedPordNod.length; i++) {
        selectedPord[i]= selectedPordNod[i].nextElementSibling.firstChild.nodeValue;//TestvérElemének az értékéne
        for (let j = 0; j < products.length; j++) {
            if (selectedPord[i]==products[j]["name"]) {
                sumProductPrice+=parseInt(products[j]["price"])
            }
        }
    }
    console.log('Vegosszeg: '+sumProductPrice+' Kiválasztott termekszama: '+amouantNumber*sumProduct)
})

let products = [{
    name: "Console Lover Player",
    price: "3450",
    type: "Gamer PC"
}, {
    name: "Best Gaming Computer Device",
    price: "3000",
    type: "Gamer PC"
}, {
    name: "Mini Raspberry Clone",
    price: "1960",
    type: "Otthoni PC"
}, {
    name: "Only Browsing PC",
    price: "698",
    type: "Otthoni PC"
}, {
    name: "Mini Barbone PC",
    price: "680",
    type: "Irodai PC"
}, {
    name: "Maxi Mini PC",
    price: "894",
    type: "Irodai PC"
}]

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

    //kezded
    let selectedPordNod = document.querySelectorAll("input[type='checkbox']:checked")/*Összes bepipált termék*/
    sumProduct=selectedPordNod.length
    var selectedPord = []
    for (let i = 0; i < sumProduct; i++) {
        selectedPord[i]= selectedPordNod[i].nextElementSibling.firstChild.nodeValue;//TestvérElemének az értékéne
        for (let j = 0; j < products.length; j++) {
            if (selectedPord[i]==products[j]["name"]) {
                sumProductPrice+=parseInt(products[j]["price"])
            }
        }
    }
    //vég

    let amouant1 = amouantNumber * sumProductPrice*sumProduct
    showAmount.innerHTML = amouant1 + " $"
    showDarab.innerHTML =amouantNumber*sumProduct + " db"

    let kedvInput = document.querySelector("input[type=radio]")
    let showKedvNev = document.querySelector("span.show-amount-kedvneve")
    showKedvNev.innerHTML = kedvInput.value

    let kedvSzaz = 0.15

    let showKedv = document.querySelector('span.show-amount-kedverteke')
    showKedv.innerHTML = (kedvSzaz * 100).toPrecision(2) + "%, melynek értéke: " + (amouant1 * kedvSzaz).toFixed(0) + " $"
    showAmountEnds(amouant1, kedvSzaz)
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
    var showInput = document.querySelector('input[class^="form-control"]')
    var BoolValues = true
    if (isNaN(showInput)) {
        alert("Nincs kitöltve az összes mező! (lehet)")
        BoolValues = false
    }
    return BoolValues
}

function showAmountEnds(amouant1, kedvSzaz) {
    let amountEnd = amouant1 - (amouant1 * kedvSzaz).toFixed(0)
    let showAmountEnd = document.querySelector('span.show-amount-kedv')
    showAmountEnd.innerHTML = amountEnd + " $"
    amountEndder = showDelivery(amountEnd)
    let showAmountEndder = document.querySelector('span.show-amount-kedv-der')
    showAmountEndder.innerHTML = amountEndder + " $"
}

function showDelivery(amountEnd) {
    let showDevAmount = document.querySelector("span.show-delivery-amount")
    if (amountEnd >= 5000) {
        amountEnd = amountEnd + deliveryAmount
        showDevAmount.innerHTML = deliveryAmount + " $"
    }
    return amountEnd
}

function RendelesKuldese() {
    alert('Ez egy demo űrlap, amely sehova se küldi el és menti el a bevitt adatokat! Ellenőrzés egyenlőre csak a Mennyiség megadásánál van!')
}