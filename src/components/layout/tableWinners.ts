import { CarType } from "../types/car";
import { WinnerType } from "../types/winners";
import ImageCarWinner from "./ImageCarWinner";

class TableWinners {
  private wrapperTable = document.createElement("div");
  private wrapperHeadTable = document.createElement("div");
  private wrapperBodyTable = document.createElement("div");
  private wrapperRowTable = document.createElement("div");
  private wrapperCarWinner = document.createElement("div");

  private columnNumbers = document.createElement("h3");
  private columnCar = document.createElement("h3");
  private columnName = document.createElement("h3");
  private columnWins = document.createElement("h3");
  private columnTime = document.createElement("h3");
  private numberWinner = document.createElement("h3");
  private nameWinner = document.createElement("h3");
  private countWinner = document.createElement("h3");
  private timeWinner = document.createElement("h3");

  renderTable(data: WinnerType[], minWinner: number, maxWinner: number) {
    this.wrapperTable.append(this.addHeadTable(), this.addBodyTable(data, minWinner, maxWinner));
    return this.wrapperTable;
  }
  addHeadTable() {
    this.columnNumbers.innerText = "Number";
    this.columnNumbers.classList.add("column-table");
    this.columnCar.innerText = "Car";
    this.columnCar.classList.add("column-table");
    this.columnName.innerText = "Name";
    this.columnName.classList.add("column-table");
    this.columnWins.innerText = "Wins";
    this.columnWins.classList.add("column-table");
    this.columnTime.innerText = "Best time(seconds)";
    this.columnTime.classList.add("column-table");
    this.wrapperHeadTable.style.backgroundColor = "blue";
    this.wrapperHeadTable.classList.add("head-table");
    this.wrapperHeadTable.append(this.columnNumbers, this.columnCar, this.columnName, this.columnWins, this.columnTime);
    return this.wrapperHeadTable;
  }
  addBodyTable(data: WinnerType[], minWinner: number, maxWinner: number) {
    data
      .slice(minWinner, maxWinner)
      .forEach((item: WinnerType) => this.wrapperBodyTable.append(this.addRowTable(item)));
    return this.wrapperBodyTable;
  }
  addRowTable(item: WinnerType) {
    console.log(item);
    fetch(`http://127.0.0.1:3000/garage/${item.id}`)
      .then((resp) => resp.json())
      .then((data: CarType) => {
        this.wrapperRowTable.style.color = data.color;
        this.numberWinner.innerText = item.id.toString();
        this.nameWinner.innerText = data.name;
        this.timeWinner.innerText = item.time.toString();
        this.countWinner.innerText = item.wins.toString();
        this.wrapperCarWinner.insertAdjacentHTML("beforeend", new ImageCarWinner().createCarTemplate());
        this.wrapperRowTable.classList.add("flex-car");
        this.numberWinner.style.marginRight = "78px";
        this.wrapperCarWinner.style.marginRight = "40px";
        this.nameWinner.style.marginRight = "45px";
        this.countWinner.style.marginRight = "80px";
        this.wrapperRowTable.style.paddingLeft = "10px";
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
export default TableWinners;
