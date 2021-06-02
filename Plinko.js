class Plinko{

    constructor(x,y){
    
    var options = {
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.body=Bodies.circle(this.x,this.y,10,options);
    World.add(world,this.body)
    }
    
    display(){
    
    var pos=this.body.position;
    rectMode(CENTER)
    fill("white");
    ellipse(pos.x,pos.y,10,10)
    
    }
    
    }