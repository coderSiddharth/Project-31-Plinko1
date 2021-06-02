class Ground{

    constructor(x,y){
    
    var options = {
        isStatic:true
    }
    this.x=x;
    this.y=y;
    this.body=Bodies.rectangle(this.x,this.y,800,5,options);
    World.add(world,this.body)
    }
    
    display(){
    
    var pos=this.body.position;
    rectMode(CENTER)
    fill("white");
    rect(pos.x,pos.y,800,5)
    
    }
    
    }