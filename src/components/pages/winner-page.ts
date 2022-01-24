import ButtonPaginationWinners from "../layout/buttonsPaginationWinners";
import TableWinners from "../layout/tableWinners";
import TitlePageWinners from "../layout/titlePageWinners";
import { WinnerType } from "../types/winners";

class WinnerPage {
  public element: HTMLDivElement = document.createElement("div");
  private wrapperForTitleWinners = document.createElement("div");
  private wrapperForTitlePage = document.createElement("div");
  private wrapperForTableWinners = document.createElement("div");
  private wrapperButtonPagination = document.createElement("div");

  renderPage(data: WinnerType[], minWinner: number, maxWinner: number) {
    this.element.append(
      this.addTitleWinners(data.length),
      this.addTitlePage(),
      this.addTableWinners(data, minWinner, maxWinner),
      this.addButtonsPagination(data.length)
    );
    return this.element;
  }
  addTitleWinners(сount: number) {
    this.wrapperForTitleWinners.innerHTML = "";
    this.wrapperForTitleWinners.append(new TitlePageWinners().addTitleGarage(сount));
    return this.wrapperForTitleWinners;
  }
  addTitlePage() {
    this.wrapperForTitlePage.innerHTML = "";
    this.wrapperForTitlePage.append(new TitlePageWinners().addTitlePage());
    return this.wrapperForTitlePage;
  }
  addTableWinners(data: WinnerType[], minWinner: number, maxWinner: number) {
    this.wrapperForTableWinners.append(new TableWinners().renderTable(data, minWinner, maxWinner));
    return this.wrapperForTableWinners;
  }
  addButtonsPagination(count: number) {
    this.wrapperButtonPagination.append(
      new ButtonPaginationWinners().addButtonPrev(),
      new ButtonPaginationWinners().addButtonNext(count)
    );
    return this.wrapperButtonPagination;
  }
}
export default WinnerPage;
