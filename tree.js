class Tree{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,1,1,option)
      //  this.width=width;
      //  this.height=height;
        this.image=loadImage("images/tree.png")
        World.add(world,this.body);
    }
    
    
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,400,570)
        pop();
    }
    
    
    
    }