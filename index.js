
function updatemap()
{
    console.log("updating map with real time data")
    // url in  fetch return promise
    fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if(cases>255){
                color = "rgb(255, 0, 0)";
            }
            else
            {
                color = `rgb(${cases},0,0)`;
            }

            // mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color // it is rgb color picker for red color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

let interval = 2000;
setInterval(updatemap, interval);