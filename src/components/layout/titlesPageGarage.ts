class TitlePageGarage {
  private titleGarage = document.createElement("h1");
  private titlePage = document.createElement("h3");
  private spanNumberPage = document.createElement("span");
  addTitleGarage(count: number) {
    this.titleGarage.style.color = "#fff";
    this.titleGarage.textContent = `Garage (${count})`;
    return this.titleGarage;
  }
  addTitlePage() {
    this.titlePage.style.color = "#fff";
    this.titlePage.textContent = `Page #`;
    this.spanNumberPage.classList.add("span-number-page");
    this.spanNumberPage.innerText = "1";
    this.titlePage.append(this.spanNumberPage);
    return this.titlePage;
  }
}

export default TitlePageGarage;
