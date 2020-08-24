//const fetch = require("node-fetch");
function updatem(){
  fetch("http://api.coronatracker.com/v3/analytics/dailyNewStats?limit=200").then(response=>response.json()).then(data=>{
       console.log(data)
      data.forEach(element=>{
        lat=element.lat;
        lon=element.lng;
        cases=element.daily_deaths;
        if(cases>255){
          color="rgb(255,0,0)";
        }
        else if(cases>10){
          color= "#b81512";
        }
        else{
          color="rgb(${cases},0,0)";
        }

        new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([lon, lat])
          .addTo(map);

      });
    })


}

updatem();
