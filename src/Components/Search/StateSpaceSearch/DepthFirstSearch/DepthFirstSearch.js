import Sketch from "react-p5";

import { setup, boxArray, boxSize } from "../../../P5Scenes/grid";

const DepthFirstSearch = () => {
    
    var prevstart={val:0}
    var startflag=false;
    var prevgoal={val:0}
    var goalflag=false;

    function mouseClicked(p5){
        var boxclickedX=parseInt(p5.mouseX/boxSize)
        var boxclickedY=parseInt(p5.mouseY/boxSize)
        console.log("mousecliked",p5.mouseX/boxSize,p5.mouseY/boxSize)
        if(boxclickedX>0 && boxclickedX<=boxArray[0].length && boxclickedY>0 && boxclickedY<=boxArray.length)
            if(startflag){
                prevstart.val=0;
                boxArray[boxclickedY][boxclickedX].val=1;
                prevstart=boxArray[boxclickedY][boxclickedX]
                startflag=false
            }
            else if(goalflag){
                prevgoal.val=0;
                boxArray[boxclickedY][boxclickedX].val=2;
                prevgoal=boxArray[boxclickedY][boxclickedX]
                goalflag=false
            }
    }

    const draw=(p5)=>{
        for(let i=0;i<boxArray.length;i++){
            for(let j=0;j<boxArray[i].length;j++){
                boxArray[i][j].display(p5);
            }
        }
    }

    return ( 
        <div>
            <div>
                Depth First Search
            </div>
            <div>
                <button onClick={()=>{
                    startflag=true;
                }}>Mark Start</button>
                <button onClick={()=>{
                    goalflag=true;
                }}>Mark Goal</button>
                <button>Put Barriers</button>
                <button>Play/Pause</button>
                <button>Reset</button>
            </div>
            <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked}></Sketch>
        </div>
     );
}
 
export default DepthFirstSearch;