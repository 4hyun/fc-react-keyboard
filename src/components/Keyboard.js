export class Keyboard {
  #switchEl;
<<<<<<< HEAD
  #fontSelectEl;
  #keyboardEl;
  constructor() {
    this.#initElements();
    this.#registerEvents();
  }
  #initElements() {
    this.#switchEl = document.getElementById("switch");
    /* TODO: fontSelectEl */
    /* TODO: containerEl */
  }
  #registerEvents() {
    this.#switchEl.addEventListener("click", () => {});
    /* fontSelect */
    /* containerEl */
=======
  constructor() {
    this.#registerElements();
    this.#registerEvents();
  }
  #registerElements() {
    this.#switchEl = document.getElementById("switch");
  }
  #registerEvents() {
    this.#switchEl.addEventListener("click", () => {});
>>>>>>> master
  }
}
