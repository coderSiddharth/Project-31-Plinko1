class Particles{

constructor(x,y,r){

var options={

  isStatic:false,
  restitution:0.4

    }


this.body=Bodies.circle(x,y,r,options)
this.colour=color(random(0,225),random(0,225),random(0,225));

World.add(world,this.body)
}

display(){

var pos=this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
noStroke()
fill(this.colour);
ellipseMode(RADIUS);
ellipse(0,0,10,10)
pop();

}

}