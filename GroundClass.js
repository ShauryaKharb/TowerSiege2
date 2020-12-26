class Ground {
    constructor(x,y,width,height){
        var options = {
            friction : 5,
            isStatic : true
        }
        this.body = MyBodies.rectangle(x,y,width,height,options);
        MyWorld.add(world,this.body);
        this.color=color(random(0,255),random(0,255) , random(0,255));
        this.width=width;
        this.height=height;
        

    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
}