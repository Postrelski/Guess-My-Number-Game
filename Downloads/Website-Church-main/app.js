// hamburger javascript
const hamburger = document.getElementById('hamburger');
const links = document.getElementById('links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('show');
})


// submit form
const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
};


// -------- google map api ------ // 
// api key -- AIzaSyDpOOT7Mp2Yrl12s7fA7KNF17onwTenx1o
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 37.596680, lng: -85.910990 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  // const marker = new AdvancedMarkerView({
  //   map: map,
  //   position: position,
  //   title: "Uluru",
  // });
  
}
initMap();


// add the counter javascript here ----->

