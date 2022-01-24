import ControlGaragePage from "../../controller/controlGaragePage";
import Navigation from "../../controller/navigation";
import { CarType } from "../../types/car";

class RequestGarage {
  async createCar(name: string, color: string) {
    fetch("http://127.0.0.1:3000/garage").then(() => this.getCars());
    await fetch("http://127.0.0.1:3000/garage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, color: color }),
    });
  }
  async updateCar(id: string, name: string, color: string) {
    await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, color: color }),
    }).then(() => this.getCars());
  }
  async deleteCar(id: string) {
    await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "DELETE",
    }).then(() => this.getCars());
  }
  async getCars() {
    await fetch("http://127.0.0.1:3000/garage")
      .then((resp) => resp.json())
      .then((data: CarType[]) => {
        new Navigation().addGaragePage(data);
        new ControlGaragePage(data);
      });
  }
}
export default RequestGarage;