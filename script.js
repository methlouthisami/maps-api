let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.76491, lng: 10.24754 },
    zoom: 8,
  });
}