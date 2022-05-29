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
    let amouantNumber=isNaN(parseInt(amountInput.value))? 1:alert('Nem megfelelő érték!') /*Három operandusú feltétel*/
    
    if(isNaN(amouantNumber)){/*Ellenőrzi, hogy üres-e */
        amouantNumber=1
    }else if(typeof amouantNumber != Number){
        alert('Érvénytelen érték! Új értéke: 1 db')
        amouantNumber=1
    }

    if(amouantNumber>10){
        alert("Max 10 terméket vásárolhatsz meg!")
        return
    }else if(amouantNumber<1){
        alert("Min 1 terméket vásárolhatsz meg!")
    }
    
    let amouant1=amouantNumber*testPrice
    showAmount.innerHTML=amouant1+" Ft"
    showDarab.innerHTML= amouantNumber+" db"

    let kedvInput=document.querySelector("input[type=radio]")
    let showKedvNev=document.querySelector("span.show-amount-kedvneve")
    showKedvNev.innerHTML=kedvInput.value

    let kedvSzaz=0.15
    
    let showKedv=document.querySelector('span.show-amount-kedverteke')
    showKedv.innerHTML=(kedvSzaz*100).toPrecision(2)+"%, melynek értéke: "+(amouant1*kedvSzaz).toFixed(0)+" Ft"
    
    let showAmountEnd=document.querySelector('span.show-amount-kedv')
    let amountEnd=amouant1-(amouant1*kedvSzaz).toFixed(0)
    showAmountEnd.innerHTML=amountEnd+" Ft"
    alert('Ez egy demo űrlap, amely sehova se küldi el és menti el a bevitt adatokat! Ellenőrzés egyenlőre csak a Mennyiség megadásánál van!')
}