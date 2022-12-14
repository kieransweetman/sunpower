import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker_icon from 'leaflet/dist/images/marker-icon.png';
import marker_shadow from 'leaflet/dist/images/marker-shadow.png';
import custom_marker from '../media/custom_marker.png';

const map = L.map('map').setView([43.610769, 3.876716], 12);
const location = window.location.pathname;
let locations = [
  ["Client: Pradeo<br>Nombre d'ombrelles: 3<br>Capacité: 12 Wh", 43.567044, 3.943067],
  ["Client: Greenx<br>Nombre d'ombrelles: 7 <br> Capacité: 23 Wh", 43.57119189294555, 3.944850180592113],
  ["Client: E3 <br> Nombre d'ombrelles: 5 <br> Capacité: 18 Wh", 43.580029830572066, 3.930319133070283],
  ["Client: ExpX <br>Nombre d'ombrelles: 2<br>Capacité: 12 Wh", 43.5767955843162, 3.918006132209793],
  ["Client: Prosaic <br> Nombre d'ombrelles: 3 <br> Capacité: 17 Wh", 43.57292250029829, 3.910868572186806],
  ["Client: Testam  <br> Nombre d'ombrelles: 3 <br> Capacité: 17 Wh", 43.575271102211566, 3.905550948258604],
  ["Client: LoopX   <br> Nombre d'ombrelles: 6 <br> Capacité: 32 Wh", 43.588998746115195, 3.922262375095761],
  ["Client: SoapL   <br> Nombre d'ombrelles: 6 <br> Capacité: 13 Wh", 43.593426867911354, 3.908214747604587],
  ["Client: Digigi  <br> Nombre d'ombrelles: 7 <br> Capacité: 45 Wh", 43.599275741161804, 3.8797166221546115],
  ["Client: SunX    <br> Nombre d'ombrelles: 1 <br> Capacité: 7 Wh", 43.60519267120589, 3.8639512413617707],
  ["Client: FreakZ  <br> Nombre d'ombrelles: 3 <br> Capacité: 16 Wh", 43.62164407845158, 3.881687511542558],
  ["Client: Espera  <br> Nombre d'ombrelles: 4 <br> Capacité: 15 Wh", 43.62596089414691, 3.841287595793522],
];

const m = L.icon({
  iconUrl: marker_icon,
  shadowUrl: marker_shadow,
});

const c_m = L.icon({
  iconUrl: custom_marker,
  shadowUrl: marker_shadow,

  iconSize: [75, 75],
});

function mapGen() {
  //API key
  const key = 'nJIl5Oa0J3EjlFmBVxci';

  //Starting position of the map

  //Style URL
  L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${key}`, {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution:
      '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    crossOrigin: true,
  }).addTo(map);

  for (let i = 0; i < locations.length; i++) {
    setTimeout(() => {
      let marker = new L.marker([locations[i][1], locations[i][2]], { icon: m }).bindPopup(locations[i][0]);
      marker.addTo(map);
    }, i * 200);
  }
}

function addMarker(lat, long, client, ombr, capacité) {
  let info = `Client: ${client} <br> Nombre d'ombrelles: ${ombr} <br> Capacité: ${capacité} Wh`;
  let marker = new L.marker([lat, long], { icon: c_m }).bindPopup(info);
  marker.addTo(map);
}

mapGen();

const  show_form = document.querySelector('#show_button');

if (location.includes('/pages/map.html')) {
  let button = document.querySelector('button[type=submit]');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const ombrières = document.querySelector('input[name=ombrières]').value;
    const capacité = document.querySelector('input[name=capacité]').value;
    const client = document.querySelector('input[name=client]').value;
    const lat = document.querySelector('input[name=lat]').value;
    const long = document.querySelector('input[name=long]').value;

    addMarker(lat, long, client, ombrières, capacité);
  });

  
}


show_form.addEventListener('click', ()=>{
 
  document.querySelector('#mapForm').classList.toggle('collapse')
  
})

