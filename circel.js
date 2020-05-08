class Circel  {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':2,
            'density':1.0,
            isStatic:true
  
        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);

        World.add(world,this.body)
    }
    display(){
        push ();       
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("red");
        stroke ("white");
        strokeWeight(5);
        ellipse(0,0,this.radius,this.radius);
        pop ();
    }
}