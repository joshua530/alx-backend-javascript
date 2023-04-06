export default class Car {
  constructor(brand, motor, color) {
    this._motor = motor;
    this._brand = brand;
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
