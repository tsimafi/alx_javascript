// Rectangle.js
class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            // If w or h is equal to 0 or not a positive integer, create an empty object
            return {};
        } else {
            // Initialize the instance attribute width with the value of w
            this.width = w;
            // Initialize the instance attribute height with the value of h
            this.height = h;
        }
    }
}

module.exports = Rectangle;
