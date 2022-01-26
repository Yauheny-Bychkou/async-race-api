import { CarType } from "../types/car";
import { WinnerType } from "../types/winners";
import ImageCarWinner from "./ImageCarWinner";

class RowTableWinners {
  private wrapperRowTable = document.createElement("div");
  private numberWinner = document.createElement("h3");
  private nameWinner = document.createElement("h3");
  private countWinner = document.createElement("h3");
  private timeWinner = document.createElement("h3");
  private wrapperCarWinner = document.createElement("div");

  addRowTable(item: WinnerType) {
    fetch(`http://127.0.0.1:3000/garage/${item.id}`)
      .then((resp) => resp.json())
      .then((data: CarType) => {
        this.wrapperRowTable.style.color = data.color;
        this.numberWinner.innerText = item.id.toString();
        this.nameWinner.innerText = data.name;
        this.timeWinner.innerText = item.time.toString();
        this.countWinner.innerText = item.wins.toString();
        this.wrapperCarWinner.insertAdjacentHTML("beforeend", new ImageCarWinner().createCarTemplate(data.color));
        this.wrapperRowTable.classList.add("flex-car");
        this.numberWinner.style.marginRight = "80px";
        this.wrapperCarWinner.style.marginRight = "10px";
        this.countWinner.style.marginRight = "60px";
        this.nameWinner.style.marginRight = "60px";
        this.wrapperRowTable.style.paddingLeft = "10px";
        this.wrapperRowTable.classList.add("row-table");
        this.wrapperRowTable.append(
          this.numberWinner,
          this.wrapperCarWinner,
          this.nameWinner,
          this.countWinner,
          this.timeWinner
        );
      });
    return this.wrapperRowTable;
  }
}
export default RowTableWinners;
