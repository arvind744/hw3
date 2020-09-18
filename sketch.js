// var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
// var packageBody,
var ground;
var box1,box2,box3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// function preload()
// {
// 	helicopterIMG=loadImage("helicopter.png")
// 	packageIMG=loadImage("package.png")
// }

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	// packageSprite=createSprite(width/2, 80, 10,10);
	// packageSprite.addImage(packageIMG)
	// packageSprite.scale=0.2

	// helicopterSprite=createSprite(width/2, 200, 10,10);
	// helicopterSprite.addImage(helicopterIMG)
	// helicopterSprite.scale=0.6

	// groundSprite=createSprite(width/2, height-35, width,10);
	// groundSprite.shapeColor=color(255)

	box1=createSprite(600,665,200,10)
	box1.shapeColor = color("blue")

	box2=createSprite(500,620,10,100)
	box2.shapeColor = color("blue")

	box3=createSprite(700,620,10,100)
	box3.shapeColor = color("blue")

	ball=createSprite(100,600,25,25)
	ball.shapeColor = color("red")

	engine = Engine.create();
	world = engine.world;

	// packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	// World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	// packageSprite.x = packageBody.x
	// packageSprite.y = packageBody.y

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
//   packageSprite.x= packageBody.position.x 
//   packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed(UP_ARROW) {
 if (keyCode === UP_ARROW) {
	
  }
  Engine.run(engine);
}



