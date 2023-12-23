class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.bodyA= bodyA
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        }
        fly(){
            this.sling.bodyA=null
        }
        attach(body){
            this.sling.bodyA=body;
        }
        display(){
           
           // var angle = this.body.angle;
           if(this.sling.bodyA){
             var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           // translate(this.body.position.x, this.body.position.y);
           // rotate(angle);
           stroke(48,22,8);
           line(pointA.x, pointA.y, pointB.x, pointB.y);
           }
            pop();
        }
    }