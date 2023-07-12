import { useState } from "react";

// Component imports
import Navbar from "./Navbar";
import DataStructure from "./Data_Structure/Data_Structure";
import Search from "./Search/Search";
import Sort from "./Sort/Sort";

const Home = () => {

    // homeScreen is displayed by default
    const homeScreen={name:"Home", value:"Home",comp:""};

    // Tab is used to keep track of active screen 
    const [tab,setTab]=useState(homeScreen) 

    // HomeTabs is an array used to keep a list of openable Tab from Home Screen
    // structure {name: "", value: "", comp: ""}
    const homeTabs=[
        {name:"Data Structure", value:"Data_Structure",comp:<DataStructure/>},
        {name:"Searching", value:"Searching",comp:<Search/>},
        {name:"Sorting", value:"Sorting",comp:<Sort/>}
    ];

    // HomeButtons contains the names and values of buttons to be displayed in Navbar
    const homeButtons=homeTabs.map((item)=>{return({name:item.name,value:item.value})})

    // Change Tab function changes the current tab on click of Navbar button
    // goes through items in homeTabs and compares e.target.value to item.value
    const changeTab=(e)=>{
        homeTabs.filter((item)=>{
            if(item.value===e.target.value){
                setTab(item)
            }
            return(0)
        })
    }

    // This return function returns the Logo => Navbar => Current Tab
    return ( 
        <div>
            <div>
                <h1>DSA Visualizer</h1>
                <Navbar currentTabValue={tab.value} changeTab={changeTab} buttons={homeButtons}/>
            </div>
            <div>
                {tab.comp}
            </div>
        </div>
     );
}
 
export default Home;