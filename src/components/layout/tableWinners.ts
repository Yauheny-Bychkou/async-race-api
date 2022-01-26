import { WinnerType } from "../types/winners";
import RowTableWinners from "./RowTableWinners";

class TableWinners {
  private wrapperTable = document.createElement("div");
  private wrapperHeadTable = document.createElement("div");
  private wrapperBodyTable = document.createElement("div");
  private columnNumbers = document.createElement("h3");
  private columnCar = document.createElement("h3");
  private columnName = document.createElement("h3");
  private columnWins = document.createElement("h3");
  private columnTime = document.createElement("h3");

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
    this.wrapperBodyTable.classList.add("body-table");
    data
      .slice(minWinner, maxWinner)
      .forEach((item: WinnerType) => this.wrapperBodyTable.append(new RowTableWinners().addRowTable(item)));
    return this.wrapperBodyTable;
  }
}
export default TableWinners;
