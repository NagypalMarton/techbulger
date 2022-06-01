let week_temp = [5.4, 10.9, 25.5, 33, 12, 0, 20]
const week_temp_high=[0,15,20,25]
const napi_ajanl=['forró csoki','meleg tea','fagyi','jéghideg limonadé']

function weatherWidget() {
    let hetNapja=document.querySelector('select[id="HetNap"]').value
    let showWeekTemp=document.querySelector('span#Homer')/*id-s szelektor */
    let akt_temp=week_temp[hetNapja]
    showWeekTemp.innerHTML=akt_temp+' Celsius van!'
    napi_ajanl(akt_temp)
}
function napi_ajanl(akt_temps) {
    var showAjalnlat=document.querySelector('span#Ajanlat')
    for (let a = 0; a < week_temp_high.length; a++) {
      if (akt_temps<week_temp_high[a]) {
        showAjalnlat.innerHTML='Mai ajánlat: '+napi_ajanl[a]
      }
    }
    
    alert('Ajánlatunk csak a Mucsaröcsögei Cukrászda és KészMűves Fagyizó KFT. BTK-nál érvényesíthető!')
}