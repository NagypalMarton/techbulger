/*let week_temp = [5.4, 15.9, 25.5, 33, 14.7, -0.1, 20.6]
const week_temp_high = [0, 15, 20, 25]
const napi_ajanl = ['Forró Csoki', 'Meleg Tea', 'Fagyi', 'Jéghideg Limonadé']*/
var data = getWeatherData()

function weatherWidget() {
  let hetNapja = document.querySelector('select[id="HetNap"]').value
  let showWeekTemp = document.querySelector('span#Homer')/*id-s szelektor */
  let akt_temp = showWeather(hetNapja) /*week_temp[hetNapja]*/
  showWeekTemp.innerHTML = 'Hő: ' + akt_temp + ' &#8451;'
  napi_ajanlFt(akt_temp)

  var showatlag = document.querySelector('small#a')
  var showmin = document.querySelector('small#b')
  var showmax = document.querySelector('small#c')
  showatlag.innerHTML = 'Heti átlag: ' + hetiatlag() + ' &#8451;'
  showmin.innerHTML = 'Heti Min: ' + hetimin() + ' &#8451;'
  showmax.innerHTML = 'Heti Max: ' + hetimax() + ' &#8451;'
  alert('Ajánlatunk csak a Mucsaröcsögei Cukrászda és KészMűves Fagyizó KFT. BTK-nál érvényesíthető!')
}

/*Adott naphoz tartozó értéket megkeresi, mivel nem biztos, hogy sorrendben vannak */
function showWeather(day) {
  if (isNaN(Object.keys(data))) {
    for (let dayNumb in data.week_temp) {
      if (day == data.week_temp[dayNumb]["dayNumb"]) {
        return data.week_temp[dayNumb]["temp"]
      }
    }
  } else {
    return 0
  }
}
/*Napi hőmérséklethez kiírja az aznapi ajánlatot */
function napi_ajanlFt(akt_temps) {
  var showAjalnlat = document.querySelector('span#Ajanlat')
  var max = ' - '
  for (let a = 0; a < Object.keys(data.napi_ajanl).length; a++) {
    console.log('Összehasonlítás: '+akt_temps+'<='+data.napi_ajanl[a]['daylimit'])
    if (akt_temps <= data.napi_ajanl[a]['daylimit']) {
      max = data.napi_ajanl[a]['offer']
      console.log('Igaz az összehasonlítás!')
      break;
    }
  }
  showAjalnlat.innerHTML = 'Ajánlat: ' + max
}

function hetiatlag() {
  let heti_atlag = 0;
  if (isNaN(Object.keys(data)) == true) {/*Fordított logika*/
    for (let key in data.week_temp) { /*Kulcsokon megy végig*/
      heti_atlag += data.week_temp[key]['temp'];/*week_temp[index];*/
    }
    heti_atlag = heti_atlag / Object.values(data.week_temp).length/*week_temp.length*/
  }
  heti_atlag = heti_atlag.toFixed(0)
  return heti_atlag
}

function hetimin() {
  let heti_min = 0
  if (isNaN(Object.keys(data.week_temp)) /*week_temp.length > 0*/) {
    heti_min = data.week_temp[0]["temp"]/*week_temp[0];*/
    for (let index = 0; index < Object.values(data.week_temp).length/*week_temp.length*/; index++) {
      if (heti_min > data.week_temp[index]['temp']/*week_temp[index]*/) {
        heti_min = data.week_temp[index]['temp']/*week_temp[index]*/;
      }
    }
  }
  return heti_min
}

function hetimax() {
  let heti_max = 0
  if (isNaN(Object.keys(data.week_temp)) /*week_temp.length > 0*/) {
    heti_max = data.week_temp[0]['temp']/*week_temp[0];*/
    for (let index = 0; index < Object.values(data.week_temp).length/*week_temp.length*/; index++) {
      if (heti_max < data.week_temp[index]['temp']/*week_temp[index]*/) {
        heti_max = data.week_temp[index]['temp']/*week_temp[index]*/;
      }
    }
  }
  return heti_max
}