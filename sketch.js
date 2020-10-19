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

// // function draw() {
// //     background(220);
// // }



// function setup() {
//     // let img = createImage(400, 400);
//     let img = createCanvas(300, 300);

//     img.loadPixels();
//     for (let i = 0; i < img.width; i++) {
//         for (let j = 0; j < img.height; j++) {
//             img.set(i, j, color(0, 60, 102, (i % img.width) * 2));
//         }
//     }
//     img.updatePixels();
//     image(img, 0, 0);
// }