
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var dustbin, paper,ground;
var engine,world;
//var leftSide,rightSide,bottom;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(width/2,670,width,20);	
	ground=new Ground(width/2,670,width,20);
	bottom=new Bottom(610,660,100,20);
	leftSide= new left(550,620,20,100);
	rightSide = new right(670,620,20,100);

	
}

	
	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(230);
 
  Engine.update(engine)

  ground.display();
  bottom.display();
  leftSide.display();
  rightSide.display();
paper.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
}
}

