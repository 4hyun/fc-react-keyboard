export class Keyboard {
  #switchEl;
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
  }
}
