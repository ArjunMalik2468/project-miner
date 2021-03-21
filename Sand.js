class Sand {
    constructor(x, y,radius) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':1.3
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = radius;
  
      World.add(world, this.body);
    }
    display(){
     
        ellipseMode(RADIUS);
  
        fill("yellow");
  
        circle(this.body.position.x,this.body.position.y,this.radius)
    }
  }