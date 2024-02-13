class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || Number.isInteger(w) === false || Number.isInteger(h) === false) {
            return {}; // Return an empty object
        } else {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;
