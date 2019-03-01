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
            password: "",
            remember: false
        }
        this.form = React.createRef();
        this.loginSend = this.loginSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.rememberMe = this.rememberMe.bind(this);
    }

    loginSend(e){
        e.preventDefault();
        if(this.form.current.checkValidity() == false){
            this.form.current.classList.add('was-validated');
            return;
        }
        Fetch.getData('/react-app-07/src/php/login/login.php', this.state)
        .then(() => {this.props.loggedChanger({logged:true}); this.props.history.push("/all_requests")})
        .catch((error) => this.props.loggedChanger({logged:false}))
    }

    handleChange(data) {
        this.setState(data);
    }

    rememberMe(e){
        if(e.target.checked)this.setState({remember:true})
        else this.setState({remember:false})
    }

    componentDidMount(){
        Fetch.getData('/react-app-07/src/php/login/logged_check.php')
        .then(() => {this.props.loggedChanger({logged:true});this.props.history.push("/all_requests");})
        .catch((error)=> this.props.loggedChanger({logged:false}))
    }

    render(){
        return(
            <main class="mx-auto col-6  mt-3 shade radius bg-white">
                <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation" ref={this.form}>
                    <Title title="Вход"/>
                    <SocialBlock />
                    <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                    <InputBlock name="password" nameOfHelper="passwordHelper" placeholder="Пароль" func={this.handleChange}/>
                    <Button nameOfTheButton="Войти" func={this.loginSend}/>

                    <div class="d-flex justify-content-center justify-content-lg-between flex-wrap my-3">
                        <div class="custom-control custom-checkbox  noselect">
                            <input class="custom-control-input noselect" name="checkbox" id="exampleCheck1" type="checkbox" onClick={this.rememberMe}/>
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