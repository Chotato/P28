
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gS = "set";
var score = 0;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400, 690, width, 20);

	p1 = new Paper(150, 370);

  s1 = new Sling(p1.body, {x: 150, y: 370});

	d1 = new Dustbin(670, 580, 200, 10);

  d2 = new Ground(605, 580, 5, 200);
  d3 = new Ground(735, 580, 5, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine);

  ground.display();
  
  p1.display();

  s1.display();

  d2.display();
  d3.display();
  
  d1.display();
  
  
 
}


function mouseDragged(){
  if (gS!=="launched"){
      Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  s1.fly();
  gS = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      
      gS = "set";
      Matter.Body.setPosition(p1.body, {x:150, y:350})
     s1.attach(p1.body);
     
  }
  
}
