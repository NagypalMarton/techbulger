let week_temp=[5,4,56]
function weatherWidget() {
    alert("A week_temp Tömb-e? "+Array.isArray(week_temp))
    week_temp.push("54")/*Érték hozzáadása a végére*/
    alert("A tömb értékei: "+week_temp)
    week_temp.pop("54")/*Elem elvétele a végéről*/
    week_temp.unshift("43")/*Elem hozzadása az elejéhez */
    week_temp.shift(4)/*elem elvétele bárhonnan*/
}