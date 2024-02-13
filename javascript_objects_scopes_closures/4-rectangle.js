class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
            return {}; // Return an empty object
        } else {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                let row = '';
                for (let j = 0; j < this.width; j++) {
                    row += 'X';
                }
                console.log(row);
            }
        }
    }

    rotate() {
        // Exchange width and height
        [this.width, this.height] = [this.height, this.width];
    }

    double() {
        // Double the width and height
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;
