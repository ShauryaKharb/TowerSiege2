class Line{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.string=Constraint.create(options);
        MyWorld.add(world,this.string);
        this.color=color(random(0,255),random(0,255) , random(0,255));
    }

    attach(body){
        this.string.bodyA = body;
    }

    fly(){
        this.string.bodyA = null;
    }

    display(){
         if(this.string.bodyA){
            var PointA = this.string.bodyA.position;
            var PointB= this.string.pointB;
            
            push();

            stroke(this.color);

            if(PointA.x < 100 || PointA.x >300 || PointA.y < 300 || PointA.y > 500){
                strokeWeight(3);
                line(PointA.x,PointA.y,PointB.x,PointB.y);
            }else{
                strokeWeight(5);
                line(PointA.x,PointA.y,PointB.x,PointB.y);
            }


            pop();
         }
    }
}