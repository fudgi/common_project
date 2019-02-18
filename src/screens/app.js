import React from 'react'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"

// import Login from './login/Login.screen'
import Content from './content/content.screen'
import RequestCreation from './request_creation/RequestCreation.screen'
import Profile from './profile/Profile.screen'

import RequestList from './content/request_list/request_list.screen'
import Responds from './content/respond/respond.screen'
import Header from './common_components/header'
import Navbar from './common_components/navbar'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: "9",
            user_name: "Миша Смирнов",
            user_location: "Казань"
        };
        this.respondingChange = this.respondingChange.bind(this);
    }
    respondingChange(data) {
        this.setState(data);
    }
    //-----------------------------
    //Screen_id list:
    // 0,1,2 - Request_list
    // 3 - Profile
    // 4 - RequestCreation
    // 5 - City Change
    // 6 - Login
    //------------------------------
    render() {
        return (
            <Router>
                <React.Fragment>
                <Header />
                <Navbar user_name={this.state.user_name} user_location={this.state.user_location}/>
                    {/* <Route path="/" render={() => (<Redirect to="/all_requests"/>)}/> */}
                    <Route
                        exact path="/all_requests"
                        render= {props => <RequestList {...props} user_id={this.state.user_id} />}
                    />
                    <Route
                        exact path="/my_requests"
                        render= {props => <RequestList {...props} user_id={this.state.user_id} />}
                    />
                    <Route
                        exact path="/my_responds"
                        render= {props => <RequestList {...props} user_id={this.state.user_id} />}
                    />
                    
                    <Route
                        exact path="/all_requests/:id"
                        render= {props => <Responds {...props} 
                            user_id={this.state.user_id} 
                            respondingChange={this.respondingChange}/>}
                    />
                    <Route
                        exact path="/my_requests/:id"
                        render= {props => <Responds {...props} 
                            user_id={this.state.user_id} 
                            respondingChange={this.respondingChange}/>}
                    />
                    <Route
                        exact path="/my_responds/:id"
                        render= {props => <Responds {...props} 
                            user_id={this.state.user_id} 
                            respondingChange={this.respondingChange}/>}
                    />

                    <Route
                        exact path="/request_creation"
                        render= {props =>   
                            <RequestCreation {...props} 
                                user_id={this.state.user_id}
                        />}
                    />

                    <Route
                        exact path="/profile"
                        render= {props =>   
                            <Profile {...props} 
                                user_id={this.state.user_id}
                        />}
                    />
                </React.Fragment>
            </Router>
        )
    }
}

export default App