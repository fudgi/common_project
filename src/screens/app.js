import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"

import Login from './login/login'
import Register from './login/register'
import ForgetPassword from './login/forget_password'
import AnswerScreen from './login/answer_screen'
import RequestCreation from './request_creation/RequestCreation.screen'
import Profile from './profile/Profile.screen'
import RequestList from './request_list/request_list.screen'
import Responds from './respond/respond.screen'
import Header from './common_components/header'
import Navbar from './common_components/navbar'
import NavbarClean from './common_components/navbar_clean'


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            logged: false
        }
        this.loggedChanger = this.loggedChanger.bind(this);
    }

    loggedChanger(data){
        this.setState(data);
    }
    render() {
        return (
            <Router basename="/">
                <React.Fragment>
                <Header />
                {this.state.logged?<Navbar />:<NavbarClean />}
                    <Switch>
                        {["/all_requests", "/my_requests", "/my_responds"].map((path, index) => 
                            <Route
                                exact path={path}
                                component = {RequestList}
                                key={index} 
                            />
                        )}
                        {["/all_requests/:id", "/my_requests/:id", "/my_responds/:id"].map((path, index) => 
                            <Route
                                exact path={path}
                                component = {Responds}
                                key={index} 
                            />
                        )}

                        <Route
                            exact path="/request_creation"
                            component = {RequestCreation}
                        />

                        <Route
                            exact path="/profile"
                            component = {Profile}
                        />

                        <Route
                            exact path="/login"
                            render={()=><Login loggedChanger={this.loggedChanger}/>}/>
                        />

                        <Route
                            exact path="/register"
                            component= {Register}
                        />

                        <Route
                            exact path="/forget_password"
                            component={ForgetPassword}
                        />

                        <Route
                            exact path="/answer_screen"
                            component={AnswerScreen}
                        />
                        
                        <Redirect from="/*" to="/login" />
                    {/* <Route exact path="/" render={() => (<Redirect to="/all_requests"/>)}/> */}
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default App