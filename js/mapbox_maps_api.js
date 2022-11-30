"use strict";

let favoriteRestaurants = [
    {
        name: "Deluca's Pizza",
        features: "Best Pizza in the South",
        coords: [-93.054429, 34.508414]
    }, {
        name: "Don Juan's Mexican Restaurant",
        features: "Best enchiladas in town!",
        coords: [ -93.039203, 34.495245]
    }, {
        name: "Vault",
        features: "Best steak and experience ever!",
        coords: [-93.053665, 34.509613]
    }
];


mapboxgl.accessToken = mapBoxKey;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-93.054429, 34.508414]
});

favoriteRestaurants.forEach(function (restaurant){
    // console.log(restaurant.name);
    new mapboxgl.Marker()
        .setLngLat(restaurant.coords)
        .setPopup( new mapboxgl.Popup()
            .setHTML(`<p>${restaurant.name}</p>`))
        .addTo(map);
})

// let delucasMarker = new mapboxgl.Marker()
// .setLngLat(restaurant.coords)
//     .addTo(map);
//
// let donJuansMarker = new mapboxgl.Marker()
//     .setLngLat([ -93.039203,
//         34.495245])
//     .addTo(map);
//
// let vaultMarker = new mapboxgl.Marker()
//     .setLngLat([-93.053665,
//         34.509613])
//     .addTo(map);

// let delucasPopup = new mapboxgl.Popup()
//     .setHTML("<p>Deluca's Pizza</p>")

// delucasMarker.setPopup(delucasPopup);