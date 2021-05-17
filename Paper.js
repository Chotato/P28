class Paper extends BaseClass{
    constructor(x, y){
        super(x, y, 50, 50);       
        this.image = loadImage("paper.png");
        Matter.Body.setMass(this.body.mass*4)
    }
    display(){
      super.display();
    }
}
 