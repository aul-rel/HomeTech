// Função que será chamada quando a API do Google Maps carregar
function initMap() {
    // Localização da Uninove - Vila Prudente
    var location = { lat: -23.612784, lng: -46.558295 };

    // Criando o mapa e configurando o centro e zoom
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, // Ajuste o zoom se necessário
        center: location,
    });

    // Criando um marcador na localização da Uninove
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Uninove - Vila Prudente" // Texto que aparece quando passa o mouse sobre o marcador
    });
}
