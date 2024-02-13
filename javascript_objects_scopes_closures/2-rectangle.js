class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            // If width or height is not a positive integer or is NaN, create an empty object
            return {};
        }
        // Initialize width and height attributes
        this.width = w;
        this.height = h;
    }
}

module.exports = Rectangle;
