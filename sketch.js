const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball;
var blower, blowerPipe;
var button;

function setup() 
{
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ball = new Ball(590,100,25);
  blower = new Blower(450,300,400,30);
  blowerPipe = new Blower(600,265,120,100);

  button = createButton("Click to Blow");
  button.position(500,360);
  button.class("blowButton");
  button.mouseClicked(blow);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ball.show();
  blower.show();
  blowerPipe.show();
}

function blow()
{
  if(ball.body.position.x > 540 && ball.body.position.x < 660)
  {
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.02});
  }
}
