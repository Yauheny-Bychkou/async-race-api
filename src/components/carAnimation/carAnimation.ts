class CarAnimation {
  animationCar(id: string, velocity: number, distance: number) {
    const time = Math.floor(distance / velocity / 700);
    if (document.querySelector(`.wrapper-image-${id}`) !== null) {
      const wrapperCar: HTMLElement = document.querySelector(`.wrapper-image-${id}`)!;
      wrapperCar.style.left = "90%";
      wrapperCar.style.transition = `${time}s ease`;
    }
  }
  stopAnimationCar(id: string) {
    if (document.querySelector(`.wrapper-image-${id}`) !== null) {
      const wrapperCar: HTMLElement = document.querySelector(`.wrapper-image-${id}`)!;
      wrapperCar.classList.remove("animate-car");
      wrapperCar.style.left = `${wrapperCar.getBoundingClientRect().left - 40}px`;
    }
  }
  returnToStartPosition(id: string) {
    if (document.querySelector(`.wrapper-image-${id}`) !== null) {
      const wrapperCar: HTMLElement = document.querySelector(`.wrapper-image-${id}`)!;
      wrapperCar.style.left = "0";
    }
  }
}
export default CarAnimation;
