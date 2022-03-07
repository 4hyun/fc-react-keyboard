export class Keyboard {
  #switchEl;
  constructor() {
    this.#addSwitchEl();
    this.#registerEvents();
  }
  #addSwitchEl() {
    this.#switchEl = document.getElementById("switch");
  }
  #registerEvents() {
    this.#switchEl.addEventListener("click", () => {});
  }
}
