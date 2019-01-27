import React from 'react'

import Auth from './auth'
import Register from './register'
import ForgetPassword from './forgetPassword'
import AnswerScreen from './answer_screen'


class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            screen_position: 0
        };
        this.screenChanger = this.screenChanger.bind(this);
        this.enterToList = this.enterToList.bind(this);
    }

    screenChanger(data) {
        this.setState(data);
    }

    enterToList(){
        this.props.stateChanger({screen_id:"0"});
    }

    //-------------
    // 0-LoginScreen
    // 1-Register
    // 2-ForgetPassword
    // 3-AnswerScreen
    //---------------
    render() {
        let content;
        switch(this.state.screen_position){
            case 0:
                <Auth screenChanger={this.screenChanger} enter={this.enterToList}/>
                break;
            case 1:
                <Register screenChanger={this.screenChanger}/>
                break;
            case 2:
                <ForgetPassword screenChanger={this.screenChanger}/>
                break;
            case 3:
                <AnswerScreen type={1} screenChanger={this.screenChanger}/>
                break;
            case 4:
                <AnswerScreen type={2} screenChanger={this.screenChanger}/>
                break;
        }
        return(
            <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation">
                {content}
            </form>
        )
    }
}