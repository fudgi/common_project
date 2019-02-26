import React from 'react'
import Fetch from '../service/fetch'
import { withRouter, Link } from 'react-router-dom'

import Title from './components/title'
import SocialBlock from './components/socialLinks'
import InputBlock from './components/inputGroup'
import Button from './components/button'

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: ""
        }
        this.loginSend = this.loginSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    loginSend(){
        alert("Отправка данных")
        //Data Fill Check
        // Fetch.getData('/react-app-07/src/screens/login/php/login.php',{email:this.state.email, password:this.state.password})
        // .this((result) => this.props.history.push("/all_requests"))
        // .catch(() => alert("Ошибка авторизации"))
    }

    handleChange(data) {
        this.setState({data});
    }

    render(){
        return(
            <main class="mx-auto col-6  mt-3 shade radius bg-white">
                <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation">
                    <Title title="Вход"/>
                    <SocialBlock />
                    <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                    <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль" func={this.handleChange}/>
                    <Button nameOfTheButton="Войти" func={this.loginSend}/>

                    <div class="d-flex justify-content-center justify-content-lg-between flex-wrap my-3">
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="exampleCheck1"/>
                            <label class="custom-control-label" for="exampleCheck1">Запомнить меня</label>
                        </div>
                        <Link className="ml-2" to="/forget_password">
                            Забыли пароль?
                        </Link>
                    </div>

                    <div class="text-center text-wrap py-3">
                        Еще не с нами?
                        <Link className="ml-2" to="/register">
                            Зарегистрируйся
                        </Link>
                    </div>
                </form>
            </main>
        )
    }
}

export default withRouter(Auth)