class Log  {
    constructor(x, y,width,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':2,
          'density':1.0,
          isStatic:true

      }

      this.width = width;
      this.height = height;
      this.angle = angle
      this.body = Bodies.rectangle(x, y, this.width, this.height,options);
      Matter.Body.setAngle(this.body,this.angle);
      World.add(world, this.body);
    }

    
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      console.log(angle);
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      rectMode(CENTER);
      fill(255);
      stroke ("red");
      strokeWeight(5);
      rect(0 , 0 , this.width, this.height);
      pop ();
    }

    changeAngle(angle){
      Matter.Body.setAngle(this.body,angle);
    }
   
  };
