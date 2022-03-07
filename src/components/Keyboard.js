export class Keyboard {
  #switchEl;
  constructor() {
<<<<<<< HEAD
    this.#addSwitchEl();
    this.#registerEvents();
  }
  #addSwitchEl() {
=======
    this.#registerElements();
    this.#registerEvents();
  }
  #registerElements() {
>>>>>>> master
    this.#switchEl = document.getElementById("switch");
  }
  #registerEvents() {
    this.#switchEl.addEventListener("click", () => {});
  }
}
