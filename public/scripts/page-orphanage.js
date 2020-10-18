const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//coletar dados do HTML
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

/* Criar Mapa */
const map = L.map("mapid", options).setView([lat, lng], 15);

/* Criar e adicionar TileLayer */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

/* Criar ícone */
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


/* Criar e adicionar Marcador do Mapa */
L
.marker([lat, lng], { icon })
.addTo(map)

/* image gallery */
function selectImage(event){
  const button = event.currentTarget

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button){
    button.classList.remove("active")
  }
  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  //adicionar a classe .active para o botão clicado
  button.classList.add('active')
}