import { Card } from "../scripts/Card.js";
import { PopupWithForm } from "../scripts/PopupWithForms.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { Section } from "../scripts/Section.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { FormValidator } from "../scripts/FormValidator.js";
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
const createButton = document.querySelector(".form__submit"); //botón de crear y guardar
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

// Configuración para la validación de formularios
const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

//Instancias de clase
const profilePopup = new PopupWithForm("#popup-profile", (data) => {
  profileName.textContent = data.name;
  profileHobbie.textContent = data.hobbie;
  profilePopup.close();
});
const addCardPopup = new PopupWithForm("#popup-add-card", (data) => {
  const newCard = createCard(data.link, data.name);
  cardContainer.prepend(newCard);
  addCardPopup.close();
});
const showCardPopup = new PopupWithImage("#popup-show-card", () => {});

// Inicialización de la validación de formularios
const profileFormValidator = new FormValidator(config, formProfile);
profileFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, formAddCard);
addCardFormValidator.enableValidation();

// Función para agregar una tarjeta (card)
function createCard(link, name) {
  const card = new Card(name, link, "#template__card", (link, name) => {
    showCardPopup.open();
    popupCardImage.querySelector(".popup__photo-link").src = link;
    popupCardImage.querySelector(".popup__photo-link").alt = name;
    popupCardImage.querySelector(".popup__photo-name").textContent = name;
  });
  return card.generateCard();
}

// Añadir las tarjetas iniciales al contenedor
initialCards.forEach(function (element) {
  const newCard = createCard(element.link, element.name);
  cardContainer.prepend(newCard);
});

// Evento para abrir el popup de editar perfil
profileButton.addEventListener("click", function () {
  inputName.textContent = profileName.value;
  inputHobbie.textContent = profileHobbie.value;
  profilePopup.open();
});

// Función para cerrar todos los popups
function closeAnyPopup() {
  profilePopup.close(); // Cierra el popup de perfil
  addCardPopup.close(); // Cierra el popup de agregar tarjeta
  showCardPopup.close(); // Cierra el popup de mostrar tarjeta
}

// Usar en lugar de los listeners directos
closeButton.addEventListener("click", closeAnyPopup);
closeAddCardButton.addEventListener("click", closeAnyPopup);
popupCardClose.addEventListener("click", closeAnyPopup);

// Evento para manejar el envío del formulario de perfil
formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  profileName.textContent = inputName.value; // Actualiza el nombre del perfil
  profileHobbie.textContent = inputHobbie.value; // Actualiza el hobbie del perfil
  profilePopup.close(); // Cierra el popup después de actualizar el perfil
});

// Evento para abrir el popup de agregar tarjeta
addButton.addEventListener("click", function () {
  addCardPopup.open();
});

// Evento para manejar el envío del formulario de agregar tarjeta
formAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const name = inputCardName.value;
  const link = inputLink.value;

  if (name && link) {
    const newCard = createCard(link, name);
    cardContainer.prepend(newCard); // Añade la nueva tarjeta al contenedor

    inputCardName.value = ""; // Resetea el campo de nombre
    inputLink.value = ""; // Resetea el campo de enlace

    addCardPopup.close(); // Cierra el popup después de agregar la tarjeta
  }
});

//Cerrar los form presionando en el overlay
popupAddCard
  .querySelector(".popup__overlay")
  .addEventListener("click", function () {
    addCardPopup.close();
  });

popupProfile
  .querySelector(".popup__overlay")
  .addEventListener("click", function () {
    profilePopup.close();
  });

popupCardImage
  .querySelector(".popup__overlay")
  .addEventListener("click", function () {
    showCardPopup.close();
  });

//cosas por preguntar
//no se me desabilita el boton de guardar y crear
//no funciona el overlay de la imagen
// el form validator no funciona muy bien osea no me sale nada debajo que me diga falta completar
