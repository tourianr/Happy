/* Criar Mapa */
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

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
});

let marker;

// Criar e adicionar marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  //remover icon layer anterior onclick (if simplificado)
  marker && map.removeLayer(marker);
  //adicionar icon layer ao marker
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add campo de fotos
function addPhotoField() {
  //pegar o container de fotos
  const container = document.querySelector("#images");
  //pegar o container a ser duplicado
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //clonar ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo está vazio. se sim, não add ao container
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  //limpar o campo antes de adicionar
  input.value = "";
  //add o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }
  //deletar o campo
  span.parentNode.remove();
}

//swap Sim e Não
function toggleSelect() {
  //pegar o botão clicado
  //verificar seu valor

  //retirar a class .active existente
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  //colocar a class .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"');
  input.value = button.dataset.value;
}
