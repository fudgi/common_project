import React from 'react'

import Title from './components/title'
import InputBlock from './components/inputGroup'
import Button from './components/button'
import { withRouter, Link } from 'react-router-dom'

class ForgetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: ""
        }
        this.forgetPasswordSend = this.forgetPasswordSend.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(data) {
        this.setState({data});
    }
    forgetPasswordSend(){
        alert("Отправка данных")
    }

    render(){
        return(
            <React.Fragment>
                    <main class="mx-auto col-6  mt-3 shade radius bg-white">
                        <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation">
                            <Title title="Восстановление пароля"/>
                            <InputBlock name="email" nameOfHelper="emailHelper" placeholder="Email" func={this.handleChange}/>
                            <Button nameOfTheButton="Зарегистрироваться" func={this.forgetPasswordSend}/>
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

export default ForgetPassword