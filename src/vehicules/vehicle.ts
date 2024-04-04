export class Vehicle {
  private id: string;
  private plate: number;
  private model: string;
  private brand: string;

  constructor(id: string,plate: number, model: string, brand: string) {
    this.setId(id);
    this.setPlate(plate);
    this.setModel(model);
    this.setBrand(brand);
  }

  getId(): string {
    return this.id;
  }

  getPlate() {
    return this.plate;
  }

  getModel() {
    return this.model;
  }

  getBrand() {
    return this.brand;
  }

  private setId (id: string): void {
    this.id = id;
  }

  private setPlate(plate: number) {
    this.plate = plate;
  }

  private setModel(model: string) {
    this.model = model;
  }

  private setBrand(brand: string) {
    this.brand = brand;
  }
}
