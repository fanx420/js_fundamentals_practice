/*🔹 Problem: Rectangle Class

Create a Rectangle class with the following:

A constructor that takes width and height.

A method getArea() that returns the area of the rectangle.

A method getPerimeter() that returns the perimeter.

A method isSquare() that returns true if the rectangle is a square, otherwise false. */

class Rectangle{
    constructor(width = 0, height = 0){
        this.width = width;
        this.height = height;
    }
    
    getArea(){
        return this.width * this.height;
    }
    getPerimeter(){
      return  2 * (this.width + this.height);
    }
    isSquare(){
        return this.width === this.height;
    }
}