import React from 'react'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import UnderSubmit from './components/underSubmit'
import BottomPart from './components/bottomPart'

import Fetch from '../service/fetch'

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: 0,
            password: 0
        }
        this.loginSend = this.loginSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.registerScreenCall = this.registerScreenCall.bind(this);
        this.forgetPasswordCall = this.forgetPasswordCall.bind(this);
    }

    loginSend(){
        Fetch.getData('/react-app-07/src/screens/login/php/login.php',{email:this.state.email, password:this.state.password})
        .this((result)=>this.props.enter())
        .catch(()=>alert("Ошибка авторизации"))
    }

    handleChange(data) {
        this.setState({data});
    }

    registerScreenCall(){
        this.props.screenChanger({screen_position:1})
    }

    forgetPasswordCall(){
        this.props.screenChanger({screen_position:2})
    }

    render(){
        return(
            <React.Fragment>
                <Title title="Вход"/>
                <SocialBlock />
                <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль" func={this.handleChange}/>
                <Button nameOfTheButton="Войти" func={this.loginSend}/>
                <UnderSubmit func={this.forgetPasswordCall}/>
                <BottomPart leftSideText="Еще не с нами?" refText="Зарегистрируйся" id="refRegister" href="$" func={this.registerScreenCall}/>
            </React.Fragment>
        )
    }
}

export default Auth