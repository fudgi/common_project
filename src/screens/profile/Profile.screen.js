import React from 'react'

import Loading from '../common_components/loading'
import Fetch from '../service/fetch'
import {icons} from '../../icon_paths'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user_data: {}
        }
        this.LeaveProfile = this.LeaveProfile.bind(this);
    }

    LeaveProfile(e) {
       
    }

    componentDidMount() {
        Fetch.getData('/react-app-07/src/php/profile/profile.php', "")
        .then((result) => this.setState({isLoaded: true, user_data: result, error: null}),
              (error) => error(this))
    }

    render() {
        const {error, isLoaded} = this.state;
        if (error) {
            return <div className="mx-auto mt-3">Ошибка: {error.message}</div>;
        } 
        else if (!isLoaded) {
            return <Loading />
        }
        else {
            return (
                <React.Fragment>
                     <main className="mx-auto col-6  mt-3 rounded bg-white">
                        <form className="mx-auto col-8 col-md-6 col-xl-6 p-4 needs-validation">
                            <div className="avatar text-center">
                                    <img className="rounded-circle" src={this.state.user_data.photo} alt="Avatar" width="140" height="140"/>
                                    <img src={icons.edit_photo} className="under-avatar"  width="50"/>
                            </div>

                            <div className="rating-bar text-center mt-3">
                                <span className="mr-2 align-middle">4,3</span>
                                <img src={icons.star} width="20" height="20"/>
                                <img src={icons.star} width="20" height="20"/>
                                <img src={icons.star}  width="20" height="20"/>
                                <img src={icons.star} width="20" height="20"/>
                                <img src={icons.star_half} width="20" height="20"/>
                            </div>

                            <div className="text-center text-wrap mt-1">
                                    Заказов выполнено: <b>126</b>
                            </div>
                            
                            <p className="text-muted m-0 mt-4">Имя</p>
                            <p className="text-field px-0">{this.state.user_data.username}</p>

                            <p className="text-muted m-0 mt-4">Телефон</p>
                            <p className="text-field px-0">{this.state.user_data.telephone}</p>

                            <p className="text-muted m-0 mt-4">Email</p>
                            <p className="text-field px-0">{this.state.user_data.email}</p>

                            <p className="text-muted m-0 mt-4">Город</p>
                            <p className="text-field px-0 m-0">{this.state.user_data.location}</p>

                            <div className="d-flex flex-column text-center my-4">
                                <a className="">Изменить пароль</a>
                                <a className="text-danger" onClick={this.LeaveProfile}>Покинуть профиль</a>
                            </div>
                        </form>
                    </main>
                </React.Fragment>
            )
        }
    }
}

export default Profile