
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	ground = new Plane(600,height,1200,20);

	hammer = new Hammer(100,100);

	stone = new Stone(700,320,70,70);

	iron = new Iron(400,330,45,45);

	rubber = new Rubber(700,300,45);

	sand1 = new Sand(425,300,10);
	sand2 = new Sand(440,300,10);
	sand3 = new Sand(455,300,10);
	sand4 = new Sand(470,300,10);
	sand5 = new Sand(485,300,10);
	sand6 = new Sand(500,300,10);
	sand7 = new Sand(515,300,10);
	sand8 = new Sand(530,300,10);
	sand9 = new Sand(545,300,10);
    sand10 = new Sand(560,300,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  hammer.display();

  stone.display();
  iron.display();
  rubber.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();

  drawSprites();
 
}



