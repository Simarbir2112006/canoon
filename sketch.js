// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constaa
var shooter,base,base2;




var cannon;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    shooter = new Log (140,410,100,30,0);
    base = new Circel (80,430,75);
    base2 = new Log (80,520,150,150,0);

}

function draw() {
    background("cyan");

    shooter.display();
    base.display();
    base2.display();
    
       
    }



function keyPressed() {
    console.log("keyPressed")
   
   if (shooter.body.angle>-20 || shooter.body.angle<10 ){ 
    var currentAngle = shooter.body.angle;
   if(keyCode === UP_ARROW){
      shooter.changeAngle(currentAngle-10) ;
   } 
   else if (keyCode === DOWN_ARROW){
       shooter.changeAngle(currentAngle+10) ;   
   }
}
}





