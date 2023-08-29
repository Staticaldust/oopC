// //1
// class Shape {
//   info() {
//     return "This is a shape";
//   }
// }
// class Rectangle extends Shape {
//   width: number;
//   height: number;
//   toChange: number;
//   allarea: number;

//   constructor(
//     width: number,
//     height: number,
//     toChange: number,
//     allarea: number = 0
//   ) {
//     super();
//     this.width = width;
//     this.height = height;
//     this.toChange = toChange;
//     this.allarea = allarea;
//   }
//   area() {
//     this.allarea = this.width * this.height;
//     return this.allarea;
//   }
//   info() {
//     return "This is a Recktangle";
//   }
//   scale() {
//     this.allarea = this.width * this.height * this.toChange;
//     return this.allarea;
//   }
//   static objTwo(obj1: Rectangle, obj2: Rectangle) {
//     return new Rectangle(
//       obj1.width + obj2.width,
//       obj1.height + obj2.height,
//       obj1.toChange + obj2.toChange,
//       obj1.allarea + obj2.allarea
//     );
//   }
// }

// let myrRecTangle = new Rectangle(5, 10, 4);
// let myArea = myrRecTangle.area();
// console.log(myArea);

// //2

// class Square extends Rectangle {
//   length: number;

//   constructor(width: number, height: number, toChange: number, length: number) {
//     super(width, height, toChange);
//     this.length = length;
//   }
//   area() {
//     return this.length * 2;
//   }
// }
// let squareArea = new Square(5, 10, 7, 4);
// let result2 = squareArea.area();
// console.log(result2);
// //3

// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(width: number, height: number, toChange: number, color: string) {
//     super(width, height, toChange);
//     this.color = color;
//   }
//   info() {
//     return `This is a Rectangle colored ${this.color}`;
//   }
// }
// let colorFN = new ColoredRectangle(5, 10, 4, "red");
// console.log(colorFN.info());
// //4
// const obj1: Rectangle = new Rectangle(5, 10, 2);
// const obj2: Rectangle = new Rectangle(6, 11, 3);
// //5
// class Shape2 {
//   draw() {
//     console.log("drawing a shape");
//   }
// }
// class Triangle2 extends Shape2 {
//   constructor() {
//     super();
//   }
//   draw() {
//     console.log("drawing a Triangle");
//   }
// }
// class Circle2 extends Shape2 {
//   constructor() {
//     super();
//   }
//   draw() {
//     console.log("drawing a circle");
//   }
// }
// class Square2 extends Shape2 {
//   constructor() {
//     super();
//   }
//   draw() {
//     console.log("drawing a square");
//   }
// }
// const renderShapes = (arr: Shape2[]) => {
//   for (let i: number = 0; i < arr.length; i++) {
//     arr[i].draw();
//   }
// };
// const myTr = new Triangle2();
// const myCi = new Circle2();
// const mySq = new Square2();
// const myarray = [myTr, myCi, mySq];
// const myFN = renderShapes(myarray);
