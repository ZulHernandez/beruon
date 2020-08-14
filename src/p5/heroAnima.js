let c = 0;

function setup() {
    let w = windowWidth;
    let h = windowHeight;
    var myCanva = createCanvas(w / 3, h/2, WEBGL);
    myCanva.parent("canva1");
    frameRate(60);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw() {
    let w = windowWidth;
    let h = windowHeight;

    if (w > 1024) {
        strokeWeight(4);
        stroke(225);
        noFill();
        translate(0, -(h / 1000));
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
    }else{
        strokeWeight(4);
        stroke(225);
        noFill();
        translate(-10, -(h / 10));
        rotateX(c * 0.1);
        rotateY(c * 0.1);
        clear();
        box(120, 120);
        rotateX(-c * 0.2);
        rotateY(-c * 0.2);
        box(125, 125);
        c++;
        rotateX(-c * 0.3);
        rotateY(-c * 0.3);
        box(120, 120);
        c++;        
    }
}