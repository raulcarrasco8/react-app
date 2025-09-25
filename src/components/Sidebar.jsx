import {NavLink} from "react-router-dom"; 

function SideBar() {
    return (
        <div className="sidebar">
            <li className="lisidebar">
                <NavLink to="/">Home</NavLink>
            </li>
             <li className="lisidebar">
                <NavLink to="/about">About</NavLink>
            </li>
        </div>
    )
}   

export default SideBar;