export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // Método para renderizar todos los elementos
  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  // Método para agregar un nuevo elemento al contenedor
  addItem(element) {
    this._container.append(element);
  }
}
