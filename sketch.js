//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,box1,box2;
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground();

  box1 = new Box(200,200,70,70);
  box2 = new Box(240,50,70,100);
 
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  ground.display();

  box1.display();
  box2.display();

}

