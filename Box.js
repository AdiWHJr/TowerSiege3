class Box {
  constructor(x, y, width, height) {
    var options = {
        'isStatic' : false,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 225
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
    var pos =this.body.position;
    push();   
    rectMode(CENTER);
    fill(200);
    stroke("black")
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      //tint(20,this.visibility); 
      pop();
    }
  }
  

  score(){
    if(this.visibility<0 && this.visibility>-105){
      score++
    }
  }
}