import GaragePage from "../pages/garage-page";
import WinnerPage from "../pages/winner-page";
import { CarType } from "../types/car";
import { WinnerType } from "../types/winners";
import ControlGaragePage from "./controlGaragePage";

class Navigation {
  private winnersButton: HTMLButtonElement = document.createElement("button");
  private garageButton: HTMLButtonElement = document.createElement("button");
  private wrapperForButtons: HTMLDivElement = document.createElement("div");
  private wrapperForPage: HTMLDivElement = document.createElement("div");
  renderPage(data: CarType[]) {
    this.wrapperForPage.classList.add("wrapper-for-page");
    this.addButtons();
    this.addGaragePage(data);
    this.addListenersToGarageButton();
    this.addListenersToWinnersButton();
  }
  addButtons() {
    this.garageButton.classList.add("button");
    this.winnersButton.classList.add("button");
    this.garageButton.style.marginRight = "10px";
    this.garageButton.textContent = "Garage";
    this.winnersButton.textContent = "Winners";
    this.wrapperForButtons.style.paddingBottom = "50px";
    this.wrapperForButtons.append(this.garageButton, this.winnersButton);
    document.body.prepend(this.wrapperForButtons);
  }
  addGaragePage(data: CarType[], minCar = 0, maxCar = 7) {
    this.wrapperForPage.classList.add("wrapper-for-page");
    document.body.style.paddingLeft = "10px";
    this.wrapperForPage.append(new GaragePage().renderPage(data, minCar, maxCar));
    document.body.append(this.wrapperForPage);
  }
  addListenersToGarageButton(minCar = 0, maxCar = 7) {
    this.garageButton.addEventListener("click", () => {
      fetch("http://127.0.0.1:3000/garage")
        .then((resp) => resp.json())
        .then((data) => {
          this.wrapperForPage.lastChild?.remove();
          this.wrapperForPage.append(new GaragePage().renderPage(data, minCar, maxCar));
          new ControlGaragePage(data);
        });
    });
  }
  addListenersToWinnersButton(minCar = 0, maxCar = 10) {
    this.winnersButton.addEventListener("click", () => {
      fetch(`http://127.0.0.1:3000/winners?_page=1&_limit=10&_sort=ASC&_order=time`, {
        method: "GET",
      })
        .then((resp) => resp.json())
        .then((data: WinnerType[]) => {
          this.wrapperForPage.lastChild?.remove();
          this.wrapperForPage.append(new WinnerPage().renderPage(data, minCar, maxCar));
        });
    });
  }
}
export default Navigation;
