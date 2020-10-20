let circlePixels;
let squarePixels;
let diameter;
let pie;
let squareCanvas;
let squareColor;
let circleColor;
let outputArray;
let scale;

function initialize() {
    circlePixels = 0;
    diameter = 1000;
    squarePixels = diameter * diameter;
    pie = 0;
    squareColor = color('black');
    circleColor = color('red');
    graphicOutput = false;
    outputArray = [];
}

function setup() {
    initialize();
    if (graphicOutput && squareCanvas == null) {
        scale = 1;
        document.body.style.transform = `scale(${scale})`;
        squareCanvas = createCanvas(diameter, diameter);
        background('lightGray');
    }
    paintPixels();
    console.log(diameter, outputArray);

    for (ii = 0; ii < 3; ii += 1) { //for (ii = 0; ii < 6; ii += 1) {
        diameter += 4000;
        circlePixels = 0;
        console.log(diameter, outputArray);
        paintPixels();
    }
    output(outputArray);
}

function paintPixels() {
    if (graphicOutput) { loadPixels() };
    let distFromCenter;
    let pixelColor;
    let radius = diameter / 2;
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
    outputArray.push(`Diameter: ${nf(diameter,5,0)} &nbsp;&nbsp;&nbsp Pie: ${nf(pie,1,6)}`);
    if (graphicOutput) { updatePixels() };
}

function output(out) {
    let fntSize = 18 / scale;
    let str = '';
    let outDiv = createDiv().style('font-size', `${fntSize}pt`);

    for (i = 0; i < out.length; i++) {
        str += `${out[i]}<br>`;
    }
    outDiv.html(str);
}