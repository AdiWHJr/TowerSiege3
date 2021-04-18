class Polygon {
    constructor(x,y,r){
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options)
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("polygon.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        fill("white")
        stroke('white')
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}