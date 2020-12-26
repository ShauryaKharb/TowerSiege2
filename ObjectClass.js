class ObjectClass{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.2
        }
        this.body = MyBodies.rectangle(x,y,width,height,options);
        MyWorld.add(world,this.body);
        this.color=color(random(0,255),random(0,255) , random(0,255))
        this.width=width;
        this.height=height;
        this.Visibility=255;

    }
    display(){
        rectMode(CENTER);
        imageMode(CENTER);
        var angle=this.body.angle;
        var pos = this.body.position;

        if(this.body.speed <10){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(this.color);
            stroke("black");
            strokeWeight(3);
            //image(this.image,0,0,50,50);
            rect(0,0,this.width,this.height);
            pop();
        }else{
            push();
            MyWorld.remove(world,this.body);
            this.Visibility = this.Visibility-1;
            tint(255,this.Visibility);
            pop();
        }
    }
}