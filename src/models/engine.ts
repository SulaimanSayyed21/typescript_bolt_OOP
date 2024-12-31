export class Engine {
  private running: boolean = false;
  
  constructor(private horsepower: number) {}
  
  start(): boolean {
    this.running = true;
    return this.running;
  }
  
  stop(): void {
    this.running = false;
  }
  
  getPower(): number {
    return this.horsepower;
  }
  
  isRunning(): boolean {
    return this.running;
  }
}