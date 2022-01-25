class ButtonPagination {
  private buttonPrev = document.createElement("button");
  private buttonNext = document.createElement("button");
  addButtonPrev() {
    const minCar = localStorage.getItem("minCar") ? JSON.parse(localStorage.getItem("minCar") || "0") : "0";
    if (minCar > 6) {
      this.buttonPrev.removeAttribute("disabled");
    } else if (minCar < 7) {
      this.buttonPrev.setAttribute("disabled", "");
    }
    this.buttonPrev.innerText = "PREV";
    this.buttonPrev.style.marginRight = "10px";
    this.buttonPrev.classList.add("button", "prev");
    return this.buttonPrev;
  }
  addButtonNext(count: number) {
    if (count < 8) {
      this.buttonNext.setAttribute("disabled", "");
    } else if (count > 7) {
      this.buttonNext.removeAttribute("disabled");
    }
    this.buttonNext.innerText = "NEXT";
    this.buttonNext.classList.add("button", "next");
    return this.buttonNext;
  }
}
export default ButtonPagination;
