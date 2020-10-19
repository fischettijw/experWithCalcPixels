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
    graphicOutput = false;
}

function setup() {
    initialize();
    if (graphicOutput) {
        squareCanvas = createCanvas(diameter, diameter);
        background('lightGray');
        loadPixels();
    }
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
            if (graphicOutput) { squareCanvas.set(x, y, pixelColor); }
        }
    }
    pie = 4 * (circlePixels / (diameter * diameter));
    updatePixels();
    console.log(diameter, pie);
}