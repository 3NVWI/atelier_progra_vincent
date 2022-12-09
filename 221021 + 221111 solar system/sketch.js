function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    rectMode (CENTER);
    noStroke ();
}

function draw() {
  // put drawing code here
//tjrs dessiner "ici" àpde mtn
//push et pop servent à "délimiter" la rotation d'un élément de sorte à ce que la rotation de celui-ci n'influence pas celle des autres...?
    
    //cadre//
    background (0); 
    translate(width/2, height/2);
    
    
    //Soleil
    //push();
    //rotate (millis() / 2000);
    fill (250, 167, 42);
    rect (0, 0, 400, 400);
    //pop();
    
    //Saturne
    translate (0, 0);
    //rotate (millis() /2000);
    fill (212, 170, 57);
    rect (0, 0, 250, 250, 30);
    
    //Uranus
    translate (0,0);
    //rotate (millis() /1000);
    fill (18, 201, 189);
    rect (0, 0, 150, 150, 30);
    
    //Jupiter
    translate (200, 0);
    //rotate (millis() /2000);
    fill (240, 158, 108);
    rect (0, 0, 300, 300, 30);
    
    //Vénus
    translate (0,0);
    //rotate (millis() /1000);
    fill (163, 145, 95);
    rect (80,0, 100, 100);
    
    
    //Terre
    //push();
    translate (200, 0);
    //rotate (millis() / 2000);
    fill (0, 128, 255);
    rect (0,0, 100, 100);
    //pop();
    
    //Lune
    translate (80, -50);
    //rotate (millis() / 2000);
    fill (120);
    rect (-100, 50, 45, 45);
    
    //Mars
    translate (0, 0);
    //rotate (millis() / 2000);
    fill (184, 54, 15);
    rect (100, 50, 90, 90, 20);
    
    
}