const editAvatarButton = document.querySelector(".profile__edit-avatar");
const avatarPopup = document.querySelector("#popup-avatar");
const avatarForm = document.querySelector("#form-avatar");
const inputAvatarUrl = document.querySelector("#input-avatar-url");
const profileAvatar = document.querySelector(".profile__avatar");

// Evento para abrir el popup al hacer clic en el botón de edición del avatar
editAvatarButton.addEventListener("click", () => {
  avatarPopup.classList.add("popup_opened");
});

// Evento para cambiar el avatar al enviar el formulario
avatarForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newAvatarUrl = inputAvatarUrl.value;

  if (newAvatarUrl) {
    profileAvatar.src = newAvatarUrl; // Cambia la imagen del avatar
    avatarPopup.classList.remove("popup_opened"); // Cierra el popup
    avatarForm.reset(); // Resetea el formulario
  }
});
