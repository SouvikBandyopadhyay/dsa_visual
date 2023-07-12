import { useState } from "react";

// components import
import Navbar from "../Navbar";
import StateSpaceSearch from "./StateSpaceSearch/StateSpaceSearch";

const Search = () => {

    // SearchTabs is an array used to keep a list of openable Tab from Home Screen
    // structure {name: "", value: "", comp: ""}
    const SearchTabs=[
        {name:"State Space Search", value:"StateSpaceSearch", comp:<StateSpaceSearch/>}
    ]   

    // Tab is used to keep track of active screen 
    const [tab,setTab]=useState(SearchTabs[0])

    // SearchButtons contains the names and values of buttons to be displayed in Navbar
    const SearchButtons=SearchTabs.map((item)=>{
        return({name:item.name,value:item.value})
    })

    // Change Tab function changes the current tab on click of Navbar button
    // goes through items in homeTabs and compares e.target.value to item.value
    const changeTab=(e)=>{
        SearchTabs.filter((item)=>{
            if(item.value===e.target.value){
                setTab(item)
            }
            return 0
        })
    }

    // This return function returns the Search => Search Navbar => Current Tab
    return ( 
        <div>
            <div>
                <h1>Search</h1>
                <Navbar currentTabValue={tab.value} changeTab={changeTab} buttons={SearchButtons} ></Navbar>
            </div>
            <div>
                {tab.comp}
            </div>
        </div>
     );
}
 
export default Search;