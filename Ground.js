class Ground{

    constructor(){

        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(400,395,800,10,options);
        this.width = 800;
        this.height = 10;
        World.add(myWorld, this.body);
    }

    display(){
 
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x, this.body.position.y, this.width,this.height);
    }
}