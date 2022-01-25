class ControlPanel {
  private wrapperForFieldCreate = document.createElement("div");
  private buttonActionCreate = document.createElement("button");
  private inputForColorCarCreate = document.createElement("input");
  private inputForNameCarCreate = document.createElement("input");
  private wrapperForFieldUpdate = document.createElement("div");
  private inputForNameCarUpdate = document.createElement("input");
  private inputForColorCarUpdate = document.createElement("input");
  private buttonActionUpdate = document.createElement("button");
  private wrapperForButtons = document.createElement("div");
  private buttonRace = document.createElement("button");
  private buttonReset = document.createElement("button");
  private buttonGenerateCars = document.createElement("button");
  addControlFieldCreate() {
    const inputName = localStorage.getItem("inputNameCreate")
      ? JSON.parse(localStorage.getItem("inputNameCreate") || "")
      : "";
    const inputColor = localStorage.getItem("inputColorCreate")
      ? JSON.parse(localStorage.getItem("inputColorCreate") || "#ffffff")
      : "#ffffff";
    // inputColorCreate
    this.buttonActionCreate.classList.add("create");
    this.buttonActionCreate.textContent = `CREATE`;
    this.inputForColorCarCreate.setAttribute("type", "color");
    this.inputForColorCarCreate.classList.add("color-create");
    this.inputForColorCarCreate.setAttribute("value", inputColor);
    this.inputForNameCarCreate.setAttribute("type", "text");
    this.inputForNameCarCreate.classList.add("name-create");
    this.inputForNameCarCreate.setAttribute("value", inputName);
    this.wrapperForFieldCreate.style.paddingBottom = "10px";
    this.wrapperForFieldCreate.classList.add("flex");
    this.wrapperForFieldCreate.append(this.inputForNameCarCreate, this.inputForColorCarCreate, this.buttonActionCreate);
    return this.wrapperForFieldCreate;
  }
  addControlFieldUpdate() {
    this.buttonActionUpdate.classList.add("update");
    this.buttonActionUpdate.textContent = `UPDATE`;
    this.inputForColorCarUpdate.setAttribute("type", "color");
    this.inputForColorCarUpdate.classList.add("color-update");
    this.inputForColorCarUpdate.setAttribute("value", "#ffffff");
    this.inputForNameCarUpdate.setAttribute("disabled", "");
    this.inputForNameCarUpdate.setAttribute("type", "text");
    this.inputForNameCarUpdate.classList.add("name-update");
    this.inputForNameCarUpdate.setAttribute("value", "");
    this.wrapperForFieldUpdate.style.paddingBottom = "10px";
    this.wrapperForFieldUpdate.classList.add("flex");
    this.wrapperForFieldUpdate.append(this.inputForNameCarUpdate, this.inputForColorCarUpdate, this.buttonActionUpdate);
    return this.wrapperForFieldUpdate;
  }
  addControlButtons() {
    this.buttonRace.textContent = "RACE";
    this.buttonRace.classList.add("race");
    this.buttonReset.textContent = "RESET";
    this.buttonReset.classList.add("reset");
    this.buttonGenerateCars.textContent = "GENERATE CARS";
    this.buttonGenerateCars.classList.add("generate");
    this.wrapperForButtons.classList.add("flex");
    this.wrapperForButtons.append(this.buttonRace, this.buttonReset, this.buttonGenerateCars);
    return this.wrapperForButtons;
  }
}
export default ControlPanel;
