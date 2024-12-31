import { Vehicle } from './vehicle';
import { Engine } from './engine';

// Car IS-A Vehicle and HAS-A Engine
export class Car extends Vehicle {
  // Composition: Car HAS-A Engine
  constructor(
    make: string,
    model: string,
    private engine: Engine
  ) {
    // Inheritance: Car IS-A Vehicle
    super(make, model);
  }
  
  startEngine(): boolean {
    return this.engine.start();
  }
  
  stopEngine(): void {
    this.engine.stop();
  }
  
  getEnginePower(): number {
    return this.engine.getPower();
  }
}