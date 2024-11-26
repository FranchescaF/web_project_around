export class Card {
  //Constructor(Metodo) que tiene parametros para construir instacias de la clase
  constructor(name, link) {
    //this:hace referencia al objeto que necesita la propiedad
    this._name = name;
    this._link = link;
    this._template = template
      .cloneNode(true)
      .textContent.querySelector(".element");
    this._likes = 0;
    this._likesButton = template.querySelector(".element__photo-like");
  }
  handleLike() {
    this._likesButton.classList.add(".element__photo-like_active");
  }
  handleDelete() {
    this.template.remove();
  }
}
