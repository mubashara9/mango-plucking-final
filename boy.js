class Boy{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body= Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
        this.image=loadImage("images/boy.png")
        World.add(world,this.body);
    }
    
    
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,150,250)
        pop();
    }
    
    
    
    }