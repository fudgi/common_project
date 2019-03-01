import React from 'react'
import {Link} from "react-router-dom"
import {icons} from '../../icon_paths'

class NavBar extends React.Component {
    render(){
        return(
            <nav className="navbar bg-white shade p-0 d-flex justify-content-center justify-content-md-start ">
                <Link to="/all_requests" className="navbar-brand col-sm-3 mr-0 py-2 p-0 d-flex justify-content-sm-end justify-content-center"> 
                    <img src={icons.logo}/> 
                </Link>
            </nav>
        )
    }
}

export default NavBar;