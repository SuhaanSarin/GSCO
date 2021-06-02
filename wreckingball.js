class Wreckingball{
    constructor(x,y,r){
        var options = {
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }
        this.body = Bodies.circle(x, y,r,options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        ellipse( this.body.position.x,this.body.position.y , this.r);
    }
}
