import React from 'react'
import {Link} from "react-router-dom"

import logo from '../../img/logo.svg';
import marker from '../../img/marker.svg';
import avatar from '../../img/avatar-man-1.svg';
import logoSingle from '../../img/logoSingle.svg';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.ProfileScreenCall = this.ProfileScreenCall.bind(this);
        this.LeaveProfile = this.LeaveProfile.bind(this);
    }
    
    ProfileScreenCall(e) {
        // this.props.stateChanger({screen_id:"3", responding: false})
        // this.props.history.push('/all_requests');
    }

    LeaveProfile(e) {
        //выход из сессии на сервере
        // this.props.stateChanger({screen_id:"6", responding: false})
    }

    render() {
        let classHolder = "nav-item nav-link py-sm-3";
        let selected = [classHolder, classHolder, classHolder];
        selected[this.props.screen_id] = classHolder + " selected-position";
        return(
            <nav className="navbar navbar-expand-sm bg-white shade p-0">
                <a className="navbar-brand col-sm-3 mr-0 py-2 p-0 d-none d-sm-flex justify-content-sm-end justify-content-center"  href="#">
                    <img src={logo}/>
                </a>

                <div className='container-fluid justify-content-around d-sm-none'>
                    <a href="#" className="">
                        <img src={logoSingle}/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#requestSupportedContent' aria-controls="requestSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="dropdown-toggle small">Запросы</span>
                    </button>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarSupportedContent' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={avatar} width="30" height="30"/>
                        <span className="dropdown-toggle user_name small"></span>
                    </button>
                </div>
                
                <div className="collapse navbar-collapse col-4 offset-md-1" id="requestSupportedContent">
                    <div className="navbar-nav mx-auto">
                        <Link to="/all_requests" className={selected[0]} data-id="0">Все запросы</Link>
                        <Link to="/my_request" className={selected[1]} data-id="1">Мои запросы</Link>
                        <Link to="/my_responds" className={selected[2]} data-id="2">Отклики</Link>
                    </div>
                </div>


                <div className="collapse navbar-collapse offset-sm-1" id="navbarSupportedContent">
                    <div className="hide d-none d-sm-flex align-items-center">
                        <div className="location d-none d-lg-block mr-2">
                            <img src={marker} className="rounded-circle" width="20" height="20"/>
                            <span>{this.props.user_location}</span>
                        </div>
                
                        <div className="nav-item dropdown">
                            <a className="dropdown-toggle p-0"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={avatar} className="rounded-circle p-0" width="30" height="30"/>
                                <span className="user_name">{this.props.user_name}</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Общие настройки</a>
                                <a className="dropdown-item d-sm-inline d-lg-none" href="#">Выбор города</a>
                                <Link to="/profile" className="dropdown-item">Настройки профиля</Link>
                                <a className="dropdown-item" href="#" onClick={this.LeaveProfile}>Покинуть профиль</a>
                            </div>
                        </div>
                    </div>

                    <a className="nav-item nav-link d-sm-none" href="#">
                        <img src={marker} className="rounded-circle" width="20" height="20"/>Выбор города
                    </a>
                    <a className="nav-item nav-link d-sm-none" href="#">Общие настройки</a>
                    <Link to="/profile" className="nav-item nav-link d-sm-none">Настройки профиля</Link>
                    <a className="nav-item nav-link d-sm-none" href="#" onClick={this.LeaveProfile}>Покинуть профиль</a>
                </div>
            </nav>
        )
    }
}

export default NavBar