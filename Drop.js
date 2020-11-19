class Drop{
    constructor(x,y){
        this.body=Bodies.circle(this.x,this.y);
    }
    if(this.body.positon>800) {
        this.body.position=400;
    }
}