class Drops {
    constructor(x,y) {
      var options = {
          friction : 0.1,
      }  
      this.body = Bodies.circle(x,y,r, options);
      this.x = x;
      this.y = y;
      this.r = 5;
      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y)
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y, this.r, this.r);

      if(this.body.position.y > height) {
        Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0,400)})
     }

      pop();
    }
  }
