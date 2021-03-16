interface Shape {
  getArea(): number; //getArea function --> number 지정
}

class Circle implements Shape {
  constructor(private radius: number) {}

  getArea() {
    return this.radius * this.radius * Math.PI; //반지름 x 반지름 x 3.14
  }
}

class Reacangle implements Shape {
  constructor(private width: number, private height: number) {}

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Reacangle(2, 5);

const shapes: Shape[] = [circle, rectangle];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
