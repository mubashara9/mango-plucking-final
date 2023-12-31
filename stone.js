class Stone{
    constructor(x,y,radius){
        var option={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.body= Bodies.circle(this.x,this.y,this.radius/2,option)
        
//        this.height=height;
        this.image=loadImage("images/stone.png")
        World.add(world,this.body);
    }
    
    
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }
    
    
    
    }