const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;

var plinkos=[];
var particles=[];
var divisions=[];

var divisionHeight = 300;

function setup() {
  createCanvas(480,670);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 665);

  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2));
  }
  
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {
  background("black");  
  Engine.update(engine);

 
  
  if (frameCount % 60 === 0){
    particles.push(new Particles(random(width/2-20, width/2+20), 10,10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
 }

   
 
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
    drawSprites();

}

//if(frameRate%60===0){

//particles.push(new Particles(random(width/2-10,width/2+10))
//}
