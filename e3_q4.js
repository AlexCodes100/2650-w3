class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate an abstract class.");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented.");
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  perimeter() {
    return 4 * this.side;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const square = new Square(4);
console.log(square.area());
console.log(square.perimeter());

const circle = new Circle(3);
console.log(circle.area());
console.log(circle.perimeter());
