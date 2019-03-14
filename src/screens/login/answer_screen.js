import React from 'react'

import Title from './components/title'
import {Link} from 'react-router-dom'

class Answer extends React.Component{
    render(){
        let message, title;
        if(this.props.type==1){
            title = "Регистрация";
            message = "Подтерждения электронного адреса пока что не требуется. Можете заходить";
        }
        else {
            title = "Восстановление пароля";
            message = "На ваш электронный адрес отправлена инструкция для восстановления";
        }

        return(
            <React.Fragment>
                <Title title={title} />
                <p>{message}</p>
                <Link className="no-decoration" to="/login" style={{ textDecoration: 'none' }}>
                    <button type="submit" class="purp-button btn btn-block my-4">
                        Вернуться на главный экран
                    </button>
                </Link>
            </React.Fragment>
        )
    }
}

export default Answer