class ButtonPaginationWinners {
  private buttonPrev = document.createElement("button");
  private buttonNext = document.createElement("button");
  addButtonPrev() {
    this.buttonPrev.setAttribute("disabled", "");
    this.buttonPrev.innerText = "PREV";
    this.buttonPrev.style.marginRight = "10px";
    this.buttonPrev.classList.add("button", "prev-winners");
    return this.buttonPrev;
  }
  addButtonNext(count: number) {
    if (count < 10) {
      this.buttonNext.setAttribute("disabled", "");
    } else if (count > 9) {
      this.buttonNext.removeAttribute("disabled");
    }
    this.buttonNext.innerText = "NEXT";
    this.buttonNext.classList.add("button", "next-winners");
    return this.buttonNext;
  }
}
export default ButtonPaginationWinners;
