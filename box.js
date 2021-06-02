class box{
    constructor(x,y,height, width){
       var options = { 
         'friction':1.0,
          'restitution':0.5,
            'density':1.0,
            isStatic:false
       }
       this.body = Bodies.rect(x, y,height,width,options);
    this.height = height;
this.width = width;
World.add(world, this.body);

    }
    display(){
    var angle = this.body.angle;
    rectMode(CENTRE);
    rect( this.body.position.x,this.body.position.y , this.height, this.width);
    }
}





  