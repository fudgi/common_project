import React from 'react'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import BottomPart from './components/bottomPart'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: 0,
            password: 0
        }
        this.registerSend = this.registerSend.bind(this);
        this.loginScreenCall = this.loginScreenCall.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.politics = this.politics.bind(this);
        this.conditions = this.conditions.bind(this);
    }

    loginScreenCall(){
        this.props.screenChanger({screen_position: 0});
    }

    registerSend(){
        Fetch.getData('/react-app-07/src/screens/login/php/register.php',{email:this.state.email, password:this.state.password})
        .this((result) => this.props.screenChanger({screen_position: 3}))
        .catch(() => alert("Ошибка регстрации"))
    }

    handleChange(data) {
        this.setState({data});
    }

    politics(){}
    conditions(){}

    render(){
        return(
            <React.Fragment>
                <Title title="Регистрация"/>
                <SocialBlock />
                <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль" func={this.handleChange}/>
                <Button nameOfTheButton="Зарегистрироваться" func={this.registerSend}/>
                <div class="text-center text-wrap py-4">
                    Регистрируясь, вы подтверждаете, что принимаете 
                    <a href='$' id='refConditions' onClick={this.conditions}>Условия пользователя</a>
                     и 
                    <a href="$" id="refPolitics" class="ml-2" onClick={this.politics}>Политику конфиденциальности</a>
                </div>
                <BottomPart leftSideText="Уже имеете аккаунт? " refText="Выполните вход" id="refSignUp" href="$" func={this.loginScreenCall}/>
            </React.Fragment>
        )
    }
}

export default Register