let circlePixels;
let squarePixels;
let diameter;
let radius;
let pie;
let squareCanvas;
let squareColor;
let circleColor;

function initialize() {
    circlePixels = 0;
    diameter = 7000; // 20000
    radius = diameter / 2;
    squarePixels = diameter * diameter;
    pie = 0;
    squareColor = color('black');
    circleColor = color('red');

}

function setup() {
    initialize();
    squareCanvas = createCanvas(diameter, diameter);
    background('lightGray');
    paintPixels();
}

function paintPixels() {
    let distFromCenter;
    let pixelColor;
    for (x = 0; x < diameter; x++) {
        for (y = 0; y < diameter; y++) {
            distFromCenter = dist(x, y, radius, radius);
            if (distFromCenter < radius) {
                pixelColor = circleColor;
                circlePixels++;
            } else {
                pixelColor = squareColor;
                squarePixels++;
            }
            squareCanvas.set(x, y, pixelColor);
        }
    }
    pie = 4 * (circlePixels / (diameter * diameter));
    squareCanvas.updatePixels();
}