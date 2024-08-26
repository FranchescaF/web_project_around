const popupContainer = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileHobbie = document.querySelector(".profile__hobbie");
const inputName = document.querySelector("#input-name");
const inputHobbie = document.querySelector("#input-hobbie");
const formProfile = document.querySelector("#form-profile");
const closeButton = document.querySelector(".form__close-button");

function handleOpenProfile(evt) {
  popupContainer.classList.add("popup__show");
}

function handleCloseProfile(evt) {
  popupContainer.classList.remove("popup__show");
}

profileButton.addEventListener("click", handleOpenProfile);

closeButton.addEventListener("click", handleCloseProfile);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  profileName.textContent = inputName.value; // Actualiza el nombre del perfil
  profileHobbie.textContent = inputHobbie.value; // Actualiza el hobbie del perfil
  handleCloseProfile(); // Cierra el popup después de actualizar el perfil
});
