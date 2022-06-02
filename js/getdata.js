function getWeatherData() {
  let weathers =/*nap sorsámát és hőmérséklet, Objektum, napsorszáma ne biztos, hogy sorrendben vannak*/
  {
    "dayNumber": [0,1,2,3,4,5,6],
     "temp": [5.4,15.9,25.5,33,14.7,-0.1,20.6]
  };

  const offers =/*Ajánlat, felső limitet tartalmazza OBJEKTUM*/
  {
    "upperLimit": [0,15,20,25],
    'offerMessage': ['Forró Csoki','Meleg Tea','Fagyi','Jéghideg Limonadé']
  };
  return weathers,offers;
}
