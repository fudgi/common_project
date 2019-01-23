import React from 'react'

import Header from './common_components/header'
import NavBar from './common_components/navbar'
// import Login from './login/Login.screen'
import Content from './content/content.screen'
import RequestCreation from './request_creation/RequestCreation.screen'
import Profile from './profile/Profile.screen'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: "9",
            user_name: "Миша Смирнов",
            user_location: "Казань",
            screen_id:"0",
            responding: false,
            request_id: ""
        };
        this.stateChanger = this.stateChanger.bind(this);
    }

    stateChanger(data) {
        this.setState(data);
    }
    
    //-----------------------------
    //List:
    // 0,1,2 - Request_list
    // 3 - Profile
    // 4 - RequestCreation
    // 5 - City Change
    // 6 - Login
    //------------------------------
    render() {
        let filler;
        switch (this.state.screen_id) {
            case "0":
            case "1":
            case "2":
                filler =<Content screen_id={this.state.screen_id}
                                 responding={this.state.responding}
                                 request_id={this.state.request_id}
                                 user_id={this.state.user_id}
                                 stateChanger={this.stateChanger}
                        />;
                break;
            
            case "3":
                filler = <Profile user_id={this.state.user_id} stateChanger={this.stateChanger} />
                break;

            case "4":
                filler = <RequestCreation user_id={this.state.user_id} stateChanger={this.stateChanger}/>
                break;
            
            case "5":
                // filler = <CityChange user_location={this.user_location} />
                break;
            
            case "6":
                // center = <Login/>
                break;
        }
        return (
            <React.Fragment>
                <Header />
                <NavBar screen_id={this.state.screen_id} user_name={this.state.user_name} user_location={this.state.user_location} stateChanger={this.stateChanger}/>
                <div id="content">
                    {filler}
                </div>
            </React.Fragment>
        )
    }
}

export default App