// Globe / Map
// Wrap your map initialization code in a function
function initializeMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2xhcmlzIiwiYSI6ImNscmoyMWpocDBmZmgya3N6cWt3d3NtM2wifQ.wFSXb4hFR0fpbXiRejoPQg';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 2 // starting zoom
    });
}
// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeMap);
