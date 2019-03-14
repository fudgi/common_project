import React from 'react'
import {Link} from 'react-router-dom'

import Title from './components/title'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import AnswerScreen from './answer_screen'

import Fetch from '../service/fetch'

class ForgetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            calledAnswerScreen: false
        }
        this.forgetPasswordSend = this.forgetPasswordSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.form = React.createRef();
    }

    handleChange(data) {
        this.setState(data);
    }
    forgetPasswordSend(e){
        e.preventDefault();
        if(this.form.current.checkValidity() == false){
            this.form.current.classList.add('was-validated');
            return;
        }
        Fetch.getData('/react-app-07/src/php/login/forget_password.php', {email: this.state.email})
        .then(() => this.setState({calledAnswerScreen: true}))
        .catch((error) => error())
    }

    render(){
        let content = this.state.calledAnswerScreen? 
            <AnswerScreen type={2} /> 
            :
            (<React.Fragment>
                <Title title="Восстановление пароля"/>
                <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                <Button nameOfTheButton="Зарегистрироваться" func={this.forgetPasswordSend}/>
                <div class="text-center text-wrap py-2">
                    <span>Уже имеете аккаунт?</span>
                    <Link className="ml-2" to="/login">Выполните вход</Link>
                </div>
            </React.Fragment>)
        return(
            <main class="mx-auto col-6  mt-3 shade radius bg-white">
                <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation" ref={this.form}>
                    {content}
                </form>
            </main>
        )
    } 
}

export default ForgetPassword