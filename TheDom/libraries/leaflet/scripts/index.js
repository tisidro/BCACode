// give your L a variable name, reference the id or class via L.map, specify a setview

let myMap = L.map('map-container').setView([51.505, -0.09], 8)

// L tile layer
let OpenStreetMap_DE = L.tileLayer(
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
  {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(myMap)

let myMarker = L.marker([44.2, -72.4]).addTo(myMap)

//to click and disappear
myMarker.bindPopup('Hi from this place')

let anotherMarker = L.marker([44.1, -72.45])

//to click and remove marker
anotherMarker.addEventListener('click', evt => {
  evt.target.remove()
})
