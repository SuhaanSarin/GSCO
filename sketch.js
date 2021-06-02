const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var wreckingball;
var box1,box2,box3,box4;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);


  wreckingball = new Wreckingball(200,100,10);
  box1 = new box(400,100);
  box2 = new box(420,100);
  box3 = new box(440,100);
  box4 = new box(460,100);
}

function draw() {
  background(255,255,255); 
  wreckingball.display();
  ground.display();
}