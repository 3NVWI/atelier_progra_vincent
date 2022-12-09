function setup() {
  // put setup code here
    createCanvas (windowWidth, windowHeight); //faire canvas de la taille de la fenêtre
    background (0);
}

function draw() {
  // put drawing code here //toujours coder dans function draw apde 221021
    background(0)
    
    fill (237, 78, 137)
    
    rect (100, 100, width - 2*100, height - 2*100);
    
    fill (0);
    textAlign (CENTER, CENTER);
    textSize (80);
    text ("tu veux du pain batar", width/2, height/2);
}

function windowResized(){
    resizeCanvas (WindowWidth, WindowHeight); 
}