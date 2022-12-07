export default class Controller {
  constructor(currentfloor, accessStatus) {
    this.currentFloor = currentFloor;
    this.accessStatus = accessStatus;
  }

  controllerStatus() {
    return this.accessStatus;
  }
}

