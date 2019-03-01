import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../../css/gallery.css'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import Modal from './modal'
import AnswerScreen from './answer_screen'
import Fetch from '../service/fetch'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            showing: false,
            calledAnswerScreen: false
        }
        this.registerSend = this.registerSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.form = React.createRef();
        this.politics = this.politics.bind(this);
        this.conditions = this.conditions.bind(this);
    }
    registerSend(e){
        e.preventDefault();
        if(this.form.current.checkValidity() == false){
            this.form.current.classList.add('was-validated');
            return;
        }
        Fetch.getData('/react-app-07/src/php/login/register.php', {email: this.state.email, password: this.state.password})
        .then((res) => {
            if(res.status == "OK") this.setState({calledAnswerScreen: true})
            else throw res.data
        })
        .catch((error) => alert(error))
    }
    
    handleChange(data) {
        this.setState(data);
    }

    politics(e){
        e.preventDefault();
        this.setState({showing: "politics"});
    }
    conditions(e){
        e.preventDefault();
        this.setState({showing: "conditions"});
    }

    render(){
        let content = this.state.calledAnswerScreen? 
        <AnswerScreen type={2} /> 
        :
        (<React.Fragment>
            <Title title="Регистрация"/>
            <SocialBlock />
            <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
            <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль" func={this.handleChange}/>
            <Button nameOfTheButton="Зарегистрироваться" func={this.registerSend}/>
            <div class="text-center text-wrap pb-2">
                <span>Регистрируясь, вы подтверждаете, что принимаете </span>
                <a href="" onClick={this.conditions}>Условия пользователя</a>
                <span> и </span>
                <a href="" class="ml-2" onClick={this.politics}>Политику конфиденциальности</a>
            </div>
            <div class="text-center text-wrap py-2">
                <span>Уже имеете аккаунт?</span>
                <Link className="ml-2" to="/login">Выполните вход</Link>
            </div>
        </React.Fragment>)
        return(
            <React.Fragment>
                <main class="mx-auto col-6  mt-3 shade radius bg-white">
                    <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation" ref={this.form}>
                        {content}
                    </form>
                </main>
                <Modal type={this.state.showing} func={this.handleChange}/>
            </React.Fragment>
        )
    }
}

export default Register