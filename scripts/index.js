const popupContainer = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileHobbie = document.querySelector(".profile__hobbie");
const inputName = document.querySelector("#input-name");
const inputHobbie = document.querySelector("#input-hobbie");
const formProfile = document.querySelector("#form__profile");
const closeButton = document.querySelector(".form__close-button");

function handleOpenProfile(evt) {
  popupContainer.classList.add("popup__opened");
}

function handleCloseProfile(evt) {
  popupContainer.classList.remove("popup__opened");
}

profileButton.addEventListener("click", handleOpenProfile);

closeButton.addEventListener("click", handleCloseProfile);
