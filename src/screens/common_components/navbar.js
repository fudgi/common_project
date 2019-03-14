import React from 'react'
import {withRouter,Link} from "react-router-dom"
import {icons} from '../../icon_paths'
import Fetch from '../service/fetch'

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_name: "Имя пользователя",
            user_location: "Казань",
            user_avatar: icons.unknown_avatar
        }
        this.LeaveProfile = this.LeaveProfile.bind(this);
    }

    LeaveProfile(){
        Fetch.getData('/react-app-07/src/php/navbar.php',{command: "leave"})
        .catch((error) => error(this))
    }

    componentDidMount(){
        Fetch.getData('/react-app-07/src/php/navbar.php')
        .then((res) => {
            let user_data = {};
            if(res.username != null) user_data["user_name"] = res.username;
            if(res.user_avatar != null) user_data["user_avatar"] = res.photo;
            this.setState(user_data);
        })
        .catch((error) => error(this))
    }
    
    render() {
        let number;
        let browserLocation = window.location.pathname.split('/')[1];
        switch(browserLocation) {
            case "all_requests":
                number = 0;
                break;
            case "my_requests":
                number = 1;
                break;
            case "my_responds":
                number = 2;
                break;
        }
        let classHolder = "nav-item nav-link py-sm-3";
        let selected = [classHolder, classHolder, classHolder];
        selected[number] = classHolder + " selected-position";
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-sm bg-white shade p-0">
                    <a className="navbar-brand col-sm-3 mr-0 py-2 p-0 d-none d-sm-flex justify-content-sm-end justify-content-center"  href="/all_requests">
                        <img src={icons.logo}/>
                    </a>

                    <div className='container-fluid justify-content-around d-sm-none'>
                        <a href="">
                            <img src={icons.logoSingle}/>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#requestSupportedContent' aria-controls="requestSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="dropdown-toggle small">Запросы</span>
                        </button>
                    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarSupportedContent' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={this.state.user_avatar} width="30" height="30"/>
                            <span className="dropdown-toggle user_name small"></span>
                        </button>
                    </div>
                    
                    <div className="collapse navbar-collapse col-4 offset-md-1" id="requestSupportedContent">
                        <div className="navbar-nav mx-auto">
                            <Link to="/all_requests" className={selected[0]} data-id="0">Все запросы</Link>
                            <Link to="/my_requests" className={selected[1]} data-id="1">Мои запросы</Link>
                            <Link to="/my_responds" className={selected[2]} data-id="2">Отклики</Link>
                        </div>
                    </div>


                    <div className="collapse navbar-collapse offset-sm-1" id="navbarSupportedContent">
                        <div className="hide d-none d-sm-flex align-items-center">
                            <div className="location d-none d-lg-block mr-3">
                                <img src={icons.marker} className="rounded-circle mr-1" width="20" height="20"/>
                                <span>{this.state.user_location}</span>
                            </div>
                    
                            <div className="nav-item dropdown">
                                <a className="dropdown-toggle p-0"  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={this.state.user_avatar} className="rounded-circle p-0 mr-1" width="30" height="30"/>
                                    <span className="user_name">{this.state.user_name}</span>
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
                            <img src={icons.marker} className="rounded-circle" width="20" height="20"/>Выбор города
                        </a>
                        <a className="nav-item nav-link d-sm-none" href="#">Общие настройки</a>
                        <Link to="/profile" className="nav-item nav-link d-sm-none">Настройки профиля</Link>
                        <a className="nav-item nav-link d-sm-none" href="#" onClick={this.LeaveProfile}>Покинуть профиль</a>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default withRouter(NavBar)