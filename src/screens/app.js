import React from 'react'
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"

// import Login from './login/Login.screen'
import Content from './content/content.screen'
import RequestCreation from './request_creation/RequestCreation.screen'
import Profile from './profile/Profile.screen'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: "9"
        };
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
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" render={() => (<Redirect to="/all_requests"/>)}/>
                    <Route
                        path="/all_requests"
                        render= {props =>   <Content {...props} 
                                                    screen_id={"0"}
                                                    responding={false}
                                                    request_id={""}
                                                    user_id={this.state.user_id}
                                            />}
                    />
                    <Route
                        path="/my_request"
                        render= {props =>   <Content {...props} 
                                                    screen_id={"1"}
                                                    responding={false}
                                                    request_id={""}
                                                    user_id={this.state.user_id}
                                            />}
                    />
                    <Route
                        path="/my_responds"
                        render= {props =>   <Content {...props} 
                                                    screen_id={"2"}
                                                    responding={false}
                                                    request_id={""}
                                                    user_id={this.state.user_id}
                                            />}
                    />
                    <Route
                        path="/request_creation"
                        render= {props =>   <RequestCreation {...props} 
                                                    user_id={this.state.user_id}
                                            />}
                    />
                    <Route
                        path="/profile"
                        render= {props =>   <Profile {...props} 
                                                    user_id={this.state.user_id}
                                            />}
                    />
                </React.Fragment>
            </Router>
        )
    }
}

export default App