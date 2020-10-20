let circlePixels;
let squarePixels;
let diameter;
let radius;
let pie;
let squareCanvas;
let squareColor;
let circleColor;
let outputArray;
let scale;

function initialize() {
    circlePixels = 0;
    diameter = 1000;
    //7000 3.14157493877551  20000 3.14159017   25000 3.1415902528
    radius = diameter / 2;
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
    console.log(diameter, radius, outputArray);
    // output(outputArray);


    for (ii = 0; ii < 5; ii++) {
        diameter += 1000;
        // radius = diameter / 2;
        circlePixels = 0;
        console.log(diameter, radius, outputArray);
        // console.log(diameter, radius, outputArray);
        // outputArray = [];
        paintPixels();
        // output(outputArray);
        // initialize();

    }
    output(outputArray);
}

function paintPixels() {
    if (graphicOutput) { loadPixels() };
    let distFromCenter;
    let pixelColor;
    radius = diameter / 2;
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
    outputArray.push(`Diameter: ${diameter} &nbsp;&nbsp;&nbsp Pie: ${nf(pie,1,6)}`);
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