const Navbar = ({currentTabValue="",changeTab=(e)=>{},buttons=[{name:"",value:""}]}) => {
    return ( 
        <div>
            {buttons.map((item,index)=>{
                return(
                    <button key={index+item} onClick={(e)=>{changeTab(e)}} disabled={currentTabValue===item.value} value={item.value} >{item.name}</button>
                )
            })}
        </div>
     );
}
 
export default Navbar;
