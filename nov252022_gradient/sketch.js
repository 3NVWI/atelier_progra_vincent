//on va en général mettre "i" pour appeler une fonction "compteur" (nommée ici "counter") pour ajouter des trucs
let nov252022_gradient;

function setup() {
    createCanvas (windowWidth, windowHeight);
    nov252022_gradient = linearGradient (width, height, 156, 50, 100, 20, 50, 200);
}

function draw() {
    background (255);
image(nov252022_gradient, 0, 0, width, height);   
}

function linearGradient (w, h, r1, v1, b1, r2, v2, b2) {
    
    let graphic = createGraphics(w, h);
    
    for(let counter = 0 ; counter < height ; counter++ ) {
    let red = map(counter, 0, h, r1, r2);
    let green = map(counter, 0, h, v1, v2);
    let blue = map(counter, 0, h, b1, b2);
    graphic.stroke(red, green, blue);
    graphic.line (0, counter, width, counter);
}
    return graphic;
    
    
    
}