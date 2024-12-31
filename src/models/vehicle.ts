// Base class for all vehicles
export abstract class Vehicle {
  constructor(
    protected make: string,
    protected model: string
  ) {}
  
  abstract startEngine(): boolean;
  abstract stopEngine(): void;
  
  getMake(): string {
    return this.make;
  }
  
  getModel(): string {
    return this.model;
  }
}