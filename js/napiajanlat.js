let week_temp = [5.4, 15.9, 25.5, 33, 14.7, -0.1, 20.6]
const week_temp_high = [0, 15, 20, 25]
const napi_ajanl = ['Forró Csoki', 'Meleg Tea', 'Fagyi', 'Jéghideg Limonadé']

function weatherWidget() {
  let hetNapja = document.querySelector('select[id="HetNap"]').value
  let showWeekTemp = document.querySelector('span#Homer')/*id-s szelektor */
  let akt_temp = week_temp[hetNapja]
  showWeekTemp.innerHTML = 'Hő: ' + akt_temp + ' &#8451;'
  napi_ajanlFt(akt_temp)

  var showatlag = document.querySelector('small#a')
  var showmin = document.querySelector('small#b')
  var showmax = document.querySelector('small#c')
  showatlag.innerHTML = 'Heti átlag: ' + hetiatlag() + ' &#8451;'
  showmin.innerHTML = 'Heti Min: ' + hetimin() + ' &#8451;'
  showmax.innerHTML = 'Heti Max: ' + hetimax() + ' &#8451;'
}
function napi_ajanlFt(akt_temps) {
  var showAjalnlat = document.querySelector('span#Ajanlat')
  for (let a = 0; a < week_temp_high.length; a++) {
    if (akt_temps > week_temp_high[a]) {
      showAjalnlat.innerHTML = 'Ajánlat: ' + napi_ajanl[a]
      break
    }
  }
  alert('Ajánlatunk csak a Mucsaröcsögei Cukrászda és KészMűves Fagyizó KFT. BTK-nál érvényesíthető!')
}
function hetiatlag(params) {
  let heti_atlag = 0;
  if (week_temp.length > 0) {
    for (let index = 0; index < week_temp.length; index++) {
      heti_atlag += week_temp[index];
    }
    heti_atlag = heti_atlag / week_temp.length
  }
  heti_atlag = heti_atlag.toFixed(0)
  return heti_atlag
}
function hetimin(params) {
  let heti_min=0
  if (week_temp.length>0) {
    heti_min = week_temp[0];
    for (let index = 0; index < week_temp.length; index++) {
      if (heti_min>week_temp[index]) {
        heti_min = week_temp[index];
      }
    }
  }
  return heti_min
}
function hetimax(params) {
  let heti_max=0
  if (week_temp.length>0) {
    heti_max = week_temp[0];
    for (let index = 0; index < week_temp.length; index++) {
      if (heti_max<week_temp[index]) {
        heti_max = week_temp[index];
      }
    }
  }
  return heti_max
}