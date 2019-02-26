import React from 'react'

import Title from './components/title'
import {Link} from 'react-router-dom'

class Answer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let message, title;
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
                <main class="mx-auto col-6  mt-3 shade radius bg-white">
                    <form class="mx-auto col-10 col-md-7 col-xl-6 p-2 needs-validation">
                        <Title title={title} />
                        <p>{message}</p>
                        <Link className="no-decoration" to="/login" style={{ textDecoration: 'none' }}>
                            <button type="submit" class="purp-button btn btn-block my-4">
                                Вернуться на главный экран
                            </button>
                        </Link>
                    </form>
                </main>
            </React.Fragment>
        )
    }
}

export default Answer