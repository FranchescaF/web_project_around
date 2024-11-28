// Función para abrir la imagen
export function openPopup(popup) {
  popup.classList.add("popup__show");
}

// Función para cerrar la imagen
export function closePopup(popup) {
  popup.classList.remove("popup__show");
}

// Función para Cerrar el Popup con la Tecla Escape
export function closePopupOnEscape(evt) {
  if (evt.key === "Escape") {
    // Verifica si la tecla presionada es Escape
    if (popupCardImage) {
      closePopup(popupCardImage); // Llama a la función para cerrar el popup de imagen
    }
    if (popupProfile) {
      closePopup(popupProfile); // Llama a la función para cerrar el popup de editar perfil
    }
    if (popupAddCard) {
      closePopup(popupAddCard); // Llama a la función para cerrar el popup de agregar tarjeta
    }
  }
}

// Función para enviar formulario al presionar Enter
export function submitOnEnter(evt, form) {
  if (evt.key === "Enter") {
    evt.preventDefault(); // Evita el comportamiento predeterminado de la tecla Enter
    form.requestSubmit(); // Envia el formulario
  }
}
