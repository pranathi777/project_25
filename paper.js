class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.rectangle(x, y, 45, 45,options)
        this.width = 45
        this.height = 45
        World.add(world,this.body)
        this.image = loadImage("Images/paper.png");
    } 
    display(){
        var pos = this.body.position
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width,this.height);
    }
}