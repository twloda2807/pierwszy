require (["esri/Map","esri/views/MapView"],
    function(Map, MapView){
        let map1 = new Map({basemap: "topo"});
        let mapContainer = new MapView({
            container: "item",
            map: map1,
            zoom: 10,
            center: [22.66,51.25]
        })
    })
