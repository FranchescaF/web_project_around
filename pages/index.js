import { Card } from "../scripts/Card.js";
import { PopupWithForm } from "../scripts/PopupWithForms.js";
import { PopupWithImage } from "../scripts/PopupWithImage.js";
import { Section } from "../scripts/Section.js";
import { UserInfo } from "../scripts/UserInfo.js";
import { FormValidator } from "../scripts/FormValidator.js";
import { api } from "../utils/api.js";

api.getUserInfo();

api.getInitialCards().then((initialCards) => {
  const section = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        const newCard = createCard(item.link, item.name);
        cardContainer.prepend(newCard);
      },
    },
    ".elements__container"
  );
  section.renderItems();
});

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
    name: "Picos de Huandoy",
    link: "https://elements-resized.envatousercontent.com/envato-shoebox/1d0d/3499-b0c3-48b3-a9db-3697148f0143/IMG_3393%20copia.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=45b641f517fef78319b8f45ccaa69bc7f4c9fb61a634979167f20731d90856bc",
  },
  {
    name: "Pampa peruana",
    link: "https://elements-resized.envatousercontent.com/envato-shoebox/fc19/36a4-13f9-4fdf-b70b-7d68e876999d/Peruvian%20pampa_170827210800_0.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=1f9f5d8f283f143be32135e7785b02bfbe2889ac6b73558209be432a2af23363",
  },
  {
    name: "Centro de Lima",
    link: "https://elements-resized.envatousercontent.com/envato-shoebox/twenty20/production/uploads/items/904e5d38-9e99-4bf2-b24c-ed9d388d2564/source?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=ab1fe41718917229891662cf077db6c5febff7491d0160999b50b62906138c56",
  },
  {
    name: "Costa Verde",
    link: "https://elements-resized.envatousercontent.com/envato-shoebox/1e4e/07df-4173-4bdb-ba99-8e2535f98cdd/bdydQ2BTdEmmneGVEfH9mc5z9QidKaCN9n6kWznj.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=d82c9da014f50dc1e5b4e9209faa74328cb7730d9f6cbc54da9bbc628807814a",
  },
  {
    name: "Ruinas de Pisac",
    link: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/98/d3/6a/9f/74/v1_E10/E10ZSPU.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=2e4888d53104665b22d77c3710a2c6eb0da2e124d6dee5b5336475c196b2bb2d",
  },
  {
    name: "Machu Picchu",
    link: "https://elements-resized.envatousercontent.com/envato-shoebox/ffcb/2b5b-86ce-4eab-8d62-8dd7d60a419b/machupicchu-IMG_2268-Edit-new.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=474c57c643bbe5bf6298c1ef709fb62506f7ed421dadf577870b011a15ea6b7d",
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
  userInfo.setUserInfo({ name: data.name, hobbie: data.hobbie });
  profilePopup.close();
});
const addCardPopup = new PopupWithForm("#popup-add-card", (data) => {
  const newCard = createCard(data.link, data.name);
  cardContainer.prepend(newCard);
  addCardPopup.close();
});
const showCardPopup = new PopupWithImage("#popup-show-card", () => {});
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  hobbieSelector: ".profile__hobbie",
});

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
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = createCard(item.link, item.name);
      cardContainer.prepend(newCard);
    },
  },
  ".elements__container"
);
section.renderItems();

// Evento para abrir el popup de editar perfil
profileButton.addEventListener("click", function () {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputHobbie.value = data.hobbie;
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
