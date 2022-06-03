function getWeatherData() {
  let week_temp = [{
    dayNumb: 0,
    temp: -2
  }, {
    dayNumb: 1,
    temp: 5
  }, {
    dayNumb: 2,
    temp: 17.8
  }, {
    dayNumb: 3,
    temp: 21
  }, {
    dayNumb: 4,
    temp: 14.7
  }, {
    dayNumb: 5,
    temp: 25
  }, {
    dayNumb: 6,
    temp: 26
  }];

  const napi_ajanl = [{
    daylimit: 0,
    offer: 'Forró csoki'
  }, {
    daylimit: 15,
    offer: 'Meleg Tea'
  }, {
    daylimit: 20,
    offer: 'Fagyi'
  }, {
    daylimit: 25,
    offer: 'Jéghideg Limonadé'
  },];
  return {
    'week_temp': week_temp,
    'napi_ajanl': napi_ajanl
  }
}