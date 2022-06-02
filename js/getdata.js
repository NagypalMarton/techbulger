function getWeatherData() {
  let weathers =/* (0) nap sorsámát és hőmérséklet, Objektum, napsorszáma ne biztos, hogy sorrendben vannak*/
  {
    "dayNumber": [0, 1, 2, 3, 4, 5, 6],
    "temp": [5.4, 15.9, 25.5, 33, 14.7, -0.1, 20.6]
  };

  const offers =/* (1) Ajánlat, felső limitet tartalmazza OBJEKTUM*/
  {
    "upperLimit": [0, 15, 20, 25],
    'offerMessage': ['Forró Csoki', 'Meleg Tea', 'Fagyi', 'Jéghideg Limonadé']
  };
  let getWeatherData={
    'weathers':weathers,
    'voffers':offers
  }
  return getWeatherData;
}

/*function getWeatherData2() {
  "weather": [/*tömb *//*
    {
      "dayNumber": 0,
      "temp": -11, 2 *//*Objektum*//*
    },
    ...
  ]
  "offers": [/* tömb*//*
    {
      "upperLimit": 0,
      "offerMessage": "Forró Csoki"
    },
    ...
  ]
}*/