class Block{
    constructor(x,y){
        var options = {
           density: 0.4,
           restitution: 0.2,
           friction: 0.3
        }
        this.body = Bodies.rectangle(x,y,30,50,options);
        World.add(world,this.body);
        //this.width = 30;
        //this.height = 50;
    }
    display(){
        
        push();
        rectMode(CENTER);
        
        
        fill(0);
        rect(this.body.position.x,this.body.position.y,30,50);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        pop();
    }
}