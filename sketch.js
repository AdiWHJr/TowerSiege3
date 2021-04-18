const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1500,40);
    platform1 = new Ground(600, 405, 310, 10);
    platform2 = new Ground(1100, 255, 230, 10);

    //platform1, level one
    box1 = new Box(480,375,40,50)
    box2 = new Box(520,375,40,50)
    box3 = new Box(560,375,40,50)
    box4 = new Box(600,375,40,50)
    box5 = new Box(640,375,40,50)
    box6 = new Box(680,375,40,50)
    box7 = new Box(720,375,40,50)
    //platform1, level two
    box8 = new Box(520,325,40,50)
    box9 = new Box(560,325,40,50)
    box10 = new Box(600,325,40,50)
    box11 = new Box(640,325,40,50)
    box12 = new Box(680,325,40,50)
    //platform1, level three
    box13 = new Box(560,275,40,50)
    box14 = new Box(600,275,40,50)
    box15 = new Box(640,275,40,50)
    box16 = new Box(600,225,40,50)

    //platform2, level one
    box17 = new Box(1020,225,40,50)
    box18 = new Box(1060,225,40,50)
    box19 = new Box(1100,225,40,50)
    box20 = new Box(1140,225,40,50)
    box21 = new Box(1180,225,40,50)
    //platform2, level two
    box22 = new Box(1060,175,40,50)
    box23 = new Box(1100,175,40,50)
    box24 = new Box(1140,175,40,50)
    //platform2, level three
    box25 = new Box(1100,125,40,50)

    polygon = new Polygon(150,280,50)
    slingshot = new SlingShot(polygon.body,{x:150,y:280});
}

function draw(){
    background("gray")
    Engine.update(engine)
    ground.display()
    platform1.display()
    platform2.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    
    polygon.display()
    slingshot.display()

    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.score()
    box9.score()
    box10.score()
    box11.score()
    box12.score()
    box13.score()
    box14.score()
    box15.score()
    box16.score()
    box17.score()
    box18.score()
    box19.score()
    box20.score()
    box21.score()
    box22.score()
    box23.score()
    box24.score()
    box25.score()

    textSize(20)
    text("Score :" + score, 1200, 30)

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
        Matter.Body.setPosition(polygon.body,{x:150, y:280})
    }
}