class Drops {
    constructor(x,y, r) {
      var options = {
          "friction" : 0.1,
      }
      
      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(x,y,r,options);

      if(this.body.position.y > height) {
         Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0,400)})
      }
      
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y)
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y, this.r, this.r);
      var maxDrops=100;
      for(var i=0; i<maxDrops; i++) {
          this.push(new createDrop(random(0, 400), random(0, 400)));
      }
      pop();
    }
  }
