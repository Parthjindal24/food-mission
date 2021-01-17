var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//sprite is for simple grey rectangles

var packageBody,ground; //physics engine body

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white";


	engine = Engine.create();
	world = engine.world;

	var options = {
		'restitution':0.4, 
		isStatic:true
	};

	packageBody = Bodies.circle(width/2 , 200 , 5 , options);

	//Bodies.circle has ggot x y radius as 3 arguments. You can pass JSON as last argment
	World.add(world, packageBody);
	

	var  ground_options = {

		isStatic:true
	};
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
	//Bodies.rectangle has ggot x y width height as 4 arguments. You can pass JSON as last argument
	
 	World.add(world, ground);


	
}


function draw() {
  
  background(0);
  Engine.update(engine);
  

  rectMode(CENTER);
  
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	

 
  drawSprites();
 
}

function keyPressed(){
if (keyCode===DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody,false);
  
}


}

/*
1) // keypressed()is an event listener function. 
event listners are function that are called when a particular action is performed.
ex  keypressed() --> an action is performed whedn a particualr key is pressed
we do not need to call keyPressed() inside func draw ()

2) mosueDragged( ) --> a particular action is performed when u drag he mouse cursor

3) mosueReleased( ) --> a particular function is performed when u release ur finger from mouse click

4) // key code means a certain value is given to every key on your keyboard UNIVERSALLY.
ex=the value of spacebar is 32.
A-Z : 65-90
a-z : 97-122
0-9: 48-57

They are called as ASCII codes.
*/
