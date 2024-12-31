### OOP Concepts in JavaScript

- IS-A Relationship (Inheritance)

In real-world terms, think of how a car IS-A vehicle. Just like how a sedan IS-A car.
In our code, Car extends Vehicle, establishing an IS-A relationship.
This means a Car inherits basic vehicle properties (make, model) and behaviors.

- HAS-A Relationship (Composition)

In real-world terms, think of how a car HAS-A engine. The engine is a separate component.
In our code, Car contains an Engine instance as a property.
This composition allows us to change engines without changing the car's core identity.
Here's a simple UML diagram to visualize these relationships:

```plaintext
┌─────────────┐
│   Vehicle   │
│  (abstract) │
├─────────────┤
│ + make      │
│ + model     │
└─────────────┘
       ▲
       │ extends
       │
┌─────────────┐     has-a     ┌─────────────┐
│     Car     │ ○─────────────│   Engine    │
├─────────────┤               ├─────────────┤
│ + engine    │               │ + horsepower│
└─────────────┘               └─────────────┘
```

The code creates a simple interactive example where you can:

See the car's details (make, model, engine power)
Start/stop the engine using the button
See the engine's status
This example demonstrates:

Inheritance through Car extends Vehicle
Composition through Car containing an Engine
Encapsulation through private properties and methods
Abstraction through the abstract Vehicle class
The dev server is now running, and you can interact with the example to see these OOP concepts in action.