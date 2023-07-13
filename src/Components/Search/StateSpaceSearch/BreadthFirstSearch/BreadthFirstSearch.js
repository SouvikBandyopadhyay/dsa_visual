import Sketch from "react-p5";

import { setup, boxArray } from "../../../P5Scenes/grid";


const BreadthFirstSearch = () => {

    const draw=(p5)=>{
        for(let i=0;i<boxArray.length;i++){
            for(let j=0;j<boxArray[i].length;j++){
                boxArray[i][j].display(p5);
            }
        }
    }

    return ( 
        <div>
            Breadth First Search
            <Sketch setup={setup} draw={draw}></Sketch>
        </div>
     );
}
 
export default BreadthFirstSearch;