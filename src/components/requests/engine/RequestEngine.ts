import CarAnimation from "../../carAnimation/carAnimation";
import MessageWinner from "../../layout/MessageWinner";
import { EngineCar } from "../../types/engine";
import RequestWinners from "../winners/RequestWinners";

class RequestGarage {
  async startEngine(id: string) {
    await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=started`, {
      method: "PATCH",
    })
      .then((resp) => resp.json())
      .then((data: EngineCar) => {
        new CarAnimation().animationCar(id, data.velocity, data.distance);
        this.switchCarEngine(id, data.velocity, data.distance);
      });
  }
  async switchCarEngine(id: string, velocity: number, distance: number) {
    await fetch(`http://127.0.0.1:3000/engine?id=${id}&status=drive`, {
      method: "PATCH",
    }).then((resp) => {
      if (resp.status === 500) {
        new CarAnimation().stopAnimationCar(id);
      } else {
        let idCar = localStorage.getItem("idCar") ? JSON.parse(localStorage.getItem("idCar") || "") : 0;
        if (idCar === 0) {
          document.body.append(new MessageWinner().addWrapperMessage(id, Math.floor(distance / velocity / 1000)));
          new RequestWinners().getWinner(+id, Math.floor(distance / velocity / 1000));
        }
        idCar++;
        localStorage.setItem("idCar", JSON.stringify(idCar));
        // if (document.querySelectorAll(".message")[0] !== undefined) {
        //   document.querySelectorAll(".message")[0].classList.add("message-visible");
        // }
      }
    });
  }
}
export default RequestGarage;
