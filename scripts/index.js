// Variables para modificar el perfil
const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileHobbie = document.querySelector(".profile__hobbie");
const inputName = document.querySelector("#input-name");
const inputHobbie = document.querySelector("#input-hobbie");
const formProfile = document.querySelector("#form-profile");
const closeButton = document.querySelector(".form__close-button-profile");
// Variables para agregar tarjetas (cards)
const cardContainer = document.querySelector(".elements__container");
const popupAddCard = document.querySelector("#popup-add-card");
const formAddCard = document.querySelector("#form-addCard");
const addButton = document.querySelector(".profile__add-button");
const inputCardName = document.querySelector("#input-card-name");
const inputLink = document.querySelector("#input-card-link");
const closeAddCardButton = document.querySelector(
  ".form__close-button-addCard"
);
const createButton = document.querySelector(".form__create-button");
//Variables para agrandar imagen
const popupCardImage = document.querySelector("#popup-show-card");
const popupCardClose = document.querySelector(".popup__close-card");
// Tarjetas iniciales
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Función para abrir cualquier popup
function openPopup(popup) {
  popup.classList.add("popup__show");
}

// Función para cerrar cualquier popup
function closePopup(popup) {
  popup.classList.remove("popup__show");
}

// Función para agregar una tarjeta (card)
function addCard(link, name) {
  const cardTemplate = document.querySelector("#template__card").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const cardImage = cardElement.querySelector(".element__photo-link");
  const cardTitle = cardElement.querySelector(".element__photo-name");
  const btnDelete = cardElement.querySelector(".element__photo-trash");
  const btnLike = cardElement.querySelector(".element__photo-like");

  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("element__photo-like_active");
  });
  btnDelete.addEventListener("click", function () {
    cardElement.remove();
  });
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  // Añadir eventos de la tarjeta
  cardImage.addEventListener("click", function () {
    openPopup(popupCardImage);
    popupCardImage.querySelector(".popup__photo-link").src = link;
    popupCardImage.querySelector(".popup__photo-link").alt = name;
    popupCardImage.querySelector(".popup__photo-name").textContent = name;
  });

  return cardElement;
}

// Añadir las tarjetas iniciales al contenedor
initialCards.forEach(function (element) {
  const newCard = addCard(element.link, element.name);
  cardContainer.prepend(newCard);
});

// Evento para abrir el popup de editar perfil
profileButton.addEventListener("click", function () {
  inputName.textContent = profileName.value;
  inputHobbie.textContent = profileHobbie.value;
  openPopup(popupProfile);
});

// Evento para cerrar el popup de editar perfil
closeButton.addEventListener("click", function () {
  closePopup(popupProfile);
});

// Evento para cerrar el popup de agregar tarjeta
closeAddCardButton.addEventListener("click", function () {
  closePopup(popupAddCard);
});

// Evento para cerrar el popup de la imagen
popupCardClose.addEventListener("click", function () {
  closePopup(popupCardImage);
});

// Evento para manejar el envío del formulario de perfil
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  profileName.textContent = inputName.value; // Actualiza el nombre del perfil
  profileHobbie.textContent = inputHobbie.value; // Actualiza el hobbie del perfil
  closePopup(popupProfile); // Cierra el popup después de actualizar el perfil
});

// Evento para abrir el popup de agregar tarjeta
addButton.addEventListener("click", function () {
  openPopup(popupAddCard);
});

// Evento para manejar el envío del formulario de agregar tarjeta
formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const name = inputCardName.value;
  const link = inputLink.value;

  if (name && link) {
    const newCard = addCard(link, name);
    cardContainer.prepend(newCard); // Añade la nueva tarjeta al contenedor

    inputCardName.value = ""; // Resetea el campo de nombre
    inputLink.value = ""; // Resetea el campo de enlace

    closePopup(popupAddCard); // Cierra el popup después de agregar la tarjeta
  }
});
