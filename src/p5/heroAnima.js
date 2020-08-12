let c = 0;

function preload() {
  fontRegular = loadFont('src/font/avant/itc-avant-garde-gothic-std-book-58957161d80eb.otf');
}

function setup() {
    let w = windowWidth;
    let h = windowHeight;
    var myCanva = createCanvas(w / 3, h, WEBGL);
    myCanva.parent("canva1");
    textFont(fontRegular);
    frameRate(60);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    let w = windowWidth;
    let h = windowHeight;

    strokeWeight(4);
    stroke(225);
    noFill();
    translate(0, -(h / 5));
    rotateX(c * 0.1);
    rotateY(c * 0.1);
    clear();
    box(200, 200);
    rotateX(-c * 0.2);
    rotateY(-c * 0.2);
    box(200, 200);
    c++;
    rotateX(-c * 0.3);
    rotateY(-c * 0.3);
    box(200, 200);
    c++;
}