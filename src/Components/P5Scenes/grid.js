var Width=500;
var Height=400;
export var boxSize=20;
var adjust=boxSize/2
export var boxArray=[];

export class Box{
    constructor(x,y,val,w){
        this.x=x;
        this.y=y;
        this.val=val;
        this.w=w;
    }
    display=function(p5){
        if(this.val===0){
            p5.fill(50,100,50)
        }
        else if(this.val===1){
            p5.fill(50,200,50)
        }
        else{
            p5.fill(50,100,150)
        }
        p5.stroke(150,200,30);
        p5.strokeWeight(4)
        p5.rect(this.x,this.y,this.w,this.w)
    }
}



export const setup=(p5,canvasParentRef)=>{
    p5.createCanvas(Width,Height).parent(canvasParentRef)
    p5.background(235,230,230)
    p5.rectMode(p5.CENTER)
    boxArray=[]
    for(let i=0;i<Height;i=i+boxSize){
        let boxArray1=[]
        for(let j=0;j<Width;j=j+boxSize){
            boxArray1.push(new Box(j+adjust,i+adjust,0,boxSize))
        }
        boxArray.push(boxArray1)
    }
    console.log("making new box array",boxArray)
}