enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: ".form__button_disabled",// boton inactivo
    inputErrorClass: ".form__input_type_error",//marcado rojo en la linea del formulario
    errorClass: ".form__error_visible"//error visible 
  });


export const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("form__error_visible");
  };
  
export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.classList.remove("form__error_visible");
    errorElement.textContent = "";
  };
  
export const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  
export const toggleButtonState = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("form__button_disabled");
    } else {
      buttonElement.classList.remove("form__button_disabled");
    }
  };
  
export  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(".form__input"));
    const buttonElement = formElement.querySelector(".form__submit");
  
    // aquí, para comprobar el estado del botón al principio
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement);
        // y aquí, para comprobarlo cada vez que haya cambios en la entrada de algún campo
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
 export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));
  
      fieldsetList.forEach((fieldset) => {
        setEventListeners(fieldset);
      });
    });
  };
  
