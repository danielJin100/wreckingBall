const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball, ground, string;
var boxArray = [];

function preload(){

}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(2000,800);


  ball = new Ball(400,100,20);
  string = new String(ball.body,{x:700,y:200});
  ground = new BaseClass(600,600,1200,50,true);
  for(var i = 0; i < 5; i++){
    for(var j = 0; j > -5; j--){
      boxArray.push(new Box(i*50+900,j*50+500,50,50));
    }
  }
  

  Engine.run(engine);
}

function draw() {
  background(255);

  ball.display();
  ground.display();
  for(var a = 0; a < boxArray.length; a++){
    boxArray[a].display();
  }
  string.display();
  Engine.update(engine);
  
}