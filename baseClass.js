class BaseClass{
    constructor(x, y, width, height, isStatic) {
        var options = {
            'isStatic':isStatic
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
        console.log(this.body);
      }
      display(){
        var angle = this.body.angle;
        fill("gray")
        push();
        stroke(0);
        rectMode(CENTER);
        rotate(angle);
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        pop();
      }
}