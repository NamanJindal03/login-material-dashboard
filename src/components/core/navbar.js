import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const currentTab = (history, path ) =>{
    if(history.location.pathname === path ){
        return {color: "#2ecc72"}
    }else{
        return {color: "#FFFFFF"}
    }
}
const Navbar = ({history}) =>{
    return(
        
        <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container">
                <div className="">
                    <Link className="navbar-brand" to="/">Zealth</Link>
                    
                </div>
                <div className=""> 
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link style={currentTab(history, "/sign-in")} className="nav-link" to="/sign-in">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    )
}
export default withRouter(Navbar);