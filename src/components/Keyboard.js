export class Keyboard {
  #switchEl;
  constructor() {
    this.#registerElements();
    this.#registerEvents();
  }
  #registerElements() {
    this.#switchEl = document.getElementById("switch");
  }
  #registerEvents() {
    this.#switchEl.addEventListener("click", () => {});
  }
}
