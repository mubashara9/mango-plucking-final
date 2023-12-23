class Mango{
    constructor(x,y,r){
        var option={
            isStatic:true,
            restitution:0,
           friction:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body= Bodies.circle(this.x,this.y,this.r/2,option)
      //  this.width=width;
       // this.height=height;
        this.image=loadImage("images/mango.png")
        World.add(world,this.body);
    }
    
    
    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r)
        pop();
    }
    
    
    
    }