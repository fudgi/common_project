import React from 'react'

import Title from './components/title'
import Button from './components/button'

class Answer extends React.Component() {
    constructor(props){
        super(props);
    }
    render(){
        let text, title;
        if(this.props.type==1){
            title = "Регистрация";
            message = "На ваш электронный адрес отправлена инструкция для подтверждения";
        }
        else {
            title = "Восстановление пароля";
            message = "На ваш электронный адрес отправлена инструкция для восстановления";
        }

        return(
            <React.Fragment>
                <Title title={title} />
                <Button nameOfButton="Выйти" />
            </React.Fragment>
        )
    }
}

export default Answer