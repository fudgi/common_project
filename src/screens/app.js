import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"

// import Login from './login/Login.screen'
import RequestCreation from './request_creation/RequestCreation.screen'
import Profile from './profile/Profile.screen'
import RequestList from './request_list/request_list.screen'
import Responds from './respond/respond.screen'
import Header from './common_components/header'
import Navbar from './common_components/navbar'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_id: "9",
            user_name: "Миша Смирнов",
            user_location: "Казань",
            user_avatar: '/react-app-07/src/img/user_avatar/avatar-man-1.svg'
        };
    }
   
    render() {
        return (
            <Router basename="/">
                <React.Fragment>
                <Header />
                <Navbar user_name={this.state.user_name} user_location={this.state.user_location} user_avatar={this.state.user_avatar}/>
                    <Switch>
                        {["/all_requests", "/my_requests", "/my_responds"].map((path, index) => 
                            <Route
                                exact path={path}
                                render= {props => <RequestList {...props} user_id={this.state.user_id}/>}
                                key={index} 
                            />
                        )}
                        {["/all_requests/:id", "/my_requests/:id", "/my_responds/:id"].map((path, index) => 
                            <Route
                                exact path={path}
                                render= {props => <Responds {...props} user_id={this.state.user_id} />}
                                key={index} 
                            />
                        )}

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
                        <Redirect from="/*" to="/all_requests" />
                    {/* <Route exact path="/" render={() => (<Redirect to="/all_requests"/>)}/> */}
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App