//créer une variable="let"//et "!" rend le statement qui suit l'inverse de ce qu'il est
//si réponse à if = oui; alors lignes de code entre accolades seront exécutées, si "non" ; lignes exécutées seront celles dans le "else"
//TRANSLATE SERT A REPOSITIONNER LE "POINT CENTRAL" (0;0) (QUI EST CENSÉ SE TROUVER TT EN HAUT À GAUCHE DE LA FENÊTRE) OÙ TU VEUX
//noise met 'étoie nimp où entre une position x de 0 à 1, same pr y mais de 0 à 2
//counter c'est le nbre d'étoiles


function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background (13, 5, 45);
    stroke(random(255), random(255), random(255));
    let counter = 0
    while (counter <100){
        starMaker(noise(2, counter) *width, noise(3, counter) *height, 5, 8);
        counter++
    }   
}   


    //fonction qui va dessiner des étoiles; il faut lui donner des paramètres (positions x, y, largeur w, hauteur h des étoiles)
function starMaker(x, y, w, h){
    push();
    translate(x, y);
    if(frameCount%5==0){   
        line(-w/2, 0, w/2, 0);
    }else{
        line(0, -h/2, 0, h/2);
    }
    pop();
}
