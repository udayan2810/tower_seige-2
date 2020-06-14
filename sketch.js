const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var engine, world;
var platform,block1,block2,block3,block4,block4,block5,block6,block7,block8,block9,slingg,polygon21;
var score = 0;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
platform = new Ground(400,300,300,20);
block1 = new Box (300,290,30,40);
block2 = new Box (350,290,30,40);
block3 = new Box (400,290,30,40);
block4 = new Box(450,290,30,40)
block5 = new Box (500,290,30,40);
block6 = new Box (350,230,30,40);
block7 = new Box (400,230,30,40);
block8 = new Box (450,230,30,40)
block9 = new Box (400,170,30,40);

var options = {
  'density': 1.5
}
polygon21 = Bodies.circle(50,200,20,options);
World.add(world,polygon21);

slingg = new SlingShot (this.polygon21,{x:100 , y:200 });

}

function draw() {
  background("red"); 
  textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
     
  Engine.update(engine);
  platform.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  slingg.display();
  ellipseMode(RADIUS);
  ellipse(polygon21.position.x,polygon21.position.y,20,20)
  drawSprites();
}
function mouseDragged () {
  Events.on(engine, 'afterUpdate', function() {
  Matter.Body.setPosition(polygon21, {x:mouseX , y:mouseY});
});
}

function mouseReleased(){
  engine.events = {};
  slingg.fly();
}
function keyPressed(){
  if(keyCode === 32){
   Matter.Body.setPosition(this.polygon21,{x:90,y:190});   
  slingg.attach(this.polygon21);
     }
 }
 