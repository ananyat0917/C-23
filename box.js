class Box{
    constructor(x,y,width,height){
        var boxOption = {
            restitution: 0.6,
            friction: 0.25,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,boxOption);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER)
        push()
        var angle = this.body.angle;
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rect(0,0,this.width,this.height)
        pop()
    }
}