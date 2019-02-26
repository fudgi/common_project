import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
        this.registerSend = this.registerSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.politics = this.politics.bind(this);
        this.conditions = this.conditions.bind(this);
    }

    registerSend(){
        alert("Отправка данных")
    }

    handleChange(data) {
        this.setState({data});
    }

    politics(){
        alert("Политика")
    }
    conditions(){
        alert("Условия")
    }

    render(){
        return(
            <React.Fragment>
                <main class="mx-auto col-6  mt-3 shade radius bg-white">
                    <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation">
                        <Title title="Регистрация"/>
                        <SocialBlock />
                        <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                        <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль" func={this.handleChange}/>
                        <Button nameOfTheButton="Зарегистрироваться" func={this.registerSend}/>
                        <div class="text-center text-wrap pb-2">
                            <span>Регистрируясь, вы подтверждаете, что принимаете </span>
                            <a href="" id='refConditions' onClick={this.conditions}>Условия пользователя</a>
                            <span> и </span>
                            <a href="" id="refPolitics" class="ml-2" onClick={this.politics}>Политику конфиденциальности</a>
                        </div>
                        <div class="text-center text-wrap py-2">
                            <span>Уже имеете аккаунт?</span>
                            <Link className="ml-2" to="/login">Выполните вход</Link>
                        </div>
                    </form>
                </main>
            </React.Fragment>
        )
    }
}

export default Register