import { Popup } from "./Popup.js";
export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector); // Llama al constructor de Popup
    this._form = this._popupElement.querySelector(".popup__form");
    this._confirmButton = this._popupElement.querySelector(".form__delete");
  }

  open(handleConfirm) {
    super.open();
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (this._handleConfirm) {
        this._handleConfirm();
        this.close();
      }
    });
  }
}
