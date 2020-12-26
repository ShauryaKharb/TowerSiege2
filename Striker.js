class Striker {
    constructor(x,y,r){
        var options = {
            'restitution':0.2,
            'friction' : 1,
            'density' : 0.2            
        }
        this.body = MyBodies.circle(x,y,r/2,options);
        this.radius=r;
        MyWorld.add(world,this.body);
        this.image=loadImage("polygon.png")
    }
    display(){
        ellipseMode(CENTER);
        imageMode(CENTER);
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("#42f566");
        image(this.image,0,0,100,100);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }
}