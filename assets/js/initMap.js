function initMap() {
    // Localização da loja
    const loja = { lat: -23.588896, lng: -46.568212 };

    // Estilos do mapa em JSON
    const mapStyles = [

        fetch('caminho/para/seu/arquivo.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro na rede: ' + response.statusText);
            return response.json();
        })
        .then(data => {
            console.log(data);
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [{ "visibility": "on" }]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }, { "saturation": "-100" }]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }, { "visibility": "off" }]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{ "visibility": "off" }, { "color": "#000000" }, { "lightness": 16 }]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{ "color": "#000000" }, { "lightness": 20 }]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#4d6059" }]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{ "color": "#4d6059" }]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{ "lightness": 21 }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "visibility": "on" }, { "color": "#7f8d89" }]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{ "color": "#2b3638" }, { "visibility": "on" }]
        }
        // Adicione outros estilos conforme necessário
    ];

    // Cria o mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: loja,
        styles: mapStyles // Aplique os estilos aqui
    });

    // Adiciona um marcador
    const marker = new google.maps.Marker({
        position: loja,
        map: map,
        title: "Nossa Loja"
    });

    // InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        content: "<h4>Nossa Loja</h4><p>Aqui estão suas melhores compras!</p>"
    });

    // Listener para abrir o InfoWindow ao clicar no marcador
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
