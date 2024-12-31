import './style.css';
//import { Vehicle } from './models/vehicle';
import { Car } from './models/car';
import { Engine } from './models/engine';

// Create instances
const basicEngine = new Engine(150);
const myCar = new Car('Toyota', 'Camry', basicEngine);

// Display the example
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>OOP Relationships Example</h1>
    
    <div class="example-box">
      <h2>Car Details</h2>
      <p>Make: ${myCar.getMake()}</p>
      <p>Model: ${myCar.getModel()}</p>
      <p>Engine Power: ${myCar.getEnginePower()}hp</p>
      
      <button id="startBtn">Start Engine</button>
      <p id="status"></p>
    </div>
  </div>
`;

// Add interactivity
const startBtn = document.querySelector<HTMLButtonElement>('#startBtn')!;
const status = document.querySelector<HTMLParagraphElement>('#status')!;

startBtn.addEventListener('click', () => {
  const running = myCar.startEngine();
  status.textContent = running ? 'Engine is running! 🚗' : 'Engine failed to start';
});