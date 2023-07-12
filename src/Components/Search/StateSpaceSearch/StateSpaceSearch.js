import { useState } from "react";

// components import
import Navbar from "../../Navbar";
import DepthFirstSearch from "./DepthFirstSearch/DepthFirstSearch";
import BreadthFirstSearch from "./BreadthFirstSearch/BreadthFirstSearch";
import BestFirstSearch from "./BestFirstSearch/BestFirstSearch";
import HeuristicSearch from "./HeuristicSearch/HeuristicSearch";
import HillClimb from "./HillClimb/HillClimb";

const StateSpaceSearch = () => {

    // StateSpaceSearchTabs is an array used to keep a list of openable Tab from Home Screen
    // structure {name: "", value: "", comp: ""}
    const StateSpaceSearchTabs=[
        {name:"Depth First Search",value:"DepthFirstSearch",comp:<DepthFirstSearch/>},
        {name:"Breadth First Search",value:"BreadthFirstSearch",comp:<BreadthFirstSearch/>},
        {name:"Best First Search",value:"BestFirstSearch",comp:<BestFirstSearch/>},
        {name:"HeuristicSearch",value:"HeuristicSearch",comp:<HeuristicSearch/>},
        {name:"Hill Climb",value:"HillClimb",comp:<HillClimb/>},
    ]   

    // Tab is used to keep track of active screen 
    const [tab,setTab]=useState(StateSpaceSearchTabs[0])

    // StateSpaceSearchButtons contains the names and values of buttons to be displayed in Navbar
    const StateSpaceSearchButtons=StateSpaceSearchTabs.map((item)=>{
        return({name:item.name,value:item.value})
    })

    // Change Tab function changes the current tab on click of Navbar button
    // goes through items in homeTabs and compares e.target.value to item.value
    const changeTab=(e)=>{
        StateSpaceSearchTabs.filter((item)=>{
            if(item.value===e.target.value){
                setTab(item)
            }
            return 0
        })
    }

    // This return function returns the StateSpaceSearch => StateSpaceSearch Navbar => Current Tab
    return ( 
        <div>
            <div>
                <h1>Search</h1>
                <Navbar currentTabValue={tab.value} changeTab={changeTab} buttons={StateSpaceSearchButtons} ></Navbar>
            </div>
            <div>
                {tab.comp}
            </div>
        </div>
     );
}
 
export default StateSpaceSearch;