import ControlGaragePage from "../controller/controlGaragePage";
import Navigation from "../controller/navigation";
import { CarType } from "../types/car";

class App {
  constructor() {
    this.runApp();
    localStorage.setItem("idCar", "0");
  }
  runApp() {
    fetch("http://127.0.0.1:3000/garage")
      .then((resp) => resp.json())
      .then((data: CarType[]) => {
        new Navigation().renderPage(data);
        new ControlGaragePage(data);
      });
  }
}
export default App;
