const MyEngine = Matter.Engine;
const MyWorld= Matter.World;
const MyBodies = Matter.Bodies;
const MyBody=Matter.Body;
const Constraint = Matter.Constraint;

function preload(){

}

function setup(){
    createCanvas(1500,800);

    engine = MyEngine.create();
    world = engine.world;

    // OBJECTS
    cube11=[];
    for(var i = 900 ; i < 1300 ; i += 63){
        cube11.push(new ObjectClass(i,535,60,70));
    }

    cube12=[];
    for(var j = 935 ; j < 1300 ; j += 63){
        cube12.push(new ObjectClass(j,465,60,70));
    }

    cube13=[];
    for(var k = 965 ; k < 1250 ; k += 63){
        cube13.push(new ObjectClass(k,395,60,70));
    }

    cube14=[];
    for(var l = 995 ; l < 1200 ; l += 63){
        cube14.push(new ObjectClass(l,325,60,70));
    }

    cube15=[];
    for(var m = 1025 ; m < 1200 ; m += 63){
        cube15.push(new ObjectClass(m,255,60,70));
    }

    cube16=[];
    for(var n = 1055 ; n < 1150 ; n += 63){
        cube16.push(new ObjectClass(n,175,60,70));
    }

    cube17=[];
    for(var o = 1085 ; o < 1100 ; o += 63){
        cube17.push(new ObjectClass(o,105,60,70));
    }

    //GROUND
    ground = new Ground(1085,575,500,10);

    //STRIKER
    striker = new Striker(200,400,80);

    string = new Line( striker.body, {x : 200 , y : 400});

}

function draw(){
    background(200);
    MyEngine.update(engine);

    keyPressed();

    //DISPLAY CUBES
    for (var i = 0 ; i < cube11.length ; i++){
        cube11[i].display();
    }

    for (var j = 0 ; j < cube12.length ; j++){
        cube12[j].display();
    }

    for (var k = 0 ; k < cube13.length ; k++){
        cube13[k].display();
    }

    for (var l = 0 ; l < cube14.length ; l++){
        cube14[l].display();
    }

    for (var m = 0 ; m < cube15.length ; m++){
        cube15[m].display();
    }

    for (var n = 0 ; n < cube16.length ; n++){
        cube16[n].display();
    }

    for (var o = 0 ; o < cube17.length ; o++){
        cube17[o].display();
    }

    //DISPLAY GROUND
    ground.display();

    //DISPLAY STRIKER
    striker.display();

    //DISPLAY LINE
    string.display();

}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
    string.fly();
}

function keyPressed(){
    if(keyWentDown("SPACE")){
        MyBody.setPosition(striker.body,{ x : 200 , y : 400});
        string.attach(striker.body);
        MyBody.setAngle(striker.body , 0);
        MyBody.setAngularVelocity(striker.body , 0)
    }
}