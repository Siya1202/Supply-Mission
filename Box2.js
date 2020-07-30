class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,140,20, options);
      this.width = 140;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red")
      fill(255,0,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  